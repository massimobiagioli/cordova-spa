import Backend from '../core/backend';

export default class {
  
  constructor() {
    this.viewName = "page2.html";
  }

  parseEvent(eventData) {    
    switch (eventData.event) {
      case 'onClick':
        switch (eventData.id) {
          case 'Page2_handshake':
            this.handshake();
            break;
        }
        break;
    }
  }

  handshake() {
    const backend = new Backend();
    backend.handshake().then(data => document.querySelector('#Page2_handshake_result').innerHTML = JSON.stringify(data));
  }

  renderView() {    
    const template = require(`../views/${this.viewName}`);
    return template();     
  }

}