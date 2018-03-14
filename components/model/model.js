(function() {

  class Model {
    constructor(resource) {
      this.resource = resource;
      this.data = {};
      this._eventHandlers = {};

    }

    getData() {
      return this.data;
    }

    setData(data) {
      this.data = data;
      this.trigger('update');
    }

    trigger(name) {
      if (this._eventHandlers[name]) {
        this._eventHandlers[name].forEach(cb => cb())
      }
    }

    on(name, cb) {
      if (!this._eventHandlers[name]) {
        this._eventHandlers[name] = [];
      }
      this._eventHandlers[name].push(cb);
    }

    fetch() {
      this._makeRequest('GET', this.resource, this.setData.bind(this))
    }
    
    _makeRequest(method, resource, cb) {
      const xhr = new XMLHttpRequest();
      xhr.open(method, resource, true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) {
          return;
        }
        if (xhr.status === 200) {
          cb(JSON.parse(xhr.responseText));
        }
      }
      xhr.send();

    }
  }

  window.model = Model;

})()