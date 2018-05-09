import container_tmp from './container_tmp.pug'

  // let pug = require('pug');
  // let tmp = pug.compileFile('menu_tmp.pug', options);
  const tmp = container_tmp;

  /**
   * @class container
   */
  class container {

    constructor({
      parent,
      content
    }) {
      this.parent = parent;
      this.content = content

      this.render()
    }

    render () {
      this.parent.innerHTML = tmp({content: this.content});
    }

  }

export {container};
