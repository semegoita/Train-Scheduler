
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

var dataRef = firebase.database();

var name = "";
var destination = "";
var firstTrain = "03:00AM";
var frequency = 0;

$(".btn").on("click", function (event) {

    event.preventDefault();
    console.log("yay");
    name = $("#name-input").val().trim();
    destination = $("#destination-input").val().trim();
    firstTrain = $("#first-input").val().trim();
    frequency = $("#frequency-input").val().trim();


    dataRef.ref("users").push({
        name: name,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
});

dataRef.ref("users").on("child_added", function (childSnapshot) {
//  console.log(childSnapshot.val().name);
//  console.log(childSnapshot.val().destination);
//  console.log(childSnapshot.val().firstTrain);
//  console.log(childSnapshot.val().frequency);
//  console.log(childSnapshot.val().ServerValue);

 $("#name-input").text(childSnapshot.val().name);
 $("#destination-input").text(childSnapshot.val().destination);
 $("#first-input").text(childSnapshot.val().firstTrain);
 $("#frequency-input").text(childSnapshot.val().frequency);

 var tableRow = $("<tr>");
 var nextArrival = 0;
 var minutesAway = momemt().endOf('minute').fromNow();


 tableRow.append("<td>"+ name + "</td>")
 tableRow.append("<td>"+ destination + "</td>")
 tableRow.append("<td>"+ frequency + "</td>");
 tableRow.append("<td>"+ "next arrival" +"</td>");
 tableRow.append("<td>"+ "Minutes away"+ "</td>");
 $("tbody").append(tableRow);
});