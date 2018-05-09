import './app.css';
import {Header} from '../header/header';
import {Model} from '../model/model';
import {Form} from '../form/form';
import {Menu} from '../menu/menu';
// import styles from 'app.css';

const header = new Header({
  parent: document.querySelector('.container'),
  content: 'BlockChain Bird'
})

const model = new Model('https://menuapp-82b72.firebaseio.com/menu_data.json')

const menu = new Menu({
  parent: document.querySelector('.container')
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
  parent: document.querySelector('.container')
})

form.on('add', event => {
  menu.addItem(event.detail);
  model.save(menu.getData());
  form.showHint(event.detail);
})

