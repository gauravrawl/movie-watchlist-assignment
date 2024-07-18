import { useDispatch, useSelector } from "react-redux";
import { setCurrentWatchList, setWatchlists } from "../../store/slices/watchlist";
import { useState } from "react";
import toast from "react-hot-toast";

const CreateWatchlist = () => {
  const [newWatchlistName, setNewWatchlistName] = useState('');
  const { activeUserEmail } = useSelector((state)=> state.auth)
console.log(activeUserEmail)
  const {  watchlists } = useSelector((state) => state.watchlist);
const dispatch = useDispatch()
    const createWatchlist = (name) => {
        const newWatchlist = { ...watchlists, [name]: [] }
        console.log(newWatchlist)
        localStorage.setItem(`${activeUserEmail}`, JSON.stringify(newWatchlist));
        dispatch(setWatchlists(newWatchlist));
        dispatch(setCurrentWatchList(name));
      };

    const handleCreateWatchlist = (e) => {
        e.preventDefault()
        if (newWatchlistName && !watchlists[newWatchlistName]) {
         createWatchlist(newWatchlistName);
         setNewWatchlistName('');
        }
        else{
         toast.error('Watchlist already exists')
        }
      };
  return (
    <form className="d-flex">
      <input
        type="text"
        className="form-control "
        value={newWatchlistName}
        onChange={(e) => setNewWatchlistName(e.target.value)}
        placeholder="create new"
      />
      <button className="btn btn-danger" disabled={!newWatchlistName ? true : false} onClick={(e)=>handleCreateWatchlist(e)}>+</button>
    </form>
  )
}

export default CreateWatchlist
