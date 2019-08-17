use bamazon_db;
create table products(
item_id int not null auto_increment,
product_name varchar(100) not null,
department_name varchar(50) not null,
price int,
stock_quantity int,
primary key (item_id)
);