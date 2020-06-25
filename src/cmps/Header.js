import React from "react";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <section className="header">
      <img
        src="https://cdn1.iconfinder.com/data/icons/weather-icons-6/512/606430-wind-512.png"
        className="header-image"
        alt="logo"
      ></img>
      <Link to="/" className="logo">
        <h1>Weather Herolo</h1>
      </Link>
      <Link to="/">
        {" "}
        <h1>Home</h1>
      </Link>
      <Link to="/favoritesPage">
        {" "}
        <h1>Favorite Cities</h1>
      </Link>
    </section>
  );
};

export default AppHeader;
