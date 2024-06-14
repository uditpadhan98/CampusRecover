import { useState } from "react";
import "./newPostPage.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function NewPostPage() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const creatorId = useSelector((state) => state.user._id);
  // console.log(creatorId);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);
    // console.log(inputs);

    try {
      const requestBody = {
        creator: creatorId,
        category: inputs.category,
        longitude: inputs.longitude,
        latitude: inputs.latitude,
        address: inputs.address,
        title: inputs.title,
        description: value,
        images: images,
      };
      // console.log(requestBody);
      const res = await fetch("http://localhost:3001/items/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (res.ok) {
        // console.log(res.data);
        navigate("/" + res.data.id);
      }
    } catch (err) {
      setError(err.message);
      console.log("Publish Listing failed", err.message);
    }
  };
  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Add New Post</h1>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" />
            </div>
            <div className="item">
              <label htmlFor="type">Category</label>
              <select name="category">
                <option value="electronics">Electronics</option>
                <option value="jewelry">Jewelry</option>
                <option value="money">Money</option>
                <option value="academic">Academic</option>
                <option value="cards">Cards</option>
                <option value="miscellaneous">Miscellaneous</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="address">Address</label>
              <input id="address" name="address" type="text" />
            </div>
            <div className="item description">
              <label htmlFor="desc">Description</label>
              <ReactQuill theme="snow" onChange={setValue} value={value} />
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input id="latitude" name="latitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input id="longitude" name="longitude" type="text" />
            </div>
            <button className="sendButton">Add</button>
            {error && <span>error</span>}
          </form>
        </div>
      </div>
      <div className="sideContainer">
        {images.map((image, index) => (
          <img src={image} key={index} alt="" />
        ))}
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "Udit98",
            uploadPreset: "CampusRecover",
            folder: "posts",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
}

export default NewPostPage;
