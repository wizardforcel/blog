---
title: jquery 读取checkbox
id: 1361
categories:
  - 编程
date: 2014-06-29 01:59:55
tags:
---

html的checkbox控件 是否选中要看有没有checked属性 有就是选中 无论值是什么

如果有这样一个checkbox
<pre>&lt;input id="chk" type="checkbox" checked="checked" /&gt;</pre>

使用js dom来操作 通过checked属性很容易取到是否选中
<pre>document.getElementById('chk').checked = true;
document.getElementById('chk').checked = false;
var checked = document.getElementById('chk').checked;</pre>

如果用jquery呢？
<!--more-->
1\. 访问是否选中
<pre>var checked = $('#chk').is(':checked');</pre>

2\. 设置选中
<pre>$('#chk').attr('checked', 'checked');</pre>

3\. 取消选中
<pre>$('#chk').removeAttr('checked');</pre>