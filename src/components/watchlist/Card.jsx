/* eslint-disable react/prop-types */
import { useState } from 'react';
import watchlist_icon from '../../assets/book-mark.png'
import addedToWatchlist from '../../assets/bookmarkAdded.png'
import removeFromWatchlist from '../../assets/remove.png'
import posterPlaceholder from '../../assets/posterPlaceholder.png'
import { Link } from 'react-router-dom';

const Card = ({movieData, key, handleClick, buttonType}) => {
  const [added, setAdded] = useState(false)

  const handleAdded = (param)=>{
   const addedSuccess = handleClick(param)
    //temprory dispaly tick icon after add
    if(addedSuccess === 'added')
    setAdded(true)
  }

  return (
    <div className="card" key={key} style={{ width: "100%", height: "auto", position: "relative" }}>
      <img
        src={!movieData?.Poster || movieData?.Poster === "N/A" ?  posterPlaceholder : movieData?.Poster}
        className="card-img-top"
        style={{ width: "100%", height: "120px" }}
        alt="Movie poster"
      />
      {buttonType === 'Add to watchlist' ?

        (<img
        src={added ? addedToWatchlist : watchlist_icon}
        className="add-watchlist-icon"
        style={{ width: "25px", height:'25px', position:'absolute', top: '1%', cursor: 'pointer' }}
        alt="watchlist"
        onClick={() =>handleAdded(movieData)}
      />) :
         (<img
        src={removeFromWatchlist}
        className="rounded remove-watchlist-icon"
       
        alt="watchlist"
        onClick={() =>handleClick(movieData?.imdbID)}
      />) 

      }
      <div className="card-body" style={{ height: "10rem" }}>
        <h5 className="card-title" style={{fontSize: '1.2rem'}}>{movieData?.Title?.slice(0,25)+ '...'}</h5>
        <p className="card-text">Year: {movieData?.Year}</p>
      </div>
        <Link to={`/movie-details/${movieData?.imdbID}`}><button className='btn btn-danger w-100' style={{fontSize: '10px'}}>View more..</button></Link>
    </div>
  );
}

export default Card;
