[![Maintainability](https://api.codeclimate.com/v1/badges/67bae1068599e5cc1b24/maintainability)](https://codeclimate.com/github/DrKimpatrick/backend-task/maintainability) [![BCH compliance](https://bettercodehub.com/edge/badge/DrKimpatrick/backend-task?branch=develop)](https://bettercodehub.com/)

| Service          | Master                                                                                                                                                                         | Develop                                                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Travis CI status | [![Build Status](https://travis-ci.org/DrKimpatrick/backend-task.svg?branch=master)](https://travis-ci.org/DrKimpatrick/backend-task)                                          | [![Build Status](https://travis-ci.org/DrKimpatrick/backend-task.svg?branch=develop)](https://travis-ci.org/DrKimpatrick/backend-task)                                           |
| Coveralls        | [![Coverage Status](https://coveralls.io/repos/github/DrKimpatrick/backend-task/badge.svg?branch=master)](https://coveralls.io/github/DrKimpatrick/backend-task?branch=master) | [![Coverage Status](https://coveralls.io/repos/github/DrKimpatrick/backend-task/badge.svg?branch=develop)](https://coveralls.io/github/DrKimpatrick/backend-task?branch=develop) |

## Backend-task

API for performing the following tasks

-   Authentication
-   JSON patching
-   Image Thumbnail Generation

### Hosted Apps

-   Banka [API](https://hackerbay.herokuapp.com/)

### Documentation (swagger)

-   Banka [DOC](https://drkimpatrick.github.io/backend-task/)

#### Requirements

-   [Node](https://nodejs.org/en/) Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

# Getting Started

In your terminal

1. Clone the repo locally to your machine by running `git clone https://github.com/DrKimpatrick/backend-task.git`
2. change your current directory (`cd`) to wherever you cloned the app in 1 above.

#### Development setup

-   Install dependencies
    ```bash
    npm install
    ```

#### Run the application (TypeScript)

```bash
npm start
```

#### Running tests

```bash

npm test

```

#### Running Build

```bash

npm build-ts

```

#### Server (Javascript)

```bash

npm serve

```

#### Generate DOC

```bash

npm docs

```

#### API REST End Points

| End Point            | Verb | Use               |
| -------------------- | ---- | ----------------- |
| `/api/v1/login`      | POST | User login        |
| `/api/v1/patch`      | POST | Patch Json object |
| `/api/v1/thumb/nail` | POST | Resize image      |

#### Built With

-   [Express](https://expressjs.com/) A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications

## Acknowledgments

A Special thanks goes to

1. [Hackerbay](https://hackerbay.io/) for having given me an opportunity to participate in an interview, without them , this application wouldn't have existed
