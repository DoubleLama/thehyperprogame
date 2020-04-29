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
          
          response.results.forEach((article) => {
            
            let platforms = "";
                for(let i =0; i<article.platforms.length; i++){
                platforms +=`
                  <a href="" class="border border-white col-md-2 ml-3"><img src="src/img/${article.platforms[i].platform.id}.svg"></a>
                  `};

            articles += `
            <div class="border border-white col-md-4 pb-4">
              <div class="border border-white cardGame">
                <div class="border border-white card mx-auto obs">
                <a href="#gameDetail/${article.id}"> 
                  <img src="${article.background_image}" style="max-height:250px; max-width: 100%; border-radius: 12px 12px 0 0;">
                </a>
                  <div class="border border-white row mt-2">
                  ${platforms}
                    <div class="border border-white m-3 d-flex align-self-center flex-column">
                      <a href="#gameDetail/${article.id}" class="border border-white text-white h3 ml-3 int-link"> ${article.name}</a>
                    </div>
                      <p class="border border-white ml-3 p-2 text-center">Release date : ${article.released}</p>
                      </a>
                  </div>
                </div>
              </div>
            </div>
            `;
          });
          
          document.querySelector(".page-list .articles").innerHTML = articles;
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
          </div>
        </section>
      `;
    
    preparePage();
  };

  render();

};

export { gameList };
import { navbar } from "./navbar"