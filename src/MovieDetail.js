import { useParams } from "react-router-dom";
import "./MovieDetail.css";
function MovieDetail({ MovieLists }) {
  const params = useParams();
  const movie = MovieLists.find((anything, index) => index === +params.id); // index est le parametre par defaut de Arrow Function
  console.log(params.id);
  console.log("MovieLists: ", MovieLists);
  console.log(movie);
  return (
    <div className="MovieDetail">
      {/* <h1>MovieDetail {params.id}</h1>; */}
      <img src={movie.image}></img>
      <p>{movie.name}</p>
      <span>Rate : {movie.rate}</span>
      <p>{movie.desc}</p>
      {movie.trailer}
    </div>
  );
}
export default MovieDetail;
