---
title: "✨ Creating an Access Token for Dicery players"
subtitle: "How do I make sure that only members of that room can send and receive dice roll results?"
path: "/notes/creating-an-access-token-for-dicery-players"
date: "2020-07-21"
length: "11 min"
excerpt: "Problem: FastAPI docs provide oAuth examples where a username and password is required. Our use case only requires a room code: if users provide the room code, they will be given access to that room. How do I implement this flow in FastAPI?"
---

Problem: FastAPI docs provide oAuth examples where a username and password is required. Our use case only requires a room code: if users provide the room code, they will be given access to that room. How do I implement this flow in FastAPI?

## ❓ What is `OAUth2AuthorizationCodeBearer` and how is it related to or different from `OAuth2PasswordBearer`

✨ It is useful when using external identity providers ---[Implement OAuth2 authorization_code integration by kuwv · Pull Request #797 · tiangolo/fastapi · GitHub](https://github.com/tiangolo/fastapi/pull/797)

## ❓ How do I implement JWTs?

- Followed / Based it on FastAPI docs.

- Used custom JWT claims (to specify "room")
[JSON Web Token Claims](https://auth0.com/docs/tokens/concepts/jwt-claims)

> Custom: Claims that you define yourself. Name these claims carefully, such as through namespacing (which Auth0 requires), to avoid collision with reserved claims or other custom claims. It can be challenging to deal with two claims of the same name that contain differing information.

I have a `dicery_room` claim (`dicery` is my namespace):

```python
CreateAccessToken(
    data={"sub": player, "dicery_room": room_code},
    expires_delta=access_token_expires,
)
```

## ❓ How do I verify JWTs?

Examples in FastApi use `oauth2_scheme =OAuth2PasswordBearer(tokenUrl="token")` in the helper that verifies the JWT

```
async def get_current_user(token: str = Depends(oauth2_scheme)):
  credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except JWTError:
        raise credentials_exception
```

From the source, `OAuth2PasswordBearer` has `__call__` function that retrieves the token

```
 async def __call__(self, request: Request) -> Optional[str]:
        authorization: str = request.headers.get("Authorization")
        scheme, param = get_authorization_scheme_param(authorization)
        if not authorization or scheme.lower() != "bearer":
            if self.auto_error:
                raise HTTPException(
                    status_code=HTTP_401_UNAUTHORIZED,
                    detail="Not authenticated",
                    headers={"WWW-Authenticate": "Bearer"},
                )
            else:
                return None
        return param
```

📝 _"Random" Note_ From [FastAPI from the ground up - YouTube](https://youtu.be/3DLwPcrE5mA?t=626): we can retrieve the Authorization header like so,

```
@router.get('/search')
def search(authorization=Header(default=None)):
  ...
```


---
#### ⚠️ Does OAuth2 really require a "user/password" pair by definition?

Or could we somehow use `OAuth2`--- maybe create our own `oauth_scheme` following the pattern of `class OAuth2PasswordBearer(OAuth2)`

**🔎 Investigation Notes**
`fa` means `fastapi`

- `OAuth2PasswordBearer` -- OAuth2PasswordBearer(tokenUrl="token")
  - inherits `fa.security.oauth2.OAuth2`
    - `fa.security.oauth2.OAuth2` is a class that inherits `fa.security.base.SecurityBase`
      - `fa.security.base.SecurityBase` is how FastAPI can know how to integrate security in OpenAPI (and the automatic API docs). See ["Technical Details"](https://fastapi.tiangolo.com/tutorial/security/first-steps/#use-it)
    - `fa.security.oauth2.OAuth2` has
      - `flows`
      - `scheme_name`
      - `auto_error`
      - `model`
        - an attribute from `SecurityBase`; should be an instance of `fa.openapi.models.SecurityBase`
        - has value `OAuth2Model(flows=flows)
          - `from fastapi.openapi.models import OAuth2 as OAuth2Model`
          - `fastapi.openapi.models.OAuth2` inherits from `fa.openapi.models.SecurityBase`
            - `fa.openapi.models.SecurityBase` has attributes `type_` and `description`

  - has `flows` -- `OAuthFlowsModel(password={"tokenUrl": tokenUrl,"scopes": scopes})`
    - an attribute from `OAuth2`
    - OAuthFlowsModel is a Pydantic Model
    - password attribute should follow the `OAuthFlowPassword` Pydantic model, which has attributes
      - tokenUrl
      - refreshUrl (Optional)
      - scopes: Dict[str, str] = {}

Based on **🔎 Investigation Notes**, there is no mention of "username" anywhere in relation to this oauth_scheme. We can use the `OAuth2PasswordBearer` to get the token from the headers,

```python
# from fastapi.security.oauth2.OAuth2PasswordBearer

async def __call__(self, request: Request) -> Optional[str]:
  authorization: str = request.headers.get("Authorization")
  scheme, param = get_authorization_scheme_param(authorization)
  if not authorization or scheme.lower() != "bearer":
      if self.auto_error:
          raise HTTPException(
              status_code=HTTP_401_UNAUTHORIZED,
              detail="Not authenticated",
              headers={"WWW-Authenticate": "Bearer"},
          )
      else:
          return None
  return param
```

Using `OAuth2PasswordBearer` only requires that we specify the URL where access tokens can be generated.

🛑 However, when I visit Swagger UI, authorizing requires `username` and `password`. It seems like using the `password` flow assumes the requirement of these 2 fields.

[Which OAuth 2.0 Flow Should I Use?](https://auth0.com/docs/api-auth/which-oauth-flow-to-us)

> OAuth is an open standard for access delegation, commonly used as a way for Internet users to grant websites or applications access to their information on other websites but without giving them the passwords. ---[OAuth - Wikipedia](https://en.wikipedia.org/wiki/OAuth)

^^^ This really doesn't like our use case:
- user gives a room code to the app
- the app sends the room code to the server
- the server validates the room code
- if room code is valid,
  - the server sends an access token back to the app
  - the access token is used to subscribe / send dice results to the room.


----

## ❓ How can we make our "flow" compatible / supported by Swagger UI

> FastAPI will know that it can use the class OAuth2PasswordBearer (declared in a dependency) to define the security scheme in OpenAPI because it inherits from fastapi.security.oauth2.OAuth2, which in turn inherits from fastapi.security.base.SecurityBase.
>
> All the security utilities that integrate with OpenAPI (and the automatic API docs) inherit from SecurityBase, that's how FastAPI can know how to integrate them in OpenAPI. ---[FastAPI Docs](https://fastapi.tiangolo.com/tutorial/security/first-steps/#use-it)

1. We need to the create a class similar to OAuth2PasswordBearer
    - which will be used to define the security scheme in OpenAPI
2. This class (in 1.) need to inherit from `fastapi.security.base.SecurityBase`

📝 How do we inherit `SecurityBase`? What are the properties we need to provide; methods we need to implement? How do we specify that 'room_code' and 'player' are the fields required to retrieve an access_token?

```python
# fastapi.security.base
from fastapi.openapi.models import SecurityBase as SecurityBaseModel

class SecurityBase:
    model: SecurityBaseModel
    scheme_name: str
```

❓ What is `scheme_name`? How is it used? What do other classes specify for `scheme_name`?
TODO ???

```python
# fastapi.openapi.models
class SecurityBase(BaseModel):
    type_: SecuritySchemeType = Field(..., alias="type")
    description: Optional[str] = None

class SecuritySchemeType(Enum):
    apiKey = "apiKey"
    http = "http"
    oauth2 = "oauth2"
    openIdConnect = "openIdConnect"
```

⚠️ Putting `access_token` in the response body is not the most secure:

> I would like to be able to set a secure and httpOnly cookie to hold the access token, as I feel that exposing the access token as part of the response body is detrimental to the security of my application. At the same time, I would like the /docs to remain functional with a cookie based approach.
>  --- [[QUESTION] Cookie based JWT tokens · Issue #480 · tiangolo/fastapi · GitHub](https://github.com/tiangolo/fastapi/issues/480)

---

## ❓ What is the difference between this naive flow and the "access_token" flow?

> 1) User submits room_code and his name
> 2) If room_code is valid, add him to the database as one of the players in the room
> 3) When submitting a dice roll, or subscribing to the dice roll:
>     - validate the room_code and player (plaintext) through a middleware
>     - if player is in the room, then allow the op
>     - if not, send a 403

1) room_code and player is not encrypted
2) the server can't verify that the user sending the request is indeed the player it claims to be.

JWTs on the hand is signed so that it's ensured that the token is legitimately from the user you gave the token to:

> JSON Web Token (JWT, sometimes pronounced /dʒɒt/[1]) is an Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. The tokens are signed either using a private secret or a public/private key. For example, a server could generate a token that has the claim "logged in as admin" and provide that to a client. The client could then use that token to prove that it is logged in as admin. The tokens can be signed by one party's private key (usually the server's) so that party can subsequently verify the token is legitimate.

----

## ❓ How do we make our own auth_scheme that is also compatible with Swagger UI?

Aside from OAuth, FastAPI has:

- APIKey
- HTTPBasic
- HTTPBasicCredentials
- HTTPBearer
- HTTPDigest

⚠️ Do not pass the access_token in the request but use http-only cookies. ---[[QUESTION] Cookie based JWT tokens · Issue #480 · tiangolo/fastapi · GitHub](https://github.com/tiangolo/fastapi/issues/480)

**To make it "supported" by the Swagger UI"
What if we just manually visit the /token URL, it will set a COOKIE in our browser. Then, to authorize we use APIKey in cookie?

So our scheme would be APIKeyCookie?

"...instead of grabbing the token from the "Authentication header, we get it from the access_token cookie."

## ✨✨✨ Auth Flow

1. ☑️ USER submits `room_code` and `player`
2. ☑️ APP makes a post /token request to the API
4. ☑️ API creates an access_token (JWT) and sets it as an http-only cookie; does not return anything in the  response (body)
5. ☑️ APP If API returns a 200 OK, move to the lobby
6. APP performs a  GET /lobby/{room_code} against the API (request should include the http-only cookie)
7. API checks the cookie / access-token
    - using the usual dependency injection: injecting the auth_scheme `APIKeyCookie`
    - the auth_scheme will return the access_token
    - the method will then check whether the access_token provided gives access to the room_code requested, (and that the player has access to the room_code?)
    - if so, proceed with sending SSE, so they can subscribe to people joining the room.

---

**❓ [Naming Challenge] What is the difference between access tokens, API keys, and JWTs and how are they related?**

We currently have this,

```python
API_KEY_COOKIE_NAME = "key"
api_key = APIKeyCookie(name=API_KEY_COOKIE_NAME)

...
async def get_current_player_and_room(token: str = Security(api_key)):
  payload = jwt.decode(
      token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM]
  )
  # get player and room from payload
  # verify that player has access to room
  return player, room
```


`API_KEY_COOKIE_NAME` and `api_key` is used to make it consistent with the `SecurityBase` class we are using: `APIKeyCookie`


But in the method which needs the "APIKey" we call the string returned by api_key "token", to make it consistent with "jwt.decode()" which uses the "token" (JWT stands for JSON Web **Tokens**)

Inconsistency? Or makes sense? An API Key can be a JWT?

[API Keys vs OAuth Tokens vs JSON Web Tokens - The Zapier Engineering Blog \| Zapier](https://zapier.com/engineering/apikey-oauth-jwt/)

**❓ Can an api key be a JWT**

In [Generate API keys with JWT and regenerate the same key when needed - Information Security Stack Exchange](https://security.stackexchange.com/questions/214633/generate-api-keys-with-jwt-and-regenerate-the-same-key-when-needed)

> A JWT is simply not the correct solution for a server-to-server API token/key. API keys need to be revokable in the case the user needs to change it (for whatever reason), and JWTs by their nature cannot be revoked. You need a completely different solution for server-to-server authentication.

^^^ We are not a server-to-server API token/key

> JWT's have two properties that distinguish them from the other kind of access token that we'll talk about: they can't be revoked and they are typically short-lived (which is a necessary consequence of them being non-revokable).

^^^ Sounds a lot like our use-case. The tokens can't be revoked (the user will need the same token while in the dice room) and it's short-lived (the token only applies to that room session.)

> Everything you need to check the JWT is built into the JWT, and the only way they could be revoked is if you marked them as such in a database and checked the database everytime you verified the JWT (which would defeat its purpose).


[TODO]
❓❓❓ In FastAPI docs, we check the database to verify the user returned by the JWT.

From [cookies - Security Risk of Stolen Session ID vs Authentication Token - Information Security Stack Exchange](https://security.stackexchange.com/questions/220104/security-risk-of-stolen-session-id-vs-authentication-token)

> Kinda correct, again. Most tokens are stored in HTML5 LocalStorage (in JavaScript) because they are simply too large to fit inside of an httpOnly cookie. Cookies have a maximum data storage size of 4kb. If your token is larger than 4kb (which most are, since people use them to carry user information), then you must store them elsewhere. And the simplest way to store them outside of cookies is... you guessed it, LocalStorage!
>
> Unfortunately, this has serious side effects.

❗️We can't put our JWT in a cookie if it's bigger than 4kb!

Phase 1: Use JWT (follow the pattern documented in FastAPI)
Phase 2: Use sessions

----

## 📚 Further Reading

[What Happens If Your JWT Is Stolen? \| Okta Developer](https://developer.okta.com/blog/2018/06/20/what-happens-if-your-jwt-is-stolen)


[Using JSON Web Tokens as API Keys](https://auth0.com/blog/using-json-web-tokens-as-api-keys/)

[authentication - What if JWT is stolen? - Stack Overflow](https://stackoverflow.com/questions/34259248/what-if-jwt-is-stolen)

[JWTs Suck - Speaker Deck](https://speakerdeck.com/rdegges/jwts-suck-and-are-stupid)

[The best way to securely manage user sessions \| SuperTokens](https://supertokens.io/blog/the-best-way-to-securely-manage-user-sessions)