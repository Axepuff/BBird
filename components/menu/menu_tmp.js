(function () {
  window.menu_tmp = (data) => {
    let itemTmp = (item, i) => `<li class='menu__item' data-id=${i}>
        <a class='menu__link' href='${item.link}' data-action='pick'>${item.name}</a><i class='menu__remove' data-action='remove'>x</i>
      </li>`

    return `<ul class='menu'>${data.items.map((item, i)=> itemTmp(item, i)).join('')}</ul>`
  }
})();
