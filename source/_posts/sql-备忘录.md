---
title: sql 备忘录
categories:
  - 编程
date: 2015-04-27 16:10:00
---

自己总结了一份sql的备忘录，比w3school的那份全一些。另外leetcode上面新增了几道编写sql的题目，大家可以去刷几道感受感受。

<!-- more -->

## SELECT ##

<pre>
SELECT col(s) FROM table [WHERE condition]
</pre>

<pre>
SELECT * FROM table [WHERE condition]
</pre>

<pre>
SELECT col(s) FROM 
    (SELECT col(s) FROM table [WHERE condition]) AS alias
[WHERE condition]
</pre>

### SELECT DISTINCT ###

<pre>
SELECT DISTINCT col(s) FROM table [WHERE condition]
</pre>

### WHERE ... AND / OR ###

<pre>
SELECT DISTINCT col(s) FROM table WHERE condition1 AND/OR condition2 [...]
</pre>

### WHERE ... IN ###

<pre>
SELECT col(s) FROM table WHERE col IN (val1, val2, ...)
</pre>

<pre>
SELECT col(s) FROM table WHERE col IN 
    (SELECT col FROM new_table WHERE condition) AS alias
</pre>

### WHERE ... LIKE ###

<pre>
SELECT col(s) FROM table WHERE col LIKE pattern
</pre>

### WHERE ... REGEXP ###

<pre>
SELECT col(s) FROM table WHERE col REGEXP pattern
</pre>

### WHERE ... BETWEEN ###

<pre>
SELECT col(s) FROM table WHERE col BETWEEN val AND val2
</pre>

## AS ##

<pre>
SELECT col AS col_alias FROM table WHERE condition
</pre>

<pre>
SELECT col FROM table AS table_alias WHERE condition
</pre>

## CASE ##

<pre>
SELECT 
    CASE condition1 THEN val1
    CASE condition2 THEN val2
    [...]
    ELSE valn END,
    col(s)
FROM table WHERE condition
</pre>

## ORDER BY ##

<pre>
SELECT col(s) FROM table WHERE condition ORDER BY col [ASC | DESC]
</pre>

## avg, max, min, sum ##

<pre>
SELECT func(col), col(s) FROM table
</pre>

### GROUP BY ###

<pre>
SELECT func(col), col(s) FROM table GROUP BY col
</pre>

### GROUP BY HAVING ###

<pre>
SELECT func(col), col(s) FROM table GROUP BY col HAVING func(col) op val
</pre>

## INSERT INTO ##

<pre>
INSERT INTO table[(col1, col2, ...)] VALUES (val1, val2, ...) [, ...]
</pre>

<pre>
INSERT INTO table[(col1, col2, ...)] VALUES 
    (SELECT col(s) FROM table WHERE condition) AS alias
</pre>

### INSERT IGNORE INTO ###

<pre>
INSERT IGNORE INTO table[(col1, col2, ...)] VALUES (val1, val2, ...) [, ...]
</pre>

### REPLACE INTO ###

<pre>
REPLACE INTO table[(col1, col2, ...)] VALUES (val1, val2, ...) [, ...]
</pre>

### INSERT...ON DUPLICATE KEY UPDATE ###

<pre>
INSERT INTO table[(col1, col2, ...)] VALUES (val1, val2, ...) [, ...]
ON DUPLICATE KEY UPDATE col1=val1 [, col2=val2, ...]
</pre>

### SELECT INTO ###

<pre>
SELECT col(s) INTO new_table FROM table WHERE condition
</pre>

## UPDATE ##

<pre>
UPDATE table SET col1=val1 [, col2=val2, ...] WHERE condition
</pre>

## DELETE ##

<pre>
DELETE FROM table [WHERE condition]
</pre>

## CREATE DATABASE ##

<pre>
CREATE DATABASE database
</pre>

## CREATE TABLE ##

<pre>
CREATE TABLE table
(
    type1 col1 [constrait1]
    [, type2 col2 [constrait2]]
    [, ...]
    [, constrait(s)]
)
</pre>

## CREATE VIEW ##

<pre>
CREATE VIEW view AS
    SELECT col(s) FROM table WHERE condition
</pre>

## DROP DATABASE ##

<pre>
DROP DATABASE database
</pre>

## DROP TABLE ##

<pre>
DROP TABLE table
</pre>

## ALTER TABLE ... ADD ##

<pre>
ALTER TABLE table
ADD col type [constrait]
</pre>

<pre>
ALTER TABLE table
ADD constrait
</pre>

## ALTER TABLE ... DROP ##

<pre>
ALTER TABLE table 
DROP COLUMN col
</pre>

<pre>
ALTER TABLE table
ADD constrait
</pre>

## ALTER TABLE ... ALTER ##

<pre>
ALTER TABLE table_name
ALTER COLUMN col type [constrait]
</pre>