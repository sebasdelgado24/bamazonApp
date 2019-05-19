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
  console.log("Welcome to bamazon. Connected to Database! connected as id " + connection.threadId);
//run the displayProducts function after the connection is made
const products = displayProducts();
askProductId(products);

});

function displayProducts() {
 connection.query("SELECT * FROM products", function(err,res) {
  for (var i = 0; i < res.length; i++) {
    console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
  }
  console.log("-----------------------------------------");
 });

}

//function wich prompts the user for what action they should take
function askProductId(products) {
  inquirer
    .prompt([{
      name: "productID",
      type: "input",
      message: "Please type the ID of the product you would like to buy"
    },
    {
     name: "quantity",
     type: "input",
     message: "How many units do you want to purchase?"
    }]
    )
    .then(function(answer) {
      console.log(answer);
      //for loop and if I find a match 
      var query = "UPDATE products SET stock_quantity = WHERE ? ??";
      connection.query(query,[{}, {}], function(err,res) {
        
      })
    });

}

