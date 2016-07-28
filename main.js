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

    // Loop through emoji array
      // 1. Find <li /> in markup that matches each emoji
      // 2. Add class: visible

    // Add class: filtering to siteContainer to show results!
  }

  const filterByKeyword = (value, obj) => {
    return obj.keywords.some((keyword) => {
      return value === keyword;
    });
  }

  const delay = (func, delay) => {
    window.setTimeout(func, delay);
  }
})();








// FOR REFERENCE: Please don't just copy and paste. How are you going to learn anything then? ;)
// for (const emoji of matchedEmojiTitles) {
//   const emojiItem = document.querySelector(`[title="${emoji}"]`);

//   if (emojiItem) {
//     addClass(emojiItem.parentElement,'visible');
//   }
// }