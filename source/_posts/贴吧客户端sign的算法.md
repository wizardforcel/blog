title: 贴吧客户端sign的算法。。。
id: 422
categories:
  - 编程
date: 2013-09-24 19:49:08
tags:
---

</pre>
static void Main(string[] args)
{
    Dictionary&lt;string, string&gt; map
      = new Dictionary&lt;string, string&gt;();
    map.Add("name1", "value1");
    map.Add("name2", "value2");
    //...
    StringBuilder poststr = new StringBuilder();
    StringBuilder tosign = new StringBuilder();
    foreach (var elem in map)
    {
        poststr.Append(elem.Key).Append("=")
               .Append(HttpUtility.UrlEncode(elem.Value, Encoding.UTF8))
               .Append("&amp;");
        tosign.Append(elem.Key).Append(elem.Value);
    }
    tosign.Append("tiebaclient!!!");
    poststr.Append("sign=").Append(MD5Encrypt(tosign.ToString(), Encoding.UTF8));
    Console.WriteLine(poststr.ToString());

}

static string MD5Encrypt(string text, Encoding enco)
{
    byte[] input = enco.GetBytes(text);
    MD5CryptoServiceProvider md5
      = new MD5CryptoServiceProvider();
    byte[] output = md5.ComputeHash(input);
    StringBuilder sb = new StringBuilder();
    foreach (byte x in output)
      sb.AppendFormat("{0:X2}", x);
    return sb.ToString();
}
</pre>

1.提交内容所有的name-value值对 按照name的字典序升序排列（要是不知道就以抓包出来的顺序为准） 之后后面加上"tiebaclient!!!" 并去掉"&amp;"这个字符
2.以UTF-8编码计算md5值 计算md5的时候应该输入一个byte[] 以UTF-8编码getbytes就好
3.在原始的提交内容（不带"tiebaclient"，但是带"&amp;"）后面加上"&amp;sign=" 然后在加上刚才的md5文本