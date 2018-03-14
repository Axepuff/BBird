(function() {

  class Model {
    constructor(resource) {
      this._resource = resource;
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

    save (data) {
      this.setData(data);
      this._makeRequest('PUT', this._resource, null);
    }

    on(name, cb) {
      if (!this._eventHandlers[name]) {
        this._eventHandlers[name] = [];
      }
      this._eventHandlers[name].push(cb);
    }

    fetch() {
      this._makeRequest('GET', this._resource, this.setData.bind(this))
    }
    
    _makeRequest(method, resource, cb) {
      const xhr = new XMLHttpRequest();
      xhr.open(method, resource, true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) {
          return;
        }
        if (xhr.status === 200 && cb !== null) {
          cb(JSON.parse(xhr.responseText));
        }
      }

      if (method === 'PUT') {
        xhr.send(JSON.stringify(this.getData()));
      } else {
        xhr.send();
      }

    }
  }

  window.model = Model;

})()