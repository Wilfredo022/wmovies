import React, { useEffect } from "react";
import { getDataTrending } from "./api/getDataTranding";
import { RouterMovie } from "./routers/RouterMovie";
import { Navbar } from "./components/Navbar";
import { getDataMovies } from "./api/getDataMovies";
import "./App.scss";
import { getDataMoviesMore } from "./api/getDataMoviesMore";

function App() {
  try {
    getDataTrending("movie", "day", "onTrending");
  } catch (error) {
    console.log(error);
  }

  try {
    getDataTrending("tv", "day", "onTv");
  } catch (error) {
    console.log(error);
  }

  try {
    getDataMovies("movie");
  } catch (error) {
    console.log(error);
  }

  try {
    getDataMovies("tv");
  } catch (error) {
    console.log("error");
  }

  try {
    getDataMoviesMore("movie");
  } catch (error) {
    console.log("error");
  }

  try {
    getDataMoviesMore("tv");
  } catch (error) {
    console.log("error");
  }

  return (
    <div className="app__container">
      <Navbar />
      <RouterMovie />
    </div>
  );
}

export default App;
