title: 马甲去重复 c++源码
tags:
  - cpp
  - 去重复
  - 贴吧
  - 马甲
id: 141
categories:
  - 编程
date: 2013-08-29 10:22:33
---

<pre lang="cpp">#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;fstream&gt;
#include &lt;stdexcept&gt;
#include &lt;vector&gt;
using namespace std;

int main()
{
try
{
string ifile;
cout &lt;&lt; "请输入要去重复的文件" &lt;&lt; endl;
cin &gt;&gt; ifile;
cin.sync();

string ofile;
cout &lt;&lt; "请输入要保存的文件"&lt;&lt;endl;
cin &gt;&gt; ofile;
cin.sync();

fstream ifs(ifile, ios::in);
if(!ifs) throw exception("源文件打开失败!");
fstream ofs(ofile, ios::out | ios::append);
if(!ofs)
{
ifs.close();
throw exception("目标文件打开失败");
}

vector removed;
while(!ifs.eof())
{
string tmp;
ifs &gt;&gt; tmp;
bool exist = false;
for(int i = 0; i &lt; removed.size(); i++)
{
if(removed[i] == tmp)
{exist = ture; break;}
}

if(!exist)
{
removed.push_back(tmp);
ofs &lt;&lt; tmp &lt;&lt; endl;
}
}

ifs.close();
ofs.close();
}
catch(exception &amp;ex)
{cout &lt;&lt;  ex.what() &lt;&lt; endl;}

system("pause");
return 0;
}</pre>