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

-In which 'Front' is the folder I'll mainly be working in for this page.

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

-This will create a default package.json file, which we will now modify with:

```
npm init
```

-You will be presented with:

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
