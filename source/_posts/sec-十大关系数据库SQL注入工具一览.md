---
title: 十大关系数据库SQL注入工具一览
id: 1293
categories:
  - 安全
tags:
  - sql注入
date: 2014-05-23 16:48:36
---

众所周知，SQL注入攻击是最为常见的Web应用程序攻击技术。同时SQL注入攻击所带来的安全破坏也是不可弥补的。以下罗列的10款SQL工具可帮助管理员及时检测存在的漏洞。
<!--more-->
**BSQL Hacker**

![](http://cms.csdnimg.cn/articlev1/uploads/allimg/120416/79_120416170903_1.jpg)

BSQL Hacker是由Portcullis实验室开发的，BSQL Hacker 是一个SQL自动注入工具（支持SQL盲注），其设计的目的是希望能对任何的数据库进行SQL溢出注入。 BSQL Hacker的适用群体是那些对注入有经验的使用者和那些想进行自动SQL注入的人群。BSQL Hacker可自动对Oracle和MySQL数据库进行攻击，并自动提取数据库的数据和架构。

**The Mole**

![](http://cms.csdnimg.cn/articlev1/uploads/allimg/120416/79_120416170925_1.png)

The Mole是一款开源的自动化SQL注入工具，其可绕过IPS/IDS（入侵防御系统/入侵检测系统）。只需提供一个URL和一个可用的关键字，它就能够检测注入点并利用。The Mole可以使用union注入技术和基于逻辑查询的注入技术。The Mole攻击范围包括SQL Server、MySQL、Postgres和Oracle数据库。

**Pangolin**

![](http://cms.csdnimg.cn/articlev1/uploads/allimg/120416/79_120416170950_1.png)

Pangolin是一款帮助渗透测试人员进行SQL注入(SQL Injeciton)测试的安全工具。Pangolin与JSky（Web应用安全漏洞扫描器、Web应用安全评估工具）都是NOSEC公司的产品。Pangolin具备友好的图形界面以及支持测试几乎所有数据库（Access、MSSql、MySql、Oracle、Informix、DB2、Sybase、PostgreSQL、Sqlite）。Pangolin能够通过一系列非常简单的操作，达到最大化的攻击测试效果。它从检测注入开始到最后控制目标系统都给出了测试步骤。Pangolin是目前国内使用率最高的SQL注入测试的安全软件。

**Sqlmap**

![](http://cms.csdnimg.cn/articlev1/uploads/allimg/120416/79_120416171058_1.png)

Sqlmap是一个自动SQL 注入工具。其可胜任执行一个广泛的数据库管理系统后端指纹，

检索DBMS数据库、usernames、表格、列、并列举整个DBMS信息。Sqlmap提供转储数据库表以及MySQL、PostgreSQL、SQL Server服务器下载或上传任何文件并执行任意代码的能力。

**Havij**

![](http://cms.csdnimg.cn/articlev1/uploads/allimg/120416/79_120416171120_1.png)

Havij是一款自动化的SQL注入工具，它能够帮助渗透测试人员发现和利用Web应用程序的SQL注入漏洞。Havij不仅能够自动挖掘可利用的SQL 查询，还能够识别后台数据库类型、检索数据的用户名和密码hash、转储表和列、从数据库中提取数据，甚至访问底层文件系统和执行系统命令，当然前提是有 一个可利用的SQL注入漏洞。Havij支持广泛的数据库系统，如 MsSQL, MySQL, MSAccess and Oracle。 Havij支持参数配置以躲避IDS，支持代理，后台登陆地址扫描。

**Enema SQLi**

![](http://cms.csdnimg.cn/articlev1/uploads/allimg/120416/79_120416171156_1.png)

Enema SQLi与其他 SQL注入工具不同的是，Enema SQLi不是自动的，想要使用Enema SQLi需要一定的相关知识。Enema SQLi能够使用用户自定义的查询以及插件对SQL Server和MySQL数据库进行攻击。支持基于error-based、Union-based和blind time-based的注入攻击。

**SQLninja**

![](http://cms.csdnimg.cn/articlev1/uploads/allimg/120416/79_120416171220_1.JPG)

SQLninja软件用Perl编写，符合GPLv2标准。SQLninja的目的是利用Web应用程序中的SQL注入式漏洞，它依靠微软的SQL Server作为后端支持。其主要的目标是在存在着漏洞的数据库服务器上提供一个远程的外壳，甚至在一个有着严格的防范措施的环境中也能如此。在一个SQL注入式漏洞被发现以后，企业的管理员特别是渗透攻击的测试人员应当使用它，它能自动地接管数据库服务器。现在市场上有许多其它的SQL注入式漏洞工具，但SQLninja与其它工具不同，它无需抽取数据，而着重于在远程数据库服务器上获得一个交互式的外壳，并将它用作目标网络中的一个立足点。

**sqlsus**

![](http://cms.csdnimg.cn/articlev1/uploads/allimg/120416/79_120416171245_1.png)

sqlsus是一个开放源代码的MySQL注入和接管工具，sqlsus使用perl编写并基于命令行界面。sqlsus可以获取数据库结构，注入你自己的SQL语句，从服务器下载文件，爬行web站点可写目录，上传和控制后门，克隆数据库等。

**Safe3 SQL Injector**

![](http://cms.csdnimg.cn/articlev1/uploads/allimg/120416/79_120416171305_1.jpg)

Safe3 SQL Injector是一个最强大和最易使用的渗透测试工具，它可以自动检测和利用SQL注入漏洞和数据库服务器的过程中。Safe3 SQL Injector具备读取MySQL、Oracle、PostgreSQL、SQL Server、Access、SQLite、Firebird、Sybase、SAP MaxDB等数据库的能力。同时支持向MySQL、SQL Server写入文件，以及SQL Server和Oracle中执行任意命令。Safe3 SQL Injector也支持支持基于error-based、Union-based和blind time-based的注入攻击。

**SQL Poizon**

![](http://cms.csdnimg.cn/articlev1/uploads/allimg/120416/79_120416171338_1.png)

SQL Poizon的图形界面使用户无需深厚的专业知识便能够进行攻击，SQL Poizon扫描注入工具内置浏览器可帮助查看注入攻击带来的影响。SQL Poizon充分利用搜索引擎“dorks”扫描互联网中存在SQL注入漏洞的网站。

转自：[http://www.csdn.net/article/2012-04-16/2804631](http://www.csdn.net/article/2012-04-16/2804631)