import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import glenCanyonPark from "./assets/glenCanyonPark.jpg";
import washington from "./assets/washingtonSquare.jpg";
import Products from "./HomepageList/Products";

import axios from "axios";

// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";
import FirstArrayExample from "./FirstArrayExample";
import DropdownMenu from "./DropdownMenu";
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardFooter
} from "reactstrap";
import GoogleMapReact from "google-map-react";
import JsonApi from "./JsonApi";
// import { recipes } from "./HomepageList/tempList";
import ProductsList from "./HomepageList/ProductsList";
import ProductDetails from "./HomepageList/ProductDetails";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // data: [],
  //     details_id: 1,
  //     pageIndex: 1
  //   };
  // }

  componentDidMount() {
    axios
      .get("/api/postings")
      .then(res => {
        console.log(res.data);
        this.setState({
          data: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  // displayPage = index => {
  //   switch (index) {
  //     case 0:
  //       return (
  //         <ProductDetails
  //           id={this.state.details_id}
  //           handleIndex={this.handleIndex}
  //         />
  //       );
  //     case 1:
  //       return (
  //         <ProductsList
  //           recipes={this.state.data}
  //           handleDetails={this.handleDetails}
  //           handleChange={this.handleChange}
  //           handleSubmit={this.handleSubmit}
  //           error={this.state.error}
  //         />
  //       );
  //     default:
  //   }
  // };

  // handleIndex = index => {
  //   this.setState({
  //     pageIndex: index
  //   });
  // };
  // handleDetails = (index, id) => {
  //   this.setState({
  //     details_id: id,
  //     pageIndex: index
  //   });
  // };

  render() {
    return (
      <div>
      

            {/* <React.Fragment>
              {this.displayPage(this.state.pageIndex)}
            </React.Fragment> */}
            
          <Products/>
        
      </div>
    );
  }
}

export default Home;