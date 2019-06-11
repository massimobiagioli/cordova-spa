import { menuItems } from './app-config';

export default class {
  
  constructor() {
    this.currentView = null;
  }

  async renderView(viewId) {        
    await this.getView(viewId);
    return this.currentView.renderView();    
  }

  async getView(viewId) {    
    const viewFilename = menuItems.find(item => item.id === viewId).filename;            
    const module = await import(/* webpackMode: "eager" */ `../apps/${viewFilename}`);
    this.currentView = new module.default();                                  
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

  dispatchEvent(viewId, event, id) {
    try {      
      const eventData = {
        'event': event,
        'id': id
      };
      this.currentView.parseEvent(eventData);      
    } catch (error) {
      console.error(error);
    }
  }

}