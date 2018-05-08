import form_tmp from './form_tmp.pug'

const tmp = form_tmp;

/**
 * @class Form
 */
class Form {
  constructor({
    parent,
    onSubmit,
    data
  }) {
    this.parent = parent;
    this.data = data;

    this.render();
    this._initEvents();
  }

  render () {
    this.parent.innerHTML = tmp()
  }

  getField(name) {
    return document.querySelector(`[name="${name}"]`);
  }

  async showHint(item) {
    if (item.name.length === 0 || item.link.length === 0) {
      this.parent.querySelector('.js-form__hint').classList.add('active');

      let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          this.hideHint()
          resolve()
        }, 1500)
      });

      await promise;
    }
  }

  hideHint() {
    this.parent.querySelector('.js-form__hint').classList.remove('active')
  }

  on(name, cb) {
    this.parent.addEventListener(name, cb);
  }

  trigger(name, data) {
    const widgetEvent = new CustomEvent(name, {
      bubbles: true,
      detail: data
    })
    this.parent.dispatchEvent(widgetEvent);
  }

  _onSubmit(event) {
    event.preventDefault();

    this.trigger('add', {
      name: this.getField('name').value,
      link: this.getField('link').value
    })

    event.target.reset();
  }

  _initEvents() {
    this.parent.addEventListener('submit', this._onSubmit.bind(this));
  }
}

export {Form};