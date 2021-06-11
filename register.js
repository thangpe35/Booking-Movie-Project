
const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const datas = {
        firstname: registerForm.firstname.value,
        lastname: registerForm.lastname.value,
        email: registerForm.email.value,
        password: registerForm.password.value,
        confirmPassword: registerForm.confirmPassword.value
    }
    // console.log(datas);
    if (datas.firstname === '') {
        document.getElementById('first-name-error').innerText = 'Please input first name'
    } else {
        document.getElementById('first-name-error').innerText = ''
    }
    if (datas.lastname === '') {
        document.getElementById('last-name-error').innerText = 'Please input first name'
    } else {
        document.getElementById('last-name-error').innerText = ''
    }
    if (datas.email === '') {
        document.getElementById('email-error').innerText = 'Please input email'
    } else {
        document.getElementById('email-error').innerText = ''
    }
    if (datas.password === '') {
        document.getElementById('password-error').innerText = 'Please input password'
    } else {
        document.getElementById('password-error').innerText = ''
    }
    if (datas.confirmPassword === '') {
        document.getElementById('confirmPassword-error').innerText = 'Please input confirm password'
    } else if (datas.password !== datas.confirmPassword) {
        document.getElementById('confirmPassword-error').innerText = "Password didn't match"
    } else {
        document.getElementById('confirmPassword-error').innerText = ''
    }
    if (datas.firstName !== '' && datas.lastName !== '' && datas.email !== '' && datas.password !== '' && datas.confirmPassword !== '' && datas.password === datas.confirmPassword) {
        registerFirebase(datas)
    }
    
})

const registerFirebase = (datas) => {

    firebase.auth().createUserWithEmailAndPassword(datas.email, datas.password).then((res) => {
        firebase.auth().currentUser.updateProfile({
            displayName: datas.fisrtName + ' ' + datas.lastName
        })
        firebase.auth().currentUser.sendEmailVerification()
        alert('The email has been registered, please check you email')
        
    }).catch((err) => {
        console.log(err)
        alert(err.message)
    })
}
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


