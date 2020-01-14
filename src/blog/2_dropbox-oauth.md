---
title: "Setting Up Configuration in Flask"
subtitle: "Part 1 of the Series 'Implementing Dropbox oAuth'"
path: "/blog/setting-configuration-flask"
date: "2019-09-17"
length: "4 min"
excerpt: "This is the beginning of a series where we implement Dropbox's oAuth2 Flow using Flask. In this article, we'll create our flask application and load our application's configuration."
---

I am currently developing a web app that requires uploading to Dropbox. There's a [sample code](https://github.com/dropbox/dropbox-sdk-python/blob/master/dropbox/oauth.py) for oAuth at Dropbox's Python SDK source code. In this series, we will implement the sample code using Flask and as well as do some tests with PyTest.

Before we dive in, you need to:

1.  Setup your virtual environment. I use [pipenv](https://thoughtbot.com/blog/how-to-manage-your-python-projects-with-pipenv).

- If you're new to Python and just want to get up and running, you can use [PythonAnywhere's](https://www.pythonanywhere.com/) free "Beginner" plan.

2.  Install [flask](https://flask.palletsprojects.com/en/1.1.x/installation/#install-flask) and [pytest](http://doc.pytest.org/en/latest/getting-started.html).
3.  Register (or create) your app in [Dropbox](https://www.dropbox.com/developers/apps).

## Outline

- **Create a flask application and setup configuration**
- Implement dropbox/start endpoint
- Use Redis for Sessions
- Setup in Heroku
- Use an HTTPs connection (avoid a CsrfException)
- Implement dropbox/finish endpoint
- Save access token in the session

## Our First Test File

- Create a `tests` folder and an `__init__.py` file inside.
- Create a `test_application.py` which will test that the application configuration has been properly loaded.

```python
# tests\test_application.py
from application import create_app

def test_appHasDropboxSecretKey():
 app = create_app()
 assert 'DROPBOX_SECRET_KEY' in app.config
 assert app.config['DROPBOX_SECRET_KEY'] != None
```

If you run `pytest`, it should fail and display, `No module named 'application'`.

## Creating our Flask Application

Create a folder named `application` in the root folder and create an `__init__.py` inside.

```python
# application\__init__.py

from flask import Flask

def create_app():
 return app
```

Now that we've created our application, running `pytest` again will produce a different error:

```
> assert 'DROPBOX_SECRET_KEY' in app.config
E AssertionError: assert 'DROPBOX_SECRET_KEY' in <Config ...

tests/test_application.py:5: AssertionError
```

You'll also run into warnings triggered by Jinja,

```
jinja2/utils.py:485: DeprecationWarning: Using or importing the ABCs from 'collections' instead of from 'collections.abc' is deprecated, and in 3.8 it will stop working
 from collections import MutableMapping
```

For now, let's silence these warnings. Silencing the warnings until the fix is released was recommended by [someone](https://github.com/pallets/jinja/issues/953#issuecomment-468823543) from the Jinja team.

In your pytest.ini file found in your project's root folder:

```
[pytest]
filterwarnings =
 ignore::DeprecationWarning
```

Now, onto loading our configuration.

## Configuring the Application

We need a place to store the secret key of our Dropbox API. There are multiple ways to store and load configuration variables but the main thing is that it shouldn't be committed to your versioning system.

One of the ways to store and load configuration variables is to:

1. Create a .env file with your configuration keys and values. This .env file should not be committed to source control.
2. Create a Configuration class that will read your .env files. This class will be registered to your flask app.

The advantage of doing this is that your config values will be hidden but your config keys are readily knowable—making it easier for other developers to create their .env files.

## The Configuration Class

In our project's root folder, create `config.py`

```python
# config.py

from os import getenv

class Config:
 FLASK_ENV = getenv('FLASK_ENV')
 DROPBOX_SECRET_KEY = getenv('DROPBOX_SECRET_KEY')
```

Let's use this Config class for our flask application

```python
# application\__init__.py

...
def create_app():
 app = Flask(__name__)
 app.config.from_object('config.Config')
 return app
```

Now that we've loaded our Configuration class, when we run `pytest` again, we'll see that our first assertion passed since our Configuration class has the `DROPBOX_SECRET_KEY` property.

However, our 2nd assertion still fails since we haven't specified a value for the `DROPBOX_SECRET_KEY`. For that, we'll create our .env file.

```
 assert 'DROPBOX_SECRET_KEY' in app.config
> assert app.config['DROPBOX_SECRET_KEY'] != None
E assert None != None

tests/test_application.py:6: AssertionError
```

## Your .env File

Create a .env file found in the project's root folder and enter the following,

```
FLASK_ENV=development
DROPBOX_SECRET_KEY=yourDropboxSecretKey
```

To read this .env file, we have to install the package [python-dotenv](https://pypi.org/project/python-dotenv/) and call `load_dotenv()` in our `create_app()` function.

```python
from flask import Flask
from dotenv import load_dotenv

def create_app():
 load_dotenv()
...
```

And the test returns green!

## Running our Flask Application

We're able to test our flask application with pytest. But how can we run our flask server?

For that, you need to create wsgi.py file in your root folder,

```python
# wsgi.py

from application import create_app

app = create_app()

if __name__ == '__main__':
 app.run()
```

Then, run `python wsgi.py`; You should see something like,

```
* Serving Flask app "application" (lazy loading)
* Environment: development
* Debug mode: on
* Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
* Restarting with stat
* Debugger is active!
* Debugger PIN: 254-924-456
```

We haven't set up any routes yet so visiting http://localhost:5000 will only give us a 404 page. We also see in our command line where we ran the flask server,

```
127.0.0.1 - - [17/Sep/2019 20:33:45] "GET / HTTP/1.1" 404 -
```

which tells us that we are indeed accessing your flask server. Yey!

Next, we'll implement our first route: the API endpoint for starting Dropbox's oAuth flow!
