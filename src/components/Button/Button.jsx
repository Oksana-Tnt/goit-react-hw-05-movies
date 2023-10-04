import React from 'react';

const Button = ({ loadMoreMovies }) => {
  return (
    <div className="d-grid gap-2">
      <button
        className="btn btn-outline-success"
        type="button"
        onClick={loadMoreMovies}
      >
        Load more...
      </button>
    </div>
  );
};

export default Button;
