(function () {
  'use strict';
  // let pug = require('pug');
  // let tmp = pug.compileFile('menu_tmp.pug', options);
  const tmp = window.menu_tmp;

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
      this.width = maxWidth
      if (maxWidth) this._initWidth()

      if (data) this.render();

      this._initEvents()
    }

    render() {
      this.parent.classList.add('js-menu__wrapper')
      this.parent.innerHTML = tmp(this.data);
      this.parent.style.maxWidth = this.widthString
    }

    setData(data) {
      this.data = data;
    }

    getData() {
      return this.data
    }

    removeItem(index) {
      this.data.items = this.data.items.filter((item, i) => {
        return index !== i
      });
      this.render();
    }

    addItem(item) {
      if (item.name.length > 0 && item.link.length > 0) {
        this.data.items.push(item);
        this.render();
      }
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

      if (item.dataset.action) {
        try {
          this['_on' + item.dataset.action](item);
        } catch (e) {
          throw new Error(`Метод $3{item.dataset.action} не определён`);
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