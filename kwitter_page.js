var firebaseConfig = {
    apiKey: "AIzaSyBV9Vl9jGiWvgFkf_OyEupWoyKqPwlpyN4",
    authDomain: "emeralds-and-rubies-d8b1e.firebaseapp.com",
    databaseURL: "https://emeralds-and-rubies-d8b1e.firebaseio.com",
    projectId: "emeralds-and-rubies-d8b1e",
    storageBucket: "emeralds-and-rubies-d8b1e.appspot.com",
    messagingSenderId: "533177726041",
    appId: "1:533177726041:web:737a0c29f63ec24b7bad48"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
var user_name=localStorage.getItem("user_name");
var room_name=localStorage.getItem("room_name");
function send(){
    var msg=document.getElementById("msg").value; 
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0 
    });
    document.getElementById("msg").value="";
}