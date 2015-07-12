title: Selenium Webdriver 简易教程
id: 1737
categories:
  - 编程
date: 2014-12-16 21:48:56
tags:
---

Selenium是ThroughtWorks公司开发的一套Web自动化测试工具。

它分为三个组件：

*   Selenium IDE
*   Selenium RC (Remote Control)
*   Selenium Webdriver

**Selenium IDE**是firefox的一个插件，允许测试人员录制脚本并回放。

<!--more-->

**Selenium RC**和**Selenium Webdriver**是测试框架，提供多种语言的API。不同的是，**Selenium Webdriver**以一种更底层、更灵活的方式来操作浏览器，并不仅仅使用javascript。这样它可以绕开浏览器的沙箱限制，实现**Selenium RC**不支持的框架、弹出窗口、页面导航、下拉菜单、基于AJAX的UI元素等控件的操作。以及，**Selenium Webdriver**不需要本地服务器。

Selenium 1.x版本只包含前两个组件。从2.0开始Webdriver加入其中。

## 准备工作

由于本篇教程用Java做示范，所以请先安装JDK并配置好环境变量。

到[官网](http://docs.seleniumhq.org/download/)下载库文件`selenium-java-2.xx.x.zip`，如果官网被墙了就到CSDN去找。打开压缩包，`selenium-java-2.25.0.jar`的库文件，需要导入到项目中；`selenium-java-2.25.0-srcs.jar`是源码，里面是一些*.java文件;`lib`文件夹里面是依赖包，也要一起导入到项目中。

除了firefox浏览器，其它浏览器基本都需要驱动，同样请到官网下载。

## 浏览器操作

### 打开浏览器

打开默认路径的firefox

</pre>
WebDriver driver = new FirefoxDriver();
</pre>

打开指定路径的firefox

</pre>
System.serProperty(&quot;webdriver. firefox.bin&quot;,
   &quot;C:\\Program Files\\Mozilla Firefox\\firefox.exe&quot;);
WebDriver driver = new FirefoxDriver();
</pre>

或者

</pre>
File pathToFirefoxBinary 
  = new File(&quot;C:\\Program Files\\Mozilla Firefox\\firefox.exe&quot;);
FirefoxBinary firefoxbin = new FirefoxBinary(pathToFirefoxBinary);
WebDriver driver = new FirefoxDriver(firefoxbin,null);
</pre>

打开ie（需要驱动）

</pre>
System.setProperty(&quot;webdriver.ie.driver&quot;, &quot;...\\IEDriverServer.exe&quot;)
WebDriver driver = new InternetExplorerDriver();
</pre>

打开chrome（需要驱动）

</pre>
System.setProperty(&quot;webdriver.chrome.driver&quot;, &quot;...\\chromedriver.exe&quot; );
System.setProperty(&quot;webdriver.chrome.bin&quot;, 
   &quot;C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe&quot;);
WebDriver driver = new ChromeDriver();
</pre>

### 打开URL

用get方法

</pre>
driver.get(&quot;http://www.51.com&quot;);
</pre>

或者用navigate方法，然后再调用to方法

</pre>
driver.navigate().to(&quot;http://www.51.com&quot;);
</pre>

### 关闭浏览器

用quit方法

</pre>
driver.quit();
</pre>

或者用close方法

</pre>
driver.close();
</pre>

### 返回当前页面url和title

得到title

</pre>
String title = driver.getTitle();
</pre>

得到当前页面url

</pre>
String currentUrl = driver.getCurrentUrl();
</pre>

输出title和currenturl

</pre>
System.out.println(title+&quot;\n&quot;+currentUrl);
</pre>

### 其他方法

*   `getWindowHandle()` 返回当前的浏览器的窗口句柄
*   `getWindowHandles()` 返回当前的浏览器的所有窗口句柄
*   `getPageSource()` 返回当前页面的源码

## 对浏览器的支持

### HtmlUnit Driver

优点：HtmlUnit Driver不会实际打开浏览器，运行速度很快。对于用FireFox等浏览器来做测试的自动化测试用例，运行速度通常很慢，HtmlUnit Driver无疑是可以很好地解决这个问题。

缺点：它对JavaScript的支持不够好，当页面上有复杂JavaScript时，经常会捕获不到页面元素。

使用：

</pre>
WebDriver driver = new HtmlUnitDriver();
</pre>

### FireFox Driver

优点：FireFox Dirver对页面的自动化测试支持得比较好，很直观地模拟页面的操作，对JavaScript的支持也非常完善，基本上页面上做的所有操作FireFox Driver都可以模拟。

缺点：启动很慢，运行也比较慢，不过，启动之后Webdriver的操作速度虽然不快但还是可以接受的，建议不要频繁启停FireFox Driver。

使用：

</pre>
WebDriver driver = new FirefoxDriver();
</pre>

Firefox profile的属性值是可以改变的，比如我们平时使用得非常频繁的改变useragent的功能，可以这样修改：

</pre>
FirefoxProfile profile = new FirefoxProfile();
profile.setPreference(&quot;general.useragent.override&quot;, &quot;some UAstring&quot;);
WebDriver driver = new FirefoxDriver(profile);
</pre>

### InternetExplorer Driver

优点：直观地模拟用户的实际操作，对JavaScript提供完善的支持。

缺点：是所有浏览器中运行速度最慢的，并且只能在Windows下运行，对CSS以及XPATH的支持也不够好。

使用：

</pre>
WebDriver driver = new InternetExplorerDriver();
</pre>

## 选择器

### By ID

页面：

</pre>
<input type=&quot;text&quot; name=&quot;passwd&quot; id=&quot;passwd-id&quot; />
</pre>

代码：

</pre>
WebElement element = driver.findElement(By.id(&quot;passwd-id&quot;));
</pre>

### By Name

页面同上

代码：

</pre>
WebElement e = dr.findElement(By.name(&quot;passport_51_user&quot;));
</pre>

### By XPATH

</pre>
WebElement element 
  = driver.findElement(By.xpath(&quot;//input[@id=&#39;passwd-id&#39;]&quot;));
</pre>

### By Class Name

页面：

</pre>
<div class=&quot;cheese&quot;>
  <span>Cheddar</span>
</div>
<divclass=&quot;cheese&quot;>
  <span>Gouda</span>
</div>
</pre>

代码：

</pre>
List<WebElement> cheeses 
  = driver.findElements(By.className(&quot;cheese&quot;));
</pre>

### By Link Text

页面：

</pre>
<a href=&quot;http://www.google.com/search?q=cheese&quot;>cheese</a>
</pre>

代码：

</pre>
WebElement cheese = driver.findElement(By.linkText(&quot;cheese&quot;));
</pre>

## 控件操作

### 输入框

</pre>
WebElement element = driver.findElement(By.id(&quot;passwd-id&quot;));

//在输入框中输入内容：
element.sendKeys(“test”);

//将输入框清空：
element.clear();

//获取输入框的文本内容：
element.getText();
</pre>

### 单选框

</pre>
WebElement radio = driver.findElement(By.id(&quot;BookMode&quot;));

//选择某个单选项：
radio.click();

//清空某个单选项：
radio.clear();

//判断某个单选项是否已经被选择：
radio.isSelected();
</pre>

### 多选框

</pre>
WebElement checkbox = driver.findElement(By.id(&quot;myCheckbox&quot;));

//与单选框类似
checkbox.click();
checkbox.clear();
checkbox.isSelected();
checkbox.isEnabled();
</pre>

### 按钮

</pre>
WebElement saveButton = driver.findElement(By.id(&quot;save&quot;));

//点击按钮：
saveButton.click();

//判断按钮是否enable:
saveButton.isEnabled ();
</pre>

### 左右选择框

也就是左边是可供选择项，选择后移动到右边的框中，反之亦然。例如：

</pre>
Select lang = new Select(driver.findElement(By.id(&quot;languages&quot;)));
lang.selectByVisibleText(“English”);
WebElement addLanguage = driver.findElement(By.id(&quot;addButton&quot;));
addLanguage.click();
</pre>

### 表单

</pre>
WebElement approve = driver.findElement(By.id(&quot;approve&quot;));

approve.click();

//或（只适合于表单的提交）
approve.submit();
</pre>

### 文件上传

</pre>
WebElement adFileUpload = driver.findElement(By.id(&quot;WAP-upload&quot;));
String filePath = &quot;C:\test\\uploadfile\\media_ads\\test.jpg&quot;;
adFileUpload.sendKeys(filePath);
</pre>

## 高级控件

### 取多个对象

findElements()方法可以返回一个符合条件的元素List组，例如：

</pre>
List<WebElement> elements = driver.findElements(By.tagName(&quot;input&quot;));
</pre>

### 层级定位

不方便定位某元素时，可以先定位其父元素，再取父元素的子元素：

</pre>
WebElement element = driver.findElements(By.className(&quot;login&quot;));
List<WebElement> elements = element.findElements(By.tagName(&quot;label&quot;));
</pre>

### iframe

网页：

</pre>
<html>
  <head>
<title>FrameTest</title>
  </head>
  <body style=&quot;background-color: #990000;&quot;>
<div id=&quot;id1&quot;>this is a div!</div>
<iframe id=&quot;frame&quot; frameborder=&quot;0&quot; scrolling=&quot;no&quot; style=&quot;left:0;position:absolute;&quot; src=&quot;frame.html&quot;></iframe>
  </body>
</html>
</pre>

frame.html：

</pre>
<html>
  <head>
<title>this is a frame!</title>
  </head>
  <body style=&quot;background-color: #009900;&quot;>
<div id = &quot;div1&quot;>this is a div，too!</div>
<label>input:</label>
<input id = &quot;input1&quot;></input>
  </body>
</html>
</pre>

代码：

</pre>
//在default content定位id=&quot;id1&quot;的div
dr.findElement(By.id(&quot;id1&quot;));

//此时，没有进入到id=&quot;frame&quot;的frame中时，以下两句会报错
dr.findElement(By.id(&quot;div1&quot;));//报错
dr.findElement(By.id(&quot;input1&quot;));//报错

//进入id=&quot;frame&quot;的frame中，定位id=&quot;div1&quot;的div和id=&quot;input1&quot;的输入框。
dr.switchTo().frame(&quot;frame&quot;);
dr.findElement(By.id(&quot;div1&quot;));
dr.findElement(By.id(&quot;input1&quot;));

//此时，没有跳出frame，如果定位default content中的元素也会报错。
dr.findElement(By.id(&quot;id1&quot;));//报错

//跳出frame,进入default content;重新定位id=&quot;id1&quot;的div
dr.switchTo().defaultContent();
dr.findElement(By.id(&quot;id1&quot;));
</pre>

### 弹出窗口

</pre>
//得到当前窗口的句柄
String currentWindow = dr.getWindowHandle();

//得到所有窗口的句柄
Set<String> handles = dr.getWindowHandles();

for(String handle : handles)
{
  if(currentWindow.equals(handle)) continue;
  WebDriver window = dr.switchTo().window(handle);
  //...
}
</pre>

### alert、confirm、prompt

*   `getText()` 得到它的文本值
*   `accept()` 相当于点击它的&quot;确认&quot;
*   `dismiss()` 相当于点击&quot;取消&quot;或者叉掉对话框
*   `sendKeys()` 输入值

</pre>
Alert alert = dr.switchTo().alert();
String text = alert.getText();
System.out.println(text);
alert.dismiss();</pre>
</pre>Alert confirm = dr.switchTo().alert();
String text1 = confirm.getText();
confirm.accept();</pre>
</pre>Alert prompt = dr.switchTo().alert();
String text2 = prompt.getText();
prompt.sendKeys(&quot;jarvi&quot;);
prompt.accept();
</pre>

### 下拉框

页面：

</pre>
<div id=&quot;car-menu&quot;>
  <h2>品牌选择</h2>
  <select name=&quot;cars&quot;,id=&quot;select&quot;>
<option value=&quot;volvo&quot;>Volvo</option>
<option value=&quot;saab&quot;>Saab</option>
<option value=&quot;fiat&quot; selected=&quot;selected&quot;>Fiat</option>
<option value=&quot;audi&quot;>Audi</option>
<option value=&quot;bmw&quot;>BMW</option>
<option value=&quot;Mercedes Benz &quot;>Mercedes Benz </option>
  </select>
</div>
</pre>

代码：

</pre>
Select selectCar = new Select(dr.findElement(By.name(&quot;cars&quot;)));

// 通过下拉列表中选项的索引选中第二项，
selectCar.selectByIndex(4);

// 通过可见文字“audi”选中相应项，
selectengin.selectByVisibleText(&quot;audi&quot;);
</pre>

### 拖放元素

</pre>
WebElement ele = dr.findElement(By.id(&quot;item1&quot;));
WebElement tar = dr.findElement(By.id(&quot;drop&quot;));
(new Action(dr)).dragAndDrop(ele, tar).perform();
</pre>

### 表格

下面这个实例按照原顺序输出表格中的内容：

</pre>
WebElement table = driver.findElement(By.id(&quot;my-table&quot;));
List<WebElement> rows = table.findElements(By.tagName(&quot;tr&quot;));
for(WebElement row : rows)
{
  // 列里面有&quot;<th>&quot;、&quot;<td>&quot;两种标签，所以分开处理。
  List<WebElement> heads = row.findElements(By.tagName(&quot;th&quot;));
  for(WebElement head : heads) 
  {
System.out.print(head.getText());
System.out,print(&quot; &quot;);
  }
  List<WebElement> cols = row.findElements(By.tagName(&quot;td&quot;));
  for(WebElement col : cols) 
  {
System.out.print(col.getText());
System.out,print(&quot; &quot;);
  }
  System.out,println();
}
</pre>

## Cookies

</pre>
// 增加一个name = &quot;name&quot;,value=&quot;value&quot;的cookie
Cookie cookie = new Cookie(&quot;name&quot;, &quot;value&quot;);
dr.manage().addCookie(cookie);

// 得到当前页面下所有的cookies，并且输出它们的所在域、name、value、有效日期和路径
Set<Cookie> cookies = dr.manage().getCookies();
System.out.println(String
  .format(&quot;Domain -> name -> value -> expiry -> path&quot;));
for (Cookie c : cookies)
System.out.println(String.format(&quot;%s -> %s -> %s -> %s -> %s&quot;,
c.getDomain(), c.getName(), c.getValue(), c.getExpiry(),c.getPath()));

// 删除cookie有三种方法

// 第一种 通过cookie的name
dr.manage().deleteCookieNamed(&quot;CookieName&quot;);

// 第二种 通过Cookie对象
dr.manage().deleteCookie(cookie);

// 第三种 全部删除
dr.manage().deleteAllCookies();
</pre>

## 等待

### 明确等待

假设被测页面实现了这样的一种效果：点击click按钮4秒钟后，页面上会出现一个蓝色的div块。需要写一段自动化脚本去捕获这个出现的div，然后高亮它。

</pre>
WebDriverWait wait = new WebDriverWait(dr, 10);
wait.until(new ExpectedCondition<WebElement>() 
{
  public WebElement apply(WebDriver d) 
  {
    return d.findElement(By.cssSelector(&quot;.blue_box&quot;));
  }
}
</pre>

代码WebDriverWait类的构造方法接受了一个WebDriver对象和一个等待最长时间（10秒）。然后调用until方法，其中重写了ExpectedCondition接口中的apply方法，让其返回一个WebElement,即加载完成的元素。默认情况下，WebDriverWait每500毫秒调用一次ExpectedCondition，直到有成功的返回，当然如果超过设定的值还没有成功的返回，将抛出异常。

### 隐性等待

隐性等待是指当要查找元素，而这个元素没有马上出现时，告诉WebDriver查询Dom一定时间。默认值是0,但是设置之后，这个时间将在WebDriver对象实例整个生命周期都起作用。

上面的代码可改为如下代码：

</pre>
// 设置10秒
dr.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
</pre>

## 截图

</pre>
// 这里等待页面加载完成
Thread.sleep(5000);

// 下面代码是得到截图并保存在D盘下
File screenShotFile 
  = ((TakesScreenshot) dr).getScreenshotAs(OutputType.FILE);
FileUtils.copyFile(screenShotFile, 
   new File(&quot;E:/软件测试课程/selenium/test.png&quot;));
</pre>

## 鼠标键盘模拟

### 单一操作

</pre>
//新建一个action
Actions action=new Actions(driver);

//操作
WebElement element = dr.findElement(By.id(&quot;test&quot;));
WebElement element1 = dr.findElement(By.id(&quot;su&quot;));
action.sendKeys(element,&quot;test&quot;).perform();
action.moveToElement(element1);
action.click().perform();
</pre>

### 组合操作

</pre>
(new Actions(dr)).dragAndDrop(dr.findElement(By.id(item)), target).perform();
Action dragAndDrop = builder.clickAndHold(someElement)
  .moveToElement(otherElement)
  .release(otherElement)
  .build().perform();
</pre>

其他鼠标或键盘操作方法可以具体看一下API里面的`org.openqa.selenium.interactions.Actions`类。

## 其它

### firefox代理

</pre>
String PROXY = &quot;localhost:8080&quot;;//如果不是本机，localhost替换成IP地址
org.openqa.selenium.Proxy proxy = new org.openqa.selenium.Proxy();
proxy.setHttpProxy(PROXY)
  .setFtpProxy(PROXY)
  .setSslProxy(PROXY);
DesiredCapabilities cap = new DesiredCapabailities();
cap.setPreference(CapabilityType.PROXY, proxy);
WebDriver driver = new FirefoxDriver(cap);
</pre>

### 启用firefox禁用的功能

</pre>
FirefoxProfile profile = new FirefoxProfile();
profile.setEnableNativeEvents(true);
WebDriver driver = new FirefoxDriver(profile);
</pre>

### 临时指定插件

有时需要临时让启动的firefox带一个插件，如firebug,来定位问题等。首先要下载这个插件的xpi安装包。剩下的就让selenium webdriver来完成，如下：

</pre>
FirefoxProfile firefoxProfile = new FirefoxProfile();
firefoxProfile.addExtension(file);
//避免启动画面
firefoxProfile.setPreference(&quot;extensions.firebug.currentVersion&quot;, &quot;1.10.1&quot;); 
WebDriver driver = new FirefoxDriver(firefoxProfile);
</pre>

## 注

部分内容来自**SE225软件测试课程课件第8章--GUI测试工具**。