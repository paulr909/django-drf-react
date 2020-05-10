[![Python Version](https://img.shields.io/badge/python-3.8-brightgreen.svg)](https://python.org)
[![Django Version](https://img.shields.io/badge/django-3.0.6-brightgreen.svg)](https://djangoproject.com)

# Django DRF React / Basic App

Run your app in a Virtual Environment: http://python-guide-ru.readthedocs.io/en/latest/dev/virtualenvs.html

```
git clone https://paulrogers@bitbucket.org/paulrogers/django-drf-react.git
```

Install the requirements:

```
pip install -r requirements.txt
```

Run the development server:

```
python manage.py runserver
```

Options for Black, Python code formatter:
Set: black --line-length 79 [SRC file]
Shortcut: black -l 79 [SRC file]

```
black -l 79 ~/PycharmProjects/django-projects/django-drf-react/leads/tests.py
/articles
/tests/test_follow_user.py
```

React:

```
yarn install

yarn start
```

Run e2e tests:

```
yarn run e2e
```