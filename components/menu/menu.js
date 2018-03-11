(function () {
  'use strict';
  // let pug = require('pug');
  // let tmp = pug.compileFile('menu_tmp.pug', options);
  let tmp = window.menu_tmp

  /**
   * @class Menu
   */
  class Menu {

    constructor({
      parent,
      data,
      maxWidth
    }) {
      this.parent = parent;
      this.data = data;
      this.width = maxWidth
      if (maxWidth) this._initWidth()

      if (data) this.render();

      this._initEvents()
    }

    render() {
      this.parent.innerHTML = tmp(this.data);
      this.parent.style.maxWidth = this.widthString
    }

    removeItem(index) {
      this.data.items = this.data.items.filter((item, i) => {
        return index !== i
      });
      this.render();
    }

    _initWidth() {
      this.widthString = this.width.toString().match(/[a-z]/) ? this.width : this.width + 'px'
    }

    _initEvents() {
      this.parent.addEventListener('click', this._onClick.bind(this));
    }

    _onClick(event) {
      event.preventDefault();

      const item = event.target;

      // try {
      if (item.dataset.action) {
        try {
          this['_on' + item.dataset.action](item);
        } catch (e) {
          throw new Error(`Метод ${item.dataset.action} не определён`);
        }
      }

    }

    _onremove(item) {
      let index = parseInt(item.parentNode.parentNode.dataset.id, 10);

      this.removeItem(index)
    }

    _onpick(item) {
      console.log('pick' + item)
    }

  }

  window.menu = Menu
})();