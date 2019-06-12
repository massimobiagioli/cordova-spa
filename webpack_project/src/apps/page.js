export default class {

  renderView() {    
    const template = require(`../views/${this.viewName}`);
    return template();     
  }

}