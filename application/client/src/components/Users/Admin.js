import React from "react";
import { Button } from "reactstrap";
class Admin extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Button
          className="text-white"
          onClick={this.toggle}
          style={{
            border: "none",
            backgroundColor: "transparent"
          }}
          id="sigin-btn"
        >
          Admin
          {/* {this.props.buttonLabel} */}
        </Button>
      </div>
    );
  }
}

export default Admin;
