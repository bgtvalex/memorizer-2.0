// Открытие / закрытие модального окна
export function showModal() {
  document.querySelector('.modal').classList.add('show')
}
export function closeModal() {
  document.querySelector('.modal').classList.remove('show')
}

/*  
  Наполнение модального окна 
*/
// card
export function modalCard(content) {
  content.innerHTML = `
    <img src="img/edit-blue.png" class="modal__icon modal__edit" />
    <img src="img/del-red.png" class="modal__icon modal__del" />
    <img src="img/info-blue.png" class="modal__icon modal__info" />
  `
}