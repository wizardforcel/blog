---
title: CSDN 重复文件上传限制的解决办法
date: 2017-12-09 14:39:40
categories:
  - 应用
---

CSDN 最近限制了重复文件。如果有人已经上传了某个文件，再次上传会失败：

![](http://ww1.sinaimg.cn/large/841aea59gy1fmai6vf6idj20td07ggll.jpg)

有的时候打了压缩包还是没用，那么，可以试试添加个注释。

比如说，我这里有个压缩包。

```
文件: C:\Users\asus\Desktop\《SciPy and NumPy》中文精要.7z
大小: 1353887 字节
修改时间: 2017年12月9日, 14:30:01
MD5: E8597649E8EBA0797237CF82C03A843C
SHA1: 60CBCC9F43E56F1DE8EC0178066807850E415083
CRC32: 2B058995
```

给它加点注释，就用当前日期和时间好了，这个肯定没有人会和你重复。

![](http://ww1.sinaimg.cn/large/841aea59gy1fmai762l09j20rm0h23zs.jpg)

```
文件: C:\Users\asus\Desktop\《SciPy and NumPy》中文精要.7z
大小: 1353904 字节
修改时间: 2017年12月9日, 14:32:02
MD5: ECCB7BF037BFCFDC435285B249F265FD
SHA1: A1ECDA73375F5AFABD1AD0479195EB499D5B7270
CRC32: F91C16EC
```

校验值就完全变了，系统会把它看成不同的文件。

此外，这个方式也能躲过根据校验值的文件屏蔽。如果文件过大压缩过程较慢，可以设置为`Store`方式。
