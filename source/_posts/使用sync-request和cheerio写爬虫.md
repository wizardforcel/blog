---
title: 使用sync-request和cheerio写爬虫
date: 2016-01-22 19:38:27
tags:
categories:
  - 编程
---

node.js自带的http模块是异步获取网页内容的，不过我们可以到npm上去搜索同步的http模块。sync-request就是其中一种。

首先，安装sync-request包：

```
npm install sync-request
```

它的使用方法是：<!--more-->

```
var request = require('sync-request');
var html = request(method, url, options).getBody().toString();
```

然后我们需要一个解析html树的工具。jsdom可以用，但是它实在是太大，我们可以用cheerio，它提供了类似jquery的api，更加便捷。

```
npm install cheerio
```

之后：

```
var cheerio = require('cheerio');
var $ = cheerio.load(html);
```

下面是抓取菜鸟教程（runoob.com）单部教程的一个例子：

```
var cheerio = require('cheerio');
var request = require('sync-request');
var fs = require('fs');

var ofile = fs.openSync('out.html', 'w');

var url = 'http://www.runoob.com/html/html-tutorial.html';
var html = request('GET', url).getBody().toString();

var toc = getToc(html);
for(var i in toc) {
	var url = toc[i];
	console.log('page: ' + url);
	html = request('GET', url).getBody().toString();
	var content = getContent(html);
	fs.writeSync(ofile, content, null, 'utf-8');
}

fs.closeSync(ofile);
console.log('Done..');

function getToc(html)  {

	var $ = cheerio.load(html);

	var $list = $('#leftcolumn').find('a');
	var res = [];
	for(var i = 0; i < $list.length; i++)
	{
		var url = $list.eq(i).attr('href');
		res.push('http://www.runoob.com/' + url);
	}
	return res;
}

function getContent(html) {
	var $ = cheerio.load(html);
	var content = $('#content').html();
	return content;
}
```