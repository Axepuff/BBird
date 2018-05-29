import header_tmp from './header_tmp.pug'

  // let pug = require('pug')
  // let tmp = pug.compileFile('menu_tmp.pug', options)
  const tmp = header_tmp

  /**
   * @class Header
   */
  class Header {

    constructor({
      parent,
      content
    }) {
      this.parent = parent
      this.content = content

      this.render()
    }

    render () {
      if (!this.parent.classList.contains('header')) {
        this.parent.classList.add('header')
      }
      this.parent.innerHTML =  tmp({content: this.content})
    }

  }

export {Header}
