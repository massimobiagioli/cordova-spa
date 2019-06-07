import Page1 from '../apps/page1';
import Page2 from '../apps/page2';

const ClassMap = {
  Page1,
  Page2
};

export default class {
  
  renderView(viewId) {    
    this.view = new ClassMap[viewId]();    
    return this.view.renderView();
  }

  handleViewActions() {
    // TODO: Questo metodo va reso generico ...
    const btn = document.querySelector('#Page1_test');
    if (!btn) {
      return;
    }
    btn.addEventListener('click', () => {
      this.dispatchEvent('onClick', 'Page1_test');
    })    
  }

  dispatchEvent(event, id) {
    try {      
      const eventData = {
        'event': event,
        'id': id
      };
      this.view.parseEvent(eventData);
    } catch (error) {
      console.error(error);
    }
  }

}