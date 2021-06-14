const model = {}

model.register = (data) => {

    firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then((res) => {
        firebase.auth().currentUser.updateProfile({
            displayName: data.fisrtName + ' ' + data.lastName
        })
        firebase.auth().currentUser.sendEmailVerification()
        alert('The email has been registered, please check you email')
        window.location.href("http://127.0.0.1:5501/movie-list.html")
    }).catch((err) => {
        console.log(err)
        alert(err.message)
    })
}
model.login = async (dataLogin) => {
    try {
        const response = await firebase.auth().signInWithEmailAndPassword(dataLogin.email, dataLogin.password)
        console.log(response)
        if(response.user.emailVerified === false){
            alert('Please verify your email')
        } else {
            model.currentUser = {
                displayName: response.user.displayName,
                email: response.user.email
            }
            window.location= "http://127.0.0.1:5501/movie-list.html"
        }
    } catch (err) {
        console.log(err)
        alert(err.message)
    }
}