import ViewManager from './view-manager';
import { menuItems } from './app-definition';

export default class {

  constructor() {
    this.viewManager = new ViewManager();
  }

  handleMenuActions() {
    let navLinks = document.querySelectorAll('.nav-link');
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', e => {
        e.preventDefault();
        this.handleMenuAction(e.target.id);
      });
    }
  }

  handleMenuAction(menuId) {
    this.viewManager.renderView(menuId).then(htmlString => {
      document.getElementById('view_container').innerHTML = htmlString;
      this.viewManager.handleViewActions();
      $('.navbar-collapse').collapse('hide');
    });
  }

  renderMenu() {
    const template = require('../views/menu.html');
    return template({ menuItems });
  }

}