const section = document.querySelector("section"); 
const playerLivesCount = document.querySelector("span");  
const playerTriesCount = document.querySelector(".playerTriesCount");
let playerLives = 0;  
let playerTries = 0;

playerLivesCount.textContent = playerLives;  
playerTriesCount.textContent = playerTries; 
//Generate the object 

const getData = () => [ 

{ imgSrc: "./StatsMinnester/SM1.jpg", name: "ett" },
{ imgSrc: "./StatsMinnester/SM2.jpg", name: "två" },
{ imgSrc: "./StatsMinnester/SM3.jpg", name: "tre" },
{ imgSrc: "./StatsMinnester/SM4.jpg", name: "fyra" },
{ imgSrc: "./StatsMinnester/SM5.jpg", name: "fem" },
{ imgSrc: "./StatsMinnester/SM6.jpg", name: "sex" },
{ imgSrc: "./StatsMinnester/SM7.jpg", name: "sju" },
{ imgSrc: "./StatsMinnester/SM8.jpg", name: "åtta" }, 


{ imgSrc: "./Year/Y1.jpg", name: "ett" }, 
{ imgSrc: "./Year/Y2.jpg", name: "två" },
{ imgSrc: "./Year/Y3.jpg", name: "tre" },
{ imgSrc: "./Year/Y4.jpg", name: "fyra" },
{ imgSrc: "./Year/Y5.jpg", name: "fem" },
{ imgSrc: "./Year/Y6.jpg", name: "sex" },
{ imgSrc: "./Year/Y7.jpg", name: "sju" },
{ imgSrc: "./Year/Y8.jpg", name: "åtta" }, 


] 

// Randomize  

const randomize = () => {  

    const cardData = getData(); 
    console.log(cardData); 
    cardData.sort(() => Math.random() - 0.5); 
    return cardData; 
} 

// card generator function  

const cardGenerator = () => { 

    const cardData = randomize(); 
    console.log(cardData);  

    //generate HTML  

    cardData.forEach((item) => { 
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");  

    card.classList = "card"; 
    face.classList = "face"; 
    back.classList = "back";    
    //attach the info to the cards  

    face.src = item.imgSrc;  
    card.setAttribute("name", item.name);
    // attach the card to section 
    section.appendChild(card); 
    card.appendChild(face); 
    card.appendChild(back);  

    card.addEventListener ("click", (e) => { 
        card.classList.toggle("toggleCard"); 
        checkCards(e);
    });
    });


};  

//check if cards match

const checkCards = (e) => { 
    
    const clickedCard = e.target   
    clickedCard.classList.add("flipped"); 
    const flippedCards = document.querySelectorAll(".flipped"); 
    const toggleCard = document.querySelectorAll(".toggleCard");
    console.log(clickedCard);  
    
    if (flippedCards.length === 2) { 
        if (flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")) { 
            console.log("match"); 

            flippedCards.forEach((card) => { 
                card.classList.remove("flipped");  
                card.style.pointerEvents = "none"; 
            }); 
            playerLives++; 
            playerLivesCount.textContent = playerLives;    
            playerTries++; 
            playerTriesCount.textContent = playerTries;
            
        } 
        else { 
            console.log("wrong"); 
            flippedCards.forEach((card) => { 
                card.classList.remove("flipped"); 
                setTimeout(() => card.classList.remove("toggleCard"), 1000); 
            });   
            playerTries++; 
            playerTriesCount.textContent = playerTries;
            
        }
    } 

    if (toggleCard.length === 16) { 

        restart("Congratulations, you have completed the game. It took you " + playerTries + " tries!");
    }


}; 

// restart 

const restart = (text) => { 

    let cardData = randomize(); 
    let faces = document.querySelectorAll(".face"); 
    let cards = document.querySelectorAll(".cards");  

    cardData.forEach((item, index) => { 
    }); 
    playerLivesCount.textContent = playerLives;  
    playerTriesCount.textContent = playerTries;
    
    setTimeout(() => window.alert(text), 100);
    }


cardGenerator();  


