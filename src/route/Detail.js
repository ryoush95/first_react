import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>
        <Link to="/hello">asdasd</Link>
      </h1>
    </div>
  );
}

export default Detail;
