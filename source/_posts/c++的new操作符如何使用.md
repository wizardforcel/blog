title: 【小记】c++的new操作符如何使用
tags:
  - cpp
id: 421
categories:
  - 编程
date: 2013-09-24 19:45:15
---

1.单例分配

Type *p = new Type;

Type *p = new Type(构造参数);

2.数组分配

Type *p = new Type[size];

（如果是类类型需要默认构造函数）

3.不抛出异常

Type *p = new(std::nothrow) Type;

4.只分配不构造（类似malloc）

Type *p = operator new(sizeof(Type));

5.只构造不分配

new (p) Type;

new (p) Type(构造参数);