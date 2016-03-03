---
title: "[c/c++]可变参数加法"
id: 633
categories:
  - 编程
date: 2013-12-06 19:05:56
tags:
---

p.s. 无聊研究了一下这个

函数声明：
<pre>int add(int count, ...);</pre>

调用范例：
<pre>add(5, 1, 2, 3, 4, 5);</pre>

代码如下：
<!--more-->
<pre>int add(int count, ...)
{
  va_list va;
  va_start(va, count);
  int sum = 0;
  for(int i = 0; i < count; i++)
    sum += va_arg(va, int);
  va_end(va);
  return sum;
}</pre>

其实可以不用va宏，前提是你要熟悉堆栈结构：

<pre>int add(int count, ...)
{

  char *p = (char *)&count;
  p += sizeof(count);
  int sum = 0;
  for(int i = 0; i < count; i++)
  {
    sum += *(int *)p;
    p += sizeof(int);
  }
  return sum;
}</pre>