# Babel
## When to Use [babel-standalone](https://github.com/Daniel15/babel-standalone)
We've included babel-standalone via CDNJS in the `<head>` of `index.html`. This is **not** the recommended method for use on projects going to production.

Even on sites without a backend (i.e. Node.js), it's recommended that you use a build system, such as Gulp, Grunt, or Webpack. See how to do so on [Babel docs here](http://babeljs.io/docs/setup/).

We use babel-standalone because our example project requires using Babel as just a compiler for our code. Make sure to read through the use cases here: [README.md](https://github.com/Daniel15/babel-standalone/blob/master/README.md)


# Emoji Browser Support
Take a look at the support for emojis on various operating systems and their browsers today: [CanIEmoji](http://caniemoji.com/)

We've excluded the number emojis due to their lack of support on Chrome. We encourage you to try out adding fallback support with a JS library such as [JS Emoji](https://github.com/iamcal/js-emoji)


# Above and Beyond
## Running Gulp
Just to clarify - it is **not required** to run gulp for the meetup. It's only being used to compile the styles. However if you'd like to play around on your own time, follow the steps below to get setup.

#### 1. Install Dependencies
First, ensure you have `Node.JS` installed. Download that [here](https://nodejs.org/en/).

In a terminal window, enter `cd path/to/filename` (change path to match wherever your emoji-finder folder is located).

Enter `npm install`. This will automatically install all dependencies for the project :)

#### 2. Actually Running Gulp
After you've done the above, and `npm install` has stopped doing it's magic, enter `gulp default`. Now whenever you update a `scss` file gulp will automatically recompile to `css`. To end the session, press ctrl+c on your keyboard.
