var firebaseConfig = {
    apiKey: "AIzaSyA-BWBLXMOyYM5HYWjypVxHm2cMlWeq-ww",
    authDomain: "login-4b589.firebaseapp.com",
    databaseURL: "https://login-4b589.firebaseio.com",
    projectId: "login-4b589",
    storageBucket: "login-4b589.appspot.com",
    messagingSenderId: "783513069860",
    appId: "1:783513069860:web:4747a3b9a13e2af667abb1",
    measurementId: "G-XJQ7VSQLG9"
};

firebase.initializeApp(firebaseConfig);



function writeData() {
    alert("fhdsh")

    firebase.database().ref("user").set({
        name: document.getElementById("namefield").value,
        age: document.getElementById("ageField").value

    });
}