const gameList = (argument) => {
  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");
    let articles = "";

    const fetchList = (url, argument) => {
      let finalURL = url + "?dates=2020-07-01,2020-12-31&ordering=-added&page_size=27";
      if (argument !== "") {
        finalURL = url + "?search=" + argument + "&page_size=27";
      }

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          let gameId = 0;
          let cardStyle = "";

          response.results.forEach((article) => {

            if(gameId <= 8){
              cardStyle = "style='dispay:block';"
            }else{
              cardStyle = "style='display:none'"
            }

            let platforms = "";
                for(let j =0; j<article.platforms.length; j++){
                platforms +=`
                  <a href="" class="col-md-2 ml-3"><img src="src/img/${article.platforms[j].platform.id}.svg"></a>
                  `};
            articles += `
            <div class="col-md-4 pb-4">
              <div id="${gameId}" class="cardGame" ${cardStyle}>
                <div class="card mx-auto">
                <a href="#gameDetail/${article.id}"> 
                  <img src="${article.background_image}" style="max-height:250px; max-width: 100%; border-radius: 12px 12px 0 0;">
                </a>
                  <div class="row">
                  ${platforms}
                  </div>
                  <div class="m-3">
                    <a href="#gameDetail/${article.id}" class="text-white h3 int-link"> ${article.name}</a>
                  </div>
                    <p class= p-2 text-center">Release date : ${article.released}</p>
                </div>
              </div>
            </div>
            `;
            gameId++
          })
        
          document.querySelector("#showMore").innerHTML = `<div class="btn btn-danger col-md-2 ">Show more</div>`
          document.querySelector(".page-list .articles").innerHTML = articles;
          document.querySelector("#showMore").addEventListener("click", showMore)

        });
    };

    fetchList("https://api.rawg.io/api/games", cleanedArgument);
  };

  const render = () => {
    navbar();
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
import { showMore } from "./showMore"