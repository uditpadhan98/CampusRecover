import { useState } from "react";
import "./searchBar.scss";
// import { Link } from "react-router-dom";

const types = ["lost", "found"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "lost",
    city: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form onSubmit={handleChange}>
        <label htmlFor="category">Category</label>
          <select
            name="category"
            id="type"
          >
            <option value="">Any</option>
            <option value="electronics">Electronics</option>
            <option value="jewelry">Jewelry</option>
            <option value="money">Money</option>
            <option value="academic">Academic</option>
            <option value="cards">Cards</option>
            <option value="miscellaneous">Miscellaneous</option>
          </select>
        <a href="">
        <button>
            <img src="/search.png" alt="" />
          </button>
        </a>
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