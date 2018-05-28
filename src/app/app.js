import './app.css';
import {Container} from '../container/container';
import {Header} from '../header/header';
import {Model} from '../model/model';
import {Form} from '../form/form';
import {Menu} from '../menu/menu';
// import styles from 'app.css';

const container = new Container({
  parent: document.querySelector('.root')
})

const header = new Header({
  parent: container.view.querySelector('.header'),
  content: 'Blockchain Bird'
})

const model = new Model('https://menuapp-82b72.firebaseio.com/menu_data.json')

const menu = new Menu({
  parent: document.querySelector('.menu-wrapper')
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
  parent: document.querySelector('.form-wrapper')
})

form.on('add', event => {
  menu.addItem(event.detail);
  model.save(menu.getData());
  form.showHint(event.detail);
})

