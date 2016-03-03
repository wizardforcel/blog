---
title: "C#多线程Invoke示例"
tags:
  - csharp
  - Invoke
  - 多线程
id: 188
categories:
  - 编程
date: 2013-09-03 17:05:58
---


```
public void DoWork()
{
    //错误示例：
    textbox1.text = "Hello";

    //正确示例：
    textbox1.Invoke((str) => textbox1.text = str, new Object[]{ "Hello" });
}

private void button1_Click(object sender, EventArgs e)
{
    //...
    Thread tr = new Thread(new ThreadStart(DoWork));
    tr.Start();
    //...
}
```
