title: 突然想到一个防止富文本xss的办法
date: 2015-05-04 16:45:55
categories:
  - 安全
---

纯文本的xss很好防，输出端过滤就好了。那么富文本呢？

我突然想到可以用markdown。即强行让用户以markdown格式输入，后台拿到文本后，先把标签都过滤掉，然后拿markdown解析器解析。markdown是一种趋势，早点使用对于用户有好处。