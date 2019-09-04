---
title: "My First Python App"
subtitle: "Porting Best Practices Over to Python"
path: "/blog/first-python-app-porting-best-practices-over-python"
date: "2019-09-03"
length: "4 min"
---

For the last month, I’ve been learning Python and building an app along the way. There are already a lot of blogs out there on Flask, web crawling, and Python in general but what I usually find lacking are notes on best practices such as using virtual environments, testing code, and even using sessions responsibly—and understandably so, since they are meant to be *quick* tutorials. 

If you are already a developer and starting out with Python, I hope this article will serve as a quick reference that will lead you to resources and documentations on best practices that would be good for you to know in the long run.

## Why Python
I wanted to create an app that will take a screenshot of all my recipes in Pepperplate and upload them to Dropbox. Pepperplate is a recipe management app that seems to be unmaintained for a while. It has been acting glitchy these days that I fear all my recipes will soon vanish, and I am [not](https://www.facebook.com/pepperplate/posts/does-anyone-know-how-to-backup-recipes-from-pepperplate-the-list-of-supported-si/1428477323860270/) be [alone](https://www.chowhound.com/post/pepperplate-acting-wonky-offer-backup-924668) in this predicament.

My interest with Python piqued when StackOverflow’s 2019 Survey Results came out. Python was crowned as 2nd in the “Most Loved Language” category and 1st in “Most Wanted Language.” I wanted to learn a new language and get out of my "PHP" bubble. Also, most articles I've read about web crawling use Python.

So, given my desire to create a web crawling app, desire to learn a new language, and the survey results, I decided to go with Python.

## Using Virtual Environments
Usually creating your first Python script will simply involve installing Python, creating a .py script and running `python [script_name]`

In real-world applications, however, it’s a good idea to create apps [using virtual environments](https://realpython.com/python-virtual-environments-a-primer/). Python has a built-in library called [`venv`](https://docs.python.org/3/library/venv.html).

While I was using `venv` in combination with [`pip`](https://pypi.org/project/pip/), I came across the problem of managing or keeping track of the Python packages I’ve been installing. I could run `pip freeze` and I would have a list of requirements that I can add to my code repository. However, I found it tedious to have to run this code *separately*. I was hoping to have the same experience as I have with `composer` or `npm` where whenever I install a package, it would automatically add this package in a requirements file (e.g. `package.json` and `package-lock.json`).

This is where `pipenv` comes in. It has both the functionality that `venv` and `pip` provide to make package management in Python a smooth experience. 

Thoughtbot has a [good article](https://thoughtbot.com/blog/how-to-manage-your-python-projects-with-pipenv) that helped me get started with `pipenv`

## Flask Blueprints
I won't get into writing how to create your first running flask app. There's [plenty](https://flask.palletsprojects.com/en/1.1.x/quickstart/) of [tutorials](https://hackersandslackers.com/creating-your-first-flask-application/) already for that.

When you're just starting with Python and Flask (or any language, framework, or tool), it's tempting to just run with "what you know". And since Flask is a *micro*framework, it's not laid out right away how your application should be structured. 

That's why I think Blueprints are worth mentioning if you want to build a flask application properly—assuming of course, that your app do not involve only a handful of routes. Any flask tutorial series that are worth their salt will include Blueprints at some point. But since my python app was exclusively backend code and do not involve assets or templates, I jumped into Blueprints right away. 

Blueprints can be intimidating especially since I'm just starting with Python. I was also running into problems because the [hackersandslackers](https://hackersandslackers.com/organizing-flask-with-blueprints/) had a typo in their code. I had to go back to the [Python docs](https://docs.python.org/3/reference/import.html) to make sure I wasn't missing anything and I understood how Python imports work.

You'd have to invest some time truly understanding Blueprints but it is worth it.

## Using Sessions Responsibly
My app needs to store access tokens retrieved from Dropbox's oAuth2 flow. It's helpful to know that Flask by default stores session data *in the client.* Granted, it is signed so it cannot be modified. But it is not encrypted but merely encoded and therefore, can be read and decrypted.

Since access tokens are meant to be *secret*, it is best practice to store them in the server instead of in the client where data can be read. 

Apparently, it is known to be a dangerous misunderstanding [among](https://blog.paradoxis.nl/defeating-flasks-session-management-65706ba9d3ce) [Flask](https://www.reddit.com/r/flask/comments/5l2gmf/af_eli5_how_sessions_work_in_flask/) [users](https://www.youtube.com/watch?v=mhcnBTDLxCI).

The article by [hackersandslackers](https://hackersandslackers.com/managing-user-session-variables-with-flask-sessions-and-redis/) helped me jumpstart on server-side sessions. I use [Heroku](https://dashboard.heroku.com/apps) for the redis server. 

## Testing
Another best practice that I want to quickly mention is testing. You can choose 3 frameworks: unittest (built-in), nose, and pytest. [Test&Code](https://testandcode.com/2) has a comparison of these three. You can see my tests in [github](https://github.com/paxcodes/peppsnipp-api/tree/master/tests).
___
These best practices are not unique to Python. If you're coming from another language, you've probably practiced them already. But if you're just starting with Python like me, I hope this article helped you quickly apply best practices *the  Python way*. 

Next up in my blog, I will write step-by-step guide on how I implemented a Dropbox oAuth2 flow in Flask, including writing tests in PyTest.
