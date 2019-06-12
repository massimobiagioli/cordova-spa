import Page from './page';
import Out from '../core/out';

export default class extends Page {
  
  constructor() {
    super();
    this.viewName = "page1.html";
  }

  parseEvent(eventData) {
    switch (eventData.event) {
      case 'onClick':
        switch (eventData.id) {
          case 'Page1_test':
            this.testOut();
            break;
        }
        break;
    }
  }

  testOut() {
    Out.value('Page1_out', 'contenuto dinamico');
  }
  
}