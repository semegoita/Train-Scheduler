
{/*  */ }
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCWqV-I5eeY2PaQmPZtT8QT-6-EtP3lj2o",
    authDomain: "train-scheduler-63807.firebaseapp.com",
    databaseURL: "https://train-scheduler-63807.firebaseio.com",
    projectId: "train-scheduler-63807",
    storageBucket: "train-scheduler-63807.appspot.com",
    messagingSenderId: "58247610327"
};
firebase.initializeApp(config);

let name = "";
let destination = "";
let firstTrain = "03:00AM";
let frequency = 0;

$(".btn").on("click", function () {

    event.preventDefault();
    console.log("yay");
    name = $("#name-input").val().trim();
    destination = $("#destination-input").val().trim();
    firstTrain = $("#first-input").val().trim();
    frequency = $("#frequency-input").val().trim();

    database.ref(status).push({
        name: name,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
    });
});


// database.ref("users").on("child_added", function (snapshot) {

// })