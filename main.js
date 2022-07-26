var username1="";
var username2="";
function addUser(){
     username1 = document.getElementById("userName1").value;
     username2 = document.getElementById("userName2").value;
     localStorage.setItem("usernames",username1);
     localStorage.setItem("usernames2",username2);
     window.location="quiz_game_page.html";

};