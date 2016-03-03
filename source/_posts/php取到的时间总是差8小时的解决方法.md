---
title: php取到的时间总是差8小时的解决方法
id: 1366
categories:
  - 编程
date: 2014-07-09 00:46:53
tags:
---

从php5.1开始，在设置文件"php.ini"里面有一项叫做`date.timezone`，可以设置服务器所在的时区。刚安装的php此项应该是注释掉的，这种情况下使用的是格林尼治标准时间，也就是+-0的时区。

我们可以把这个配置改掉，即去掉前面的分号，在后面的等号之后加上"PRC"，比如"date.timezone=PRC"，就可以纠正过来。其他备选的值有"Asia/Chongqing"、"Asia/Shanghai"、"Asia/Urumqi"、"Asia/Macao"、"Asia/Hong_Kong"、"Asia/Taipei"、"Asia/Singapore"，或者直接使用"Etc/GMT-8"。

如果遇到了像虚拟主机那种无法修改配置文件的情况，可以在获取时间之前加上一句`date_default_timezone_set('PRC');`，就解决了。