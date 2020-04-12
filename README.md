## Setting Up Dev Environment

### Step One - Software:

- Install latest version of Node.js, https://nodejs.org/en/
- 'npm' is installed through Node.js, followed in further steps.

### Step Two - Directory Change:

- Boot up TWO instances of Node.js Command Prompt (NOT Node.js!!)
- Create a Folder in any desired path, we will use this as a -master folder to hold and organize. My directory looks like such:

C:\Users\willy\Desktop\Wireframes-master 

- In the command prompt we have to change the directory in order to properly install npm to the correct folder. To do so, make another folder in the -master folder that will hold all of our assests, modules, .html, .scss, and so on. My directory looks like such: 

C:\Users\willy\Desktop\Wireframes-master\Front

- In which 'Front' is the folder I'll mainly be working in for this page.

- In your terminal, type 'cd', this will be our command for changing paths. To properly do so, type 'cd <YOUR PATH DIRECTORY>' into the terminal. Hit Enter. When completed it should look like this: 
  
```  

C:\Users\willy\Desktop\Wireframes-master\Front>

```

- Be sure to do this for BOTH terminal instances!

### Step Three - Setting up npm:

- In our new directory, we must install npm, but before so we must create a package.json file, that will hold our scripts and dependencies further down the line. In one of the terminal instances, enter the line:

```
npm init -y
```

- This will create a default package.json file, which we will now modify with:

```
npm init
```

- You will be presented with:

```
{
"name": (<YOUR FOLDER NAME, SUCH AS Front>),
"version": "1.0.0"
"Description": <WRITE OUT DESCRIPTION OF FILE, SUCH AS "This is the front Page"
"Repository": <LINK YOUR OWN GITHUB REPO, OR USE THE CSCPROJECT REPO>
"keywords": <IRRELEVANT>
"author": <YOU>
"license": "ISC", (Type 'MIT', then hit enter)
}

```

- When completed you should see in your path Folder a package.json file, you can open this with VSCode or N++ to edit.

### Step Four - Setting up our .html/.js files:

- In your path folder, which I will from now on refer to as Front for ease of explanation, create another folder called 'src'. In your code editor create a new file '<CHOOSE NAME>.html', insert this code.

```
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="theme-color" content="#000000">
      <title>React Tutorial</title>
   </head>
   <body>
      
   </body>
</html>
```

- Create another file <SAME AS PREVIOUS NAME>.js, we do not have to add anything to this file.
  
 ### Step Five - Add Webpack:
 
 - We are going to install our first dependencies, in your terminal that you've used to install other items, copy this line into the terminal: 
 
 ```
 npm install --save-dev webpack webpack-cli webpack-dev-server
 ```
 
 - We now need a config file for webpack. In your code editor create another file called 'webpack.config.js' in your base directory, NOT your 'src' folder.
 
 - Copy these lines into your terminal: 
 
 ```
 npm install --save-dev path
 ```
 ```
 npm install --save-dev html-webpack-plugin
 ```
 
 - Now, open your package.json file and in the "scripts": {} block, add these two scripts ABOVE the 'test' script:
 
 ```
 "webpack": "webpack",
 "start": "webpack-dev-server --open",
 ```
 
 - Open up your webpack.config.js file again, and add these lines at the top
 
 ```
 const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', '<YOUR CHOSEN NAME>.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.bundle.js'
    },
    mode: process.env.NODE_ENV || 'development',
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    devServer: {
        contentBase: path.join(__dirname, 'src')
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', '<YOUR CHOSEN NAME>.html')
    })]
};

```

-BE SURE to account for the <YOUR CHOSEN NAME> inputs, as they will be based upon what you named your previous .js and .html files.
  
### Step Six - Start up local host:

- In the second node.js terminal instance, copy the line:

```
npm run webpack
```

- This will build our config with the rest of our files. To start up the local host, copy this line into the same terminal:

```
npm start
```

- If completed properly, you should see:

```
> front@1.0.0 start C:\Users\willy\Desktop\Wireframes-master\Front
> webpack-dev-server --open

i ｢wds｣: Project is running at http://localhost:8080/
i ｢wds｣: webpack output is served from /
i ｢wds｣: Content not from webpack is served from C:\Users\willy\Desktop\Wireframes-master\Front\src
i ｢wdm｣: wait until bundle finished: /
i ｢wdm｣: Hash: 919991fba2c692711a22
```

- As well as a browser pulled up into your default browser software.

(CURRENTLY WORKING ON INSTALLING REACT AND BABEL, WILL UPDATE)
