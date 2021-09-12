import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Header = props => {
  const { heading, history } = props;
  const activeLink = history.location.pathname;
  const linkClasses =
    "t-primary pl-10 pr-10 ml-2 mr-2 h-32 flex flex-center flex-row flex-middle hover-primary";
  const activeLinkClass = "bg-secondary disabled";
  const handleBackButtonClick = () => {
    history.goBack();
  };
  return (
    <div className="h-32 bg-primary flex">
      <Link
        className={`${linkClasses} t-hx2 t-tertiary`}
        onClick={handleBackButtonClick}
        to=""
      >
        {"<"}
      </Link>
      <Link
        className={`${linkClasses} ${activeLink === "/" && activeLinkClass}`}
        to="/"
      >
        Home
      </Link>
      <Link
        className={`${linkClasses}  ${activeLink === "/bills" &&
          activeLinkClass}`}
        to="/bills"
      >
        Add Bill
      </Link>
      <Link
        className={`${linkClasses}  ${activeLink === "/friends" &&
          activeLinkClass}`}
        to="/friends"
      >
        Add friends
      </Link>
    </div>
  );
};
