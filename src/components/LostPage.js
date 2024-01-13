import React from "react";
import "../Styles/LostPage.css"
import { LostProducts } from "./LostProducts";
import { Link } from "react-router-dom";

export const LostPage = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="hero__categories">
                <div className="hero__categories__all">
                  <i className="fa fa-bars"></i>
                  <span>Categories</span>
                </div>
                <ul>
                  <li>
                    <a href="/">Electronics</a>
                  </li>
                  <li>
                    <a href="/">Personal Items</a>
                  </li>
                  <li>
                    <a href="/">College Supplies</a>
                  </li>
                  <li>
                    <a href="/">Clothing Items</a>
                  </li>
                  <li>
                    <a href="/">Sports Equipment</a>
                  </li>
                  <li>
                    <a href="/">Miscellaneous</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="hero__search">
                <div className="hero__search__form">
                  <form action="#">
                    <input
                      type="text"
                      placeholder="What do you searching ?"
                      fdprocessedid="co4m9e"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary search-btn"
                      fdprocessedid="xhln5h"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
              <div>
                <h4>
                  Lost something on campus? Help us reunite you with your belongings! Report your lost items 
                  here and let the campus community assist in their rediscovery
                </h4>
                <div className="d-flex align-items-center justify-content-center pt-4">
                  <Link to="/lost-form" className="btn btn-primary">Report a Lost Item</Link>
                  {/* <button className="btn btn-primary">Report a Lost Item</button> */}
                </div>
              </div>
            </div>
          </div>
          <LostProducts/>
          <div className="d-flex align-items-center justify-content-center pt-4">
            <Link to="/found-form" className="btn btn-primary">Found Something New !!</Link>
            {/* <button className="btn btn-primary">Found Something New !!</button> */}
          </div>
        </div>
      </section>
    </div>
  );
};
