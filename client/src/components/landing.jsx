import { withRouter } from "react-router-dom";
import React from 'react';
import NavbarLanding from './NavbarLanding';
import Pc from './Scraping/Pc';


function Landing() {
  return (
    <>
      <header>
        <NavbarLanding />
      </header>
      <tbody>
        <Pc/>
      </tbody>
    </>
  );
}
export default withRouter(Landing);
