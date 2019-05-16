//require("dotenv").config();

var mysql = require("mysql");
var inquirer = require("inquirer");

//var keys = require("./keys");
//var connection = new Connection(keys.connection.mysql);

//create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

//your port; if not 3306
  port: 3306,

//your username
  user: "root",

//your password
  password: "Manet1234",

//your database
  database: "bamazon_DB"

});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  console.log("Welcome to bmazon. Connected to Database! connected as id " + connection.threadId);
//run the displayProducts function after the connection is made
displayProducts();
askProductId();

});

function displayProducts() {
 connection.query("SELECT * FROM products", function(err,res) {
  for (var i = 0; i < res.lenght; i++) {
    console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
  }
  console.log("-----------------------------------------");
 });

}

//function wich prompts the user for what action they should take
function askProductId() {
  inquirer
    .prompt({
      name: "productID",
      type: "input",
      message: "Please type the ID of the product you would like to buy"
    })
    .then(function(answer) {
      var query = "SELECT * FROM products item_id, product_name, department_name, price, stock_quantity WHERE ?";
      connection.query(query,{ item_id: answer.item_id }, function(err, res) {
        for (var i=0; i < res.lenght; i++) {
          console.log("Item id: " + res[i].item_id + " || Product Name: " + res[i].product_name + " || Department Name: " + res[i].department_name + " || Price: " + res[i].price + " || Stock Quantity: " + res[i].stock_quantity);
        }
      })
    });

}

