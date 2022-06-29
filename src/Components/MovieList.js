import React, { useState } from "react";
import MovieCard from "./MovieCard";

const DATA = [
  {
    id: 1,
    title: "Game Of Thrones ",
    description:
      "In the Game of Thrones, you either win or you die. In the mythical continent of Westeros, nine families of higher nobility (Targaryen, Lannisters, Starks, Tyrell, Martell, Greyjoys, Baratheons and Boltons) scramble bitterly to gain power over the seven kingdoms and the Iron throne..",
    posterURL: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ-tLgIt3dwgSlbWGnWFdzCiNuxifSvpJCCTk8dsODbSHuiRsu5",
    rating: 9,
    year:  2011
    ,
    stars: "Kit Harington, Emilia Clarke, Sophie Turner, Peter Dinklage",
  },
  {
    id: 2,
    title: "breaking bad",
    description:
      "Created by Vince Gilligan, the series follows the exploits of Walter White, a modest high school chemistry teacher, who discovers a new purpose in life when he learns he has terminal cancer and turns to a life of crime to provide for his family.",
    posterURL:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSMK4g8HWZJO2XaBkoLPn8SCSo0V5NtO6MwRQ_biDCrznwD_b_R",
    rating: 9,
    year:  2008,
    stars: "Bryan Cranston ,Bryan Cranston",
  },
  {
    id: 3,
    title: "Peaky Blinders",
    description:
      "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby. A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg",
    rating: 8,
    year:  2013,
    stars: " Cillian Murphy, Tom Hardy ",
  },
];
const styloo = {
  width: "97%",
  padding: "17px",
  borderWidth: "1px",
  border: "2px bold black",
  borderRadius: "15px",
};
const MovieList = () => {
  const [movieList, setMovieList] = useState(DATA);
  const [search, setSearch] = useState("");
  const handleClick = () => {
    setMovieList(
      movieList.filter(
        (movie) => movie.title.toLowerCase().includes(search.toLowerCase()) //search by title
      )
    );

  
  };
  return (
    <div>
      <div className="search-box">
        <input
          style={styloo}
          class="crayons-header--search-input crayons-textfield"
          type="text"
          id="6"
          name="q"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          aria-label="Search"
          onClick={handleClick}
          className="c-btn c-btn--icon-alone absolute inset-px left-auto mt-0 py-0 search-btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            class="crayons-icon c-btn__icon"
          >
            <path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path>
          </svg>
        </button>
      </div>
      {movieList.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          description={movie.description}
          posterURL={movie.posterURL}
          rating={movie.rating}
          year={movie.year}
          stars={movie.stars}
        />
      ))}
    </div>
  );
};

export default MovieList;