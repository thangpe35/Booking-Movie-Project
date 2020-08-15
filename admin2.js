const movie = document.querySelector('#movie-list');
const containerMovie = document.querySelector('#movie-area');
const allMovie = document.querySelectorAll('.movie-list');

allMovie.forEach((movie, idx) => {
  movie.addEventListener('click', function (e) {
    let idxMovie = idx;
    let datas = JSON.parse(localStorage.getItem('datas'));
    datas.splice(idxMovie, 1);
    localStorage.setItem('datas', JSON.stringify(datas));
    window.location.href = 'http://127.0.0.1:5501/admin2.html';
  })
})
