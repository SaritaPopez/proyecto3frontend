import { useState } from 'react';
import PropTypes from 'prop-types';

import './homeSearch.css';

const HomeSearch = ({ searchParams, setSearchParams }) => {
  const [keyword, setKeyword] = useState(searchParams.get('keyword') || '');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams(new URLSearchParams({ keyword }));
  };

  return (
    <>
      <form
        className='container'
        onSubmit={(e) => {
          e.preventDefault();

          setSearchParams(new URLSearchParams({ keyword }));
        }}
      >
        <input
          className='searchbar'
          type='search'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className='buttonsearch' type='submit'>
          <img src='src/assets/search.png' alt='lupa con lineas' />
        </button>
      </form>
    </>
  );
};

HomeSearch.propTypes = {
  searchParams: PropTypes.any,
  setSearchParams: PropTypes.any,
};

export default HomeSearch;
