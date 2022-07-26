import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import apiConfig from "../api/apiConfig";
import { numRandom } from "../helpers/numRandom";
import { SectionCards } from "./SectionCards";

export const Home = () => {
  const { trending, tv, isLoading } = useSelector((state) => state?.wmovie);

  window.scrollTo(0, 0);

  if (trending == null && isLoading) {
    return;
  }

  const num = numRandom(4, 7);

  const { title, poster_path, backdrop_path, id, overview } = trending[num];

  if (title === undefined || title === null || poster_path === undefined) {
    return;
  }
  const background = apiConfig.originalImage(backdrop_path);

  const myStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url("${background}")`,
  };

  return (
    <div>
      <div className="home__hero" style={myStyle}>
        <div className="home__info">
          <h1>{title}</h1>
          <p>{overview}</p>

          <button>Watch now</button>
        </div>

        <div className="home__card">
          <img src={apiConfig.w500Image(poster_path)} alt={title} />
        </div>
      </div>

      <div className="home__section-container">
        <div className="home__section-title">
          <h1>Trending Movies</h1>

          <button>
            <Link to="/movies">See more</Link>
          </button>
        </div>
        <div className="home__section-cards">
          {trending?.map((card) => {
            return <SectionCards key={card.id} card={card} />;
          })}
        </div>
      </div>

      <div className="home__section-container">
        <div className="home__section-title">
          <h1>Trending Tv</h1>
          <button>
            <Link to="/tv">See more</Link>
          </button>
        </div>
        <div className="home__section-cards">
          {tv?.map((card) => {
            if (card.poster_path == null) {
              return;
            }
            return <SectionCards key={card.id} card={card} />;
          })}
        </div>
      </div>
    </div>
  );
};
