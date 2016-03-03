---
title: PHP编写shell
id: 1315
categories:
  - 编程
date: 2014-06-09 17:06:37
tags:
---

这周无聊了研究了点小东西
既然py可以当shell用 那么php能不能也这样用呢？
<!--more-->
php的目录底下有解释器 早就注意到了 那么他就可以像py那样来用了

1\. 先解决执行问题吧

win下面需要配置一下环境变量 总之跟java的配置差不多就是了
名称：path 值就是php目录 例如我的就是C:\php-5.5.10
然后在cmd里输入”php -v” 会显示版本 据说明设置成功了

linux下面安装php应该是自动配置的 如果觉得每次都要打php不爽的话 文件头加

上#!/usr/local/bin/php–q

然后写代码如下：

&lt;?php
echo "hello";
?&gt;

保存为"hello.php"

把目录切到文件的位置 运行"php hello.php" 看看会输出什么

2\. 命令行

$_SERVER["argc"]
$_SERVER["argv"]

3\. 标准输入输出

$str = fgets(STDIN);
fwrite(STDOUT, "Hello, $name!");

以上。