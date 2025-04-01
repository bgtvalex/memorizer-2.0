import { getDB } from '/js/func/storage.js'
import { addListeners } from '/js/func/add-listeners.js'

export function renderCards(status = 'active') {
  let $cards = document.querySelector('.cards')
  let bd = getDB('memorizer')
  $cards.innerHTML = ''
  if (status !== 'all') {
    bd = bd.filter((item) => item.status == status)
  }
  if (bd.length == 0) {
    $cards.innerHTML = '<h2>Список пуст.</h2>'
  }
  bd.forEach((item) => {
    let cl = ''
    if (item.status == 'wait') {
      cl = 'wait'
    }
    if (item.status == 'active') {
      cl = 'active'
    }
    if (item.status == 'done') {
      cl = 'done'
    }
    $cards.innerHTML += `
        <div class="card ${cl}">
				  <div class="card__id">${item.id}</div>
					<div class="card__title">
						<div class="card__place">${item.place} <small>(${item.trans})</small></div>
						<div class="card__status">${item.status}</div>
					</div>
          
          <div class="card__text">${item.text}</div>
          <div class="card__info">
						<div class="card__date">
							<div class="card__start">${item.start}</div>-
							<div class="card__last-remember">${item.finish}</div>
							<div class="card__last-remember">[${item.lastRemember}]</div>
						</div>
						<div class="card__counter">
							<div class="card__count">${item.count}</div>
						</div>
          </div>
        </div>`
  })
  addListeners()
}
