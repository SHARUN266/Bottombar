import "./App.css";

import {
  HomeRounded,
  Chat,
  AccountBalanceWalletRounded,
  Favorite,
  SummarizeRounded,
  Settings,
} from "@mui/icons-material";
import { useEffect, useState } from "react";

import MenuContainer from "./MenuContainer";

function App() {
  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");
    /**
     * Sets the active class on the menu li element.
     * @returns None
     */
    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    // Menu Card Active class
  }, []);
  // Set main Dish Item on Filter

  return (
    <div className="App">
      {/* main Container */}
      <div className="leftMenu">
        <ul id="menu">
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<HomeRounded />}  isHome/>
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<Chat />}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<AccountBalanceWalletRounded />}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<Favorite />} />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<SummarizeRounded />}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<Settings />}  />
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
