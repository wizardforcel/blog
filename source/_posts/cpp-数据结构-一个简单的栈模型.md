---
title: 数据结构：一个简单的栈模型
tags:
  - cpp
id: 356
categories:
  - 编程
date: 2013-09-19 22:46:41
---

<pre>
//学习数据结构后的一点心得体会

//stack.h文件：

#pragma once
#ifndef STACK_H
#define STACK_H

#include &lt;stdexcept&gt;
using namespace std;

template&lt;class Entry, size_t Max&gt;
class Stack
{
private:
size_t count;
Entry data[Max];

public:
Stack() {count = 0;}
bool empty() {return count == 0;}
void push(const Entry &amp;e)
{
if(count == Max)throw exception("栈已满。");
data[count] = e;
count++;
}
void pop()
{
if(count == 0)throw exception("栈已空。");
count--;
}
Entry top()
{
if(count == 0)throw exception("栈已空。");
return data[count - 1];
}

};

#endif

//main.cpp文件：

#include "stack.h"

#include &lt;iostream&gt;
using namespace std;

int main()
{
	Stack&lt;int, 100&gt; psgs;
	int n;
	cout &lt;&lt; "请输入游客人数：" &lt;&lt; endl;
 	cin &gt;&gt; n;
	cout &lt;&lt; "按顺序输入乘客编号：" &lt;&lt; endl;
	for(int i = 0; i &lt; n; i++)
 	{
 		int item;
 		cin &gt;&gt; item;
		psgs.push(item);
	}
	cout &lt;&lt; "乘客下车次序是：" &lt;&lt; endl;
	while(!psgs.empty())
	{
		cout &lt;&lt; psgs.top() &lt;&lt; ' ';
		psgs.pop();
	}
	cout &lt;&lt; endl;
	system("pause");
	return 0;
}
</pre>