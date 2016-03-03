---
title: c#中的“架构之美”
categories:
  - 编程
date: 2015-04-24 13:35:00
tags:
---

**我不是架构师，但我见得太多了。**

在java要是想读文件，我们首先会想到`FileReader`。然而，`FileReader`不支持自定义编码，所以还是得用`InputStreamReader`搭配`FileInputStream`来使用。这样折腾了一遍之后，我们又发现它不支持读整行，于是外面还得用`BufferedStreamReader`包起来。

就是这个样子：

<!-- more -->

<pre>
Reader r = new BufferedStreamReader(new InputStreamReader(new FileInputStream(fileName), encoding);
</pre>

![](http://new.51cto.com/files/uploadimg/20090302/094151940.jpg)

这个是java里面reader的类图，大家可以看到有多复杂。

在c#中，StreamReader提供了以下四组构造器：

<pre>
StreamReader (Stream stream)
StreamReader (String path)
StreamReader (Stream stream, Encoding encoding)
StreamReader (String path, Encoding encoding)
</pre>

其实，传入string的构造器只是包装了一层，在里面new出一个FileInputStream。但是就是这个小小的改变，却给程序员省了不少代码。

<pre>
StreamReader sr = new StreamReader(fileName, encoding);
</pre>

于是我每次写java的东西，都要把要用到的reader包装一下：

<pre>
import java.io.*;

public class StreamReader extends BufferedReader
{
    //Reader 构造
    public StreamReader(Reader in)
    {
        super(in);
    }
    
    //Stream 构造
    public StreamReader(InputStream in, String charsetName)
           throws UnsupportedEncodingException
    {
        super(new InputStreamReader(in, charsetName));
    }
    public StreamReader(InputStream in)
    {
        super(new InputStreamReader(in));
    }
    
    //Filename 构造
    public StreamReader(String fileName, String charset)
           throws UnsupportedEncodingException, FileNotFoundException
    {
        this(new FileInputStream(fileName), charset);
    }
    public StreamReader(String fileName)
           throws FileNotFoundException
    {
        this(new FileInputStream(fileName));
    }
    
    //File 构造
    public StreamReader(File file, String charset)
           throws UnsupportedEncodingException, FileNotFoundException
    {
        this(new FileInputStream(file), charset);
    }
    public StreamReader(File file)
           throws FileNotFoundException
    {
        this(new FileInputStream(file));
    }
    
    //读到头
    public String readToEnd()
           throws IOException
    {
        StringBuilder sb = new StringBuilder();
        while(true)
        {
            String line = this.readLine();
            if(line == null) break;
            sb.append(line).append(System.getProperty("line.separator"));
        }
        return sb.toString();
    }
}
</pre>

再来看看数值读写。java里面读取整型浮点的类叫做`Scanner`，c#里面根本找不到这种东西，因为它叫`BinaryReader`。同工不同名，这命名方式我也是醉了。

java里面输出整形浮点的类叫做`PrintStream`，或者`PrintWriter`。前者估计是为了方便`System.out`的打印操作。而在c#中，你们也猜到了，相应的类叫做`BinaryWriter`，多么人性化的命名方式。