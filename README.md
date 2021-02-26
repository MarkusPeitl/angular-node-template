# Node Typescript-Handlebars Express template

## Description

This is a full angular, eslint (typescript), nodejs (typescript), prettier,
client server application template with the goal of setting up a new anuglar node application in minutes
and starting coding right away without the fuss of building the basic architecture first
and configuring all of the code quality tools.

To generate an application from this template a dockerfile/image is provider that asks
some configuration options and writes the configured template files to the output directory.

Recommended IDE is .vscode.
Contains a configuration to debug the angular application or the tests in the angular application
(karma test runner and jasmine test framework) in chrome.

For the node server uses mocha as a testing framework. (Honestly i tried getting karma and jasmine to work on node typescript,
but i ran into some error which i could not figure out yet how to solve, so i stuck to mocha which is way easier to install and
configure for that purpose. Anyway syntax is not that different with chai assertions and tests work just fine)

Uses nodemon and the watch mode of the typescript compiler to recompile and
restart the application as soon as changes to the typescript files of the node server occur.

## Dependecies

Might require typescript & tsc to be globally installed as well:

```bash
npm install -g typescript
```

Has some pre defined **dependencies**:  
**Express** as the server framework for nodejs  
**Socket.IO** to provide socket based communication  
**node-fetch** to provide a simple http client (as development for request was stopped)  
**pm2** for starting the application in production

## How to run

### Development

Install development and prod dependencies:

```bash
npm install
```

Run applcation in development mode (recompiles sources and restarts if typescript files change):

```bash
npm start
```

### Testing

Run tests:

```bash
npm test
```

#### If you like the template consider dropping me a coffee

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)](https://www.paypal.com/donate?hosted_button_id=BSFX8LCPHW2AE)

<br>  
<br>
