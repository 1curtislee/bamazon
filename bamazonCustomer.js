var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "webuser",

  // Your password
  password: "ucr",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  
  // COMMAND:
  placeOrder();
  
});

// display all items
var orderProductID = process.argv[2];
var orderQuantity = process.argv[3];

/*
inquirer
.prompt(["please enter a product ID"])
.then(function(response) {
});
*/

function placeOrder() {
  // prompt productID and quantity:
  console.log("Product ID: " + orderProductID + "\n");
  console.log("Quantity Ordered: " + orderQuantity + "\n");

  // check stock:

 
  // process order:
  console.log("placing order...\n");
  connection.query(
    "UPDATE products SET stock_quantity = stock_quantity - " + orderQuantity + " WHERE item_id = " + orderProductID,
    function(err, res) {
      //console.log(res.affectedRows + " product(s) ordered!\n");
    }
  );
  //display price;
  readProducts();

};

function readProducts() {
  console.log("order placed.");
  /*
  connection.query("SELECT * FROM products", 
  function(err, res) {
    if (err) throw err;
    console.log(res);
  });
  */
  connection.end();
}