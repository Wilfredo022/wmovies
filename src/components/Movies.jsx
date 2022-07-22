import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataMovies } from "../api/getDataMovies";
import { getDataMoviesMore } from "../api/getDataMoviesMore";
import { SectionCards } from "./SectionCards";

export const Movies = () => {
  const { pageMovie } = useSelector((state) => state?.wmovie);

  window.scrollTo(0, 0);

  return (
    <div className="movies__container">
      <div className="movies__title">
        <h1>Movies</h1>
        <form>
          <input type="text" placeholder="Search movie" autoComplete="off" />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
      <div className="movies__cards">
        {pageMovie?.map((card, index) => {
          if (card.poster_path === undefined) {
            return;
          }

          return <SectionCards key={index * 2} card={card} />;
        })}
      </div>

      {/* <button onClick={() => handleClick()}>more</button> */}
    </div>
  );
};
