---
title: 小议innerText/HTML以及outerText/HTML
id: 54
categories:
  - 编程
date: 2013-08-16 17:54:32
tags:
---

前段时间玩填表的时候就想说说这个话题。

先看一个按钮：

```
<button id="btn1">Button1</button>
```

inner指的是Button1的部分，即只有文本。

outer指的是整个一行，包括标签。

<!--more-->

那么Text和HTML呢？

HTML是w3c标准，理论上所有浏览器都支持，Text只有IE和部分浏览器支持（chrome测试结果支持）。

所以尽可能用带HTML的函数

outerText读的时候范围是inner，即只有"Button1"，但写的时候是整行。

outerHTML无论读写都操作整行。