# Musala Gateway Manager

Gateways manager that control multiple peripheral devices. 

### Prerequisites
* NodeJS v16.13.0
* NestJS v8.2.1
* Angular v13.2.3

# Demo

You can see [here](https://gateway-manager.herokuapp.com/) the demo of this application deployed on Heroku.

# Instructions

You can follow the steps in the Setup section to run the application. In this application you can run the backend and frontend separately or you can use the frontend custom builds for Windows or Mac to move the build results to the backend and deploy the code from there.

# Setup
## Backend

### Installation

```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

```

## Frontend

### Installation

```bash
$ npm install
```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

```bash
# build for win
$ "build:win": "(if exist ..\\backend\\gateways-front rmdir ..\\backend\\gateways-front/s /q) && ng build --configuration=production && move dist/gateways-front ..\\backend\\gateways-front",
 
# build for mac 
$ "build:mac": "rm -rf ../backend/gateways-front && mkdir ../backend/gateways-front && ng build --configuration=production && mv dist/gateways-front/* ../backend/gateways-front/",

```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

