import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
// import { userData } from "../../lib/dummyData";
import Map from "../../components/map/Map";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
// import { useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import { useSelector } from "react-redux";

function SinglePage() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  // console.log(id);
  const [post, setPost] = useState([]);
  const currentUser = useSelector((state) => state.user);
  // console.log(currentUser._id);

    const navigate = useNavigate();

  const getListingDetails = async () => {
    try {
      const response = await fetch(`http://localhost:3001/items/${id}`, {
        method: "GET",
      });

      const data = await response.json();
      // console.log(data);
      setPost(data);
      setLoading(false);
    } catch (err) {
      console.log("Fetch Listing Details Failed", err.message);
    }
  };

  useEffect(() => {
    getListingDetails();
  }, []);

  const handleDelete=async () =>{
    try {
      const response = await fetch(`http://localhost:3001/items/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ currentUserId: currentUser._id, creatorId:post.creator._id }),
      });
      
      const data = await response.json();
      // console.log(data);
      if (data.ok) {
        alert("Item Deleted");
        navigate();
      }
      else{
        alert("You are not authorized to delete this post");
      }
      // if(data)
    } catch (err) {
      console.log("Fetch Listing Details Failed", err.message);
    }
  }

  console.log(post);
  return (
    <div className="singlePage">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="details">
            <div className="wrapper">
              <Slider images={post.images} />
              <div className="info">
                <div className="top">
                  <div className="post">
                    <h1>{post.title}</h1>
                    <div className="address">
                      <img src="/pin.png" alt="" />
                      <span>{post.address}</span>
                    </div>
                    <div className="price"> {post.creator.email}</div>
                  </div>
                  <div className="user">
                    <img src={post.creator.image} alt="" />
                    <span>{post.creator.username}</span>
                  </div>
                </div>
                <div
                  className="bottom"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(post.description),
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="features">
            <div className="wrapper">
              <p className="title">General Steps</p>
              <div className="listVertical">
                <div className="feature">
                  <img src="/verify.png" alt="" />
                  <div className="featureText">
                    <span>Verify</span>
                    <p>verify your product from images</p>
                  </div>
                </div>
                <div className="feature">
                  <img src="/contact.png" alt="" />
                  <div className="featureText">
                    <span>Contact</span>
                    <p>Contact the person who found this product</p>
                  </div>
                </div>
                <div className="feature">
                  <img src="/date.png" alt="" />
                  <div className="featureText">
                    <span>When product found</span>
                    {/* <p>Must have 3x income</p> */}
                    <p>{new Date(post.createdAt).toLocaleString()}</p>
                  </div>
                </div>
              </div>
              <p className="title">Location</p>
              <div className="mapContainer">
                <Map items={[post]} />
              </div>
              <div className="buttons">
                <button onClick={handleDelete}>
                  <img src="/delete.png" alt="" />
                  Delete this Post
                </button>
                {/* <button
                onClick={handleSave}
                style={{
                  backgroundColor: saved ? "#fece51" : "white",
                }}
                >
                  <img src="/save.png" alt="" />
                  
                  save
                </button> */}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SinglePage;
