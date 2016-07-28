// Search Script
(() => {
  const inputField = document.getElementsByTagName('input')[0];
  let typeTimeout;
  const TYPE_INTERVAL = 10000;

  inputField.addEventListener("input", (event) => {
    // 1. Get value of input

    // 2. Reset timeout

    // 3. Send value onward and set a timeout
  }, false);

  const delay = (func, delay) => {
    window.setTimeout(func, delay);
  }
})();








// const value = event.target.value;
// if (typeTimeout) window.clearTimeout(typeTimeout);

// if (value) {
//   typeTimeout = delay(matchKeyword(value), TYPE_INTERVAL);
// }