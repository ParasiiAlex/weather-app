import React from "react";

const News = props => (
  <div>
    {props.news_name && (
      <>
        <hr />
        <div className="container bg-light border border-secondary rounded">
          <div className="text-primary">
            <h6>
              Source: <em>{props.news_name}</em>
            </h6>
            <h6>
              Title: <em>{props.news_title}</em>
            </h6>
            <h7>
              <b>Description:</b> {props.news_description}
            </h7>
            <br />
            <a
              className="text-success"
              target="_blank"
              rel="noopener noreferrer"
              href={props.news_url}
            >
              Go to Site!
            </a>
          </div>
          <div className="text-secondary" />
        </div>
      </>
    )}
    {props.news_error && (
      <>
        <br />
        <h4 className="text-danger bg-warning jumbotron col-10 container text-center">
          <em>{props.news_error}</em>
        </h4>
      </>
    )}
  </div>
);

export default News;
