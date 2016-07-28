// DOM utility functions
const addClass = (el, newClass) => {
  el.classList.add(newClass);
};

const removeClass = (el, oldClass) => {
  const currentClasses = el.className.split(" ");

  el.className = currentClasses.filter(names =>
    names.trim() !== "" && names !== oldClass
  ).join(" ");
};

const createElemWithProps = (elem, properties) => {
  let element = document.createElement(elem);

  for (let prop in properties) {
    element[prop] = properties[prop];
  }

  return element;
};

const removeElem = (elem, parent) => {
  parent.removeChild(elem);
};

const removeAllElements = elements => {
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

  const matchKeyword = value => {
    let matchedEmojiTitles = [];
    const matchedObjects = EMOJIS.filter(filterByKeyword.bind(this, value));

    if (matchedObjects.length == 0) return;

    matchedObjects.map(obj => {
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

  const highlightEmojiCharacter = emojiElem => {
    emojiElem.addEventListener('click', copyToClipboard, true);
    const parent = emojiElem.parentElement;
    const hiddenField = createElemWithProps('input', {
      className: 'copy--input',
      type: 'text'
    });

    if (parent.getElementsByClassName('copy--input').length == 0) {
      hiddenField.value = emojiElem.innerHTML;
      addedElem = parent.appendChild(hiddenField);
    }

    removeClass(messageToClick, 'hidden');
  }

  const copyToClipboard = e => {
    const
      emojiElem = e.target,
      hiddenField = emojiElem.parentElement.getElementsByClassName('copy--input')[0],
      input = (hiddenField ? hiddenField : null);
      copiedMessage = `${emojiElem.innerHTML} is copied!`;

    if (input && input.select) {
      input.select();

      try {
        document.execCommand('copy');
        input.blur();
      }
      catch (error) {
        alert('Highlight the emoji and press Ctrl/Cmd+C to copy');
      }

      addClass(messageToClick, 'hidden');
      removeClass(messageConfirm, 'hidden');
      messageConfirm.innerHTML = copiedMessage;
    }
  }

  const delay = (func, delay) => {
    window.setTimeout(func, delay);
  }
})();
