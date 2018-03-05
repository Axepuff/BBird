(function () {
  'use strict';



  /**
  * @class Menu
  */
  class Menu {

    constructor ({parent, data}) {
      this.parent = parent
      this.data = data

      if (data) {
        render()
      }

      this._initEvents()
    }

    render () {
      this.parent.innerHTML = template(this.data)
    }
  }
})()
