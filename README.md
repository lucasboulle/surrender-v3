# surrender.gg


This project is an analytical platform, based on GPU-accelerated neural network models in order to predict the behavior and habits of league of legends players, using integrations with the Riot Games api and DDdragon media repository, this project is a monorepo containing the front and backend, as well as the implementation of the neural network model based on the theoretical framework GPI, developed by the analytical platform mobalytics

A estrutura do projeto consiste em um mono repo, dentro da pasta packages é possível visualizar todos os projetos separados por pastas.

    .
    ├── ...
    ├── packages                # root folder of the project
    │   ├── web                 # front-end
    │   ├── server              # server (backend + neural network)
    │   └── es-lint             # share linting rules
    └── ...

Shared dependencies are installed by `package.json` from the root of the project.

Endpoints collection at the root of the project.

## Home screen
![screen0](/screenshots/screen0.png)

## Profile screen
![screen1](/screenshots/screen1.png)

## Champion screen
![screen2](/screenshots/screen2.png)

## Match screens
![screen3](/screenshots/screen3.png)
![screen4](/screenshots/screen4.png)
![screen5](/screenshots/screen5.png)

## Installation guide WEB and server

To configure web project, go to `/packages/web/`  and follow the below instructions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn`

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn dev`

In `/packages/server` you can run yarn and yarn dev to up the server at the port 8080
