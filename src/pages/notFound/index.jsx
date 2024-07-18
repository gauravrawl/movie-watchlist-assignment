import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="text-center pt-5 rounded p-5">
      <h1>404 Not found</h1>
      <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
        <span>{"<<<"}Back to browse movies dashboard</span>
      </Link>
    </div>
  );
}

export default NotFound
