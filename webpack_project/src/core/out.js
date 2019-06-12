export default class {

  static value(id, content) {
    let el = document.querySelector(`#${id}`);
    if (el) {
      el.innerHTML = content;
    }
  }

}