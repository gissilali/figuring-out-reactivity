import { reactive } from "./reactivity";
class Library {
  constructor(obj) {
    this.methods = obj.methods;
    this.data = reactive(obj.data);
    this.el = obj.el;
    this.assignEventHandlers();
  }

  fetchElement() {
    return window.document.querySelector(this.el);
  }

  assignEventHandlers() {
    const element = this.fetchElement();
    const attrs = element.attributes;
    for (let i = attrs.length - 1; i >= 0; i--) {
      let attributeName = attrs[i].name;
      let attributeValue = attrs[i].value;
      if (attributeName === "@click") {
        element.addEventListener(
          "click",
          this.methods[attributeValue].bind(this)
        );
      }
    }
  }
}
