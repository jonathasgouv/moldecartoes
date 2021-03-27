function formatDate (input) {
  try {
    var datePart = input.match(/\d+/g),
    year = datePart[0],
    month = datePart[1], day = datePart[2];

    return day+'/'+month+'/'+year;
  } catch {
    return false;
  }
}


function loadData() {
  data = document.location.href.split('?data=')[1]
  data = atob(data)
  data = JSON.parse(data);

  cards = data.cardsarr

  for (let i = 0; i < cards.length; i++) {
    document.querySelector(`#name${i+1}`).innerHTML = cards[i].name.toUpperCase() || '&nbsp;'
    document.querySelector(`#date${i+1}`).innerHTML = formatDate(cards[i].date.replace(/-/g, '/')) || '&nbsp;'
    document.querySelector(`#social${i+1}`).innerHTML = cards[i].social.toUpperCase() || '&nbsp;'
  }

  print();
}




loadData();