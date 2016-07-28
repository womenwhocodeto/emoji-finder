// DOM utility functions
const addClass = (el, newClass) => {
  el.classList.add(newClass);
};

const removeClass = (el, oldClass) => {
  // make an array of current classes on the element
  const currentClasses = el.className.split(" ");

  el.className = currentClasses.filter(name =>
    // make sure that the class we want to keep actually is a string (not blank);
    // also check if the class name we keep doesn't match the one to remove
    name.trim() !== "" && name !== oldClass
  ).join(" "); // join all the classes we want to keep with a space in b/t
};

const createElemWithProps = (elem, properties) => {
  // create the DOM element according to the tag name passed in
  let element = document.createElement(elem);

  for (let prop in properties) {
    // for each key-value in the properties object, apply it to the element
    element[prop] = properties[prop];
  }

  return element;
};

const removeElem = (elem, parent) => {
  parent.removeChild(elem);
};

const removeAllElements = elements => {
  // set the elements to a constant so that each iteration in the loop doesn't shift over the items in the array
  const allElements = elements;
  for (i=0; i < allElements.length; i++) {
    removeElem(allElements[i], allElements[i].parentElement);
  }
}

// Search Script
(() => {
  // Set all of our base variables (to be used throughout the function)
  const inputField = document.getElementsByTagName('input')[0];
  let typeTimeout;
  const TYPE_INTERVAL = 10000;
  const siteContainer = document.getElementsByTagName('body')[0];
  const messageToClick = document.getElementsByClassName('message--click')[0];
  const messageConfirm = document.getElementsByClassName('message--confirm')[0];

  // Event listener on input field
  inputField.addEventListener("input", (event) => {
    // Set input value to a variable
    const value = event.target.value;
    // Set variable of any existing emojis set to "visible" (this returns elements if a previous search has already been done)
    const prevFilter = document.getElementsByClassName('visible');

    // Reset timeout when user types in input
    if (typeTimeout) window.clearTimeout(typeTimeout);

    // Reset the previous search results
    resetOldEmojis(prevFilter);

    // Hide confirm message (copy success message)
    addClass(messageConfirm, 'hidden');

    // If there is a value, set a timeout before matching keyword
    if (value) {
      typeTimeout = delay(matchKeyword(value), TYPE_INTERVAL);
    } else {
      // If there isn't a value, remove the filtering class from siteContainer and hide the "copy to clipboard" message
      removeClass(siteContainer, 'filtering');
      addClass(messageToClick, 'hidden');

      // Get all inputs and if there are any, remove them (these are for copying)
      const hiddenFields = document.getElementsByClassName('copy--input');
      if (hiddenFields.length > 0) removeAllElements(hiddenFields);
    }
  }, false);

  const matchKeyword = value => {
    // Create emoji array
    let matchedEmojiTitles = [];

    // Look through emoji array (emoji.js) and filter by input value
      // Extra breakdown: filter() creates another array of items that return TRUTHY from filterByKeyword() - which we're setting to matchedObjects
    const matchedObjects = EMOJIS.filter(filterByKeyword.bind(this, value));

    // If no emoji matches, end the function
    if (matchedObjects.length == 0) return;

    // Looping through the array of emojis that match the search term
    for (const matched of matchedObjects) {
      // Sending each emoji (from array) to function that set's them to visible
      setMatchedEmojiVisible(matched);
    }

    // Add a filtering class to the site container which will hide all emojis that do NOT have a visible class
    addClass(siteContainer, 'filtering');
  }

  const filterByKeyword = (value, obj) => {
    // Look at keywords in emoji.js and if they match value (from input) -> return true
      // Extra breakdown: some() loops through an array and only returns a truthy value when the conditions are met (ie when value === keyword)
    return obj.keywords.some(keyword => {
      return value === keyword;
    });
  }

  // Resetting previous search results
  const resetOldEmojis = value => {
    // Loop through the array of emojis that was passed to the function
    for (const prev of value) {
      // For each one, remove the visible class
      removeClass(prev, 'visible');
    };
  }

  // Looping through array of matched emojis
  const setMatchedEmojiVisible = ({/* destructuring - the keys of the objects passed in here! */}) => {
    // Getting the link in index.html that corresponds to each array item
    const emojiItem = document.querySelector(`[title="${/* what would you pass in here for it to work? */}"]`);

    // If we successfully grabbed the link from index.html
    if (emojiItem) {
      // Add a visible class to this emoji
      addClass(emojiItem.parentElement, 'visible');
      highlightEmojiCharacter(emojiItem);
    }
  }

  const highlightEmojiCharacter = emojiElem => {
    // bind a click event to the emoji link with copyToClipboard func
    emojiElem.addEventListener('click', copyToClipboard, true);
    // we need its parent container to check for hidden input fields inside
    const parent = emojiElem.parentElement;
    // create the hidden input field DOM element
    const hiddenField = createElemWithProps('input', {
      className: 'copy--input',
      type: 'text'
    });

    // if there isn't a hidden input field already
    if (parent.getElementsByClassName('copy--input').length == 0) {
      // make sure the hidden input field's value is set to the emoji character
      hiddenField.value = emojiElem.innerHTML;
      // append to the link's parent, so it sits as a sibling to the link in the DOM
      addedElem = parent.appendChild(hiddenField);
    }

    // update the UI to ask the user to click an emoji
    removeClass(messageToClick, 'hidden');
  }

  const copyToClipboard = e => {
    // set all constants at once
    const
      // the element on which the click event occurred
      emojiElem = e.target,
      // check if there's a hidden input field injected beside this emoji already
      hiddenField = emojiElem.parentElement.getElementsByClassName('copy--input')[0],
      input = (hiddenField ? hiddenField : null);
      // this message will show up when an emoji is copied
      copiedMessage = `${emojiElem.innerHTML} is copied!`;

    // only run copying to clipboard if the input field is there and can be highlighted
    if (input && input.select) {
      // highlight the input's value
      input.select();

      try {
        // copy to clipboard whatever highlighted value is present on the entire DOM
        document.execCommand('copy');
        // blur aka "deselect" the input field so it's not in focus
        input.blur();
      }
      catch (error) {
        // should this fail because execCommand is not supported by browser, alert the user to copy manually
        alert('Highlight the emoji and press Ctrl/Cmd+C to copy');
      }

      // update the UI to alert user to having copied an emoji successfully
      addClass(messageToClick, 'hidden');
      removeClass(messageConfirm, 'hidden');
      messageConfirm.innerHTML = copiedMessage;
    }
  }

  const delay = (func, delay) => {
    // set a timeout to call a function after a delay
    window.setTimeout(func, delay);
  }
})();
