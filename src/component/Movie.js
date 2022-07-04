import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ mid, coverImg, title, summary, genres }) {
  console.log(summary.length);
  return (
    <div key={mid}>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <img src={coverImg} alt={title} />
        <div>
          <h3>
            <Link to={`/movie/${mid}`}>{title}</Link>
          </h3>
          <p>
            {summary.length > 250 ? summary.slice(0, 250) + "..." : summary}
          </p>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  mid: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
