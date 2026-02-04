## 学习内容：数据库
### 1，introduction
* understanding:relational databases,which stores information that other program can use(python...)
* function:**Create  Read  Update Delete**
### 2,create
my practice:import an excel file called"鼓楼校区课程汇总表",which contains my schools'courses
* 1.file format conversion:transform the excel into csv(utf8)[^avoid messy code]
* 1.5.save to secure-file-priv
```
ERROR 1290 (HY000): The MySQL server is running with the --secure-file-priv option so it cannot execute this statement
mysql> SHOW VARIABLES LIKE 'secure_file_priv';
+------------------+------------------------------------------------+
| Variable_name    | Value                                          |
+------------------+------------------------------------------------+
| secure_file_priv | C:\ProgramData\MySQL\MySQL Server 8.0\Uploads\ |
+------------------+------------------------------------------------+
```
* 2.create MySQL database
```mysql> CREATE DATABASE IF NOT EXISTS nju_course_pool2026
	-> CHARACTER SET utf8mb4 
    -> COLLATE utf8mb4_unicode_ci;
```
 * 3.create table
 ```mysql> USE nju_course_pool2026
Database changed
mysql> CREATE TABLE couse2026(
    -> id INT AUTO_INCREMENT PRIMARY KEY,
    -> category_major VARCHAR(100),
    -> category_minor VARCHAR(100),
    -> course_name VARCHAR(255) NOT NULL,
    -> teacher VARCHAR(255),
    -> time_location TEXT,
    -> campus VARCHAR(100)
    -> )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
Query OK, 0 rows affected (0.05 sec)
 ```
 * 4.import data
 ```mysql> LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/鼓楼校区课程汇总表.csv'
    -> INTO TABLE couse2026
    -> CHARACTER SET utf8mb4
    -> FIELDS TERMINATED BY ','
    -> ENCLOSED BY '"'
    -> LINES TERMINATED BY '\r\n'
    -> IGNORE 1 LINES
    -> (category_major,category_minor,course_name,teacher,time_location,campus);
Query OK, 295 rows affected (0.01 sec)
 ```
 