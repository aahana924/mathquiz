var number1 = 0;
var number2 = 0;
var player1_name=localStorage.getItem("usernames");
var player2_name=localStorage.getItem("usernames2");;
var player1_score=0;
var player2_score=0;

function send(){
    document.getElementById("player1_name").innerHTML= player1_name;
    document.getElementById("player2_name").innerHTML= player2_name;

    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actualanswer = parseInt(number1)*parseInt(number2);
    questionnumber="<h4>"+number1+"x"+number2+"</h4>";
    inputbox = "<br>Answer : <input type='text' id='input_check_box'>";
    checkbutton = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = questionnumber+inputbox+checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
var question_turn = "player1";
var answer_turn = "player2";

function check(){
    get_answer= document.getElementById("input_check_box").value;
    if (get_answer == actualanswer)
    {
        if(answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }   
            else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML= player2_score;
        }    

        
    }
    if (question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("questionturn").innerHTML="Question turn - "+question_turn;
    }
    else{
        question_turn="player1";
        document.getElementById("questionturn").innerHTML="Question turn - "+question_turn;
    }
    if (answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("answerturn").innerHTML="Answer turn - "+answer_turn;
    }
    else{
        answer_turn="player1";
        document.getElementById("answerturn").innerHTML="Answer turn - "+answer_turn
    }


}