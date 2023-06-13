
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBADt04GHP7iCNsCChETh5J8ENpwMn4Wug",
      authDomain: "kwitter-app-8034a.firebaseapp.com",
      databaseURL: "https://kwitter-app-8034a-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-8034a",
      storageBucket: "kwitter-app-8034a.appspot.com",
      messagingSenderId: "995318996339",
      appId: "1:995318996339:web:ac3f2aeb8fb5ab2653f906"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom()
{
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room_name"
      });

      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log('Room_names= '+ Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+ "</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
      {
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
      }

      function logout()
      {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="index.html";
      }