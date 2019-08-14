import React, { Component } from "react";
import Products from "./Products";



export default class ProductsList extends Component {
  render() {
    const { recipes, handleDetails, error } = this.props;
    return (
      <div>
        <React.Fragment>
          <div className="rwo" />
          <div className="container my-6">
            <div className="row">
              {error ? (
                <h1 className="text-danger text-center">{error}</h1>
              ) : (
                recipes.map(i => {
                  return (
                    <Products
                      key={i.recipe_id}
                      recipe={i}
                      handleDetails={handleDetails}
                    />
                  );
                })
              )}
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}
