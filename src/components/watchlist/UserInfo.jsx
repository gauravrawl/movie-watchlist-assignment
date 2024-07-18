import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setMobileSidebarShow } from "../../store/slices/watchlist"
import LogoutIcon from "../common/LogoutIcon"
import ProfileIcon from "../common/ProfileIcon"
import { setShortTitle } from "../../utils/function"

const UserInfo = () => {
  const { activeUserEmail } = useSelector((state)=>state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = () =>{
    sessionStorage.removeItem('activeUser')
    navigate('/')
    //Set mobile-siderbar state to false
    dispatch(setMobileSidebarShow(false))
    toast.success('Logout successful')
  }

  return (
    <div className="d-flex justify-content-between align-items-center border rounded p-2">
      <div className="d-flex justify-content-center align-items-center gap-2">
        <div>
          <ProfileIcon />
        </div>
        <div className="text-secondary text-sm">
          <span title={activeUserEmail}> {setShortTitle(activeUserEmail, 16)}</span>
        </div>
      </div>
      <div
        style={{ cursor: "pointe" }}
        onClick={() => handleLogout()}
        className="px-4"
        title="Logout"
      >
        <LogoutIcon />
      </div>
    </div>
  );
}

export default UserInfo
