import { Outlet } from "react-router-dom";
import Sidebar from "../components/watchlist/Sidebar";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setMobileSidebarShow } from "../store/slices/watchlist";
import MobileSidebar from "../components/watchlist/MobileSidebar";

const Layout = () => {
  const dispatch = useDispatch();

//Open sidebar in small screen as slider
  const handleSider = () => {
    dispatch(setMobileSidebarShow(true));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 d-none d-md-block">
          <Sidebar />
        </div>
        <div className="col-12 d-md-none">
          <Button variant="danger" className="w-100" onClick={handleSider}>
            See My lists
          </Button>
          <MobileSidebar />
        </div>
        <div className="col">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
