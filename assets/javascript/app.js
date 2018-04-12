
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
var firstTrain = '';
var frequency = '';

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

 $("#name-input").text(childSnapshot.val().name);
 $("#destination-input").text(childSnapshot.val().destination);
 $("#first-input").text(childSnapshot.val().firstTrain);
 $("#frequency-input").text(childSnapshot.val().frequency);

 var tableRow = $("<tr>");
<<<<<<< HEAD
 var firstTimeConverted = moment(firstTrain, 'hh:mm');
 var currentTime = moment();
 var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
 var tRemainder = diffTime % frequency;
 var nextArrival = moment().add(minutesAway, "minutes");
 var minutesAway = frequency - tRemainder;
=======
 var nextArrival = 0;
 var minutesAway = 10;
>>>>>>> 9414770049d573d26534a0220cea995c073514f5
// 
//next arrival = now + frequency should be displayed in hh:mm format
//minutes away = (now +frequency)

 tableRow.append("<td>"+ name + "</td>")
 tableRow.append("<td>"+ destination + "</td>")
 tableRow.append("<td>"+ frequency + "</td>");
 tableRow.append("<td>"+ nextArrival +"</td>");
 tableRow.append("<td>"+ minutesAway+ "</td>");
 $("tbody").append(tableRow);
});