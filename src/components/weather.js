// eslint-disable-next-line no-unused-vars
import React from "react";
import News from "./news";

const Weather = props => (
  <div className="container col-md-6">
    {props.city && (
      <div className="form-row">
        <div className="jumbotron col-6 text-primary">
          <div className="col text-center my-auto">
            <img src={props.flag} alt="Flag img." />
          </div>
          <p>City name: {props.city}</p>
          <p>Country: {props.country}</p>
          <p>Current temperature: {props.temp}</p>
          <p>Sunset time: {props.sunset}</p>
        </div>
        <div className="col-6 text-center">
          <button
            className="btn btn-secondary btn-sm"
            onClick={props.newsMethod}
          >
            Get some News
          </button>
          <News
            id="reset"
            news_name={props.news_name}
            news_title={props.news_title}
            news_description={props.news_description}
            news_url={props.news_url}
            news_error={props.news_error}
          />
        </div>
      </div>
    )}
    {props.error && (
      <h4 className="text-danger bg-warning jumbotron col-11 container text-center">
        <em>{props.error}</em>
      </h4>
    )}
  </div>
);

export default Weather;
