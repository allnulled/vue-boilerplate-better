export default {
  inserted(el) {
    setTimeout(() => {
      console.log(el);
      el.click();
      el.focus();
    }, 1000 * 5);
  }
};