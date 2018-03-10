(function () {
  'use strict';
  // let pug = require('pug');
  // let tmp = pug.compileFile('menu_tmp.pug', options);
  let tmp = window.menu_tmp

  /**
   * @class Menu
   */
  class Menu {

    constructor({parent,data}) {

      this.parent = parent;
      this.data = data;

      if (data) {
        this.render();
      }

      this._initEvents()
    }

    render() {
      this.parent.innerHTML = tmp(this.data);
    }

    removeItem(index) {
      this.data.items = this.data.items.filter((item, i) => {
        return index !== i
      });
      this.render();
    }

    _initEvents() {
      this.parent.addEventListener('click', this._onClick.bind(this));
    }

    _onClick(event) {
      event.preventDefault();

      const item = event.target;

      try {
        this['_on' + item.dataset.action](item);
      } catch(e) {
        throw new Error(`Метод ${item.dataset.action} не определён`);
      }
    }

    _onremove(item) {
      let index = parseInt(item.parentNode.dataset.id, 10);

      this.removeItem(index)
    }

    

  }

  window.menu = Menu
})();