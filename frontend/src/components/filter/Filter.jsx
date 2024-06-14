// import { useState } from "react";
import "./filter.scss";
// import { useSearchParams } from "react-router-dom";

function Filter() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [query, setQuery] = useState({
//     type: searchParams.get("type") || "",
//     city: searchParams.get("city") || "",
//     property: searchParams.get("property") || "",
//     minPrice: searchParams.get("minPrice") || "",
//     maxPrice: searchParams.get("maxPrice") || "",
//     bedroom: searchParams.get("bedroom") || "",
//   });

//   const handleChange = (e) => {
//     setQuery({
//       ...query,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleFilter = () => {
//     setSearchParams(query);
//   };

  return (
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
            // onChange={handleChange}
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
          <button>
            <img src="/search.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;