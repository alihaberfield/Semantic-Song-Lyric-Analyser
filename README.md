Song-lyric Semantic Analyser
==

Overview
--

The Song-Lyric Semantic Analyser utilises the enormous data storage and examination capabilities of the MarkLogic database to examine the canon of songs in the English language. Expanding on the work of song lyric semantic analysis for song categorisation (see http://ieeexplore.ieee.org/xpl/login.jsp?tp=&arnumber=1394328&url=http%3A%2F%2Fieeexplore.ieee.org%2Fxpls%2Fabs_all.jsp%3Farnumber%3D1394328), this tool works to develop a semantic library of human emotion by categorising common word associations in song lyrics, inferring logical conclusions to the assertions made in the lyrics, and then asking a human audience to confirm the inference. Using human confirmation allows the system to learn from how realistic its guesses are, and improve over time.
By examining all the songs in the English language, and eventually expanding to other languages, the Song-lyric Semantic Analyser will become a powerful tool for generating artificial expressions of emotion, which will be of enormous use in the music and artificial intelligence industries.

Installation and Preparation
--

You will need to have access to a MarkLogic instance, either locally, or on a AWS instance.

If you want to use a AWS instance, ask us to set-up an account for you. Otherwise, go to  [developer.marklogic.com](https://developer.marklogic.com) to download a copy.

You will need to know the host and port numbers. If you are using an AWS instance, we will create the database for you and provide you with a username and password. Otherwise, if you're downloading it to your machine, you'll need to create a database (instructions below).

To install and prepare, check the code out

```
git clone https://github.com/
```


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
