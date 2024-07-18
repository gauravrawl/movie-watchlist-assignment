import Offcanvas from 'react-bootstrap/Offcanvas';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { setMobileSidebarShow } from '../../store/slices/watchlist';

function MobileSidebar() {
const dispatch = useDispatch()
  const { mobileSidebarShow } = useSelector((state)=>state.watchlist)

  const handleClose = () => {
    dispatch(setMobileSidebarShow(false))
  }
  
  return (
    <>
      <Offcanvas show={mobileSidebarShow} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Sidebar/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MobileSidebar;