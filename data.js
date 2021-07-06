let datas = [
  {
    title: '50 Sắc Thái',
    thumb: '50sacthai',
    duration: '2hrs 5 min',
    category: ['Tình Cảm', '18+', 'Cuộc Sống'],
    release: 'November 8 2021',
    schedule: ['09:40', '13:45', '15:45', '19:50'],
    link:"https://www.youtube.com/watch?v=K6_Ftl7kD1g"
  },
  {
    title: 'Bố Già',
    thumb: 'bogia',
    duration: '2hrs 50 min',
    category: ['Tình Cảm', 'Gia Đình','Cuộc Sống'],
    release: 'November 8 , 2021',
    schedule: ['09:40', '13:45', '15:45', '19:50'],
    link:"https://www.youtube.com/watch?v=jluSu8Rw6YE"
  },
  {
    title: 'Cua Lại Vợ Bầu',
    thumb: 'cualaivobau',
    duration: '2hrs 50 min',
    category: ['Tình Cảm', 'Gia Đình', 'Cuộc Sống'],
    release: 'November 8 , 2021',
    schedule: ['09:40', '13:45', '15:45', '19:50'],
    link:"https://www.youtube.com/watch?v=7V7SBjaQQ4g"
  },
  {
    title: 'Avenger Endgame',
    thumb: 'avenger',
    duration: '2hrs 50 min',
    category: ['Hành Động', 'Kịch Tính', 'Viễn Tưởng'],
    release: 'November 8 , 2021',
    schedule: ['09:40', '13:45', '15:45', '19:50'],
    link:"https://www.youtube.com/watch?v=TcMBFSGVi1c"
  },
  {
    title: 'Captain America',
    thumb: 'captain',
    duration: '2hrs 50 min',
    category: ['Hành Động', 'Kịch Tính', 'Chiến Tranh'],
    release: 'November 8 , 2021',
    schedule: ['09:40', '13:45', '15:45', '19:50'],
    link:"https://www.youtube.com/watch?v=JerVrbLldXw"
  },
  {
    title: 'Em Chưa 18',
    thumb: 'emchua18',
    duration: '2hrs 50 min',
    category: ['Tình Cảm', 'Gia Đình', '16+'],
    release: 'November 8 , 2021',
    schedule: ['09:40', '13:45', '15:45', '19:50'],
    link:"https://www.youtube.com/watch?v=_affkHceSj4"
  },
  {
    title: 'Lật Mặt',
    thumb: 'latmat',
    duration: '2hrs 50 min',
    category: ['Hành Động', 'Tình Cảm', 'Gia Đình'],
    release: 'November 8 , 2021',
    schedule: ['09:40', '13:45', '15:45', '19:50'],
    link:"https://www.youtube.com/watch?v=kBY2k3G6LsM"
  },
  {
    title: 'Ant Man',
    thumb: 'antman',
    duration: '2hrs 50 min',
    category: ['Hành Động', 'Khoa Học', 'Gia Đình'],
    release: 'November 8 , 2021',
    schedule: ['09:40', '13:45', '15:45', '19:50'],
    link:"https://www.youtube.com/watch?v=pWdKf3MneyI"
  },
  {
    title: 'Gái Già Lắm Chiêu',
    thumb: 'gaigialamchieu',
    duration: '2hrs 50 min',
    category: ['Tình Cảm', 'Gia Đình', 'Cuộc Sống'],
    release: 'November 8 , 2021',
    schedule: ['09:40', '13:45', '15:45', '19:50'],
    link:"https://www.youtube.com/watch?v=fNE3wgaHr18"
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

