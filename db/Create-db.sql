-- Active: 1703597245616@@127.0.0.1@3306
CREATE DATABASE pizzaria DEFAULT CHARACTER SET = 'utf8mb4';
use pizzaria

CREATE TABLE users (id int PRIMARY KEY AUTO_INCREMENT,name varchar(200), email varchar(200),password varchar(200),is_sys_admin int DEFAULT 0);
insert into users (name,email,PASSWORD,is_sys_admin )VALUES  ('Douglas','douglas.prado@forlogic.net','123',1)

CREATE TABLE post (id int PRIMARY KEY AUTO_INCREMENT,name varchar(200), description varchar(200),ingredients varchar(200),value float, image LONGBLOB, id_responsible int, count_like int DEFAULT 0 );

CREATE TABLE like_post (id int PRIMARY KEY AUTO_INCREMENT,id_post int, id_responsible int);
CREATE TABLE comment (id int PRIMARY KEY AUTO_INCREMENT,id_post int, id_responsible int,comment varchar(300));









