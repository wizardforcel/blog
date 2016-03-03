---
title: 如何本地调用EJB
categories:
  - 编程
date: 2015-3-28 23:32:32
tags:
---

1 首先配置好jboss环境，安装jbosstools插件。项目中导入jboss的library。

2 以实现一个计数器为例。创建一个类，命名为`CountBean`。

2.1 新增一个字段，int类型，名为count。

2.2 构造其中给count赋值为0。

2.3 新增addCount方法给count加一。新增`getCount`方法取得count。

<!--more-->

3 导入`javax.ejb.*`，给这个类打上`@Stateless`的标签。由于所有客户端访问到的是同一个计数器，所以用无状态Bean。

<pre>
import javax.ejb.*;

@Stateless
class CountBean
{
  private int count;
  
  public CountBean()
  {
    count = 0;
  }
  
  public int getCount()
  {
    return count;
  }
  
  public void addCount()
  {
    count++;
  }
}
</pre>

4 新建一个Servlet，命名为`TestServlet`，WevServlet解析为`"/"`。

4.1  导入`javax.ejb.*`，并新增字段：

<pre>
@EJB
private CountBean countbean;
</pre>

此字段不需要显式实例化。

4.2 在`doGet`方法中编写如下代码：

<pre>
countbean.addCount();
writer.write(countbean.getCount());
</pre>

5 运行该项目，并访问`http://localhost:8080/TestServlet/`。