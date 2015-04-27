title: sql 备忘录
categories:
  - 编程
date: 2015-04-27 16:10:00
---

自己总结了一份sql的备忘录，比w3school的那份全一些。

<!-- more -->

## SELECT ##

```
SELECT col(s) FROM table [WHERE condition]
```

```
SELECT * FROM table [WHERE condition]
```

```
SELECT col(s) FROM 
    (SELECT col(s) FROM table [WHERE condition]) AS alias
[WHERE condition]
```

### SELECT DISTINCT ###

```
SELECT DISTINCT col(s) FROM table [WHERE condition]
```

### WHERE ... AND / OR ###

```
SELECT DISTINCT col(s) FROM table WHERE condition1 AND/OR condition2 [...]
```

### WHERE ... IN ###

```
SELECT col(s) FROM table WHERE col IN (val1, val2, ...)
```

```
SELECT col(s) FROM table WHERE col IN 
    (SELECT col FROM new_table WHERE condition) AS alias
```

### WHERE ... LIKE ###

```
SELECT col(s) FROM table WHERE col LIKE pattern
```

### WHERE ... REGEXP ###

```
SELECT col(s) FROM table WHERE col REGEXP pattern
```

### WHERE ... BETWEEN ###

```
SELECT col(s) FROM table WHERE col BETWEEN val AND val2
```

## AS ##

```
SELECT col AS col_alias FROM table WHERE condition
```

```
SELECT col FROM table AS table_alias WHERE condition
```

## CASE ##

```
SELECT 
    CASE condition1 THEN val1
    CASE condition2 THEN val2
    [...]
    ELSE valn END,
    col(s)
FROM table WHERE condition
```

## ORDER BY ##

```
SELECT col(s) FROM table WHERE condition ORDER BY col [ASC | DESC]
```

## avg, max, min, sum ##

```
SELECT func(col), col(s) FROM table
```

### GROUP BY ###

```
SELECT func(col), col(s) FROM table GROUP BY col
```

### GROUP BY HAVING ###

```
SELECT func(col), col(s) FROM table GROUP BY col HAVING func(col) op val
```

## INSERT INTO ##

```
INSERT INTO table[(col1, col2, ...)] VALUES (val1, val2, ...) [, ...]
```

```
INSERT INTO table[(col1, col2, ...)] VALUES 
    (SELECT col(s) FROM table WHERE condition) AS alias
```

### INSERT IGNORE INTO ###

```
INSERT IGNORE INTO table[(col1, col2, ...)] VALUES (val1, val2, ...) [, ...]
```

### REPLACE INTO ###

```
REPLACE INTO table[(col1, col2, ...)] VALUES (val1, val2, ...) [, ...]
```

### INSERT...ON DUPLICATE KEY UPDATE ###

```
INSERT INTO table[(col1, col2, ...)] VALUES (val1, val2, ...) [, ...]
ON DUPLICATE KEY UPDATE col1=val1 [, col2=val2, ...]
```

### SELECT INTO ###

```
SELECT col(s) INTO new_table FROM table WHERE condition
```

## UPDATE ##

```
UPDATE table SET col1=val1 [, col2=val2, ...] WHERE condition
```

## DELETE ##

```
DELETE FROM table [WHERE condition]
```

## CREATE DATABASE ##

```
CREATE DATABASE database
```

## CREATE TABLE ##

```
CREATE TABLE table
(
    type1 col1 [constrait1]
    [, type2 col2 [constrait2]]
    [, ...]
    [, constrait(s)]
)
```

## CREATE VIEW ##

```
CREATE VIEW view AS
    SELECT col(s) FROM table WHERE condition
```

## DROP DATABASE ##

```
DROP DATABASE database
```

## DROP TABLE ##

```
DROP TABLE table
```

## ALTER TABLE ... ADD ##

```
ALTER TABLE table
ADD col type [constrait]
```

```
ALTER TABLE table
ADD constrait
```

## ALTER TABLE ... DROP ##

```
ALTER TABLE table 
DROP COLUMN col
```

```
ALTER TABLE table
ADD constrait

## ALTER TABLE ... ALTER ##

```
ALTER TABLE table_name
ALTER COLUMN col type [constrait]
```