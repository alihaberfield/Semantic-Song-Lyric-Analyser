MarkLogic Nordic JS Competition
==

Overview
--

This is the demo shown at the 2015 Nordic JS flash talk. It is a simple logic game that demonstrates MarkLogic's JavaScript/TypeScript APIs and semantic inferencing.

You can use this project as a basis for starting with our coding competition.

The game itself, presents the user with premises (boolean statements asserted as true), and is presented with some possible answers that they must choose from. The correct answer is the one that follows, necessarily, from the premises.

There is then a second page showing a bar chart of all guesses made, which demonstrate the real-time updates as players make their choices.

How to submit an entry
--

To submit an entry to our coding competition, you will need to upload your code to GitHub and provide us with the url and a description of what you've written. Deadline for submission is 3pm on Friday. We will be announcing the winners at 5pm. At stake is a Lego Mindstorms kits. Any other questions, feel free to ask us questions.

Essentially, we're looking for cool ideas. It could be an application, a library, or an improvement to one of our libraries. But importantly: *We will be judging based on the MarkLogic aspects of your idea*. If you come up with an amazing idea that could be implemented on any technology, we won't rate it highly!

We don't expect you to write a full blown working codebase, but there will definitely be bonus points for working code. However, even psuedo code would be an appropriate submission. Just make it clear in your readme.md description what your idea is, and where we should be focusing our attention in the code base.

This project you'll check out is a full application, but you are free to throw the client tier if you're looking to build a server-side library

Information
--

We have designed MarkLogic to write JavaScript or TypeScript like you would normally. However, there are a few things you need to be aware of. We recommend you quickly check out our guide on [Server-Side JavaScript](https://developer.marklogic.com/features/javascript). Then, for a full API of our documentation go to our [API page](https://docs.marklogic.com). If you're a TypeScript developer, please note that we have provided TypeScript definitions for a small subset of our API as this is a work in progress. You are obviously free to use any function, but be aware that the definitions might not list them. If you do have a requirement, let us know and we can add it quickly.

Installation and Preparation
--

You will need to have access to a MarkLogic instance, either locally, or on a AWS instance.

If you want to use a AWS instance, ask us to set-up an account for you. Otherwise, go to [developer.marklogic.com](https://developer.marklogic.com) to download a copy.

You will need to know the host and port numbers. If you are using an AWS instance, we will create the database for you and provide you with a username and password. Otherwise, if you're downloading it to your machine, you'll need to create a database (instructions below).

To install and prepare, check the code out

```
git clone https://github.com/christyharagan/ml-nordicjs-competition
```

And then choose either the ts folder (for the TypeScript version) or the js folder (for the JavaScript folder). Configure the ```server/markscriptfile.ts``` (or ```/server/markscriptfile.js```) file for your local settings (specifically, the COMMON value would need changing, in particular the host name, port numbers, and user name).

Then, from the command line, cd in the ```client``` folder and run:

```
bower install
```

Then, cd into the ```server``` folder and run the following commands

```
npm install
```

If you are using the AWS instance, you skip this step. Create the database:
```
npm run create
```

Deploy the assets:
```
npm run deploy
```

Load the sample data:
```
npm run loadData
```

Run the test server:
```
npm run run
```

Now, to play the game, go to: ```http://[middle.hostname]:[middle.port]/play.html```, and to view the results, go to: ```http://[middle.hostname]:[middle.port]/results.html```.

For example, using the default values, these urls become: ```http://localhost:8080/play.html``` and ```http://localhost:8080/results.html```

How it all works
--

At a very high level, there are three primary components:

 * The client. This is written in [polymer](https://www.polymer-project.org/1.0/), but this could easily be written in Angular, React, Ember, etc.
 * The server which is actually divided into two parts:
  * The MarkLogic database platform. This is the part we're really interested in for your submission. Feel free to ask us as many questions as you like about this!
  * The middle tier, which is a node.js server, which for this sample application is just used to proxy data to the client, since MarkLogic currently doesn't provide WebSocket support (which is what we use for real-time push to the client). Instead, the node.js server hosts an HTTP server that MarkLogic calls out to; then the node.js server pushes that out to the client via WebSockets (using the excellent socket.io library).

Development
--

In order to make changes to the server code, the following commands are necessary:

Undeploy the existing code:

```
npm run undeploy
```

Deploy the new code:

```
npm run deploy
```

Other commands
--

To remove the database:

```
npm run remove
```

To run the tests:

```
npm run test
```
