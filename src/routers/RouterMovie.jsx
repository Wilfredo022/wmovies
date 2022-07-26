import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Movies } from "../components/Movies";
import { SelectionCard } from "../components/SelectionCard";
import { Tv } from "../components/Tv";

export const RouterMovie = () => {
  return (
    <Routes>
      <Route path="/wmovies/*" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/tv" element={<Tv />} />
      <Route path="/selected" element={<SelectionCard />} />
    </Routes>
  );
};
