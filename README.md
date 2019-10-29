# Django DRF React. Basic App

[![Python Version](https://img.shields.io/badge/python-3.6-brightgreen.svg)](https://python.org)
[![Django Version](https://img.shields.io/badge/django-2.2.5-brightgreen.svg)](https://djangoproject.com)

Run your app in a Virtual Environment: http://python-guide-ru.readthedocs.io/en/latest/dev/virtualenvs.html

```bash
git clone https://paulrogers@bitbucket.org/paulrogers/django-drf-react.git
```

Install the requirements:

```bash
pip install -r requirements.txt
```

Run the development server:

```bash
python manage.py runserver
```

Options for Black, Python code formatter:
Set: black --line-length 79 [SRC file]
Shortcut: black -l 79 [SRC file]

```bash
black -l 79 ~/PycharmProjects/django-projects/django-drf-react/leads/tests.py
/articles
/tests/test_follow_user.py
```

Install React:

```bash
yarn install
```

Run React:

```bash
yarn start
```

Run e2e tests:

```bash
yarn run e2e
```