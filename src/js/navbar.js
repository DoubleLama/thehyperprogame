const navbar = () =>{
    header.innerHTML = `
    <header class="pb-3">
      <div class="container">
        <div class="m-2">
          <a href="" class="h3 text-white font-weight-bold">The Hyper Progame</a>
          <input type="search" id="gameSearch" class="form-control" placeholder=" Search...">
        </div>
        <div id="welcome" class="mt-5"></div>
      </div>
    </header>
    `;
    document.querySelector(".form-control").addEventListener("keypress", (e) => {
      if (e.code == "Enter") {
        searchGame();
      }
    });
}

export {navbar}
import { searchGame } from "./tools"