import React from "react";
import { Link } from "react-router-dom";

const Bwt = (login) => {
  return (
    <Link to={login == true ? "/HomeIn" :"/"}>
      <img
        className="bwt"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.horizont.net%2Fnews%2Fmedia%2F22%2FBWT-Logo-2017-216299-detailnp.png&f=1&nofb=1"
        alt="bwt"
      />
    </Link>
  );
};

export default Bwt;
