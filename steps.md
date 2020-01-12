# Step 1 - Installing Webpack

1. Webpack is an npm package, so we need to install it. Webpack also comes with a CLI tool (command line tool), so we will install that as well.
```
npm i webpack webpack-cli
```

You have been successful when you see webpack and webpack-cli added to your package.json dependencies

2. Get the basic webpack config up and running:

- [ ] Create a webpack.config.js file in the project root
- [ ] Add the new build npm script to your package.json ``` "build": "webpack" ```
- [ ] Fill your webpack config.js with the code below:

```
const path = require("path") 
const webpack = require('webpack')

module.exports = {

}
```

You have been successful when you can run your npm script in the terminal and see a webpack error (the error is there of course because our config file is empty)

# Step 2 - Webpack Entry 

1. Webpack is going to create a map of our app dependencies, but to make a map you need to start somewhere. In our webpack config, we can declare a starting point for our app. To do this, we need to add this line to the module.exports of our webpack config

```
entry: './src/client/index.js',
```

2. Create a new index.js file at the address above. For now, it can be mostly empty, with just an alert.

3. Experiment by running the webpack build script(`npm run build`). Take a look at the dist folder that appears after a successful webpack build.


**You have been successful when you see a dist folder in the root of your app**

*Some miscellanious notes:*

- If you run webpack build and in your text editor you see the dist folder, but nothing inside it - it might still be working. Some text editors will hide folders or folder contents like ```dist```. Yeah... that one didn't have me second guessing myself for like 20 min...

****# Step 3 - Webpack Output

The “output” of webpack is the distribution folder. It is where webpack drops or “outputs” the neat bundles of assets it creates from the individual files we point it to.

We have setup webpack just enough to be performing the most basic function of webpack - creating a dist folder with a main.js file from our entry point. And all of that is great - but none of it is useful yet.

What’s wrong? Let’s take a look:

- The main.js file of our distribution folder contains none of the javascript or other assets we wrote for our webpage.
- The distribution folder has no connection whatsoever to our app. If you start the express server, our app is still functioning exactly the same way it did in part 0.

1. Add our client/js file contents into dist/main.js


2. Create a new index.js file at the address above. For now, it can be mostly empty, with just an alert.




**You have been successful when you see a dist folder in the root of your app**

*Some miscellanious notes:*

- If you run webpack build and in your text editor you see the dist folder, but nothing inside it - it might still be working. Some text editors will hide folders or folder contents like ```dist```. Yeah... that one didn't have me second guessing myself for like 20 min...

