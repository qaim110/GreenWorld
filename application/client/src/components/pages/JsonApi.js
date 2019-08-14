import React, { Component } from "react";

class JsonApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false
    };
  }
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          data: json
        });
      });
  }
  render() {
    var { data } = this.state;
    return (
      <React.Fragment>
        Json API used to fetch data
        <ul>
          {data.map(i => (
            <li key={i.id}>
              Name: {i.name} | Email: {i.email}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default JsonApi;
