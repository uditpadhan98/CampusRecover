import "./listPage.scss";
import Card from "../../components/card/Card";
import { listData } from "../../lib/dummyData";
import Map from "../../components/map/Map";
import { useDispatch, useSelector } from "react-redux";
import { setListings } from "../../redux/state";
import { useState } from "react";
import { BASE_URL } from "../../Helper";

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
          ? `${BASE_URL}/items?category=${selectedCategory}`
          : `${BASE_URL}/items`,
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
            <h1>Search results for Category</h1>
            <div className="top">
              <div className="item">
                <label htmlFor="category">Category</label>
                <select name="category" id="type" onChange={handleChange}>
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

          {listings ? (
            listings.map((item) => <Card key={item.id} item={item} />)
          ) : (
            <div>Nothing</div>
          )}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data} />
      </div>
    </div>
  );
}

export default ListPage;
