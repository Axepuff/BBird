import menu_tmp from './menu_tmp.pug'

  const tmp = menu_tmp

  /**
   * @class Menu
   */
  class Menu {

    constructor({
      parent,
      data,
      maxWidth
    }) {
      this.parent = parent
      this.width = maxWidth
      if (maxWidth) this._initWidth()

      this.render()
      this._initEvents()
    }

    render() {
      if (this.data && this.data.items) {
        this.parent.innerHTML =  this.data.items.length === 0 ? '' : tmp(this.data)
        this.parent.style.maxWidth = this.widthString
      }
    }

    setData(data) {
      this.data = data
    }

    getData() {
      return this.data
    }

    removeItem(index) {
      this.data.items = this.data.items.filter((item, i) => {
        return index !== i
      })
      this.trigger('remove', this.data)
      this.render()
    }

    addItem(item) {
      if (item.name.length > 0 && item.link.length > 0) {
        this.data.items.push(item)
        this.render()
      }
    }

    on(name, cb) {
      this.parent.addEventListener(name, cb)
    }

    trigger(name, data) {
      const widgetEvent = new CustomEvent(name, {
        bubbles: true,
        detail: data
      })
      this.parent.dispatchEvent(widgetEvent)
    }

    _initWidth() {
      this.widthString = this.width.toString().match(/[a-z]/) ? this.width : this.width + 'px'
    }

    _initEvents() {
      this.parent.addEventListener('click', this._onClick.bind(this))
    }

    _onClick(event) {
      event.preventDefault()

      const item = event.target

      if (item.dataset.action) {
        try {
          this['_on' + item.dataset.action](item)
        } catch (e) {
          throw new Error(`Метод $3{item.dataset.action} не определён`)
        }
      }

    }

    _onremove(item) {
      let index = parseInt(item.parentNode.dataset.id, 10)
      this.removeItem(index)
    }

    _onpick(item) {
      item.parentNode.classList.toggle('menu__item_select')
      item.classList.toggle('menu__pick_select')
    }

    _onopen(item) {
      window.open(item)
    }

  }

export {Menu}
