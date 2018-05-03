import {Model} from '../model/model';
import {Form} from '../form/form';
import {Menu} from '../menu/menu';
// import '.app.css';

const model = new Model('https://menuapp-82b72.firebaseio.com/menu_data.json')

const menu = new Menu({
  parent: document.querySelector('.menu')
})

model.on('update', () => {
  menu.setData(model.getData())
  menu.render();
})

model.fetch();

menu.on('remove', event => {
  model.save(event.detail);
})

const form = new Form({
  parent: document.querySelector('.form')
})

form.on('add', event => {
  menu.addItem(event.detail);
  model.save(menu.getData());
  form.showHint(event.detail);
})

