// Add event scroll to window
let header = document.querySelector('.header-section');

window.addEventListener('scroll', function (e) {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add('header-active');
  } else {
    header.classList.remove('header-active');
  }
})

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

// //////////////////////////////////////////////////
// // Pop up 
// const watchTrailer = document.querySelector('#movie-area');
const windowWarning = document.querySelector('.window-warning');

function controlVideo(vidcontrol) {
  var div = document.querySelector(".lay");
  var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
  iframe.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
}

// watchTrailer.addEventListener('click', function (e) {
//   if (e.target.parentElement.className == 'thumb') {
//     windowWarning.style.display = 'block';
//   }
//   console.log(e.target.parentElement);
// })

windowWarning.addEventListener('click', function (e) {
  console.log(e.target.className);
  if (e.target.className == 'lay') {
    windowWarning.style.display = 'none';
    controlVideo();
  }
})
// /////////////////////////////////////////////////

// ///////////////////////////////////////////////
// // Redirect to  movie-seat.html
// const makePayment = document.querySelector('#make-payment');

// makePayment.addEventListener('click', function () {
//   window.location.href = 'http://127.0.0.1:5501/test.html';

// })
// ///////////////////////////////////////////////

////////////////////////////////////////////////
// Movie schedule
const movieList = document.querySelectorAll('.movie-list');

for (let i = 0; i < movieList.length; i++) {
  movieList[i].addEventListener('click', function (e) {
    let time;
    let title;
    console.log(e.target);
    if (e.target.className == 'item') {
      time = (e.target.innerText);
      title = (e.target.parentElement.parentElement.children[0].children[0].innerText);
      localStorage.setItem('time', JSON.stringify(time));
      localStorage.setItem('title', JSON.stringify(title));
      window.location.href = 'http://127.0.0.1:5501/test.html';

      console.log(time, title);
    } else if (e.target.parentElement.className == 'thumb') {
      windowWarning.style.display = 'block';
    }
  })
}
///////////////////////////////////////////////
