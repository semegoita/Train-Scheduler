
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
var firstTimeConverted = '';
var currentTime = '';
var diffTime = '';
var tRemainder = '';
var nextArrival = '';
var minutesAway = '';

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
    return false;
});

dataRef.ref("users").on("child_added", function (childSnapshot) {

    $("#name-input").text(childSnapshot.val().name);
    $("#destination-input").text(childSnapshot.val().destination);
    $("#first-input").text(childSnapshot.val().firstTrain);
    $("#frequency-input").text(childSnapshot.val().frequency);


    firstTimeConverted = moment(firstTrain, 'hh:mm');
    currentTime = moment();
    diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    tRemainder = diffTime % frequency;

    nextArrival = moment().add(minutesAway, 'minutes');
    nextArrivalConverted = moment(nextArrival).format("hh:mm");
    minutesAway = frequency - tRemainder;
    // 
    //next arrival = now + frequency should be displayed in hh:mm format
    //minutes away = (now +frequency)
    var tableRow = $("<tr>");

    tableRow.append("<td>" + name + "</td>")
    tableRow.append("<td>" + destination + "</td>")
    tableRow.append("<td>" + frequency + "</td>");
    tableRow.append("<td>" + nextArrivalConverted + "</td>");
    tableRow.append("<td>" + minutesAway + "</td>");
    $("tbody").append(tableRow);

    return false;
});