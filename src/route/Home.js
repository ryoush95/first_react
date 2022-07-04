import { useState, useEffect } from "react";
import Movie from "../component/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovie(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>
        {loading ? (
          "Loading.."
        ) : (
          <div>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                mid={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </h1>
      <hr />
    </div>
  );
}

export default Home;
