DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR (100) NOT NULL,
department_name VARCHAR (100) NOT NULL,
price INTEGER(11) NOT NULL,
stock_quantity INTEGER(11) NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name , department_name, price , stock_quantity) 
values ('Portable Air Compressor', 'Automotive', 20, 4);
INSERT INTO products (product_name , department_name, price , stock_quantity) 
values ('I Will Teach You to Be Rich', 'Books',	11 , 39);
INSERT INTO products (product_name , department_name, price , stock_quantity) 
values ('Dog Training Collar' , 'Pet Supplies',	40,	72);
INSERT INTO products (product_name , department_name, price , stock_quantity) 
values ('Arm & Hammer Clump & Seal Platinum Litter', 'Pet Supplies', 25, 200);
INSERT INTO products (product_name , department_name, price , stock_quantity) 
values ('Pet Grooming Glove', 'Pet Supplies', 13, 88);
INSERT INTO products (product_name , department_name, price , stock_quantity) 
values ('Glass Screen Protector', 'Cell Phones & Accessories', 21, 24);
INSERT INTO products (product_name , department_name, price , stock_quantity) 
values ('Memory card 128GB', 'Cell Phones & Accessories', 6, 33);
INSERT INTO products (product_name , department_name, price , stock_quantity) 
values ('Electric Pressure Washer',	'Lawn & Garden', 238, 51);
INSERT INTO products (product_name , department_name, price , stock_quantity) 
values ('Expandable Garden Hose', 'Lawn & Garden', 16, 74);
INSERT INTO products (product_name , department_name, price , stock_quantity) 
values ('CarGuys Super Cleaner', 'Automotive', 17, 467);






