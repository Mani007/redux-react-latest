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

### GIT repo setup
#### For new repo
```
echo "# redux-react-latest" >> README.md  
git init   
git add README.md   
git commit -m "first commit"   
git branch -M main   
git remote add origin https://github.com/Mani007/redux-react-latest.git    
git push -u origin main    
```

#### For new repo   
```
git remote add origin https://github.com/Mani007/redux-react-latest.git   
git branch -M main   
git push -u origin main   
```
### Redux-React Notes
**Redux**: Complex state management tool using CDS(central data store) principle.   
**Reducer** functions: They manages the state and return the newly updated states. They take actions as input. 
**Action**: Input to the function are type and payload(data).
**Dispatch**: Sends action to update te data/state. It is often initiated by event. 

```
npm install redux react-redux
```
*Note*: Reducer function should be synchronus(async/await is not allowed) function and we should not mutate the original state, means we need to create a copy of state and then mutate it. 

### Redux in Action 
![Redux Image](./public/reduxdataflowdiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)

-- App.js as useSeletor to select the variable from te store.   
-- App.js has useDispatch created variable in called dispact to dispatch type of actions.    
-- In main index.js we need to wrap te app component in the provider component. Provider component is provided by  react-redux.    
-- In the store folder, in the main index,js file, we have created store by supplying reducer function to it as createStore argument.    
-- In the reducer function we have provided two argument as state and action.    
-- And based on action type in reducer we have different type of state handlers.    
-- Finally we have to provid the immutable copy back from reducer by making sure that reducer function will take      
-- -- synchronus(async/await is not allowed) function and we should not mutate the original state, means we need to create a copy of state and then mutate it.

## Redux Toolkit
Advance version of redux implementation. Here we can mutate the state, also has some advance implementation for design pattern such as **redux-thunk** pattern.   
This also has **RTK** redux toolkit query for faster implementation.  