---
title: C++参考的翻译或校对
date: 2016-02-07 22:03:41
tags:
  - cpp
categories:
  - 编程
---

做新年规划的时候，我说过要翻译C++常用类的参考。C++的参考，其实别人已经翻译完了，只是部分内容需要校对。由于网站结构中大量使用了模板，同一个函数只需要翻译一个地方，所以四天就弄完了。而且我没有翻译函数层级的页面，所以比较快。

C++的参考其实最需要翻译。因为C++为了填C继承过来的坑，标准库增加了很多用于替代的设施。而国内的教程更新缓慢，这份参考如果不翻译，我估计到了2020年也不会完全普及。

以下是校对完成的类，希望大家继续参与：<!--more-->

+ [`<memory>`](http://zh.cppreference.com/w/cpp/memory)
  + [`unique_ptr`](http://zh.cppreference.com/w/cpp/memory/unique_ptr)
  + [`shared_ptr`](http://zh.cppreference.com/w/cpp/memory/shared_ptr)
  + [`weak_ptr`](http://zh.cppreference.com/w/cpp/memory/weak_ptr)
+ [`<chrono>`](http://zh.cppreference.com/w/cpp/chrono)
  + [`duration`](http://zh.cppreference.com/w/cpp/chrono/duration)
+ [`<functional>`](http://zh.cppreference.com/w/cpp/utility/functional)
  + [`function`](http://zh.cppreference.com/w/cpp/utility/functional/function)
+ `<utility>`
  + [`pair`](http://zh.cppreference.com/w/cpp/utility/pair)
  + [`tuple`](http://zh.cppreference.com/w/cpp/utility/tuple)
+ 字符串
  + [`basic_string`](http://zh.cppreference.com/w/cpp/string/basic_string)
  + [Null结尾的单字节字符串](http://zh.cppreference.com/w/cpp/string/byte)
  + [Null结尾的多字节字符串](http://zh.cppreference.com/w/cpp/string/multibyte)
  + [Null结尾的宽字符串](http://zh.cppreference.com/w/cpp/string/wide)
+ 容器
  + [`array`](http://zh.cppreference.com/w/cpp/container/array)
  + [`vector`](http://zh.cppreference.com/w/cpp/container/vector)
  + [`deque`](http://zh.cppreference.com/w/cpp/container/deque)
  + [`list`](http://zh.cppreference.com/w/cpp/container/list)
  + [`forward_list`](http://zh.cppreference.com/w/cpp/container/forward_list)
  + [`set`](http://zh.cppreference.com/w/cpp/container/set)
  + [`multiset`](http://zh.cppreference.com/w/cpp/container/multiset)
  + [`map`](http://zh.cppreference.com/w/cpp/container/map)
  + [`multimap`](http://zh.cppreference.com/w/cpp/container/multimap)
  + [`unordered_set`](http://zh.cppreference.com/w/cpp/container/unordered_set)
  + [`unordered_multiset`](http://zh.cppreference.com/w/cpp/container/unordered_multiset)
  + [`unordered_map`](http://zh.cppreference.com/w/cpp/container/unordered_map)
  + [`unordered_multimap`](http://zh.cppreference.com/w/cpp/container/unordered_multimap)
  + [`stack`](http://zh.cppreference.com/w/cpp/container/stack)
  + [`queue`](http://zh.cppreference.com/w/cpp/container/queue)
  + [`priority_queue`](http://zh.cppreference.com/w/cpp/container/priority_queue)
  + [`bitset`](http://zh.cppreference.com/w/cpp/utility/bitset)
+ I/O
  + [`ios_base`](http://zh.cppreference.com/w/cpp/io/ios_base)
  + [`basic_ios`](http://zh.cppreference.com/w/cpp/io/basic_ios)
  + [`basic_istream`](http://zh.cppreference.com/w/cpp/io/basic_istream)
  + [`basic_ostream`](http://zh.cppreference.com/w/cpp/io/basic_ostream)
  + [`basic_iostream`](http://zh.cppreference.com/w/cpp/io/basic_iostream)
  + [`basic_ifstream`](http://zh.cppreference.com/w/cpp/io/basic_ifstream)
  + [`basic_ofstream`](http://zh.cppreference.com/w/cpp/io/basic_ofstream)
  + [`basic_fstream`](http://zh.cppreference.com/w/cpp/io/basic_fstream)
  + [`basic_istringstream`](http://zh.cppreference.com/w/cpp/io/basic_istringstream)
  + [`basic_ostringstream`](http://zh.cppreference.com/w/cpp/io/basic_ostringstream)
  + [`basic_stringstream`](http://zh.cppreference.com/w/cpp/io/basic_stringstream)
+ [`<regex>`](http://zh.cppreference.com/w/cpp/regex)
  + [`basic_regex`](http://zh.cppreference.com/w/cpp/regex/basic_regex)
  + [`match_results`](http://zh.cppreference.com/w/cpp/regex/match_results)
+ [`<atomic>`](http://zh.cppreference.com/w/cpp/atomic)
+ [数值库](http://zh.cppreference.com/w/cpp/numeric)
  + [`ratio`](http://zh.cppreference.com/w/cpp/numeric/ratio/ratio)
  + [`<cmath>`](http://zh.cppreference.com/w/cpp/numeric/math)
  + [`complex`](http://zh.cppreference.com/w/cpp/numeric/complex)
  + [`valarray`](http://zh.cppreference.com/w/cpp/numeric/valarray)
+ [迭代器库](http://zh.cppreference.com/w/cpp/iterator)
+ [算法库](http://zh.cppreference.com/w/cpp/algorithm)

[我的贡献列表](http://zh.cppreference.com/w/Special:%E7%94%A8%E6%88%B7%E8%B4%A1%E7%8C%AE/Wizardforcel)
