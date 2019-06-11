import ViewManager from './view-manager';
import { menuItems } from './app-config';

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
    let str = `
      <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a class="navbar-brand" href="#">DEMO</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsDefault" aria-controls="navbarsDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsDefault">
          <ul class="navbar-nav mr-auto">`;
    
    menuItems.forEach(item => {
      str += `
        <li class="nav-item active">
          <a id=${item.id} class="nav-link" href="#">${item.description}<span class="sr-only">(current)</span></a>
        </li>`;
    });

    str += `
      </ul>
          </div>
        </nav>`;

    return str;
  }

}