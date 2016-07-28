// Search Script
(() => {
  const inputField = document.getElementsByTagName('input')[0];
  let typeTimeout;
  const TYPE_INTERVAL = 10000;

  // Event Listener: Input
    // 1. Get value of input
    // 2. Reset timeout
    // 3. Send value onward and set a timeout

  const delay = (func, delay) => {
    window.setTimeout(func, delay);
  }
})();





// FOR REFERENCE: Please don't just copy and paste. How are you going to learn anything then? ;)
// inputField.addEventListener("input", (event) => {
  // const value = event.target.value;
  // if (typeTimeout) window.clearTimeout(typeTimeout);

  // if (value) {
  //   typeTimeout = delay(matchKeyword(value), TYPE_INTERVAL);
  // }
// }, false);