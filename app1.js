const section = document.querySelector("section"); 
const playerLivesCount = document.querySelector("span");  
const playerTriesCount = document.querySelector(".playerTriesCount");
let playerLives = 0;  
let playerTries = 0;

playerLivesCount.textContent = playerLives;  
playerTriesCount.textContent = playerTries; 
//Generate the object 
//Generate the object 

const getData = () => [ 

{ imgSrc: "./StatsMinnester/SM9.jpg", name: "nio" },
{ imgSrc: "./StatsMinnester/SM10.jpg", name: "tio" },
{ imgSrc: "./StatsMinnester/SM11.jpg", name: "elva" },
{ imgSrc: "./StatsMinnester/SM12.jpg", name: "tolv" },
{ imgSrc: "./StatsMinnester/SM13.jpg", name: "tretton" },
{ imgSrc: "./StatsMinnester/SM14.jpg", name: "fjorton" },
{ imgSrc: "./StatsMinnester/SM15.jpg", name: "femton" },
{ imgSrc: "./StatsMinnester/SM16.jpg", name: "sexton" }, 


{ imgSrc: "./Year/Y9.jpg", name: "nio" }, 
{ imgSrc: "./Year/Y10.jpg", name: "tio" },
{ imgSrc: "./Year/Y11.jpg", name: "elva" },
{ imgSrc: "./Year/Y12.jpg", name: "tolv" },
{ imgSrc: "./Year/Y13.jpg", name: "tretton" },
{ imgSrc: "./Year/Y14.jpg", name: "fjorton" },
{ imgSrc: "./Year/Y15.jpg", name: "femton" },
{ imgSrc: "./Year/Y16.jpg", name: "sexton" }, 


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

        restart("Grattis, du har klarat spelet! Det tog dig " + playerTries + " försök!");
    }


}; 

// restart 

const restart = (text) => { 

    let cardData = randomize(); 
    let faces = document.querySelectorAll(".face"); 
    let cards = document.querySelectorAll(".cards");  

    cardData.forEach((item, index) => { 
       // cards[index].classList.remove("toggleCard");  
        //Randomize 

       // cards[index].style.pointerEvents = ("all"); 
        //faces[index].src = item.imgSrc;  
        //cards[index].setAttribute("name", item.name);
    }); 
    playerLivesCount.textContent = playerLives;  
    playerTriesCount.textContent = playerTries;
    setTimeout(() => window.alert(text), 100);
    }


cardGenerator();  


