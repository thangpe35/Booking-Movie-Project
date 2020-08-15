///////////////////////////////////////////////////
// // Add event scroll to window
let header = document.querySelector('.header-section');

window.addEventListener('scroll', function (e) {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add('header-active');
  } else {
    header.classList.remove('header-active');
  }
})

////////////////////////////////////////////////////
// Create a single seat
function createSingleSeat() {
  let single_seat = document.createElement('li');
  let img = document.createElement('img');

  single_seat.className = 'single-seat';
  img.setAttribute('src', './images/movie/seat01-free.png');
  single_seat.appendChild(img);
  return single_seat;
}

// Function create number Col
function createNumCol(n, position) {
  let front_seat = document.createElement('li');
  let single_seat;
  let ul = document.createElement('ul');
  front_seat.className = 'front-seat';

  for (let j = 0; j < n; j++) {
    let span = document.createElement('span');
    span.className = 'sit-num';
    if (n == 6 && position == 'middle') {
      span.innerText = `${j + 5}`;
    } else if (n == 4 && position == 'first') {
      span.innerText = `${j + 1}`;
    } else if (n == 4 && position == 'last') {
      span.innerText = `${j + 11}`;
    } else if (n == 3) {
      span.innerText = `${j + j + 5} ${j + j + 6}`;
    } else if (n == 2 && position == 'first') {
      span.innerText = `${j + j + 1} ${j + j + 2}`;
    } else {
      span.innerText = `${j + j + 11} ${j + j + 12}`;
    }

    single_seat = createSingleSeat();
    single_seat.appendChild(span);
    ul.appendChild(single_seat);
    front_seat.appendChild(ul);
  }
  return front_seat;
}

// Create a row seat
function createRowSeat(a, b) {
  let seat__area = document.createElement('ul');
  seat__area.className = 'seat--area';

  // 
  for (let i = 0; i < 3; i++) {
    let front_seat;

    // If middle range
    if (i === 1) {
      front_seat = createNumCol(b, 'middle');
    } else if (i === 0) {
      front_seat = createNumCol(a, 'first');
    } else {
      front_seat = createNumCol(a, 'last');
    }
    seat__area.appendChild(front_seat);
  }

  return seat__area;
}

// Create all seats
function createAllSeat() {
  let seat_area = document.querySelector('.seat-area');
  let seat_area_couple = document.querySelector('.seat-area.couple');

  let arr = ['G', 'F', 'E', 'D', 'C', 'B', 'A'];
  // Loop through two row seat
  for (let i = 0; i < arr.length; i++) {
    let seat_line = document.createElement('li');
    let span;
    let text;

    seat_line.className = 'seat-line';
    span = document.createElement('span');
    text = document.createTextNode(`${arr[i]}`);
    span.appendChild(text);
    seat_line.innerHTML = `<span>${arr[i]}</span>`;

    if (i < 2) { // Print 2 rows of front seat
      let seat__area = createRowSeat(4, 6);
      seat_line.appendChild(seat__area);
      seat_line.appendChild(span);

      seat_area.appendChild(seat_line);
    } else { // Print 5 rows of behind seat
      let seat__area = createRowSeat(2, 3);
      seat_line.appendChild(seat__area);
      seat_line.appendChild(span);

      seat_area_couple.appendChild(seat_line);
    }
  }

  // replace single seat with couple seat
  let coupleImgSeat = seat_area_couple.querySelectorAll('img');

  for (let i = 0; i < coupleImgSeat.length; i++) {
    coupleImgSeat[i].setAttribute('src', './images/movie/seat02-free.png');
  }
}

createAllSeat();

//////////////////////////////////////////////
// Select seat
const seatArea = document.querySelectorAll('.seat-area');
const numberSeatSelecting = document.querySelector('.proceed-book .book-item .title');
const totalPriceElement = document.querySelector('#total-price');
const seats = document.querySelectorAll('.single-seat');

let arrNumberSeatSelecting = [];
let ticketPrice = 10;
let totalPrice;

document.addEventListener('DOMContentLoaded', updateFromLS);

function updateFromLS() {
  // Update all selected seats from local storage
  updateAllSelectedSeatsFromLS();

  // Update total price from local storage
  updateTotalPriceFromLS();

  // Update selecting seat from local storage
  updateSelectingSeatFromLS();

  // Update booked seat from local storage
  updateBookedSeatFromLS();
}

// Update total price from LS
function updateTotalPriceFromLS() {
  let totalPrice;
  if (!localStorage.getItem('totalPrice')) {
    totalPrice = 0;
  } else {
    totalPrice = JSON.parse(localStorage.getItem('totalPrice'));
  }
  totalPriceElement.innerText = '$' + totalPrice;

}

// Update all selected seats from LS
function updateAllSelectedSeatsFromLS() {
  let allSelectedSeats;
  if (!localStorage.getItem('selectedSeats')) {
    allSelectedSeats = [];
  } else {
    allSelectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  }
  numberSeatSelecting.innerText = allSelectedSeats.join(', ');

  return allSelectedSeats;
}

// Populate UI
function updateSelectingSeatFromLS() {
  let selectingSeats = JSON.parse(localStorage.getItem('selectingSeats'));
  if (selectingSeats !== null && selectingSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectingSeats.indexOf(index) != -1) {
        seat.classList.add('selecting');
        if (index >= 28) {
          seat.children[0].setAttribute('src', './images/movie/seat02-selecting.png');
        } else {
          seat.children[0].setAttribute('src', './images/movie/seat01-selecting.png');
        }
      }
    })
  }
}

// Update booked seat from local storage
function updateBookedSeatFromLS() {
  let bookedSeats;
  if (!localStorage.getItem('bookedSeats')) {
    bookedSeats = [];
  } else {
    bookedSeats = JSON.parse(localStorage.getItem('bookedSeats'));
  }

  if (bookedSeats !== null && bookedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (bookedSeats.indexOf(index) != -1) {
        seat.classList.add('booked');
        if (index >= 28) {
          seat.children[0].setAttribute('src', './images/movie/seat02-booked.png');
          seat.children[1].textContent = '';
        } else {
          seat.children[0].setAttribute('src', './images/movie/seat01-booked.png');
          seat.children[1].textContent = '';
        }
      }
    })
  }


}

// Update total price
function updateTotalPrice() {
  let totalSeat = 0, totalSeatCouple = 0;

  arrNumberSeatSelecting.forEach(seat => {
    if (seat.length <= 3) {
      totalSeat++;
    }
    else {
      totalSeatCouple++;
    }
  })
  totalPrice = totalSeat * ticketPrice + totalSeatCouple * ticketPrice * 3;
  totalPriceElement.innerText = '$' + totalPrice;
}

// Add event listener for seat and seat couple
for (let i = 0; i < 2; i++) {
  seatArea[i].addEventListener('click', function (e) {
    let text = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.firstChild.innerText;
    let num = e.target.innerText;

    // If target is free seat
    if (e.target.parentElement.classList.contains('single-seat') && !e.target.parentElement.classList.contains('selecting') && !e.target.parentElement.classList.contains('booked')) {

      e.target.parentElement.classList.toggle('selecting');
      e.target.parentElement.children[0].setAttribute('src', `./images/movie/seat0${i + 1}-selecting.png`);

      // If local storage is null
      if (!localStorage.getItem('selectedSeats')) {
        arrNumberSeatSelecting = [];
      } else {
        arrNumberSeatSelecting = JSON.parse(localStorage.getItem('selectedSeats'));
      }
      if (num.length <= 2) {
        arrNumberSeatSelecting.push(`${text}${num.slice(0, 2)}`);
      } else if (num.length <= 4) {
        arrNumberSeatSelecting.push(`${text}${num.slice(0, 1)}, ${text}${num.slice(2)}`);
      } else {
        arrNumberSeatSelecting.push(`${text}${num.slice(0, 2)}, ${text}${num.slice(3)}`);
      }
      numberSeatSelecting.innerText = arrNumberSeatSelecting.join(', ');
      updateTotalPrice();

      // Store all selecting seats in local storage
      localStorage.setItem('selectedSeats', JSON.stringify(arrNumberSeatSelecting));

      // Store total price in local storage
      localStorage.setItem('totalPrice', JSON.stringify(totalPrice));

      // Store all index of selecting seats in LS
      const selectingSeats = document.querySelectorAll('.selecting');
      const seatsIndex = [...selectingSeats].map(seat => [...seats].indexOf(seat));
      localStorage.setItem('selectingSeats', JSON.stringify(seatsIndex));

    }

    // if seat is selecting seat
    else if (e.target.parentElement.classList.contains('single-seat') && e.target.parentElement.classList.contains('selecting') && !e.target.parentElement.classList.contains('booked')) {
      e.target.parentElement.classList.toggle('selecting');
      e.target.parentElement.children[0].setAttribute('src', `./images/movie/seat0${i + 1}-free.png`);

      // If local storage is null
      if (!localStorage.getItem('selectedSeats')) {
        arrNumberSeatSelecting = [];
      } else {
        arrNumberSeatSelecting = JSON.parse(localStorage.getItem('selectedSeats'));
      }

      if (num.length <= 2) {
        arrNumberSeatSelecting = arrNumberSeatSelecting.filter(ele => {
          return ele !== `${text}${num.slice(0, 2)}`;
        })
      } else if (num.length <= 4) {
        arrNumberSeatSelecting = arrNumberSeatSelecting.filter(ele => {
          return ele !== `${text}${num.slice(0, 1)}, ${text}${num.slice(2)}`;
        })
      } else {
        arrNumberSeatSelecting = arrNumberSeatSelecting.filter(ele => {
          return ele !== `${text}${num.slice(0, 2)}, ${text}${num.slice(3)}`;
        })
      }

      numberSeatSelecting.innerText = arrNumberSeatSelecting.join(', ');
      updateTotalPrice();

      // Store all selecting seats in local storage
      localStorage.setItem('selectedSeats', JSON.stringify(arrNumberSeatSelecting));

      // Store total price in local storage
      localStorage.setItem('totalPrice', JSON.stringify(totalPrice));

      // Store all index of selecting seats in LS
      const selectingSeats = document.querySelectorAll('.selecting');
      const seatsIndex = [...selectingSeats].map(seat => [...seats].indexOf(seat));
      localStorage.setItem('selectingSeats', JSON.stringify(seatsIndex));

    }
  })
}

////////////////////////////////////////////////////
// Style select option 
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /*when an item is clicked, update the original select box,
      and the selected item:*/
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /*when the select box is clicked, close any other select boxes,
    and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
// Style select option
///////////////////////////////////////////////////

//////////////////////////////////////////////////
// pop up
const btnProceed = document.querySelector('.proceed-book .custom-button');
const windowWarning = document.querySelector('.window-warning');

btnProceed.addEventListener('click', function () {
  windowWarning.style.display = 'block';
})

windowWarning.addEventListener('click', function (e) {
  if (e.target.className == 'lay') {
    windowWarning.style.display = 'none';
  }
})
///////////////////////////////////////////////////

//////////////////////////////////////////////////
// Change selecting seat into booked seat, 

const makePayment = document.querySelector('#make-payment');
let bookedSeats;
let title;
let time;

makePayment.addEventListener('click', function () {
  if (confirm('Are you sure?')) {
    let selectingSeats;

    if (!localStorage.getItem('selectingSeats')) {
      selectingSeats = [];
    } else {
      selectingSeats = JSON.parse(localStorage.getItem('selectingSeats'));
    }

    if (!localStorage.getItem('bookedSeats')) {
      bookedSeats = [];
    } else {
      bookedSeats = JSON.parse(localStorage.getItem('bookedSeats'));
    }

    bookedSeats = [...bookedSeats, ...selectingSeats];
    // console.log(bookedSeats);
    seats.forEach((seat, idx) => {
      if (selectingSeats.indexOf(idx) !== -1) {
        if (idx <= 27) {
          seat.className = 'single-seat booked';
          seat.children[0].setAttribute('src', './images/movie/seat01-booked.png');
          seat.children[1].innerHTML = '';
        } else {
          seat.className = 'single-seat booked';
          seat.children[0].setAttribute('src', './images/movie/seat02-booked.png');
          seat.children[1].innerHTML = '';
        }
      }
    })
    console.log(time, title);
    localStorage.clear();
    localStorage.setItem('bookedSeats', JSON.stringify(bookedSeats));

    localStorage.setItem('time', JSON.stringify(time));
    localStorage.setItem('title', JSON.stringify(title));

    numberSeatSelecting.innerText = '';
    totalPriceElement.innerText = '';
  }
})
///////////////////////////////////////////////////

//////////////////////////////////////////////////
// Change title and time
const titleMovie = document.querySelector('#title-movie');
const timeTag = document.querySelector('#time-tag');
// const subtitle = document.querySelector('#subtitle');
// const info = document.querySelector('#info');

function changeTitleTime() {
  title = JSON.parse(localStorage.getItem('title'));
  time = JSON.parse(localStorage.getItem('time'));
  numTickets = JSON.parse(localStorage.getItem('tickets'));
  titleMovie.innerHTML = title;
  timeTag.innerText = time;
  // subtitle.innerText = title;
  // info.innerText = time;
}

changeTitleTime();
//////////////////////////////////////////////////

