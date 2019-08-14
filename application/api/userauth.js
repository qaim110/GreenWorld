const mysql = require("mysql");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//this loads the .env file in
const secretKey = process.env.JWT_SECRET;
const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//we need this for secret information that we don't want on our github

// let connection;
// if (!connection) {
//   connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "password",
//     database: "VerticalPrototype"
//   });

//   connection.connect(err => {
//     if (!err) console.log("Connected to the MySQL server!");
//     else
//       console.log(
//         "Connection failed \n Error: " + JSON.stringify(err, undefined, 2)
//       );
//   });
// }

var connection = mysql.createConnection({
	host: "18.144.30.72",

	// Your port; if not 3306
	port: 3306,

	// Your username
	user: "testuser",

	// Your password
	password: "team6",
	database: "csc648team6"
});


// Register a user with password encryption.
router.post("/register", function(req, res) {
  console.log(req.body)
  let { username, email, password } = req.body;
  //   const queryCheck = "SELECT * FROM users WHERE username = ? AND email = ?";
  const queryCheck = "SELECT * FROM users WHERE username = ? ";
  connection.query(queryCheck, [username], function(
    error,
    result
  ) {
    if (error || result == undefined) 
      return res.json({ message: "ERR_INSERT_UNDEFINED" });;
        
    if ( result.length != 0)
      return res.json({ message: "ERR_USER_ALREADY_EXISTS" });

    if (!req.body.password)
      return res.json({ message: "ERR_NO_PASSWORD" });

    if (password.length <= 2 && password)
      return res
        .status(401)
        .json({ error: "ERR_PASSWORD_LESS_THAN_5" });

    bcrypt.genSalt(10, function(err, salt) {
      if(err) console.log(err);
      bcrypt.hash(req.body.password, salt, function(err, hash) {

        let queryInsert =
          "INSERT INTO users (username, password, firstname, lastname) VALUES (?,?,?,?)";

        let payload = {
          isLoggedIn: true,
          _id: result._id,
          username: result.username,
          //   email: result.email,
          firstname: result.firstname,
          lastname: result.lastname,
          create_date: result.create_date
        };

        let token = jwt.sign(payload, secretKey, {
          expiresIn: "4h"
        });

        connection.query(
          queryInsert,
          [req.body.username, hash, req.body.firstname, req.body.lastname],
          function(error, user) {
            if (error) {      
              res.send(error);
            } else {
              res.json({
                message: "REGISTER_SUCCESS",
                token: token,
                bool: true,
                username: req.body.username,
                // email: req.body.email
              });
            }
          }
        );
      });
    });
  });
});

router.post('/login', function(req, res) {
  console.log('Line 57');
  console.log(req.body);
  const query = 'SELECT * FROM users WHERE username = ? ';

  connection.query(query, [req.body.username], function(
    error,
    result,
    body
  ) {

    if(result[0] == undefined) {
      return res.json({
        message: 'ERR_CANNOT_FIND'
      });
    }

    console.log('RESULT!!' + JSON.stringify(result[0].id));
    let data = result[0];
    console.log('DATA!!!' + data);

    if (!result) return res.status(404).json({ error: 'user not found' });

    if (!bcrypt.compareSync(req.body.password, result[0].password))
      return res.status(401).json({ error: 'ERR_INCORRECT_PASS' });

    let payload = {
      isLoggedIn: true,
      _id: data.id,
      username: data.username,
      // email: data.email,
      firstname: data.firstname,
      lastname: data.lastname,
      create_date: data.create_date
    };

    let token = jwt.sign({ data: payload }, secretKey, {
      expiresIn: '4h'
    });

    return res.json({
      message: 'LOGIN_SUCCESS',
      token: token,
      bool: true,
      result: result
    });
  });
});

module.exports = router;
