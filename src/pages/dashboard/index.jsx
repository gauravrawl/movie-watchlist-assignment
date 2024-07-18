/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import SearchView from "../../components/watchlist/SearchView";
import useMovie from "../../customHook/useMovie";
import { useEffect, useState } from "react";
import { setWatchlists } from "../../store/slices/watchlist";
import toast from "react-hot-toast";

const Dashboard = () => {
  const { movieNameSearch, watchlists, currentWatchList } = useSelector((state) => state.watchlist);
  const { activeUserEmail } = useSelector((state)=>state.auth)
  const dispatch = useDispatch()

  //Default movies to show
  const defaultMovie = "batman";  
  const searchQuery = `&s=${movieNameSearch || defaultMovie}`;
  const { isSearching, data } = useMovie(searchQuery);

//FUnction to add movies to watchlist
  const addToWatchlist = (movie) => {
    if (Object.keys(watchlists)?.length === 0) {
      toast.error('first, create a watchlist');
    } else {
      const currentList = watchlists[currentWatchList];
      const movieExists = currentList?.some((item) => item?.imdbID === movie?.imdbID); 
      if (movieExists) {
        toast.error('Exists in this watchlist already');
      } else {
        dispatch(setWatchlists({
          ...watchlists,
          [currentWatchList] : [...currentList, movie]
        }));
        localStorage.setItem(`${activeUserEmail}`, JSON.stringify({
          ...watchlists,
          [currentWatchList] : [...currentList, movie]
        }));
        toast.success(`Added to ${currentWatchList}`);
        return 'added'
      }
    }
  };
  
  return (
    <div className="d-flex flex-column justify-content-between p-2">
      <div className="border border-danger rounded mb-2">
        <h1 className="p-2">
          Welcome to <span className="text-danger">Watchlists</span>
        </h1>
        <p className="p-2">
          Browse movies, add them to watchlist, just click on the ✰ icon to add
          to{" "}
          <span className="text-success text-capitalize">
            {currentWatchList ? currentWatchList : "watchlist"}
          </span>
        </p>
      </div>
      <SearchView
        addToWatchlist={addToWatchlist}
        movieData={data}
        isSearching={isSearching}
      />
    </div>
  );
};

export default Dashboard;
