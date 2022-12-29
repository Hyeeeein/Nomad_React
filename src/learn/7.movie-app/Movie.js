import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, year, genres, runtime, summary, poster }) {
  return (
    <li>
      <Link to={`/movie/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p>Year: {year}</p>
      <div>
        {/* genres && -> genres 가 없는 경우를 위해 추가 */}
        Genres :
        {genres &&
          genres.map((g) => (
            <span style={{ marginRight: 10 }} key={g}>
              {g}
            </span>
          ))}
      </div>
      <p>Runtime: {runtime}</p>
      <img src={poster} alt={title} />
      <p>Summary: {summary}</p>
    </li>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  runtime: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
