title: vb.net坑爹的数组
id: 261
categories:
  - 编程
date: 2013-09-10 12:23:44
tags:
---

1.声明但不实例化
dim arr() as integer
或dim arr as integer()

c#: int[] arr;

执行完arr是空引用
大家可能说这个都差不多 那么咱们看下一个
<!--more-->
2:声明并实例化dim arr(size - 1) as integer

c#: int[] arr = new int[size];

首先那个size-1就让人很不爽了 老容易记错
还有由于vb.net数组下标用的圆括号 故尺寸什么的不能放后面
然后本来是个实例化的东西还不能加new 不然会跟int的构造器混- -

3.重新分配大小
redim arr(size - 1)

c#: arr = new int[size];

这我就不吐槽了
两者编译时最终都要转换成msil
结果vb.net弄成这个德性
其实vb.net已经改善不少了 比如初始化赋值 比如return 比如+=
向前兼容一些这样的东西不知应该是喜是悲…