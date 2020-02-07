import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Header = props => {
  const { heading, activeLink } = props;
  const linkClasses =
    "t-primary pl-10 pr-10 ml-2 mr-2 h-32 flex flex-center flex-row flex-middle";
  const activeLinkClass = "bg-secondary disabled";
  return (
    <div className="h-32 bg-primary flex">
      <Link className={`${linkClasses} t-hX2 t-tertiary`}>{"<"}</Link>
      <Link
        className={`${linkClasses} ${activeLink === "home" && activeLinkClass}`}
        to="/"
      >
        Home
      </Link>
      <Link
        className={`${linkClasses}  ${activeLink === "bills" &&
          activeLinkClass}`}
        to="/bills"
      >
        Add Bill
      </Link>
      <Link
        className={`${linkClasses}  ${activeLink === "friends" &&
          activeLinkClass}`}
        to="/friends"
      >
        Add friends
      </Link>
    </div>
  );
};
