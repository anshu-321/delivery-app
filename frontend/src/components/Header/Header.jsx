import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Your Search For Local Food Online Ends Here</h2>
        <p>
          Choosing a diverse menu featuring a delectable array of dishes , from
          your favourite local restaurant , now Online{" "}
        </p>
        <a className="btn" href="#explore-menu">
          View Menu
        </a>
      </div>
    </div>
  );
};

export default Header;
