(function () {
  'use strict';
  // let pug = require('pug');
  // let tmp = pug.compileFile('menu_tmp.pug', options);
  // let tmp = window.menu_tmp()

  /**
  * @class Menu
  */
  class Menu {

    constructor ({parent, data}) {
      this.parent = parent
      this.data = data

      if (data) {
        this.render()
      }

      this._initEvents()
    }

    render () {
      // this.parent.innerHTML = tmp(this.data)
    }
  }
  
  window.menu = Menu
})()
