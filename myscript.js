window.onload = function(){     

    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var quizbg = new Image();
    var Question = new String;
    var Option1 = new String;
    var Option2 = new String;
    var Option3 = new String;
    var mx=0;
    var my=0;
    var CorrectAnswer = 0;
    var qnumber = 0;
    var rightanswers=0;
    var wronganswers=0;
    var QuizFinished = false;
    var lock = false;
    var textpos1=75;
    var textpos2=185;
    var textpos3=280;
    var textpos4=375;
    var Questions = ["First iPhone release?","Earth to orbit the Sun?","Twitter's original name?"];
    var Options = [["2007","2006","2008"],["365 days","24 hours","31 days"],["twttr","Tweeter","MySpace"]]; 


    quizbg.onload = function(){
      context.drawImage(quizbg, 0, 0);
      SetQuestions(); 
    }
    quizbg.src = "newbox.png"; 

    SetQuestions = function(){

        Question=Questions[qnumber];
        CorrectAnswer=1+Math.floor(Math.random()*3);

        if(CorrectAnswer==1){Option1=Options[qnumber][0];Option2=Options[qnumber][1];Option3=Options[qnumber][2];}
        if(CorrectAnswer==2){Option1=Options[qnumber][2];Option2=Options[qnumber][0];Option3=Options[qnumber][1];}
        if(CorrectAnswer==3){Option1=Options[qnumber][1];Option2=Options[qnumber][2];Option3=Options[qnumber][0];}

        context.textBaseline = "middle";
        context.font = "22pt Calibri,Arial";
        context.fillText(Question,140,textpos1);
        context.font = "17pt Calibri,Arial";
        context.fillText(Option1,240,textpos2);
        context.fillText(Option2,240,textpos3);
        context.fillText(Option3,240,textpos4);


    }
    canvas.addEventListener('click',ProcessClick,false);

    function ProcessClick(ev) {

    my=ev.y-canvas.offsetTop;

    if(ev.y == undefined){
        my = ev.pageY - canvas.offsetTop;
    }

if(lock){
    ResetQ();
}

else{

if(my>150 && my<220){GetFeedback(1);}
if(my>250 && my<320){GetFeedback(2);}
if(my>350 && my<420){GetFeedback(3);}

}

    }



GetFeedback = function(a){

if(a==CorrectAnswer){
  context.drawImage(quizbg, 34,430,45,40,470,145+(95*(a-1)),50,70);
rightanswers++;
    
}
else{
context.drawImage(quizbg, 80,430,45,40,470,145+(95*(a-1)),50,70);
wronganswers++; 

} 
lock=true;
context.font = "14pt Calibri,Arial";
context.fillText("Click again to continue",180,235);
}


ResetQ= function(){
lock=false;
context.clearRect(0,0,550,430);
qnumber++;
if(qnumber==Questions.length){EndQuiz();}
else{
context.drawImage(quizbg, 0, 0);
SetQuestions();}
}


EndQuiz=function(){
canvas.removeEventListener('click',ProcessClick,false);
context.font = "20pt Calibri,Arial";
context.fillText("You have finished the quiz!",120,100);
context.font = "16pt Calibri,Arial";
context.fillText("Correct answers: "+String(rightanswers),100,200);
context.fillText("Wrong answers: "+String(wronganswers),100,240);
}
}; 

