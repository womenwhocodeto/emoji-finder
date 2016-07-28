// Search Script
(() => {
  const inputField = document.getElementsByTagName('input')[0];
  let typeTimeout;
  const TYPE_INTERVAL = 10000;

  inputField.addEventListener("input", (event) => {
    const value = event.target.value;
    if (typeTimeout) window.clearTimeout(typeTimeout);

    if (value) {
      typeTimeout = delay(matchKeyword(value), TYPE_INTERVAL);
    }
  }, false);

  const matchKeyword = (value) => {
    // 1. Compare value against emojis
    // 2. Verify that we got emojis based off the value
    // 3. Add matched emojis to matchedEmojiTitles
  }

  const delay = (func, delay) => {
    window.setTimeout(func, delay);
  }
})();








// FOR REFERENCE: Please don't just copy and paste. How are you going to learn anything then? ;)
// const matchKeyword = (value) => {
//   let matchedEmojiTitles = [];
//   const matchedObjects = EMOJIS.filter(filterByKeyword.bind(this, value));
//   if (matchedObjects.length == 0) return;

//   matchedObjects.map((obj) => {
//     matchedEmojiTitles.push(obj.keywords[0]);
//   });
// }

// const filterByKeyword = (value, obj) => {
//   return obj.keywords.some((keyword) => {
//     return value === keyword;
//   });
// }

