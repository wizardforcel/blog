---
title: 吐槽一下Java的ArrayList
id: 1684
categories:
  - 编程
date: 2014-12-02 10:39:20
tags:
---

如果我们想把一个数组转化成ArrayList，ArrayList有接受Collection的构造器，但是数组又不属于Collection。

在Arrays类（数组的功能类）中，有个asList方法接受可变参数，当然也接受数组，转化成List<T>。但是这个List是Arrays.ArrayList，内部私有类，不是我们要的ArrayList，而且它是不可变的，add和remove都会抛异常。

于是，我们需要这样来折腾一下。

<pre>
ArrayList&lt;T&gt; list = new ArrayList&lt;T&gt;(Arrays.asList(arr));
</pre>

设计这个的人绝对是脑子有坑，两个函数的设计只要变一个地方，都不会如此麻烦。