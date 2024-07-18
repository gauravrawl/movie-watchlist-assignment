/* eslint-disable react/prop-types */
import posterPlaceholder from '../../assets/posterPlaceholder.png'
import { ratingFace } from '../../utils/function';
import './details.css'


const Details = ({details}) => {
  return (
    <div className="detail-container mt-5 rounded ">
      <div className=" d-flex flex-column flex-md-row gap-4">
        <div className=" details-poster rounded">
          <img
            src={
              !details?.Poster || details?.Poster === "N/A"
                ? posterPlaceholder
                : details?.Poster
            }
            alt={"Movie Poster"}
          />
        </div>
        <div className="detail-card-content p-4 d-flex flex-column justify-content-center align-items-start rounded">
          <h2 className="title">{details?.Title}</h2>
          <p className="card-text">{details?.imdbRating} / 10 {ratingFace(details?.imdbRating)}</p>
          <p className="card-text"><span className='plot-heading'>Plot summary:</span> {details?.Plot}</p>
        </div>
      </div>
    </div>
  );
}

export default Details
