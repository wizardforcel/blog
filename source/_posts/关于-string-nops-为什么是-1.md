---
title: "关于string::nops为什么是-1"
id: 279
categories:
  - 编程
date: 2013-09-15 11:41:23
tags:
---

```
const size_t string::nops = -1;
```

大家可能看到这条定义有些疑惑 为什么找不到字符串要返回-1呢

<!--more-->

size_t是unsigned int类型 -1是int类型

那么同等大小的有符号和无符号转化的时候 仅仅更改数据解释方法 数据本身是不会
变的

由于计算机表示负数是按照补码来的 -1用无符号数的规则解释就成了UINT_MAX

一个字符串的长度 不可能超过所能表示它长度的数据类型的上限

对于size_t的类型来说 最大的数是UINT_MAX

那么最大可能的下标就是(UINT_MAX - 1)

那么任意找一个字符串的位置 自然也就不可能是UINT_MAX了

所以UINT_MAX就表示未找到 -1只是写起来方便 不然要写成0xFFFFFFFF