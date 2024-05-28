// import Chat from "../../components/chat/Chat";
// import List from "../../components/list/List";
import "./profilePage.scss";
// import apiRequest from "../../lib/apiRequest";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense, useContext, useEffect, useState } from "react";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";
import axios from "axios";
import { setPropertyList } from "../../redux/state";
import Loader from "../../components/loader/Loader";

import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../../redux/state";

function ProfilePage() {
  //   const data = useLoaderData();

  const [loading, setLoading] = useState(true);
  const [itemLoading, setItemLoading] = useState(true);
  const currentUser = useSelector((state) => state.user);
  const propertyList = currentUser?.propertyList;
  // console.log(currentUser,propertyList);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const getPropertyList = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/users/${currentUser._id}/items`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      // console.log(data)
      dispatch(setPropertyList(data));
      setLoading(false);
      setItemLoading(false);
    } catch (err) {
      console.log("Fetch all properties failed", err.message);
    }
  };
  useEffect(() => {
    getPropertyList();
  }, []);

  const handleLogout = async () => {
    dispatch(setLogout());
    navigate("/");
  };
  return (
    <div className="profilePage">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="details">
            <div className="wrapper">
              {/* <div className="title">
                <h1>User Information</h1>
                <Link to="/profile/update">
                  <button>Update Profile</button>
                </Link>
              </div>
              <div className="info">
                <span>
                  Avatar:
                  
                  <img src={currentUser.avatar || "noavatar.jpg"} alt="" />
                </span>
                <span>
                  Username:
                  <b>{currentUser.username}</b>
                </span>
                <span>
                  E-mail:
                  <b>{currentUser.email}</b>
                </span>
                <button onClick={handleLogout}>Logout</button>
              </div> */}
              <div className="title">
                <h1>My List</h1>
                <Link to="/add">
                  <button>Create New Post</button>
                </Link>
              </div>
              <List propertyList={propertyList} />
            </div>
          </div>
          <div className="details listContainer">
            <div className="wrapper">
              <div className="title">
                <h1>User Information</h1>
                {/* <Link to="/profile/update">
                  <button>Update Profile</button>
                </Link> */}
              </div>
              <div className="info">
                <span>
                  Avatar:
                  <img src={currentUser.avatar || "noavatar.jpg"} alt="" />
                </span>
                <span>
                  Username:
                  <b>{currentUser.username}</b>
                </span>
                <span>
                  E-mail:
                  <b>{currentUser.email}</b>
                </span>
                <button onClick={handleLogout}>Logout</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProfilePage;
