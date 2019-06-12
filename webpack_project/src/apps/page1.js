export default class {
  
  constructor() {
    this.viewName = "page1.html";
  }

  parseEvent(eventData) {
    console.log(eventData);
  }

  renderView() {    
    const template = require(`../views/${this.viewName}`);
    return template();     
  }

}