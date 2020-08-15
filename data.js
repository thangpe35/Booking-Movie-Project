let datas = [
  {
    title: 'alone',
    thumb: './images/movie/movie01.jpg',
    duration: '2hrs 50 min',
    category: ['action', 'adventure', 'fantasy'],
    release: 'November 8 2020',
    schedule: ['09:40', '13:45', '15:45', '19:50']
  },
  {
    title: 'mars',
    thumb: './images/movie/movie02.jpg',
    duration: '2hrs 50 min',
    category: ['action', 'adventure', 'fantasy'],
    release: 'November 8 , 2020',
    schedule: ['09:40', '13:45', '15:45', '19:50']
  },
  {
    title: 'venus',
    thumb: './images/movie/movie03.jpg',
    duration: '2hrs 50 min',
    category: ['action', 'adventure', 'fantasy'],
    release: 'November 8 , 2020',
    schedule: ['09:40', '13:45', '15:45', '19:50']
  },
  {
    title: 'on watch',
    thumb: './images/movie/movie04.jpg',
    duration: '2hrs 50 min',
    category: ['action', 'adventure', 'fantasy'],
    release: 'November 8 , 2020',
    schedule: ['09:40', '13:45', '15:45', '19:50']
  },
  {
    title: 'fury',
    thumb: './images/movie/movie05.jpg',
    duration: '2hrs 50 min',
    category: ['action', 'adventure', 'fantasy'],
    release: 'November 8 , 2020',
    schedule: ['09:40', '13:45', '15:45', '19:50']
  },
  {
    title: 'trooper',
    thumb: './images/movie/movie06.jpg',
    duration: '2hrs 50 min',
    category: ['action', 'adventure', 'fantasy'],
    release: 'November 8 , 2020',
    schedule: ['09:40', '13:45', '15:45', '19:50']
  },
  {
    title: 'horror night',
    thumb: './images/movie/movie07.jpg',
    duration: '2hrs 50 min',
    category: ['action', 'adventure', 'fantasy'],
    release: 'November 8 , 2020',
    schedule: ['09:40', '13:45', '15:45', '19:50']
  },
  {
    title: 'the lost name',
    thumb: './images/movie/movie08.jpg',
    duration: '2hrs 50 min',
    category: ['action', 'adventure', 'fantasy'],
    release: 'November 8 , 2020',
    schedule: ['09:40', '13:45', '15:45', '19:50']
  },
  {
    title: 'calm stedfast',
    thumb: './images/movie/movie09.jpg',
    duration: '2hrs 50 min',
    category: ['action', 'adventure', 'fantasy'],
    release: 'November 8 , 2020',
    schedule: ['09:40', '13:45', '15:45', '19:50']
  },
];

function saveDataToLS() {
  localStorage.setItem('datas', JSON.stringify(datas));
}

saveDataToLS();

// function createListMovie() {
//   let movieList = '';
//   datas = JSON.parse(localStorage.getItem('datas'));
//   console.log(datas);
//   for (let i = 0; i < datas.length; i++) {
//     movieList +=
//       `<div class="movie-list">
//     <div class="movie-thumb c-thumb">
//       <a href="#0" class="w-100 bg_img h-100" datas-background="./${datas[i].thumb}">
//         <img class="d-sm-none" src="${datas[i].thumb}" alt="movie">
//       </a>
//     </div>
//     <div class="movie-content bg-one">
//       <h5 class="title">
//         <a href="#0">${datas[i].title}</a>
//       </h5>
//       <p class="duration">2hrs 50 min</p>
//       <div class="movie-tags">`;
//     for (let j = 0; j < datas[i].category.length; j++) {
//       movieList += `<a href="#0">${datas[i].category[j]}</a>`
//     }
//     movieList +=
//       `</div>
//       <div class="release">
//         <span>Release Date : </span> <a href="#0">${datas[i].release}</a>
//       </div>
//       <div class="movie-schedule">`;
//     for (let k = 0; k < datas[i].schedule.length; k++) {
//       movieList +=
//         `<div class="item">
//           ${datas[i].schedule[k]}
//         </div>`;
//     }
//     movieList +=
//       `</div>
//       <div class="book-area">
//         <div class="book-ticket">
//           <div class="react-item">
//             <a href="#0" class="popup-video">
//               <div class="thumb">
//                 <img src="././images/icons/play-button.png" alt="icons">
//               </div>
//               <span>watch trailer</span>
//               <button class='delete-movie'>Delete</button>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>              `
//   }
//   return movieList;
// }

// const movieArea = document.querySelector('#movie-area');

// function appendListMovie() {
//   let movieList = createListMovie();
//   movieArea.innerHTML = movieList;
// }
// appendListMovie();

