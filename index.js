const init = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyC7usJAX-nMYk7dhCrqE2YsHWmEw2QvLyM",
    authDomain: "booking-movie-81992.firebaseapp.com",
    projectId: "booking-movie-81992",
    storageBucket: "booking-movie-81992.appspot.com",
    messagingSenderId: "1022245408910",
    appId: "1:1022245408910:web:72ffe5b0631f1fed7ab9df"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // console.log(firebase.app().name)
  // firestoreFunction()
  view.showScreen('login')
  view.showScreen('register')
}
window.onload = init


// firestoreFunction = async () => {
//   var documentId = 'u3pQeqcSx5HEBVWnEvpK'
//   var response =  firebase.firestore().collection('test').doc(documentId).get()
//   console.log(response)
// }




