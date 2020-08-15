
/////////////////////////////////////////////////////////
// Admin

function createListMovie() {
  let movieList = '';
  let datas;
  if (!localStorage.getItem('datas')) {
    datas = [];
  } else {
    datas = JSON.parse(localStorage.getItem('datas'));
  }

  for (let i = 0; i < datas.length; i++) {
    movieList +=
      `<div class="movie-list">
    <div class="movie-thumb c-thumb">
      <a href="#0" class="w-100 bg_img h-100" datas-background="./${datas[i].thumb}">
        <img class="d-sm-none" src="${datas[i].thumb}" alt="movie">
      </a>
    </div>
    <div class="movie-content bg-one">
      <h5 class="title">
        <a href="#0">${datas[i].title}</a>
      </h5>
      <p class="duration">2hrs 50 min</p>
      <div class="movie-tags">`;
    for (let j = 0; j < datas[i].category.length; j++) {
      movieList += `<a href="#0">${datas[i].category[j]}</a>`
    }
    movieList +=
      `</div>
      <div class="release">
        <span>Release Date : </span> <a href="#0">${datas[i].release}</a>
      </div>
      <div class="movie-schedule">`;
    for (let k = 0; k < datas[i].schedule.length; k++) {
      movieList +=
        `<div class="item">
          ${datas[i].schedule[k]}
        </div>`;
    }
    movieList +=
      `</div>
      <div class="book-area">
        <div class="book-ticket">
          <div class="react-item">
            <a href="#0" class="popup-video">
              <div class="thumb">
                <img src="././images/icons/play-button.png" alt="icons">
              </div>
              <span>watch trailer</span>`

    if (window.location.pathname == '/admin.html') {
      movieList += `<button class='delete-movie custom-button'>Delete</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>`
    } else {
      movieList += `</a >
                  </div >
                </div >
              </div >
            </div >
          </div > `
    }
  }
  return movieList;
}

const movieArea = document.querySelector('#movie-area');

function appendListMovie() {
  let movieList = createListMovie();
  movieArea.innerHTML = movieList;
}
appendListMovie();


// Upload movie
const form = document.querySelector('.payment-card-form');
const upload = document.querySelector('#upload');

upload.onclick = function (e) {
  let datas;
  if (localStorage.getItem('datas') === null) {
    datas = [];
  } else {
    datas = JSON.parse(localStorage.getItem('datas'));
  }

  e.preventDefault();
  const titleElement = document.querySelector('#title')
  const thumbElement = document.querySelector('#thumb');
  const durationElement = document.querySelector('#duration');
  const categoryElement = document.querySelector('#category');
  const releaseElement = document.querySelector('#release');
  const scheduleElement = document.querySelector('#schedule');

  title = titleElement.value;
  thumb = thumbElement.value;
  duration = durationElement.value;
  category = categoryElement.value;
  release = releaseElement.value;
  schedule = scheduleElement.value;

  data = { title: title, thumb: thumb, duration: duration, category: [category], release: release, schedule: [schedule] };
  datas.push(data);
  localStorage.setItem('datas', JSON.stringify(datas));
  titleElement.value = '';
  releaseElement.value = '';
  thumbElement.value = '';
  durationElement.value = '';
  categoryElement.value = '';
  scheduleElement.value = '';
  window.location.href = 'http://127.0.0.1:5501/admin.html';
}


// Delete movie
const allMovie = document.querySelectorAll('.movie-list');
allMovie.forEach((movie, idx) => {
  movie.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-movie')) {
      let idxMovie = idx;
      let datas;
      if (localStorage.getItem('datas') === null) {
        datas = [];
      } else {
        datas = JSON.parse(localStorage.getItem('datas'));
      }
      datas.splice(idxMovie, 1);
      localStorage.setItem('datas', JSON.stringify(datas));
      window.location.href = 'http://127.0.0.1:5501/admin.html';
    }
  })
})
