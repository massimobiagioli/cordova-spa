import ViewManager from './view-manager';

export default class {

  constructor() {
    //TODO: centralizzare
    this.menuItems = [
      {
        id: 'Page1',
        description: 'Pagina1'
      },
      {
        id: 'Page2',
        description: 'Pagina2'
      }
    ];    
  }

  handleMenuActions() {
    const viewManager = new ViewManager();

    let navLinks = document.querySelectorAll('.nav-link');
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', e => {
        e.preventDefault();                        
        document.getElementById('view_container').innerHTML = viewManager.renderView(e.target.id);      
        viewManager.handleViewActions();   
        $('.navbar-collapse').collapse('hide');
      });
    }
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
    
    this.menuItems.forEach(item => {
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