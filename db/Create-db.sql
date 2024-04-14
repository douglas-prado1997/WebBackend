-- Active: 1703597245616@@127.0.0.1@3306
CREATE DATABASE pizzaria DEFAULT CHARACTER SET = 'utf8mb4';
use pizzaria

CREATE TABLE users (id int PRIMARY KEY AUTO_INCREMENT,name varchar(200), email varchar(200),password varchar(200),is_sys_admin bit);
insert into users (name,email,PASSWORD,is_sys_admin )VALUES  ('Douglas','douglas.prado@forlogic.net','123',1)



