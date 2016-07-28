# Emoji Finder
## Yer emoji clipboard!
Sure you can add emojis by using your operating system's keyboard, or shortcuts. On a Mac, that often means you have to search for the emoji with their restrictive keyword choices. Otherwise you'll have to scroll down for an eternity or less to find it.

You can never search for 💩 the way you want:

![refuse to search this way!](http://g.recordit.co/tiCHLNucFZ.gif)

We demand better! We should use our own search words for emojis! Emoji freedom. Emoji efficiency.

This app prompts you to copy the emoji to your clipboard when the search matches down to one. Or your selection is a single click away. Boom.💥✨

See it in action:

![emoji freedom](https://www.dropbox.com/s/9qaw2ss3qywapj7/emojifinder.gif?raw=1)


# Using Babel
We've included [babel-standalone](https://github.com/Daniel15/babel-standalone) via CDNJS as a `<script>` in the `<head>` of `index.html`. This is **not** the recommended method for use on projects going to production.

Even on sites without a backend (i.e. Node.js), it's recommended that you use a build system, such as Gulp, Grunt, or Webpack. See how to do so on [Babel docs here](http://babeljs.io/docs/setup/).

We use babel-standalone because our example project only requires Babel to quickly demonstrate the usage of ES2015 features. Make sure to read through the use cases here: [README.md](https://github.com/Daniel15/babel-standalone/blob/master/README.md)


# Emoji Browser Support
Take a look at the support for emojis on various operating systems and their browsers today: [CanIEmoji](http://caniemoji.com/)

We've excluded the number emojis due to their lack of support on Chrome. We encourage you to try out adding fallback support with a JS library such as [JS Emoji](https://github.com/iamcal/js-emoji) or the open-source emoji set [Emoji One](https://github.com/Ranks/emojione)


# Above and Beyond
## Running Gulp
Just to clarify - it is **not required** to run gulp to work with the javascript. It's only being used to compile the scss. However if you'd like to play around on your own time , follow the steps below to get setup. 👯

#### 1. Install Dependencies
1. Ensure you have Node.js installed. Download that [here](https://nodejs.org/en/).
2. Next, in a terminal window run `npm install -g gulp`. This installs gulp globally on your system so that you can actually play with it~
3. Now enter `cd path/to/filename` (change the path to match wherever your emoji-finder folder is located).
4. Run `npm install`. This will automatically install all dependencies for the project 🍰

#### 2. Actually Running Gulp
After you've done the above - and `npm install` has stopped doing it's 🔥 - run `gulp`. Now whenever you update a `*.scss` file, gulp will automatically recompile to `*.css`. To end the session, in your terminal window type `ctrl+c`.

#### 3. Bonus: Add Babel With Gulp
Extra shiny step for bonus learning points: install gulp-babel by following the instructions [here](https://github.com/babel/gulp-babel) or on [Babel docs here](http://babeljs.io/docs/setup/) (click Gulp as your choice of build system). Don't forget to then remove the babel-standalone `<script>` tag from the `<head>` in `index.html`.
