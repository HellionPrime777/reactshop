import React from 'react';
import { Search as SearchIcon } from 'react-bootstrap-icons';
import Style from './search.module.css';

function Search() {
  return (
    <div className={`${Style.searchDiv} ${Style.searchDivq}`}>
      <div className={`search-bar`}>
        <input className={`${Style.searchInput}`} type="text" placeholder="Пошук" />
        <button className={`btn btn-primary ${Style.buttonSearch}`}>
          <SearchIcon size={20} />
          Пошук
        </button>
      </div>
    </div>
  );
}

export default Search;

