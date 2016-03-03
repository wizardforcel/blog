---
title: TwentyEleven暗色系主题实现透明
id: 167
categories:
  - wordpress
date: 2013-08-30 08:45:36
tags:
---

1.找到 /wp-content/themes/twentyeleven/colors/dark.css

2.第13行左右(#page background)改为
  background: rgba(15,15,15,0.5);

3.第57行左右(#branding border-top)改为
  border-top: 2px solid rgba(10, 10, 10, 0);

4.第82行左右(#access background)改为
  background: -webkit-linear-gradient(rgba(56, 56, 56, 0), rgba(39, 39, 39, 1));

5.第587行左右(#site-generator background)改为
  background: rgba(6, 6, 6, 0);

6.保存 如果安装了缓存插件请先更新缓存 然后就能看到了 其实大家可以用chrome的开发工具调整css看效果 很方便的