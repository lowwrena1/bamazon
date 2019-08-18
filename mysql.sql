use bamazon_db;
create table products(
item_id int not null auto_increment,
product_name varchar(100) not null,
department_name varchar(50) not null,
price float (6,2),
stock_quantity int,
primary key (item_id)
);
insert into products(product_name, department_name, price, stock_quantity)
values ("couch", "furniture", 860, 7);
insert into products(product_name, department_name, price, stock_quantity)
values ("God of war", "video games", 60, 45);
insert into products(product_name, department_name, price, stock_quantity)
values ("deadpool", "movies", 25, 30);
insert into products(product_name, department_name, price, stock_quantity)
values ("lamp", "furniture", 20, 15);
insert into products(product_name, department_name, price, stock_quantity)
values("javascript for dummies", "literature", 30, 28);
insert into products(product_name, department_name, price, stock_quantity)
values("the handmaids tale", "literature", 20, 60);
insert into products(product_name, department_name, price, stock_quantity)
values("Mario Party", "video games", 60, 45);
insert into products(product_name, department_name, price, stock_quantity)
values("ps4", "electronics", 200, 100);
insert into products(product_name, department_name, price, stock_quantity)
values("End Game Blu-ray/DVD", "electronics",25 ,200 );
insert into products(product_name, department_name, price, stock_quantity)
values("Spiderman Far From Home", "electronics",25 ,205 );
