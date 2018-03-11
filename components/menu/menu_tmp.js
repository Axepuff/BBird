(function () {
  window.menu_tmp = (data) => {
    let itemTmp = (item, i) => `<li class='js-menu__item' data-id=${i}>
        <a class='js-menu__link' href='${item.link}' data-action='pick'>${item.name}</a>
        <button type='button' class='js-menu__close close' aria-label='Close'><span aria-hidden='true' data-action='remove'>&times;</span></button>
      </li>`

    return `<ul class='js-menu'>${data.items.map((item, i)=> itemTmp(item, i)).join('')}</ul>`
  }
})();
