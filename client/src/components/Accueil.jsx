import React from "react";
import { withRouter } from "react-router-dom";
import NavbarUser from "./navbarUser";
import Pc from "./Scraping/Pc"

function Accueil() {
  return (
    <>
      <div>
        <NavbarUser />
      </div>
      <div>
        <Pc/>
    </div>
    </>
  );
}

export default withRouter(Accueil);