SQl vs noSQL?

SQL:
-Relational
-Analitical

SQL looks like looks like a excel. so you can not nest the tablets. each element is a row in SQL.

UML(unified modelin lenguage)

some queries:

SELECT *FROM family_members ===> to get the collection.
SELECT *FROM family_members WHERE species = "dog" ===> specify a propery or key from the collection
SELECT *FROM family_members WHERE salary > 56000 ===> other way to specify what we want to pull from the collection
SELECT *FROM family_members WHERE salary >= 55000 ===> you can also use this math symbol
SELECT name, species FROM family_members ===> like this you can use select colums
SELECT *FROM friends_of_pickles WHERE height_cm < 45 AND species = "dog" ===> an expample of usinfg /and/ on SQL
SELECT *FROM friends_of_pickles WHERE height_cm < 45 OR species = "dog"; ===> this an example you can use /or/ on SQL
SELECT * FROM friends_of_pickles WHERE species NOT IN ("cat", "dog") ===> you can use /IN/ or /NOT IN/ to find elements on the collections
SELECT DISTINCT species FROM friends_of_pickles WHERE height_cm > 50 ===> this filter the colum on the chart
SELECT * FROM friends_of_pickles ORDER BY height_cm DESC ===> This a way you can order the data
SELECT *FROM friends_of_pickles ORDER BY  height_cm DESC LIMIT 1 ===> you can ad limit to the results that you get
SELECT COUNT (*) FROM friends_of_pickles ===> this query help us to count home many rows are in the chart
SELECT COUNT(*) FROM friends_of_pickles WHERE species = "dog" ===> count how many element with a propety are in the table
SELECT SUM(salary) FROM family_members ===> here they help to sum the total amount in the colum
SELECT AVG(salary) FROM family_members ===> help to find the average value in a number. on the table elements
SELECT MIN(salary) FROM family_members //////// SELECT MAX(salary) FROM family_members ===> you can add the highest or lower value in the table
