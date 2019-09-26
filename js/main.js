const login = document.getElementById("login-button");

login.onclick = function() {

    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
            console.log(result);
            console.log("Cuenta de Google vinculada exitosamente :D");

            console.log(result.operationType);

            name = result.user.displayName
            avatar = result.user.photoURL

            console.log(name);

            if(result.operationType == "signIn" ) {
                document.getElementById("login").style.display="none";
                document.getElementById("loggedin").style.display="inline";
                document.getElementById("user").innerHTML = name;
                document.getElementById("user-pic").src= avatar;
            }
        }).catch(function(error) {
            console.log(error);
            console.log("Algo salió mal :(");
        });
    }






