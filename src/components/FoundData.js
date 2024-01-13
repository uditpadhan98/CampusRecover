import React from "react";
import "../Styles/LostData.css";

export const FoundData = () => {
  return (
    <div>
      <div className="container">
        <div className=" text-center mt-1 ">
          <h1>Found Something !!!</h1>
        </div>

        <div className="row ">
          <div className="col-lg-7 mx-auto">
            <div className="card mt-2 mx-auto p-4 bg-light">
              <div className="card-body bg-light">
                <div className="container">
                  <form id="contact-form">
                    <div className="controls">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                          <label for="itemDescription">Item Description:</label>
                          <textarea
                              id="form_message"
                              name="message"
                              className="form-control"
                              
                              rows="3"
                              required="required"
                              data-error="Please, leave us a message."
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                          <label for="foundLocation">Location Found:</label>
                            <input
                              id="form_email"
                              type="text"
                              name="email"
                              className="form-control"
                              
                              required="required"
                              data-error="Valid email is required."
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                          <label for="foundDateTime">Date and Time Found:</label>
                            <input
                              id="form_lastname"
                              type="datetime-local"
                              name="surname"
                              className="form-control"
                              
                              required="required"
                              data-error="Lastname is required."
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                          <label for="uploadPhoto">Upload Photo:</label>
                          <input
                              id="form_email"
                              type="file"
                              name="email"
                              className="form-control"
                              
                              required="required"
                              data-error="Valid email is required."
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                          <label for="finderContact">Finder's Contact Information:</label>
                          <input
                              id="form_email"
                              type="text"
                              name="email"
                              className="form-control"
                              
                              required="required"
                              data-error="Valid email is required."
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label for="form_need">
                              Select Category *
                            </label>
                            <select
                              id="form_need"
                              name="need"
                              className="form-control"
                              required="required"
                              data-error="Please specify your need."
                            >
                              <option value="" selected disabled>
                                Select Category
                              </option>
                              <option>Electronics</option>
                              <option>Personal Items</option>
                              <option>College Supplies</option>
                              <option>Clothing Items</option>
                              <option>Sports Equipment</option>
                              <option>Miscellaneous</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <input
                            type="submit"
                            className="btn btn-primary btn-send mt-3  pt-2 btn-block
                            "
                            value="Submit"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
