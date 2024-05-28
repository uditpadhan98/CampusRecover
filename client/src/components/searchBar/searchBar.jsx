import { useState } from "react";
import "./searchBar.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setListings } from "../../redux/state";

// const types = ["lost", "found"];

function SearchBar() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const listings = useSelector((state) => state.listings);

  // const switchType = (val) => {
  //   setQuery((prev) => ({ ...prev, type: val }));
  // };

  const handleChange = (e) => {
    e.prevent.default();
    setQuery(e.target.value);
    console.log(query);
  };

  const getFeedListings = async () => {
    try {
      const response = await fetch(
        query !== ""
          ? `http://localhost:3001/items?category=${query}`
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
    <div className="searchBar">
      <div className="type"></div>
      <form onSubmit={handleChange}>
        <label htmlFor="category">Category</label>
        <select name="category" id="type">
          <option value="">Any</option>
          <option value="electronics">Electronics</option>
          <option value="jewelry">Jewelry</option>
          <option value="money">Money</option>
          <option value="academic">Academic</option>
          <option value="cards">Cards</option>
          <option value="miscellaneous">Miscellaneous</option>
        </select>
        <Link to="/list">
          <button onClick={getFeedListings}>
            <img src="/search.png" alt="" />
          </button>
        </Link>
        {/* <Link
          to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
          <button>
            <img src="/search.png" alt="" />
          </button>
        >
        </Link> */}
      </form>
    </div>
  );
}

export default SearchBar;
