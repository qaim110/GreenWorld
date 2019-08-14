// import React from "react";
// import logo from "../../assets/donkey.jpg";
// import "bootstrap/dist/css/bootstrap.min.css";
// // import "./Navbar.css";
// import { Link } from "react-router-dom";
// import UserAuth from "../Users/UserAuth"


// class Navbar extends React.Component {

//   render() {
//     return (
//       <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        
//         <a className="navbar-brand ml-5" href="#">
//           <h1>Team 06</h1>
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span>
//             <i className="fas fa-bars" style={{ color: "#fff" }} />
//           </span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav m-auto">
//             <li className="nav-item active">
//               <Link
//                 className="nav-link text-white text-uppercase ml-5"
//                 to="/home"
//               >
//                 Home
//                 <i className="fas fa-home" />
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 className="nav-link text-white text-uppercase ml-5"
//                 to="/news"
//               >
//                 news
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 className="nav-link text-white text-uppercase ml-5"
//                 to="/aboutUs"
//               >
//                 About Us
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 className="nav-link text-white text-uppercase ml-5"
//                 to="/post"
//               >
//                 Post
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 className="nav-link text-white text-uppercase ml-5"
//                 to="/category"
//               >
//                 Category
//               </Link>
//             </li>{" "}
//             <li className="nav-item">
//               <Link
//                 className="nav-link text-white text-uppercase ml-5"
//                 to="/login"
//               >
//                 login
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 className="nav-link text-white text-uppercase ml-5"
//                 to="/register"
//               >
//                 register
//               </Link>
//             </li>
//           </ul>
//           <UserAuth />
//         </div>
//       </nav>
//     );
//   }
// }

// export default Navbar;

import React from "react";
import logo from "../../assets/donkey.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Navbar.css";
import { Link } from "react-router-dom";
import UserAuth from "../Users/UserAuth"

class Navbar extends React.Component {

  // Logout function
  // Basically just clear localstorage
  logout = async () => {
    try {
      // Async await so we to make sure token gets removed before
      // performing any other tasks
      console.log(localStorage);
      await localStorage.removeItem('token');
      console.log(localStorage);
      console.log("Logged out");
    } catch (error) {
      // Error saving data
      console.log("===Error Line 16 Navbar.js===");
      console.log(error);
    }
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        
        <a className="navbar-brand ml-5" href="#">
          <h1>Team 06</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i className="fas fa-bars" style={{ color: "#fff" }} />
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <Link
                className="nav-link text-white text-uppercase ml-5"
                to="/home"
              >
                Home
                <i className="fas fa-home" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white text-uppercase ml-5"
                to="/post"
              >
                Post
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white text-uppercase ml-5"
                to="/login"
              >
                login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white text-uppercase ml-5"
                to="/register"
              >
                register
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white text-uppercase ml-5"
                to="/"
                onClick={this.logout}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;