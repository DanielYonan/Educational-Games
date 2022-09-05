var userNumber;
var randomNumber;
var randomNumber1;
var sum;
var sum1; 
var sum2;  


function init() {
    var additionButton = document.getElementById("button"); 
    var submitButton = document.getElementById("button1"); 
    var minusButton = document.getElementById("buttonminus")
    var ggrButton = document.getElementById("buttonggr")
    additionButton.addEventListener("click", onclickedAddition);
    minusButton.addEventListener("click", onclickedMinus);
    ggrButton.addEventListener("click", onclickedGGR);
    submitButton.addEventListener("click", onClickedSubmit);
    window.addEventListener("keydown", onPressedKey);
    document.getElementById("question").innerHTML = "";

    randomNumber = 0;
    randomNumber1 = 0; 
    userNumber = 1;  
} 
//funktion som initierar och skapar knapparna och ger funktionalitet till dom samt även till keyboard för att hämta vad användaren tryckt in i fältet 


function onclickedAddition() {  

    randomNumber = Math.floor((Math.random() * 100) + 1);  

    randomNumber1 = Math.floor((Math.random() * 100) + 1); 

    document.getElementById("question").innerHTML = "What is " + (randomNumber + " + " + randomNumber1);  

        document.getElementById("answer").innerHTML = 
        " ";
}  
function onclickedMinus() {  

    randomNumber = Math.floor((Math.random() * 100) + 1);  

    randomNumber1 = Math.floor((Math.random() * 100) + 1); 

    randomNumber2 = Math.floor((Math.random() * 100) + 1); 

    if (randomNumber > randomNumber1) {  

        document.getElementById("question").innerHTML = "What is " + (randomNumber + " - " + randomNumber1 + "?");  

        document.getElementById("answer").innerHTML = 
        " ";
     
    }
    if (randomNumber1 > randomNumber) { 

        document.getElementById("question").innerHTML = "What is " + (randomNumber1 + " - " + randomNumber + "?");  

        document.getElementById("answer").innerHTML = 
        " ";
    }

    
}  
function onclickedGGR() {  

    randomNumber = Math.floor((Math.random() * 10) + 1);  

    randomNumber1 = Math.floor((Math.random() * 10) + 1);

    document.getElementById("question").innerHTML = "What is " + (randomNumber + " x " + randomNumber1 + "?");  

        document.getElementById("answer").innerHTML = 
        " ";
}  

//tre funktioner ovan som styr vad som printas ut beroende på vilken typ av mattetal som efterfrågas: en funktion för varje typ med särskiljande egenskaper och utskrift


function onClickedSubmit() { 

    userNumber = document.getElementById("inputNumber").value;    
    

    sum = randomNumber + randomNumber1;   
    sum1 = randomNumber1 - randomNumber;
    sum2 = randomNumber - randomNumber1; 
    sum3 = randomNumber * randomNumber1; 

     printAnswer();

}   

//funktion som tilldelar variabel userNumber det värdet som användaren matat in, skickas även till variabel submitButton rad 17 för att hålla reda på att användare har klickat på submit mao "skicka svar". anropar funktionen printAnswer som ligger nedan efter detta klick. deklaration av tre nya variabler för att hålla reda på matematiska uträkningar som måste göras innan utskrift av svar



function printAnswer() { 

        
    if (userNumber !== sum || userNumber !== sum1 || userNumber !== sum2 || userNumber !== sum3) { 

        document.getElementById("answer").innerHTML = 
        "Incorrect! The answer is not " + userNumber;  

        document.getElementById("answer").style.color = "#F00";
    }
    
    if (userNumber == sum) {
    
        document.getElementById("answer").innerHTML = 
        "Correct! The answer is: " + sum;     

        document.getElementById("answer").style.color = "#0F0";
    } 
    

    if (userNumber == sum1) { 

        document.getElementById("answer").innerHTML = 
        "Correct! The answer is: " + sum1;  

        document.getElementById("answer").style.color = "#0F0";
        }     

    if (userNumber == sum2) { 
            document.getElementById("answer").innerHTML = 
            "Correct! The answer is: " + sum2;  
    
            document.getElementById("answer").style.color = "#0F0";
            }  

    if (userNumber == sum3) { 
                document.getElementById("answer").innerHTML = 
                "Correct! The answer is: " + sum3;  
        
                document.getElementById("answer").style.color = "#0F0";
            }  
}   
// funktion som printar ut svaret på den angivna frågan och samtidigt kontrollorerar om det stämmer överens med användarens svar. olika villkor beroende på vilken fråga som ställts. Anledningen till att randomNumber kontrolleras på det sättet är för att se till att de tre svaren skiljer sig och att villkoren för alla svaren (userNumber) inte alltid uppfylls. på det här sättet skiljs dom åt och har mer 



window.addEventListener("load", init);  

// initieras när sidan laddas. anropar funktion init()
