import "./listPage.scss";
// import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import { listData } from "../../lib/dummyData";
import Map from "../../components/map/Map";
// import { Await, useLoaderData } from "react-router-dom";
// import { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setListings } from "../../redux/state";
import { useState } from "react";

function ListPage() {
  const data = listData;
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");

  const listings = useSelector((state) => state.listings);
  // console.log(listings);

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
    console.log(selectedCategory);
  };

  const getFeedListings = async () => {
    try {
      const response = await fetch(
        selectedCategory !== "All"
          ? `http://localhost:3001/items?category=${selectedCategory}`
          : "http://localhost:3001/items",
        {
          method: "GET",
        }
      );

      const data = await response.json();
      console.log(data);
      dispatch(setListings({ listings: data }));
      // setLoading(false);
    } catch (err) {
      console.log("Fetch Listings Failed", err.message);
    }
  };

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <div className="filter">
            <h1>
              Search results for Category
              {/* <b>{searchParams.get("city")}</b> */}
            </h1>
            <div className="top">
              <div className="item">
                <label htmlFor="category">Category</label>
                <select
                  name="category"
                  id="type"
                  onChange={handleChange}
                  // defaultValue={query.type}
                >
                  <option value="">Any</option>
                  <option value="electronics">Electronics</option>
                  <option value="jewelry">Jewelry</option>
                  <option value="money">Money</option>
                  <option value="academic">Academic</option>
                  <option value="cards">Cards</option>
                  <option value="miscellaneous">Miscellaneous</option>
                </select>
              </div>
              <div className="bottom">
                <button onClick={getFeedListings}>
                  <img src="/search.png" alt="" />
                </button>
              </div>
            </div>
          </div>
          
          {listings ? (listings.map((item) => (
            <Card key={item.id} item={item} />
          ))):(
            <div>
              Nothing
            </div>
          )}
          {/* <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) =>
                postResponse.data.map((post) => (
                  <Card key={post.id} item={post} />
                ))
              }
            </Await>
          </Suspense> */}
        </div>
      </div>
      <div className="mapContainer">
         <Map items={data} />
        {/* <Suspense fallback={<p>Loading...</p>}>
          <Await
            resolve={data.postResponse}
            errorElement={<p>Error loading posts!</p>}
          >
            {(postResponse) => <Map items={postResponse.data} />}
          </Await>
        </Suspense> */}
      </div>
    </div>
  );
}

export default ListPage;
