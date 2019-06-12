import { menuItems } from './app-definition';

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
    const btnTest = document.querySelector('#Page1_test');
    if (btnTest) {
      btnTest.addEventListener('click', () => {
        this.dispatchEvent('onClick', 'Page1_test');
      })    
    }

    const btnHandshake = document.querySelector('#Page2_handshake');
    if (btnHandshake) {
      btnHandshake.addEventListener('click', () => {
        this.dispatchEvent('onClick', 'Page2_handshake');
      })    
    }    
  }

  dispatchEvent(event, id) {
    try {           
      this.currentView.parseEvent({ event, id });      
    } catch (error) {
      console.error(error);
    }
  }

}