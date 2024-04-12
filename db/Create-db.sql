-- Active: 1703597245616@@127.0.0.1@3306
CREATE DATABASE pizzaria DEFAULT CHARACTER SET = 'utf8mb4';
use pizzaria
CREATE TABLE users (name varchar(200), email varchar(200),password varchar(200),is_sys_admin bit);
insert into users VALUES  ('Douglas','douglas.prado@forlogic.net','123',1)

