---
title: Javascript中四种函数调用方式
id: 1506
categories:
  - 编程
date: 2014-10-05 21:01:53
tags:
---

为了解释方便，先创建一个函数：

<pre>
function showmsg()
{
  console.log(this);
}
</pre>

它的作用是打印this这个对象，也方便我们了解它到底指代什么。

一、直接调用

<pre>
showmsg();
</pre>

结果：

<pre>
Window {top: Window, window: Window, location: Location, external: Object, chrome: Object…} 
</pre>

可知，直接调用时，其中的this就是顶层对象window。

二、作为构造函数调用

<pre>
var obj = new showmsg();
</pre>

结果：

<pre>
showmsg {} 
</pre>

调用之后，创建了一个类型和函数同名的对象。this指代这个对象。

三、作为方法调用

<pre>
var obj = {showmsg: showmsg};
obj.showmsg();
</pre>

结果：

<pre>
Object {showmsg: function}
</pre>

其中this就是那个被绑定的对象。

四、function.call

<pre>
showmsg.call({});
</pre>

结果：

<pre>
Object {} 
</pre>

call的第一个参数是什么，里面的this就是什么。如果需要传参数的话，附在后面即可。而且这种可以只调用不绑定。

此外，直接调用相当于：

<pre>
showmsg.call(null);
</pre>

如果第一个参数是null，那么里面的this则是顶层对象window。

作为构造函数调用相当于：

<pre>
var obj = {};
obj.__proto__ = showmsg;
showmsg.call(obj);
</pre>