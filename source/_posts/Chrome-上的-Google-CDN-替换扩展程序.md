---
title: Chrome 上的 Google CDN 替换扩展程序
id: 1854
categories:
  - 应用
date: 2015-01-14 17:40:52
tags:
---

由于众所周知的原因，google cdn 库被墙，许多没有被墙的网站由于用了 google cdn 库，也被连带导致无法打开。这个扩展程序在加载页面时，将 google cdn 替换成国内的镜像。

原本用的是[360公共库](http://libs.useso.com/)，但由于其不支持https，换成了[中科大](http://lug.ustc.edu.cn/)的。

考虑到 chrome 官方商店也存在被墙的现象，作者在github上直接提供源代码。用户可以在[Chrome扩展程序](chrome://extensions/)中自行打包安装。

作者：justjavac

下载地址：[https://github.com/justjavac/ReplaceGoogleCDN](https://github.com/justjavac/ReplaceGoogleCDN)