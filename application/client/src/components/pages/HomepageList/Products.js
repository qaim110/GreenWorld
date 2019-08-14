import React, { Component } from "react";
import axios from "axios";
import ProductsList from "../HomepageList/ProductsList";
import ProductDetails from "../HomepageList/ProductDetails";

import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardFooter
} from "reactstrap";

//Search filter function, currently by all keywords
function searchingFor(value) {
  return function(x) {
    return x.location.toLowerCase().includes(value.toLowerCase()) || x.postType.toLowerCase().includes(value.toLowerCase())
    || x.postStatus.toLowerCase().includes(value.toLowerCase()); ;  
    }
}

class Products extends Component {
    constructor(props) {
    super(props);
    this.state = {
      data:[],
      value:"",
      details_id: 1,
      pageIndex: 1
    };
  
        //Handles filter change
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitS = this.handleSubmit.bind(this);
    
      }
    
      handleChange(event) {
        this.setState({value: event.target.value})
      }
    
      handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.value);
      }

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


      displayPage = index => {
        switch (index) {
          case 0:
            return (
              <ProductDetails
                id={this.state.details_id}
                handleIndex={this.handleIndex}
              />
            );
          case 1:
            return (
              <ProductsList
                recipes={this.state.data}
                handleDetails={this.handleDetails}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                error={this.state.error}
              />
            );
          default:
        }
      };
    
      handleIndex = index => {
        this.setState({
          pageIndex: index
        });
      };

      handleDetails = (index, id) => {
        this.setState({
          details_id: id,
          pageIndex: index
        });
      };
    
      render() {
        // const { image_url, title, recipe_id, publisher } = this.props.recipe;
        // const { id, location, postStatus, postType, picture } = this.props.recipe;
        
        const { handleDetails } = this.props;


      return (
    
        //Search form
        <div className = "ProdPage">
        <form onSubmit={this.handleSubmit} 
          class="col-lg-6 offset-lg-3">
        <i class="fas fa-search" aria-hidden="true"></i>
        <input class="form-control" type="text" placeholder="Search"
          aria-label="Search"
          value={this.state.value}
          onChange={this.handleChange}>
        </input>
        </form>

<Container>
  <Row>
            
  {
        this.state.data.filter(searchingFor(this.state.value)).map(data =>
        <React.Fragment key={data.root}>
     
          <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
            <div className="card" >
              
              <img
                src={data.picture}
                className="img-card-top"
                alt="recipe"
                style={{ height: "14rem" }}
              />
              <div className="card-body text-capitalized">
                <h6>location: {data.location}</h6>
                <h6 className="text-warning text-slanted">
                  postStatus: {data.postStatus}
                </h6>
              </div>
              <div className="card-footer text-cen">
                
                <button
                  type="button"
                  className="btn btn-primary text-capitalize"
                  onClick={()=>handleDetails(0, data.id)}
                >
                  details
                </button>
              </div>
            </div>
          </div>
         
        </React.Fragment>
        )}
        </Row>
        </Container>
       </div>
      
       )}
        }
      
export default Products;
