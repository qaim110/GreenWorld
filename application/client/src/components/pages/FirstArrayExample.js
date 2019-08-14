import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "./FirstArrayExample.css";
// import { Link } from "react-router-dom";

const options = ["one", "two", "three"];

class FirstArrayExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ""
    };
    this._onSelect = this._onSelect.bind(this);
  }

  _onSelect(option) {
    console.log("You selected ", option.label);
    this.setState({ selected: option });
  }

  render() {
    const defaultOption = this.state.selected;
    const placeHolderValue =
      typeof this.state.selected === "string"
        ? this.state.selected
        : this.state.selected.label;

    return (
      <div>
        <section>
          <h3>Flat Array Example </h3>
          <Dropdown
            className=""
            options={options}
            onChange={this._onSelect}
            value={defaultOption}
            placeholder="Select an option"
          />
          <div className="result">
            You selected <h2> {placeHolderValue}</h2>
          </div>
        </section>
      </div>
    );
  }
}

export default FirstArrayExample;
