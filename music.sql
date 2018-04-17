-- Primary Key of "ID" which auto-increments
-- A column called "title"
-- A column called "artist"
-- A column called "genre"
-- BONUS: Using MySQL Workbench, populate your table with a few rows of dummy data
-- 
-- BONUS: Start looking into how you can use the MySQL package to read data from a MySQL database

CREATE DATABASE musicDB;

USE musicDB;

CREATE TABLE songs (
	ID INTEGER NOT NULL AUTO_INCREMENT,
	title VARCHAR(30) NOT NULL,
    artist VARCHAR(30) NOT NULL,
    genre VARCHAR(30),
	PRIMARY KEY(ID)
)

SELECT * FROM songs;
INSERT INTO songs
VALUES 