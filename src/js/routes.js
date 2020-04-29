import {gameList} from "./gameList"
import {gameDetail} from "./gameDetail"

const routes = {
    "": gameList,
    "gameList": gameList,
    "gameDetail": gameDetail,
  };

export {routes}