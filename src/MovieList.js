import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import BarNav from "./BarNav";
import Item from "./Item";
import AddMovie from "./AddMovie";

function MovieList({ setMovieLists }) {
  const [movies, setMovie] = useState([
    {
      name: "John Wick 1",
      image:"https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
      rate: "3",
      desc: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
      trailer: <iframe width="853" height="480" src="https://www.youtube.com/embed/C0BMx-qxsP4" title="John Wick Official Trailer #1 (2014) - Keanu Reeves, Willem Dafoe Movie HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    },
    {
      name: "Creed",
      image: "https://upload.wikimedia.org/wikipedia/en/2/24/Creed_poster.jpg",
      rate: "4",
      desc: "The former World Heavyweight Champion Rocky Balboa serves as a trainer and mentor to Adonis Johnson, the son of his late friend and former rival Apollo Creed.",
      trailer: <iframe width="853" height="480" src="https://www.youtube.com/embed/Uv554B7YHk4" title="Creed - Official Trailer [HD]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    },
    {
      name: "Avengers Endgame",
      image:"https://images-na.ssl-images-amazon.com/images/I/81ExhpBEbHL._SY445_.jpg",
      rate: "3",
      desc: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      trailer: <iframe width="853" height="480" src="https://www.youtube.com/embed/TcMBFSGVi1c" title="Marvel Studios' Avengers: Endgame - Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    },
    {
      name: "Spiderman Homecoming",
      image:"https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg",
      rate: "3",
      desc: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
      trailer: <iframe width="853" height="480" src="https://www.youtube.com/embed/rk-dF1lIbIg" title="SPIDER-MAN: HOMECOMING - Official Trailer (HD)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    },
  ]);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [searchTextFilter, setSearchTextFilter] = useState("");

  const filteredMovies = useMemo(() => {
    const res = movies.filter(
      (movie) =>
        movie.rate >= ratingFilter &&
        movie.name.toLowerCase().includes(searchTextFilter.toLowerCase())
    );
    console.log(movies, res);
    return res;
  }, [movies, ratingFilter, searchTextFilter]);
  useEffect(() => {
    setMovieLists(movies);
  });
  return (
    <div>
      <BarNav
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
        searchTextFilter={searchTextFilter}
        setSearchTextFilter={setSearchTextFilter}
      />
      {filteredMovies.map((e, index) => (
        <Link key={index} to={"/" + index}>
          <Item name={e.name} image={e.image} rate={e.rate}></Item>
        </Link>
      ))}
      div
      <AddMovie movies={movies} setMovie={setMovie} />
    </div>
  );
}

export default MovieList;
