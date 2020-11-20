var lastDisplayed="O";
var count=0;

function displayLetter(id){
    if(document.getElementById(id).innerHTML==""){
        if (lastDisplayed=="O"){
        document.getElementById(id).innerHTML="X";
        lastDisplayed="X";
        count++;
        if(count>4){
            checkWinner("X", id);
        }
        }
        else{
        document.getElementById(id).innerHTML="O";
        lastDisplayed="O";
        count++;
        if(count>4){
            checkWinner("O", id);
        }
        }
    }
}

function checkWinner(letter, id){
    var c1=document.getElementById("c1").innerHTML;
    var c2=document.getElementById("c2").innerHTML;
    var c3=document.getElementById("c3").innerHTML;
    var c4=document.getElementById("c4").innerHTML;
    var c5=document.getElementById("c5").innerHTML;
    var c6=document.getElementById("c6").innerHTML;
    var c7=document.getElementById("c7").innerHTML;
    var c8=document.getElementById("c8").innerHTML;
    var c9=document.getElementById("c9").innerHTML;
    if(id=="c1"){
        if(c1==c5 && c1==c9){
            document.getElementById("result").innerHTML="Player " + letter + " is the winner!";
            restart();
        }
        else if(c1==c2 && c1==c3){
            document.getElementById("result").innerHTML="Player " + letter + " is the winner!";
        }
        else if(c1==c4 && c1==c7){
            document.getElementById("result").innerHTML="Player " + letter + " is the winner!";
        }
    }

    else if(id=="c9"){
        if(c1==c5 && c1==c9){
            document.getElementById("result").innerHTML="Player " + letter + " is the winner!";
        }
        else if(c9==c6 && c9==c3){
            document.getElementById("result").innerHTML="Player " + letter + " is the winner!";
        }
        else if(c9==c8 && c9==c7){
            //alert("Player " + letter + " is the winner!");
            document.getElementById("result").innerHTML="Player " + letter + " is the winner!";
        }
    }
}

function restart(){
    Program.restart;
}