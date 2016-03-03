---
title: "c#取三种时间"
tags:
  - csharp
id: 428
categories:
  - 编程
date: 2013-09-30 16:08:38
---

1.标准时间

标准时间是指1970年1月1日到现在所过去的秒数 又叫时间戳 常用于网站的验证

```
TimeSpan ts = DateTime.Now - new DateTime(1970, 1, 1, 8, 0, 0);
string stamp = Convert.ToInt32(ts.TotalSeconds).ToString();
```

<!--more-->

2\. 启动时间

启动时间是指开机以来所经过的毫秒数 如果超过int所能表示的范围则会归零重新计数

常用于粗略计时

```
int time = Environment.TickCount;
```

3.现行时间 就是表示当前时间的一个字符串 常用于信息输出 比如"[hh:mm:ss]"

```
DateTime dt = DateTime.Now;
string datestring = dt.ToLongDateString();
string timestring = dt.ToLongTimeString();
```
