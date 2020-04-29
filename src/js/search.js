const searchGame = () => {
let search = document.getElementById("gameSearch").value;
return gameList(search);
};

export { searchGame }
import { gameList } from "./gameList"