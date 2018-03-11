(function () {
  let Menu = window.menu
  let Form = window.form
  
  const menu = new Menu({
    parent: document.querySelector('.menu'),
    data: {
      items: [
        {
          name: 'yandex',
          link: 'http://yandex.ru'
        },
        {
          name: 'mail',
          link: 'http://mail.ru'
        },
        {
          name: 'google',
          link: 'http://google.ru'
        }
      ]
    }
  })

  const form = new Form({
    parent: document.querySelector('.form')
  })

  form.on('add', event => {
    menu.addItem(event.detail);
    form.showHint(event.detail);
  })

})();
