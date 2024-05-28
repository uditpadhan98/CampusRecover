import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
// import { useNotificationStore } from "../../lib/notificationStore";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
    const [open, setOpen] = useState(false);

    // const { currentUser } = useContext(AuthContext);
    const currentUser = useSelector((state) => state.user);

  //   const fetch = useNotificationStore((state) => state.fetch);
  //   const number = useNotificationStore((state) => state.number);

  //   if(currentUser) fetch();

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span><span className="logo-1">Campus</span>Recover</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </div>
      <div className="right">
        {currentUser ? (
        <div className="user">
          <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
          <span>{currentUser.username}</span>
          <Link to='/profile' className="profile">
            {/* <div className="notification">3</div> */}
            <span>Profile</span>
          </Link>
        </div>
        ):
        (<>
          <a href="/login">Sign in</a>
          <a href="/register" className="register">
            Sign up
          </a>
        </>)}

        {/* {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              {number > 0 && <div className="notification">{number}</div>}
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login">Sign in</a>
            <a href="/register" className="register">
              Sign up
            </a>
          </>
        )} */}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
