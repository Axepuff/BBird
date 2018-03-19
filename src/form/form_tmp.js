
const form_tmp = (data) => {
  return `<form class='js-form'>
  <div class="form-group">
    <input type="text" class="form-control" placeholder="Название" name="name">
  </div>
  <div class="form-group">
    <input type="url" class="form-control" placeholder="url" name="link">
  </div>
  <button type="submit" class="js-form__btn btn btn-default">Добавить
    <div class='js-form__hint bg-danger'>Заполните все поля формы</div></button>
</form>`
}

export {form_tmp};