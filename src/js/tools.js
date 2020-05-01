const showMore = () =>{
    let cardGame = document.getElementsByClassName("cardGame")
    let i;
    if(cardGame[17].style.display == "none"){
        for(i=9; i<18; i++){
            cardGame[i].style.display = "block";
        }
    }else{
        for(i=18; i<=26; i++){
            cardGame[i].style.display = "block";
            document.querySelector("#showButton").classList.remove("visible");
            document.querySelector("#showButton").classList.add("invisible");
        }
    }
}

const searchGame = () => {
    let search = document.getElementById("gameSearch").value;
    return gameList(search);
};
    
const showInfo = (e) =>{
    let showInfo = e.target.querySelectorAll(".invisible")
    let img = e.target.querySelector(".gameImg")
    
    img.classList.remove("show")
    img.classList.add("hide")
    
    showInfo.forEach(element => {
      element.classList.remove("invisible")
      element.classList.add("visible")
  
    });
}
  
const hideInfo= (e) =>{
let hideInfo = e.target.querySelectorAll(".visible")
let img = e.target.querySelector(".gameImg")

img.classList.remove("hide")
img.classList.add("show")

hideInfo.forEach(element => {
    element.classList.remove("visible")
    element.classList.add("invisible")

});
}

const selectPlatform = () =>{
    document.querySelectorAll(".hide").forEach((element)=>{
        element.classList.remove("hide")
    })
    let selectedPlatform = document.querySelector("#selectPlatform").value;
    let games = document.querySelectorAll(".cardShowInfo");
   
    games.forEach((game)=>{
        let result = 0;
        let gamePlatform = game.querySelectorAll(".platform")
        if(selectedPlatform == "0"){
            game.classList.remove("hide")
        }
        gamePlatform.forEach((element)=>{
            if(element.classList[0] == (selectedPlatform) || selectedPlatform == "0"){
                result++
            }
        })
        if(result<1){game.classList.add("hide")}
    })
}

export{ selectPlatform }
export{ showInfo }
export{ hideInfo } 
export{ searchGame }
export{ showMore }
import{ gameList } from "./gameList"