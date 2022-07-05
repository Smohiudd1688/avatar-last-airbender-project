# Avatar the Last Airbender Application

This application is a one stop shop to get to know all about Avatar the Last Airbender. You can find out what the show is about, summary's regarding the main characters and the four nations. If you find a missing character you can even add one.

## Getting Started

### Installation

1. Clone the repository and cd into the folder.
2. Make sure Google Chrome is your default browser, may not work correctly otherwise.
3. In terminal open the html file using the code below.
    ```bash
    npm start
    ```
4. You are ready to start using the application!

### Configuration

In order for the application to run correctly you will need to run a JSON server to replicate a full REST API. To do this you will need to:
1. Install the JSON server in terminal (either globally or locally) by running this code:
    ```bash
    npm install -g json-server
    ```
2. Then cd into directory where `db.json file` is stored, if not already
3. Lastly, run the following code:
    ```bash
    json-server --watch db.json
    ```

## Usage
To use the application you begin by adding the amount of books that you would like to read for the year. Once that is completed you may start adding the book you have read. To add the book you will need to input the title and the isbn number. A rating of the book can be added as well but is not necessary to track the book.

Once the book is added the progress of your goal should be updated and you should see a box on the page with the title, cover, author and your rating of the book. If the information is not found by the API it will still be tracked but the information not found will be replaced by the default provided.

If there are any books you would like to delete, you may click on the 'x' on the upper left hand corner of the box. You may also choose to sort the order of the books, by either date added, highest-to-lowest ratings or lowest-to-highest ratings.

## Project Status
This application is finished for the time being, may be expanded at a later date.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
