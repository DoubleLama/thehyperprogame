const showMore = () =>{
    let cardGame = document.getElementsByClassName("cardGame")
    let i;
    if(cardGame[17].style.display == "none"){
        for(i=9; i<18; i++){
            cardGame[i].style.display = "block";
        }
    }else{
        for(i=18; i<27; i++){
            cardGame[i].style.display = "block";
            document.querySelector("#showMore").style.display = "none";
        }
    }
}
export{showMore}