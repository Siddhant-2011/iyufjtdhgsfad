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
//ADD YOUR FIREBASE LINKS HERE

function addRoom(){
  undertale=document.getElementById("room_name").value;
  firebase.database().ref("/").child(undertale).update({
        purpose:"add_room"
  });
  localStorage.setItem("room_name",undertale);
  window.location="Chat.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
console.log(Room_names);
var go="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=go;
 //End code
 });});}
getData();
function redirectToRoomName(Room_names){
console.log(Room_names);
localStorage.setItem("room_name",Room_names);
window.location="Chat.html";
}


