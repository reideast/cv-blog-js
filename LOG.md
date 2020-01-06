# log

# React front end & Express back end
- First, back-to-basics idea
- See: https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/

## Create app structure

### React frontend
- [Facebook's create-react-app](https://github.com/facebook/create-react-app)
    - Installs: react, react-dom, and react-scripts with cra-template...
    ``` bash
    npx create-react-app client
    cd client
    npm start
    ```
- Results:
    ```
    Success! Created client at C:\Users\deskase\Dropbox\Code\JavaScript\cv-blog-js\client
    Inside that directory, you can run several commands:
      npm start
        Starts the development server.
      npm run build
        Bundles the app into static files for production.
      npm test
        Starts the test runner.
      npm run eject
        Removes this tool and copies build dependencies, configuration files
        and scripts into the app directory. If you do this, you can't go back!
    We suggest that you begin by typing:
      cd client
      npm start
    Happy hacking!
    ```
- Entry point for frontend is the App Component in `./client/src/App.js`
- GET data from api endpoint: use the Fetch promise API:
    ```javascript
    fetch("http://localhost:9000/testApi")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }))
        .catch(err => err);
    ```
    ```typescript jsx
    <p>{ this.state.apiResponse }</p>
    ```

### Express backend
- [Express Application Generator](https://expressjs.com/en/starter/generator.html)
    ``` bash
    npx express-generator api
    cd api
    npm install
    npm start
    ```
- Results:
    ```
    install dependencies:
    npm install
    run the app:
    SET DEBUG=api:* & npm start
    ```
- Executable entry point for the Express app is `./api/bin/www`, a JavaScript file with node.js shebang
- Setup main app login in ./api/app.js
- Express runs on port 9000 (`app.set('port', 9000)` in bin/www)

### git
- Committed this basic framework to git: https://github.com/reideast/cv-blog-js

## Host on Heroku
- Create a heroku "app", `cv-blog-js`
- https://cv-blog-js.herokuapp.com/
- Connect to GitHub, authorise on this repo
- Enable auto-deploy for all commits to master
- Configured Heroku's [vanilla Node buildpack](https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-nodejs) for the Express app
- Configured [create-react-app-buildpack](https://github.com/mars/create-react-app-buildpack) for React app
    - Static deployment via [create-react-app deploy](https://create-react-app.dev/docs/deployment/)
