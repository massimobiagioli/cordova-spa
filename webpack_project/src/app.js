import MenuManager from './core/menu-manager';

export default class {
  
  constructor() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  }

  onDeviceReady() {
    this.receivedEvent('deviceready');
  }

  receivedEvent(event) {

    // render menu
    const menuManager = new MenuManager();
    document.getElementById('menu_container').innerHTML = menuManager.renderMenu();
    menuManager.handleMenuActions();    
  }

}