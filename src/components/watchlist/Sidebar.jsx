import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import UserInfo from "./UserInfo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import {
  setCurrentWatchList,
  setMobileSidebarShow,
  setWatchlists,
} from "../../store/slices/watchlist";
import { Button } from "react-bootstrap";
import CreateWatchlist from "./CreateWatchlist";
import WatchlistBar from "./WatchlistBar";

const Sidebar = () => {
  const [searchListItem, setSearchListItem] = useState("");
  const { watchlists, currentWatchList } = useSelector(
    (state) => state.watchlist
  );
  const [listData, setListData] = useState([]);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { activeUserEmail } = useSelector((state) => state.auth);

  /* Update watchlist & current selected watchlist */
useEffect(() => {
  const data = JSON.parse(localStorage.getItem(activeUserEmail));
  dispatch(setWatchlists(data));
  dispatch(setCurrentWatchList(currentWatchList || Object.keys(data)[0]));
}, [activeUserEmail, currentWatchList, dispatch]);

  useEffect(() => {
    if (watchlists) {
      setListData(watchlists);
    }
  }, [watchlists]);

  /* Search data block, execute when user search */
  const filterItems = useMemo(() => {
    const keysData = Object.keys(listData);
    return keysData.filter(
      (item) =>
        item && item.toLowerCase().includes(searchListItem.toLowerCase())
    );
  }, [listData, searchListItem]);

  /* function to redirect home movie lists search */
  const goHome = () => {
    navigate("/dashboard");
    dispatch(setMobileSidebarShow(false));
  };

  /* function to redirect movies in selected watchlist */
  const goList = (watchlist) => {
    navigate("/list-view");
    dispatch(setCurrentWatchList(watchlist));
    dispatch(setMobileSidebarShow(false));
  };
  return (
    <div className="sidebar d-flex flex-column border-end px-2 align-items-between">
      <div>
        <h1> Watchlists </h1>
        <SearchBar
          onChange={(e) => setSearchListItem(e.target.value)}
          value={searchListItem}
        />
        <Button
          variant="danger"
          className="w-100 my-2"
          onClick={() => goHome()}
        >
          Home
        </Button>
        <CreateWatchlist />
        <WatchlistBar filterItems={filterItems} goList={goList} />
      </div>
      <div className="user-info bg-light w-100">
        <UserInfo />
      </div>
    </div>
  );
};

export default Sidebar;
