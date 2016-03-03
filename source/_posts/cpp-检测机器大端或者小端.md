---
title: "[cpp]检测机器大端或者小端"
tags:
  - cpp
id: 561
categories:
  - 编程
date: 2013-11-13 17:11:02
---

今天在csdn上看到的 自己改进了一下发出来
小端输出1 大端输出0
<!--more-->
`union
{
        int i;
        char c[4];
} test;
test.i = 1;
cout << int(test.c[0]) << endl;`