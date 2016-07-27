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
  const siteContainer = document.getElementsByTagName('body');
  const messageToClick = document.getElementsByClassName('message--click')[0];
  const messageConfirm = document.getElementsByClassName('message--confirm')[0];

  inputField.addEventListener("input", (event) => {
    const value = event.target.value;
    const prevFilter = document.getElementsByClassName('visible');
    if (typeTimeout) window.clearTimeout(typeTimeout);

    resetOldEmojis(prevFilter);
    addClass(messageConfirm, 'hidden');

    if (value) {
      typeTimeout = delay(matchKeyword(value), TYPE_INTERVAL);
    } else {
      removeClass(siteContainer[0], 'filtering');
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
        addClass(emojiItem.parentElement, 'visible');
        highlightEmojiCharacter(emojiItem);
      }
    }

    addClass(siteContainer[0], 'filtering');
  }

  const resetOldEmojis = (value) => {
    for (const prev of value) {
      removeClass(prev, 'visible');
    };
  }

  const filterByKeyword = (value, obj) => {
    return obj.keywords.some((keyword) => {
      return value === keyword;
    });
  }

  const highlightEmojiCharacter = (emojiElem) => {
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
    }
  }

  const delay = (func, delay) => {
    window.setTimeout(func, delay);
  }
})();
