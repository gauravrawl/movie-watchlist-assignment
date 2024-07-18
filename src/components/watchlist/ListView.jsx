import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { setWatchlists } from "../../store/slices/watchlist";
import { useEffect } from "react";

const ListView = () => {
  const {  watchlists, currentWatchList } = useSelector((state) => state.watchlist);
  const { activeUserEmail } = useSelector((state) => state.auth);

  const dispatch = useDispatch()

  //Remove movie from watchlist using imdbId in data
  const removeFromWatchlist = (movieId) => {
    console.log(movieId)
    const updatedData = {
      ...watchlists,
      [currentWatchList]: watchlists[currentWatchList]?.filter((movie) => movie?.imdbID !== movieId)
    }
    dispatch(setWatchlists(updatedData));
    localStorage.setItem(`${activeUserEmail}`, JSON.stringify(updatedData));
  };
 
  //Updating latest data from local
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem(activeUserEmail))
    dispatch(setWatchlists(data))
    },[activeUserEmail, dispatch])
    
  const renderListData = () => {
    if (!watchlists[currentWatchList]?.length ) {
      return <div className="text-center pt-5">No record found</div>;
    }
 
    return (
      <div className="container mt-3 list-scroll">
        <div className="row">
          {watchlists[currentWatchList]?.map((data) => (
            <div className="col-6 col-md-6 col-xl-2 col-xxl-2 pb-4" key={data?.imdbID}>
              <Card
                movieData={data}
                handleClick={removeFromWatchlist}
                buttonText={"Remove from watchlist"}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className="w-100 text-left text-capitalize p-2">
      <h1 className="pt-4 px-4">{currentWatchList}</h1>
      {renderListData()}
    </div>
  );
};

export default ListView;
