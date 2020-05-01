const gameDetail = (argument) => {
  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");

    const fetchGame = (url, argument) => {
      let finalURL = url + argument;

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          let {
            name,
            background_image,
            developers,
            tags,
            genres,
            publishers,
            platforms,
            released,
            description,
            website,
            clip,
            rating,
            ratings_count,
            stores,
            id,
          } = response;

          pageContent.innerHTML = `
          <section class="page-detail">
            <div class="article">
              <div class="poster">
                <div class="jumbotron" style="background-image: url(${background_image}); background-size: cover; min-height: 500px;max-height:800px;" >
                  <div class="continer">
                    <div class="d-flex align-items-end flex-column" style="height: 400px">
                      <div class="mt-auto pr-5 pb-3">
                        <a href="${website}" class="btn btn-danger" target="_blank">Watch website</a>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
              <h1 class="title text-center">${name}</h1>
              <div class="container">
              <span class="rating btn btn-danger">${rating}/5 </span><span class="sub"> ${ratings_count} votes<span></br>
              <h2 class="text-center">Game Info</h2>
                <div class="row">
                <div class ="col-md-3">
                  <h4 class="mt-3">Release date :</br></h4>
                  <div class="release-date">${released}</div>
                  </div>
                  
                    <div class ="col-md-3">
                      <h4 class="mt-3">Platforms : </br></h4>
                      <div class="platforms"></br></div></br>
                      </div>
                      
                        <div class ="col-md-3">
                        <h4 class="mt-3">Publishers: </h4>
                        <a href="#gameList/games&ordering=-added&publishers=${publishers[0].id}" class="publishers">${publishers[0].name}</a>
                        </div>
                <div class ="col-md-3">
                <h4 class="mt-3">Developers :</br></h4>
                  <div class ="developers"></div></br>
                  </div>
                  <div class ="col-md-3">
                  <h4 class="mt-3">Stores :</br></h4>
                  <div class="stores"></div></br>
                  </div>
                  <div class ="col-md-3">
                    <h4 class="mt-3">Genres : </br></h4>
                    <div class="genres"></div></br>
                    </div>
                  <div class ="col-md-6">
                        <h4 class="text-center mt-3">Tags : </h4>
                        <div class="tags"></br></div></br>
                        </div>
                  <div class="col-md-10">
                <h2 class="text-center mt-3">Description :</br></h2>
                  <div class="description">${description}</div></br>
                  </div>
                </div>
                <h4 class="mt-3">Screenshots :</br></h4>
                  <div class="screenshots row text-center text-lg-left"></div></br>
                <h4 class="mt-3">Trailer :</br></h4>
                  <div class="trailer col-md-6"> </div></br>
                <h4 class="mt-3">Youtube :</br></h4>
                  <div class="youtube row text-center text-lg-left"></div></br>
                <h4 class="mt-3">Similar games :</br></h4>
                  <div class="suggested row text-center text-lg-left"></div></br>
              </div>
            </div>
          </section>
        `;
          let articleDOM = document.querySelector(".page-detail .article");

          for (let i = 0; i < platforms.length; i++) {
            articleDOM.querySelector(
              "div.platforms"
            ).innerHTML += `<a href="#gameList/&dates=2019-09-01,2020-05-01&platforms=${platforms[i].platform.id}" id=${platforms[i].platform.id} class="int-link mx-2">${platforms[i].platform.name}</a>`;
          }
          for (let i = 0; i < tags.length; i++) {
            articleDOM.querySelector(
              "div.tags"
            ).innerHTML += `<a href="#gameList/games&ordering=-rating&tags=${tags[i].id}" id=${tags[i].id} class="int-link mx-2">${tags[i].name}</a>`;
          }
          for (let i = 0; i < genres.length; i++) {
            articleDOM.querySelector(
              "div.genres"
            ).innerHTML += `<a href="#gameList/games&ordering=-rating&genres=${genres[i].id}" id=${genres[i].id} class="int-link mx-2">${genres[i].name}</a>`;
          }
          for (let i = 0; i < developers.length; i++) {
            articleDOM.querySelector(
              "div.developers"
            ).innerHTML += `<a href="#gameList/games&ordering=-rating&developers=${developers[i].id}" id=${developers[i].id} class="int-link">${developers[i].name}</a></br>`;
          }
          for (let i = 0; i < stores.length; i++) {
            articleDOM.querySelector(
              "div.stores"
            ).innerHTML += `<a href="${stores[i].url}" id=${stores[i].id}>${stores[i].store.name}</a></br>`;
          }

          articleDOM.querySelector("div.trailer").innerHTML += `
                              <video controls>
                                <source src="${clip.clip}" type="video/mp4">
                                  Sorry, your browser doesn't support embedded videos.
                              </video>`;

          fetch(`https://api.rawg.io/api/games/${id}/youtube`)
            .then((response1) => response1.json())
            .then((response1) => {
              for (let i = 0; i < 3; i++) {
                articleDOM.querySelector(
                  "div.youtube"
                ).innerHTML += `
              
                          
                              <div class="col-lg-4 col-md-6 col-sm-10 my-3">
                              <iframe id="ytplayer" type="text/html" 
                              src="http://www.youtube.com/embed/${response1.results[i].external_id}?autoplay=0&origin=http://example.com"
                              frameborder="0"/>
                              </div>`;
              }
            });

          fetch(`https://api.rawg.io/api/games/${id}/screenshots`)
            .then((response2) => response2.json())
            .then((response2) => {
              for (let i = 0; i < 4; i++) {
                articleDOM.querySelector(
                  "div.screenshots"
                ).innerHTML += `
                              <div class="col-lg-6 col-md-6 col-6 mb-4">
                                <a href="${response2.results[i].image}">
                                      <img class="img-fluid" src="${response2.results[i].image}" alt="">
                                    </a>
                              </div>`;
              }
            });

          fetch(`https://api.rawg.io/api/games/${id}/suggested`)
            .then((response3) => response3.json())
            .then((response3) => {
              let suggestedGames = response3.results;                
                for (let i = 0; i < 6; i++) {
                  let platforms="";
                  suggestedGames[i].platforms.forEach((element) => {
                    platforms += `<a href="#gameList/&dates=2019-09-01,2020-05-01&platforms=${element.platform.id}" class=col-md-2 pb-2 platform "><img src="src/img/${element.platform.id}.svg"></a>`;
                  });
                articleDOM.querySelector("div.suggested").innerHTML += `
              <div class="col-md-4 pb-4 cardShowInfo">
                <div id="game${suggestedGames[i].id}">
                  <div class="card mx-auto">
                    <img src="${suggestedGames[i].background_image}" class="gameImg show">
                    <div class=" my-2 mx-2">
                      <a href="#gameDetail/${suggestedGames[i].id}" class="text-white h3 int-link"> ${suggestedGames[i].name}</a>
                    </div>
                    <div class="row mx-0 ">
                      ${platforms}
                    </div>
                  </div>
                </div>
              </div>
            `;
              }
            });
        });
    };

    fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
  };

  const render = () => {
    navbar();
    pageContent.innerHTML = `
      <section class="page-list">
      <div style="height: 35vh">
      </div>
        <div class="articles d-flex justify-content-center">
            <div class="spinner-border text-white" role="status">
          </div>
        </div>
      </section>
    `;

    preparePage();
  };

  render();
};

export { gameDetail };
import { navbar } from "./navbar";
