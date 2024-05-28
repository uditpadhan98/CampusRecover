import "./layout.scss";
import Navbar from "../../components/navbar/navbar";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

function RequireAuth() {
  // const { currentUser } = useContext(AuthContext);
  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  if (!currentUser) return <Navigate to="/login" />;
  else {
    return (
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    );
  }
}

export {Layout,RequireAuth};