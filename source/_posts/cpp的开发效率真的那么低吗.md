---
title: C++的开发效率真的那么低吗
date: 2016-01-07 19:32:14
tags:
categories:
  - 编程
---

前几天看到一篇[文章](http://gladdy.github.io/c++/2015/07/26/NodeDemystified-pt1.html)，对比Node.js和C++的，挺有意思。

大家都知道Node.js开发效率高，下面是它创建server并监听的代码：

```
var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200,  {'Content-Type':  'text/plain'});
  res.end('Hello World\n');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');
```

<!--more-->

可以看出，Node.js原生带有处理http请求相关的库，不像php需要apache托管，并且它的路由设置更加灵活，所以深受广大开发者欢迎。

上面那段代码用C++11重构一下，暂且就叫做Node++吧。

```
using namespace std;
using namespace http;

...

HttpServer server([&](HttpRequest &req, HttpResponce &res)
{
  map<string, string> resHdr;
  resHdr["Content-Type"] = "text/plain";
  res.writeHead(200, resHdr);
  res.end("Hello World\n");
});

server.listen(8888);

cout << "Server running at http://127.0.0.1:8888/" << endl;

...
```

由于C++11加入了lambda这一高级特性，使得两段代码在复杂度和长度上是差不多的。

我不知道现在还鼓吹C++难写难用的人是什么心态。如果其中的确有一部分难用的特性（比如兼容c语言而保留的一些特性），我不知道是什么业务逻辑逼迫你去使用那些东西。我承认有些东西很坑，但它不是C++的全部，你可以不在生产环境中使用啊。你非要什么特性都用一用，然后搞个大新闻，这样简直是为了黑而黑，有什么意思？然而比c++坑的语言有的是。js的原型链和作用域不知道坑了多少人，但丝毫不影响我们拿他表达我们的思想。php的特性坑更多，不照样是web开发的主力吗？

c++的确为了兼容c保留了很多原始的东西，这部分坑在慢慢填。我们可以看到从最开始的vector和string，到11开始的智能指针以及std::thread、std::atomic，以及std::function和lambda，还有以后即将到来的asio，多了许多替代方案。虽然填的不完整，C++标准宕机了十年，也不是一朝一夕就能赶上的，但是起码是一点一点在改变的。obj-c有arc，我们有智能指针，更好地解放初级程序员的生产力，obj-c有at宏，我们有后缀运算符，更好地使用std::string。c++早就不是十年前的那个c++了。

然而对于这样一个里程碑，国内的教材显然是保守的。别说新特性了，就默认使用vector和string这条原则，有几本教材做到了？一部分人坚持信奉c++他爹极力反对的“学c++之前先学c”，结果学了一大堆c标准库的东西，之后又需要尽可能忘掉它们。 这样教出来的人，把字符串拼接几条语句能干完的事情，用string.h写了十几条，然后还反过来跟我说字符串处理弱，我就呵呵了。

可以预见的是，在不久的将来，C++会变成具有现代编程语言特性和设施的这么一种语言。我们完全可以像写Java或者Swift一样写C++。需要注重业务逻辑的时候，使用功能充足的、封装好的标准库和三方库，完全不需要管堆中对象的释放这一回事。虽然这样会使C++的门槛大幅下降，就像现在的iOS培训班那样，但对于一门语言的发展和生态构建，必定是有利的。一些”既得利益者“可能会担心初学者入门过快，而抢了他们的饭碗。如果初学者学几个月就能赶上你，你这几年算是白学了吗？