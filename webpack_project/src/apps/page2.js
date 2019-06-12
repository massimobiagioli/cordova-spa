import Page from './page';
import Backend from '../core/backend';
import Out from '../core/out';

export default class extends Page {
  
  constructor() {
    super();
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
    backend.handshake().then(data => Out.value('Page2_handshake_result', JSON.stringify(data)));
  }

}