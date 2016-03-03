---
title: 论builder模式
categories:
  - 编程
date: 2015-04-22 10:11:01
tags:
---

《软件架构》这门课讲到了设计模式。其中有个模式叫做“构建者模式”，大家可能一开始听不明白，其实很多库里面都有使用。可惜ppt上面是老师自己编的代码，不便于理解，我在这里举几个例子。

首先，是laravel的orm查询器：

<pre>
$name = DB::table('users')
            ->distinct()
            ->where('name', 'John')
            ->select('name', 'email')
            ->get();
</pre>

<!-- more -->

无论如何，Eloquent ORM框架给我的感觉就是十分富有美感，实话说我被惊艳到了。

第二个可能大家更熟悉一点，就是安卓的AlertDialog：

<pre>
dateDialog = new AlertDialog.Builder(this).setTitle("请输入日期")
        .setView(datePicker)
        .setPositiveButton("确定", new DialogInterface.OnClickListener()
        {
            @Override
            public void onClick(DialogInterface dialogInterface, int i)
            { dateDialogOkButton_Click(dialogInterface, i); }
        })
        .setNegativeButton("取消", null)
        .create();
</pre>

可以看出来，这种模式的的特点是，首先，你不能直接new出来一个你想得到的对象，必须先new出一个它的builder对象，这是为了防止后面一个一个设置属性时不能刷新，或者不能同步。其次，builder所需的参数，并不由一个函数传进去，而是由多个set函数组合完成的。这些set函数可以每个都返回this，而外面在调用它的时候可以写成方法调用的连锁操作，十分顺手。

