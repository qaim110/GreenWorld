// import React, { Component } from "react";

// import axios from "axios";
// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
// import DraggableUploader from "./DraggableUploader";
// import Login from "../Users/Login";
// import { updateForm } from "../redux/actions/postAction";

// class Post extends Component {
//   handleSubmit = e => {
//     e.preventDefault();
//     // turn submit to true
//     let { postStatus, location, postType } = this.props;
//     console.log(this.props.postStatus)
//     console.log(postStatus, location, postType);
//     axios
//       .post("/api/postings", {
//         postStatus,
//         location,
//         postType
//       })
//       .then(res => {
//         console.log("hi");
//         // clear postReducer store
//       })
//       .catch(err => {
//         console.log(err);
//       });
//     console.log();
//   };

//   checkPostings = () => {};

//   // e is the even of the input text field
//   // we use the name of the textfield for the key
//   // and the value of textfield for the value
//   changeTextField = e => {
//     let typeIssue = { [e.target.name]: e.target.value };
//     this.props.updateForm(typeIssue);
//   };

//   render() {
//     let curToken = localStorage.getItem("token");
//     return (
//       <div>
//         {curToken == null && (
//           <p> You must login before you can post anything </p>
//         )}
//         {/* We pass in the route to props for Login because login has a feature
//         to detect any incoming routes to redirect back to that page
//         after logging in  */}
//         {curToken == null ? (
//           <Login route="/post" />
//         ) : (
//           <div
//             className="ui form segment text-center"
//             onSubmit={this.handleSubmit}
//             noValidate
//           >
//             <h3 className="text-center text-info">Post Any Issue</h3>
//             <br />
//             <div className="two fields">
//               <div className="field">
//                 <label htmlFor="name">Type Issue</label>
//                 <br />
//                 <input
//                   // className={formErrors.name.length > 0 ? "error" : null}
//                   placeholder="Type Issue"
//                   name="postType"
//                   type="text"
//                   noValidate
//                   onChange={this.changeTextField}
//                 />
//               </div>
//             </div>
//             <br />
//             <div className="two fields">
//               <div className="field">
//                 <label htmlFor="name">Location</label>
//                 <br />
//                 <input
//                   placeholder=" Location"
//                   name="location"
//                   type="location"
//                   onChange={this.changeTextField}
//                   noValidate
//                 />
//                 {/* {formErrors.name.length > 0 && (
//               <Span className="errorMessage">{formErrors.name}</Span>
//             )} */}
//               </div>
//             </div>

//             <br />
//             <div className="two fields">
//               <div className="field">
//                 <label htmlFor="name">post type</label>
//                 <br />
//                 <input
//                   // className={formErrors.name.length > 0 ? "error" : null}
//                   placeholder=" post staus"
//                   name="postStatus"
//                   type="post staus"
//                   onChange={this.changeTextField}
//                   noValidate
//                   // onChange={this.handleChange}
//                 />
//               </div>
//             </div>
//             <br />
//             <br />
//             <DraggableUploader />
//             <br />
//             <button className="submit button" onClick={this.handleSubmit}>
//               Submit Issue
//             </button>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// // import action functions
// // can also import different actions from different files
// const mapStateToProps = state => {
//   let { postStatus, location, postType } = state.postReducer;
//   console.log(postStatus, location, postType)
//   return {
//     postStatus,
//     location,
//     postType,

//   };
// };

// const mapDispatchToProps = {
//   updateForm
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withRouter(Post));


// export default Post;

import React, { Component } from "react";

import axios from "axios";

import { AnchorButton, Intent, ProgressBar } from "@blueprintjs/core";

import _ from "lodash";
import { Icon } from "react-icons-kit";

import { remove } from "react-icons-kit/fa/remove";
import "./assets/DraggableUploader.scss";

// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";
// import ImageLoad from "./ImageLoad";
import Login from "../Users/Login";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postStatus: "",
      location: "",
      postType: "",
      loadedFiles: [],
      fd: "",
      // discription: "
    };
    //   this.handleUploadImage = this.handleUploadImage.bind(this);
    // this.toggle = this.toggle.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    let { postStatus, location, postType, loadedFiles } = this.state;
    console.log("==================================");

    console.log(postStatus, location, postType, loadedFiles);
    // console.log(fd.values());
    // fd.append("image")
    axios
      .post("/api/postings", {
        postStatus,
        location,
        postType,
      })
      .then(res => {
        console.log("hi");
      })
      .catch(err => {
        console.log(err);
      });
    console.log();
  };

  checkPostings = () => {};

  changePostStatus = e => {
    let inputPostType = e.target.value;
    this.setState({ postStatus: inputPostType });
  };

  changeLocation = e => {
    let inputLocation = e.target.value;
    this.setState({ location: inputLocation });
  };

  changePostType = e => {
    let inputPostType = e.target.value;
    this.setState({ postType: inputPostType });
  };

  // changepostStatus = e => {
  //   let inputIssue = e.target.value;
  //   this.setState({ postStatus: inputIssue });
  // };

  toggle(e) {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  onFileLoad(e) {
    const file = e.currentTarget.files[0];
    let fd = new FormData();
    console.log(fd);
    let fileReader = new FileReader();
    fd.append("image", file, file.name);
    this.setState({ fd: fd });
    console.log(fd);
    fileReader.onload = () => {
      console.log("IMAGE LOADED: ", fileReader.result);
      const file = {
        data: fileReader.result,
        isUploading: false
      };
      //Add file
      this.addLoadedFile(file);
    };

    fileReader.onabort = () => {
      alert("Reading Aborted");
    };

    fileReader.onerror = () => {
      alert("Reading ERROR!");
    };

    fileReader.readAsDataURL(file);
  }

  addLoadedFile(file) {
    this.setState(prevState => ({
      loadedFiles: [...prevState.loadedFiles, file]
    }));
  }

  removeLoadedFile(file) {
    //Remove file from the State
    this.setState(prevState => {
      let loadedFiles = prevState.loadedFiles;
      let newLoadedFiles = _.filter(loadedFiles, ldFile => {
        return ldFile != file;
      });
      return { loadedFiles: newLoadedFiles };
    });
  }

  removeAllLoadedFile() {
    this.setState({ loadedFiles: [] });
  }

  updateLoadedFile(oldFile, newFile) {
    this.setState(prevState => {
      console.log("======"+prevState+"======");
      const loadedFiles = [...prevState.loadedFiles];
      _.find(loadedFiles, (file, idx) => {
        if (file == oldFile) loadedFiles[idx] = newFile;
      });

      return { loadedFiles };
    });

    return newFile;
  }

  render() {
    let curToken = localStorage.getItem("token");
    const { loadedFiles } = this.state;
    console.log(loadedFiles);
    return (
      <div>
        {curToken == null && (
          <p> You must login before you can post anything </p>
        )}
        {/* We pass in the route to props for Login because login has a feature
        to detect any incoming routes to redirect back to that page
        after logging in  */}
        {curToken == null ? (
          <Login route="/post" />
        ) : (
          <div
            className="ui form segment text-center"
            onSubmit={this.handleSubmit}
            noValidate
          >
            <h3 className="text-center text-info">Post Any Issue</h3>
            <br />
            <div className="two fields">
              <div className="field">
                <label htmlFor="name">Type Issue</label>
                <br />
                <input
                  // className={formErrors.name.length > 0 ? "error" : null}
                  placeholder="Type Issue"
                  name="fullname"
                  type="text"
                  onChange={this.changePostStatus}
                  noValidate
                  // onChange={this.handleChange}
                />

                {/* {formErrors.name.length > 0 && (
              <Span className="errorMessage">{formErrors.name}</Span>
            )} */}
              </div>
            </div>
            <br />
            <div className="two fields">
              <div className="field">
                <label htmlFor="name">Location</label>
                <br />
                <input
                  // className={formErrors.name.length > 0 ? "error" : null}
                  placeholder=" Location"
                  name="name"
                  type="Lacation"
                  onChange={this.changeLocation}
                  noValidate
                  // onChange={this.handleChange}
                />

                {/* {formErrors.name.length > 0 && (
              <Span className="errorMessage">{formErrors.name}</Span>
            )} */}
              </div>
            </div>

            <br />
            <div className="two fields">
              <div className="field">
                <label htmlFor="name">post type</label>
                <br />
                <input
                  // className={formErrors.name.length > 0 ? "error" : null}
                  placeholder=" post staus"
                  name="post staus"
                  type="post staus"
                  onChange={this.changePostType}
                  noValidate
                  // onChange={this.handleChange}
                />

              </div>
            </div>

            <br />

            <br />

            <div
              className="inner-container"
              style={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div className="sub-header">Drag an Image</div>
              <div className="draggable-container">
                <input
                  type="file"
                  id="file-browser-input"
                  name="file-browser-input"
                  ref={input => (this.fileInput = input)}
                  onDragOver={e => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onDrop={this.onFileLoad.bind(this)}
                  onChange={this.onFileLoad.bind(this)}
                />
                <div className="files-preview-container ip-scrollbar">
                  {loadedFiles.map((file, idx) => {
                    return (
                      <div className="file" key={idx}>
                        <img src={file.data} />
                        <div className="container">
                          <span className="progress-bar">
                            {file.isUploading && <ProgressBar />}
                          </span>
                          <span
                            className="remove-btn"
                            onClick={() => this.removeLoadedFile(file)}
                          >
                            <Icon icon={remove} size={19} />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="helper-text">Drag and Drop Images Here</div>
                <div className="file-browser-container">
                  <AnchorButton
                    text="Browse"
                    intent={Intent.PRIMARY}
                    minimal={true}
                    onClick={() => this.fileInput.click()}
                  />
                </div>
              </div>

            </div>

            <br />
            <button className="submit button" onClick={this.handleSubmit}>
              Submit Issue
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Post;
