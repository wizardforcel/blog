---
title: 解决 SmallPDF 联网验证和试用期过期问题
categories:
- 应用
date: 2019-4-16 20:21:00
---

> 特别感谢：[攻防之间](https://www.52pojie.cn/thread-899911-1-1.html)

SmallPDF 是一款非常好用的 PDF 工具箱，具有压缩、格式转换、合并分割、解锁、保护等实用功能。它的在线版是完全免费的，但是文件传输很慢，桌面版完全在本地执行操作，免费试用 5 次。

首先确认一下版本，我的版本是 1.24.0，不保证这个方法以后还能用。

![1](https://ws1.sinaimg.cn/large/841aea59ly1g24qpwzg00j20a60950sq.jpg)

<!-- more -->

SmallPDF 安装之后需要联网验证，否则一直卡在这个界面。

![3](https://ws1.sinaimg.cn/large/841aea59ly1g24qqhygp7j20mo0gmjrx.jpg)

SmallPDF 在配置文件`C:\Users\{user}\AppData\Roaming\Smallpdf\preferences.json`中储存试用次数，其中`{user}`是你的计算机用户名。

打开之后，找到这一行，我这里大概是 13 行：

```json
  "system.local_token": null,
```

把值改成`"1"`。然后，找到这一行，我这里大概是 44 行：

```json
  "system.trial_duration_limit": 5,
```

把它改成 999999999999。然后给这个文件设为只读。

再打开应用程序，就发现可以用了：

![2](https://ws1.sinaimg.cn/large/841aea59ly1g24qqoqd3lj20ma0ge3z5.jpg)

