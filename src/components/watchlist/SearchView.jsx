/* eslint-disable react/prop-types */
import { useState, useCallback } from "react";
import Spinner from "../common/Spinner";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import { setMovieNameSearch } from "../../store/slices/watchlist";

const SearchView = ({ movieData, isSearching, addToWatchlist }) => {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const handleSearch = useCallback((e) => {
    e.preventDefault()
    dispatch(setMovieNameSearch(search));
  }, [dispatch, search]);

  const renderMovies = () => {
    if (isSearching) {
      return <Spinner />
    }
    if (!movieData?.length > 0) {
      return <div>No movies found</div>
    }

    return (
      <div className="container mt-2 list-scroll">
        <div className="row">
          {movieData?.map((data, idx) => (
            <div className="col-6 col-md-6 col-xl-2 col-xxl-2 pb-4" key={idx}>
              <Card
                movieData={data}
                handleClick={addToWatchlist}
                buttonType={"Add to watchlist"}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
// We are showing cards after search to avoid renders
  return (
    <div>

      <SearchBar
        handleSearch={handleSearch}
        onChange={(e) => setSearch(e.target.value)}
        buttonVisible={true}
      />
      {renderMovies()}
    </div>
  );
};

export default SearchView;
