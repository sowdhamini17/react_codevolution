# react_codevolution
EP-1

*REACT is declarative
*add any part of application
*easily transport to other langauages
*react is a library

EP-2

Quick Start
npx create-react-app my-app
cd my-app
npm start

NPX
npx stands for Node Package Execute. It is a tool that comes bundled with Node.js (version 5.2.0 and above) and is used to execute packages or commands without globally installing them.

Key Features of npx:
Run Packages Without Installing Globally:

You can run any npm package binary or CLI tool directly using npx, without having to globally install it with npm install -g.

Example:
npx create-react-app my-app

This will create a new React application without needing to install create-react-app globally.

Version Management:

You can use npx to run a specific version of a package.

Example:
npx react-scripts@3.4.0 start

This will run version 3.4.0 of react-scripts without altering your project's configuration.

Temporary Usage:

Packages executed using npx are installed temporarily and discarded after use, which saves space on your system.
Running Local Scripts or Commands:

If you have a locally installed CLI tool, you can use npx to execute it instead of modifying your PATH.

Example:
npx webpack
If webpack is installed locally in the project, npx will execute it without needing to install it globally.

Why Use npx?
Avoids Global Installations: You don’t need to clutter your system with globally installed packages, which could lead to version conflicts.

Quick Testing: It allows you to try out different tools or run scripts quickly without a permanent installation.

Easy Execution of Commands: Simplifies executing package binaries like create-react-app or webpack from the command line without setup overhead.

In short, npx simplifies package execution, allowing you to quickly run or try out packages in your project without global installations.

EP-3(FOLDER STRUCTURE)

INDEX.HTML-->index.js-->app.js

my-app/
├── node_modules/         # Auto-generated by npm or yarn
├── public/               # Static files that are served directly
│   ├── index.html        # HTML template
│   ├── favicon.ico       # Favicon for the app
│   └── other static assets (images, etc.)
├── src/                  # Main source code directory
│   ├── assets/           # Static assets (images, fonts, etc.)
│   ├── components/       # Reusable React components
│   │   ├── Header.js     # Example component
│   │   ├── Footer.js     # Another example component
│   │   └── ...
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Page-level components for routing
│   │   ├── Home.js       # Home page
│   │   ├── About.js      # About page
│   │   └── ...
│   ├── services/         # API requests, helper functions, etc.
│   │   └── api.js        # Example API handler
│   ├── store/            # Redux, Context API, or other state management logic
│   ├── styles/           # Global or shared styles (CSS/SCSS)
│   │   └── main.css      # Example stylesheet
│   ├── App.js            # Main React component
│   ├── index.js          # Entry point for the app
│   └── ...
├── .gitignore            # Files and directories to be ignored by Git
├── package.json          # Project dependencies and scripts
├── package-lock.json     # Dependency lock file
├── README.md             # Project documentation
└── .env                  # Environment variables (optional)

EP-4
(FUNCTIONAL COMPONENTS)
*default export
 export default function_name

*named export
 export {function name}