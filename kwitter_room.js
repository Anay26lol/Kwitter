var firebaseConfig = {
  apiKey: "AIzaSyAwPYnK5j0g9SoGc0smACb7qzCk_l0b4PQ",
  authDomain: "newkwitter-62291.firebaseapp.com",
  databaseURL: "https://newkwitter-62291-default-rtdb.firebaseio.com",
  projectId: "newkwitter-62291",
  storageBucket: "newkwitter-62291.appspot.com",
  messagingSenderId: "789662626872",
  appId: "1:789662626872:web:7b3ef574326747b43522cd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name;
function addRoom(){
  roomname=document.getElementById("room_name").value
  firebase.database().ref("/").child(roomname).update({
    purpose:"adding roomname"
  });
  localStorage.setItem("roomname",roomname);
  window.location="kwitter_page.html"
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
   Room_names = childKey;
    //Start code
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML+=row;

     //End code
     });});} 
     getData();
     function redirectToRoomName(name){
localStorage.setItem("roomname",name);
window.location="kwitter_page.html";

     }
     function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomname");
      window.location="index.html";

     }
