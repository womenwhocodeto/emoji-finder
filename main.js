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

// Search Script
(() => {
  const inputField = document.getElementsByTagName('input')[0];
  let typeTimeout;
  const TYPE_INTERVAL = 10000;
  const siteContainer = document.getElementsByTagName('body')[0];

  inputField.addEventListener("input", (event) => {
    const value = event.target.value;
    if (typeTimeout) window.clearTimeout(typeTimeout);

    if (value) typeTimeout = delay(matchKeyword(value), TYPE_INTERVAL);
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
      }
    }

    addClass(siteContainer, 'filtering');
  }

  const filterByKeyword = (value, obj) => {
    return obj.keywords.some((keyword) => {
      return value === keyword;
    });
  }

  const delay = (func, delay) => {
    window.setTimeout(func, delay);
  }


  // 1. Set variable for old emojis
  // 2. Remove class: visible

  // Remove class: filtering from siteContainer when input is cleared
})();







// FOR REFERENCE: Please don't just copy and paste. How are you going to learn anything then? ;)
// const prevFilter = document.getElementsByClassName('visible');

// const resetOldEmojis = (value) => {
//   for (const prev of value) {
//     removeClass(prev, 'visible');
//   };
// }
