//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDWfBGYxSeX0OAAdev4nfjYkWV-4gTlxD0",
      authDomain: "kwitter-179eb.firebaseapp.com",
      databaseURL: "https://kwitter-179eb-default-rtdb.firebaseio.com",
      projectId: "kwitter-179eb",
      storageBucket: "kwitter-179eb.appspot.com",
      messagingSenderId: "626134039480",
      appId: "1:626134039480:web:4a4c4f18e40d8a8e23ad4d"
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
rn = localStorage.getItem("keyroom");
un = localStorage.getItem("keyuser");
function sd(){
msg = document.getElementById("msg").value ;
firebase.database().ref(rn).push({
      Name:un,
      message:msg,
      likes:0
});
document.getElementById("msg").value="";
}
function logout(){
      window.location ="index.html";
      localStorage.removeItem("keyuser");
      localStorage.removeItem("keyroom");
}
