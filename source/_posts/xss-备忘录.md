---
title: xss 备忘录
categories:
  - 安全
tags:
  - xss
date: 2015-04-27 17:10:00
---

“企业级应用架构”这门课上提到了xss，在这里把一些常用的资料做个备忘。

<!--more-->

## Cheat Sheet ##

http://drops.wooyun.org/tips/1955

## 扫描工具 ##

![](http://image.webreader.duokan.com/mfsv2/download/s010/p01c8C61NADB/bllx3WsLhjwNrS.jpg)

## 过滤函数 ##

主要是转义and、小于号、大于号和两个引号。

<pre>
function htmlEnco(s)
{
    return s.replace(/</g, "&amp;lt;")
            .replace(/>/g, "&amp;gt;")
            .replace(/&amp;/g, "&amp;amp;")
            .replace(/"/g, "&amp;quot;")
            .replace(/'/g, "&amp;#39;");
}
</pre>