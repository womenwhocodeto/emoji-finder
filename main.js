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
  const inputField = document.getElementsByTagName('input')[0];
  let typeTimeout;
  const TYPE_INTERVAL = 10000;
  // Set variable for filtering purposes
  const siteContainer = document.getElementsByTagName('body')[0];
  const messageToClick = document.getElementsByClassName('message--click')[0];
  const messageConfirm = document.getElementsByClassName('message--confirm')[0];

  inputField.addEventListener("input", (event) => {
    const value = event.target.value;
    // Set variable of any emojis set to "visible" (this returns elements if a previous search has already been done)
    const prevFilter = document.getElementsByClassName('visible');
    if (typeTimeout) window.clearTimeout(typeTimeout);

    // Reset the previous search results
    resetOldEmojis(prevFilter);
    addClass(messageConfirm, 'hidden');

    if (value) {
      typeTimeout = delay(matchKeyword(value), TYPE_INTERVAL);
    } else {
      // Because the input has no value (and therefore we're not filtering), let's remove the filtering class from our site container
      removeClass(siteContainer, 'filtering');
      addClass(messageToClick, 'hidden');

      const hiddenFields = document.getElementsByClassName('copy--input');
      if (hiddenFields.length > 0) removeAllElements(hiddenFields);
    }
  }, false);

  const matchKeyword = (value) => {
    let matchedEmojiTitles = [];
    const matchedObjects = EMOJIS.filter(filterByKeyword.bind(this, value));

    if (matchedObjects.length == 0) return;

    matchedObjects.map((obj) => {
      matchedEmojiTitles.push(obj.keywords[0]);
    });

    for (const emoji of matchedEmojiTitles) {
      const emojiItem = document.querySelector(`[title="${emoji}"]`);

      if (emojiItem) {
        addClass(emojiItem.parentElement,'visible');
        highlightEmojiCharacter(emojiItem);
      }
    }

    addClass(siteContainer, 'filtering');
  }

  const filterByKeyword = (value, obj) => {
    return obj.keywords.some((keyword) => {
      return value === keyword;
    });
  }

  // Resetting previous search results
  const resetOldEmojis = (value) => {
    // Loop through the array of emojis that was passed to the function
    for (const prev of value) {
      // For each one, remove the visible class
      removeClass(prev, 'visible');
    };
  }

  const highlightEmojiCharacter = (emojiElem) => {
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
    // EXERCISE: set all constants at once
      // 1. the element on which the click event occurred

      // 2. check if there's a hidden input field injected beside this emoji already

      // 3 + 4. this message will show up when an emoji is copied

      // BONUS: now go back and find all the fat arrow functions that only take in one parameter, and remove the brackets.


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

// const
  // the element on which the click event occurred
  // emojiElem = e.target,
  // check if there's a hidden input field injected beside this emoji already
  // hiddenField = emojiElem.parentElement.getElementsByClassName('copy--input')[0],
  // input = (hiddenField ? hiddenField : null);
  // this message will show up when an emoji is copied
  // copiedMessage = `${emojiElem.innerHTML} is copied!`;
