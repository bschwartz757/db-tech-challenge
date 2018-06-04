# Important Notes

This project was built using the [Svelte](https://svelte.technology) framework. All project dependencies needed to run the app are included in the `package.json` file, with the exception of [Node.js](https://nodejs.org). The [.nvmrc](https://github.com/creationix/nvm) file included in the project root lists the suggested version of NodeJS (currently the most-recent LTS version.)

The application also makes use of static assets linked to `public/index.html`.

This application can be easily modified by installing the [Rollup](https://rollupjs.org) module bundler globally and running the relevant npm scripts, listed in the `package.json`.

## Running The App

To run the app, simply install the dependencies using NPM: `npm install`, then start the server using `npm start`. This will start an [Express](https://expressjs.com/) server which will run the app on `localhost:8080`. You can use another port by starting the server manually with a port of your choice by running `PORT=[your port] node server.js`.

_IMPORTANT:_ You will need to supply an [Open Weathermap API Key](https://openweathermap.org/appid) to the querystring parameter `appid` within `src/utils/getWeatherByCity.js` in order to retrieve real weather results. You can do this by simply placing your API Key in the file `key.txt` (with no punctuation/quotation marks), and it will be retrieved and injected automatically when the client side code is initialized.
