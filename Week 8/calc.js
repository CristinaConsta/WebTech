function calculateAverage(){
    var fd = parseInt(document.getElementById("score1").value);
    var oop = parseInt(document.getElementById("score2").value);
    var sc = parseInt(document.getElementById("score3").value);
    var nw = parseInt(document.getElementById("score4").value);
    var db = parseInt(document.getElementById("score5").value);

    var avg = (fd + oop + sc + nw + db)/5;
    var answer=document.getElementById("result");
    var pict=document.getElementById("pic");
    
    alert("Your average score is:" + avg);

    if(avg>70 && avg<=100){
        //alert("Congrats! You have first class. Your average is: " + avg);
       answer.innerHTML="Congrats! You have first class. Your average is: " + avg;
       answer.style.color="green";
       pict.src="images/tenor.gif";
    }

    else if(avg>60 && avg<=69){
        //alert("Congrats! You have second class upper. Your average is: " + avg);
        answer.innerHTML="Congrats! You have second class upper. Your average is: " + avg;
        answer.style.color="green";
        pict.src="images/tenor.gif";
    }

    else if(avg>50 && avg<=59){
        //alert("Congrats! You have second class lower. Your average is: " + avg);
        answer.innerHTML="Congrats! You have second class lower. Your average is: "+ avg;
        answer.style.color="green";
        pict.src="images/tenor.gif";
    }
    else if(avg>40 && avg<=49){
        //alert("Congrats! You passed. Your average is: " + avg);
        answer.innerHTML="Congrats! You passed. Your average is: " + avg;
        answer.style.color="green";
        pict.src="images/tenor.gif";
    }
    else {
        //alert("You failed. Your average is: " + avg);
        answer.innerHTML="Sorry, you didn't pass. Your average is: " + avg;
        answer.style.color="red";
    }
}





