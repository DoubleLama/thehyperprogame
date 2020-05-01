const gameList = (argument) => {
  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");
    let articles = "";

    const fetchList = (url, argument) => {
      console.log(url);
      console.log(argument);
      let finalURL = url + "?ordering=-added&dates=2020-05-01,2020-12-31&page_size=27";
      if (argument !== "") {
        finalURL = url + "?search=" + argument + "&page_size=27";
      }
      console.log(finalURL);
      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          let gameId = -1;
          let cardStyle = "";

          response.results.forEach((article) => {
            gameId++
            if(gameId <= 8){
              cardStyle = "style='dispay:block';"
            }else{
              cardStyle = "style='display:none'"
            }

            let platforms = "";
            for(let i=0; i<article.platforms.length; i++){
            platforms +=`<a href="#gameList/&dates=2019-09-01,2020-05-01&platforms=${article.platforms[i].platform.id}" class="platform${article.platforms[i].platform.id} col-md-2 pb-2 platform"><img src="src/img/${article.platforms[i].platform.id}.svg"></a>`
            };

            let genres = "";
            for(let j=0; j<article.genres.length; j++){
            genres +=`<span class="col-4 text-white invisible">${article.genres[j].name}</span>`
            };

            articles += `
            <div class="col-md-4 pb-4 cardShowInfo">
              <div id="${gameId}" class="cardGame" ${cardStyle}>
                <div class="card mx-auto">
                <img src="${article.background_image}" class="gameImg show">
                  <div class="info">
                    <p class="invisible text-center h2 text-danger font-weight-bold pt-2">${article.rating} / 5 - ${article.ratings_count} votes</p>
                    ${genres}
                    <p class="p-2 text-center invisible";">Release : ${article.released}</p>
                  </div>
                  <div class="m-2">
                    <a href="#gameDetail/${article.id}" class="text-white h3 int-link"> ${article.name}</a>
                  </div>
                  <div class="row mx-0">
                    ${platforms}
                  </div>
                </div>
              </div>
            </div>
            `;
          
          })
          document.querySelector(".page-list .articles").innerHTML = articles;

          
          document.querySelectorAll(".cardShowInfo").forEach((card)=>{
            card.addEventListener("mouseover", showInfo)
            card.addEventListener("mouseleave", hideInfo)
          })

          document.querySelector("#showMore").innerHTML = `<div id="showButton" class="btn btn-danger col-md-2 visible">Show more</div>`
          document.querySelector("#showMore").addEventListener("click", showMore)
          document.querySelector("#welcome").innerHTML=`
          <div class="col-md-12">
            <h2>Welcome,</h2>
            <p>The Hyper Progame is the world’s premier event for computer and video games and related products. At The Hyper Progame,
            the video game industry’s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best,
            brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies,
            groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you
            with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure</p>
            </div>
            <div >
            <select id="selectPlatform" class="form-control col-3 mt-2">  
              <option value="0">Any</option>
              <option value="platform1">Xbox</option>
              <option value="platform18">Playstation</option>
              <option value="platform7">Switch</option>
              <option value="platform4">PC</option>
              <option value="platform6">Linux</option>
              <option value="platform21">Android</option>
              <option value="platform5">Iphone</option>
            </select>
          </div>`
          document.getElementById("selectPlatform").addEventListener("click", selectPlatform)

        });
        
    };
    
    fetchList("https://api.rawg.io/api/games", cleanedArgument);
  };

  const render = () => {
    navbar();
    ;
    pageContent.innerHTML = `
        <section class="page-list">
          <div class="container">
          <div class="articles row pt-5">...loading</div>
          <div id="showMore" class="d-flex justify-content-center mb-5"></div>
          </div>
        </section>
      `;
    
    preparePage();
  };

  render();

};

export { gameList };
import { navbar } from "./navbar"
import { showMore } from "./tools"
import { showInfo } from "./tools";
import { hideInfo } from "./tools";
import { selectPlatform } from "./tools"

