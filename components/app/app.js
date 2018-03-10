(function () {
  let Menu = window.menu
  
  new Menu({
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

})();
