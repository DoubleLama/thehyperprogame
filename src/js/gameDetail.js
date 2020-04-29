const gameDetail = (argument) => {
  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");

    const fetchGame = (url, argument) => {
      let finalURL = url + argument;

      fetch(`${finalURL}`)
      .then((response) => response.json())
      .then((response) => {
        let { name, background_image, developers, tags, genres, publishers, platforms, released, description, website } = response;
      
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
              <div class="container">
                <h1 class="title">${name}</h1>
                <p>Developers :</p>
                <div class ="developers"></div></br>
                  <p>Tags : </br></p>
                <div class="tags"></div>
                  <p>Genres : </br></p>
                <div class="genres"></div>
                  <p>Platforms : </br></p>
                <div class="platforms"></div>
                  <p class="release-date">Release date : <span>${released}</span></p>
                  <p class="description">${description}</p>
                  <p class="publishers">${publishers[0].name}</p>
              </div>
          </div>
          </section>
        `
        let articleDOM = document.querySelector(".page-detail .article");

        for(let i =0; i<platforms.length; i++){
          articleDOM.querySelector("div.platforms").innerHTML += `<a href="" id=${platforms[i].platform.id} class="int-link mx-2">${platforms[i].platform.name}</a>`
        }
        for(let i =0; i<tags.length; i++){
          articleDOM.querySelector("div.tags").innerHTML += `<a href="" id=${tags[i].id} class="int-link mx-2">${tags[i].name}</a>`
        }
        for(let i =0; i<genres.length; i++){
          articleDOM.querySelector("div.genres").innerHTML += `<a href="" id=${genres[i].id} class="int-link mx-2">${genres[i].name}</a>`
        }
        for(let i=0; i<developers.length;i++){
          articleDOM.querySelector("div.developers").innerHTML += `<a href="" id=${developers[i].id} class="int-link">${developers[i].name}</a></br>`
        }
      });
    };

    fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
  };

  const render = () => {
    navbar()
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="articles">...loading</div>
      </section>
    `;

    preparePage();
  };

  render();
};

export { gameDetail };
import { navbar } from "./navbar"
