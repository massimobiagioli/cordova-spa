export default class {
  
  constructor() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  }

  onDeviceReady() {
    this.receivedEvent('deviceready');
  }

  receivedEvent(event) {
    document.getElementById('test').innerHTML = 'test 123456';
  }

}