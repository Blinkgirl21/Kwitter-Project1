var firebaseConfig = {
      apiKey: "AIzaSyBVpYwtWJFszNh9L1TF-8C9MmkjC354J9M",
      authDomain: "kwitter-27ce3.firebaseapp.com",
      databaseURL: "https://kwitter-27ce3-default-rtdb.firebaseio.com",
      projectId: "kwitter-27ce3",
      storageBucket: "kwitter-27ce3.appspot.com",
      messagingSenderId: "1013770783604",
      appId: "1:1013770783604:web:b2262e56204a528060ba21"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
room_name=localStorage.getItem("room_name");
user_name=localStorage.getItem("user_name");
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function addRoom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"

});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}