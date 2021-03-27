function copy(n) {
  cards = document.querySelectorAll('.carteira')

  console.log(n)
  console.log(cards)

  card =  cards[n-1]
  console.log(card)
  date = card.querySelector('#data').value
  social = card.querySelector('#social').value.toUpperCase().replace('T','D')

  for (let i = n; n <= 9; i++) {
    cards[i].querySelector('#data').value = date
    cards[i].querySelector('#social').value = social
  }
}

async function generateData() {
  cardsarr = []
  cards = document.querySelectorAll('.carteira')
  
  for (card of cards) {
    obj = {
      name: card.querySelector('#nome').value,
      date: card.querySelector('#data').value,
      social: card.querySelector('#social').value
    }

    cardsarr.push(obj)
  }

  cardsobj = {cardsarr}
  data = JSON.stringify(cardsobj)
  dataencoded = btoa(data);

  document.location = 'https://jonathasgouv.github.io/moldecartoes/print.html?data=' + dataencoded
}
