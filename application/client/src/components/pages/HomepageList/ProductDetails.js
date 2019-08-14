import React, { Component } from "react";
import { detailrecipe } from "./tempDetails";

export default class ProductDetails extends Component {
  state = {
    recipe: detailrecipe
  };

  render() {
    const {
      image_url,
      detailpublisher,
      source_url,
      title,
      enviroment
    } = this.state.recipe;
    const { handleIndex } = this.props;
    return (
      <div>
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
                <button
                  className="btn btn-warning text-capitalize mb-5"
                  onClick={() => handleIndex(1)}
                >
                  back to home page
                </button>
                <img src={image_url} className="d-block w-100" alt="recipe" />
              </div>
              <div className="col-10 mx-auto col-md-6 my-3">
                <h6 className="text-uppercase">{title}</h6>
                <h6 className="text-warning text-capitalize text-slanted">
                  provided by {detailpublisher}
                </h6>

                <ul className="list-group mt-4">
                  <h2 className="mt-3 mb-4">Details</h2>
                  {enviroment.map((item, index) => {
                    return (
                      <li key={index} className="list-group-item text-slanted">
                        {item}
                      </li>
                    );
                  })}
                  <h6 className="text-warning text-capitalize text-slanted">
                    source {source_url}
                  </h6>
                </ul>
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}
