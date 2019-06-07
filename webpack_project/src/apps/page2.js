export default class {
  
  constructor() {
    this.viewSrc = require("html-loader!../views/page2.html");
  }

  parseEvent(eventData) {
    console.log(eventData);
  }

  renderView() {    
    return this.viewSrc;    
  }

}