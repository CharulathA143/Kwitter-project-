
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyDbalcueVEWWRAdYIj-3_tRFnZNwNp835w",
      authDomain: "letschat-web-app-ce66d.firebaseapp.com",
      databaseURL: "https://letschat-web-app-ce66d-default-rtdb.firebaseio.com",
      projectId: "letschat-web-app-ce66d",
      storageBucket: "letschat-web-app-ce66d.appspot.com",
      messagingSenderId: "705131093876",
      appId: "1:705131093876:web:117e8fa300b0cb9ebad621",
      measurementId: "G-P72KG15W5E"
    };
    
    // Initialize Firebase

user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome"+user_name+"!";

function add_room(){
      room_name = document.getElementById("room_name").value;

      localStorage.setItem("roomname",room_name);
  
      window.location="kwitter_room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
