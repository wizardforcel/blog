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

//错误示例：

public void DoWork()
{
textbox1.text = "Hello.";
}

private void button1_Click(object sender, EventArgs e)
{
//...
Thread tr = new Thread(new ThreadStart(DoWork));
tr.Start();
//...
}

正确示例
<!--more-->
1.先封装成一个子程序（如果需要的话）

public void SetTxt(string str)
{
textbox1.text = str;
}

2\. 在类成员位置声明一个托管 参数与子程序一致

public delegate void Func_v_s(string str);

3.在线程中

public void DoWork()
{
this.Invoke(new Func_v_s(SetTxt), new Object[] {"Hello."};)
//若有多个参数则 new Object[] {para1, para2, ...};
//BeginInvoke用于异步委托
}

便于调用方便可以再进行封装

无论怎么样 调用控件的方法必须写在控件所在类中