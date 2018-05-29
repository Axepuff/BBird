import container_tmp from './container_tmp.pug'

const tmp = container_tmp

/**
 * @class container
 */
class Container {

  constructor({
    parent,
    content
  }) {
    this.parent = parent
    this.content = content

    this.instance = null
    this.render()
  }

  render () {
    this.parent.innerHTML = tmp()
    this.instance = this.parent.querySelector('.container')
  }

  get view () {
    return this.instance
  }

}

export {Container}
