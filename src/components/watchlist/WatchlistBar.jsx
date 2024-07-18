/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { setShortTitle } from "../../utils/function";

const WatchlistBar = ({filterItems, goList}) => {
    const { currentWatchList } = useSelector((state) => state.watchlist);
  return (
    <div className="watchlist-bar pb-4">
      {filterItems?.map((watchlist) => (
        <div
          className={`rounded d-flex border w-100 mb-2 mt-2 p-2 ${
            currentWatchList === watchlist ? "border-primary" : ""
          }`}
          onClick={() => goList(watchlist)}
          style={{ cursor: "pointer", textTransform: "capitalize" }}
          key={watchlist}
        >
          <div className="rounded-full list-item-circle text-white">
            {watchlist?.split("")[0]}
          </div>
          <span >{setShortTitle(watchlist, 17)}</span>
        </div>
      ))}
    </div>
  );
}

export default WatchlistBar
