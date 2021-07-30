import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.css';

function Movie({ title, year, summary, poster, genres }) {
  return (
    <div className="movie">

      <Link to={{pathname: '/detail', state: { year, title, summary, poster, genres }}}>

        <img src={poster} alt={title} title={title} />
        {/* title: 그림위에 마우스 올리면 나타나는 글자 */}
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
          {/* summary.slice(0,180) 180자까지만 내용을 보여줌 */}
          <ul className="movie__genres">
            {genres.map((genre, i) => {
              return (
                <li key={i} className="movie__genre">{genre}</li>
              );
            })}
          </ul>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default Movie;
