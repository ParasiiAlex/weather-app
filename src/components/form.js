// eslint-disable-next-line no-unused-vars
import React from "react";

const Form = props => (
  <form onSubmit={props.weatherMethod} className="container col-md-6">
    <div className="form-row">
      <div className="form-group col-8">
        <input
          type="text"
          name="city"
          placeholder="Your City"
          className="form-control"
        />
      </div>
      <div className="form-group col-4">
        <button type="submit" className="btn btn-primary">
          Get Weather
        </button>
      </div>
    </div>
  </form>
);

export default Form;
