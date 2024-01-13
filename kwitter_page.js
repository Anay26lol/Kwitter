//YOUR FIREBASE LINKS
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
room_name=localStorage.getItem("roomname");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
}




function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag= "<h4 class='message_h4'>"+ message+"</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
 } });  }); }
getData();
function logout(){
localStorage.removeItem("roomname");
localStorage.removeItem("user_name");
window.location="index.html"

}
function updateLike(message_id){
    button_id=message_id;
    likes=document.getElementById(button_id).value;
  update_likes=Number(likes)+1;
  firebase.database().ref(room_name).child(message_id).update({
  like:update_likes
  
  });
  }