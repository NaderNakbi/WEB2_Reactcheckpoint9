import React, { useState } from "react";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [MovieLists, setMovieLists] = useState([])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/:id" element={<Description list={list} />} /> */}
          <Route path="/:id" element={<MovieDetail MovieLists={MovieLists}/>} />
          <Route path="/" element={<MovieList setMovieLists={setMovieLists}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
