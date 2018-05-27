import container_tmp from './container_tmp.pug'
import './container.css';

const tmp = container_tmp;

/**
 * @class container
 */
class Container {

  constructor({
    parent,
    content
  }) {
    this.parent = parent;
    this.content = content;

    this.render()
  }

  render () {
    this.parent.innerHTML = tmp();
  }

}

export {Container};
