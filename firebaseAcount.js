firebaseAcount.register = (datas) => {

    firebase.auth().createUserWithEmailAndPassword(datas.email, datas.password).then((res) => {
        firebase.auth().currentUser.updateProfile({
            displayName: datas.fisrtName + ' ' + datas.lastName
        })
        firebase.auth().currentUser.sendEmailVerification()
        alert('The email has been registered, please check you email')
        view.setActiveScreen('loginScreen')
    }).catch((err) => {
        console.log(err)
        alert(err.message)
    })
}