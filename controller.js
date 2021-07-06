const controller = {}
controller.register = (data) => {
    
    if (data.firstName === '') {
        document.getElementById('first-name-error').innerText = 'Please input first name'
    } else {
        document.getElementById('first-name-error').innerText = ''
    }
    if (data.lastName === '') {
        document.getElementById('last-name-error').innerText = 'Please input first name'
    } else {
        document.getElementById('last-name-error').innerText = ''
    }
    if (data.email === '') {
        document.getElementById('email-error').innerText = 'Please input email'
    } else {
        document.getElementById('email-error').innerText = ''
    }
    if (data.password === '') {
        document.getElementById('password-error').innerText = 'Please input password'
    } else {
        document.getElementById('password-error').innerText = ''
    }
    if (data.confirmPassword === '') {
        document.getElementById('confirmPassword-error').innerText = 'Please input confirmpassword'
    } else if (data.password !== data.confirmPassword) {
        document.getElementById('confirmPassword-error').innerText = "Password didn't match"
    } else {
        document.getElementById('confirmPassword-error').innerText = ''
    }
    if (data.firstName !== '' && data.lastName !== '' && data.email !== '' && data.password !== '' && data.confirmPassword !== '' && data.password === data.confirmPassword) {
        model.register(data)
    }
    if( data.firstName !== '' &&
        data.lastName !== '' &&
        data.email !== '' &&
        data.password !== '' &&
        data.confirmPassword !== '' &&
        data.password == data.confirmPassword){
            model.register(data)
}
    
}
controller.login = (dataLogin) => {
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
    if (dataLogin.email !== '' &&
        dataLogin.password !== '') {
        model.login(dataLogin)
    }
}

// // Show success
// function showSuccess(input) {
//     const error = input.nextElementSibling;
//     error.innerText = '';
//     input.className = 'success';
//   }
// // Check mail
// function checkEmail(input) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
//     if (re.test(String(input.value).toLowerCase())) {
//       showSuccess(input);
//       return true;
//     } else {
//       showError(input, 'Email is not valid');
//       return false;
//     }
// }