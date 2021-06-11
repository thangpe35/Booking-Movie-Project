const loginForm = document.getElementById('login-form')
loginForm.addEventListener("submit" , (event) =>{
    
    event.preventDefault()
    const dataLogin = {
        email: loginForm.emailLogin.value,
        password: loginForm.passwordLogin.value
    }
    if (dataLogin.email === '') {
        document.getElementById('email-login-error').innerText = 'Please input email'
    } else {
        document.getElementById('email-login-error').innerText = ''
    }
    if (dataLogin.password === '') {
        document.getElementById('password-login-error').innerText = 'Please input password'
    } else {
        document.getElementById('password-login-error').innerText = ''
    }
    firebase.auth().onAuthStateChanged(function (user) {
      // const currentUser = undefined
      if (user) {
        if (user.emailVerified) {
          currentUser = {
            email: user.email,
            password: user.password
          }
          window.onload("http://http://127.0.0.1:5501/movie-list.html")
        } else {
          window.location.href("http://http://127.0.0.1:5501/login.html")
          alert('Please verify your mail')
        }
      } else {
          window.location.href("http://http://127.0.0.1:5501/login.html")
      }
    });
})
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



const loginFirebase = async (dataLogin) => {
    try {
        const response = await firebase.auth().signInWithEmailAndPassword(dataLogin.email, dataLogin.password)
        console.log(response);
    } catch (err) {
        console.log(err)
        alert(err.message)
    }
}




  