(function () {
  let Menu = window.menu;
  let Form = window.form;
  let Model = window.model;
  
  const model = new Model('/data/menu.json')

  const menu = new Menu({
    parent: document.querySelector('.menu')
  })

  model.on('update', () => {
    menu.setData(model.getData())
    menu.render();
  })
  
  model.fetch();

  const form = new Form({
    parent: document.querySelector('.form')
  })

  form.on('add', event => {
    menu.addItem(event.detail);
    model.save(menu.getData())
    form.showHint(event.detail);
  })

})();
