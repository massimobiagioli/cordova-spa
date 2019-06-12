export default class {

  constructor() {
    this.endpoint = 'https://cordova-spa-srv.herokuapp.com';
  }

  async handshake() {
    let response = await fetch(`${this.endpoint}/handshake`);
    let data = await response.json();
    return data;
  }

}