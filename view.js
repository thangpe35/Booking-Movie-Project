const view = {}
view.showScreen = function (name) {
    switch (name) {
        case `login`:
            document.getElementById('app').innerHTML = components.login
            const loginForm = document.getElementById('login-form')
            loginForm.addEventListener("submit", (event) => {

                event.preventDefault()
                const dataLogin = {
                    email: loginForm.emailLogin.value,
                    password: loginForm.passwordLogin.value
                }
                // const reg = /\S/g;
                // if (dataLogin.email == '' || !reg.test(dataLogin.email)) {
                //     loginForm.email.value = '';
                // } 
                loginForm.emailLogin.value = ""
                loginForm.passwordLogin.value = ""
                controller.login(dataLogin)
            })
            const Account = document.getElementById('redirect-to-regiser')
            Account.addEventListener('click', (e) => {
                view.showScreen('register')
            })
            break;

        case `register`:
            document.getElementById('app').innerHTML = components.register

            const registerForm = document.getElementById('register-form');
            registerForm.addEventListener('submit', (event) => {
                event.preventDefault()
                const data = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value
                }
                registerForm.firstName.value = ""
                registerForm.lastName.value = ""
                registerForm.email.value = ""
                registerForm.password.value = ""
                registerForm.confirmPassword.value = ""
                controller.register(data)
            })
            const goToLogin = document.getElementById('redirect-to-login')
            goToLogin.addEventListener('click', (e) => {
                e.preventDefault();
                view.showScreen('login')
            })
            break;
        // case `movieListScreen`:
        //     document.getElementById('app').innerHTML = components.movieListScreen


}
}