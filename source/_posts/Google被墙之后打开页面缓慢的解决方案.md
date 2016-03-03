---
title: Google被墙之后打开页面缓慢的解决方案
id: 1310
categories:
  - wordpress
date: 2014-06-05 23:48:55
tags:
---

WP后台-外观-编辑-模板函数 (functions.php）
然后在最下面添加这段代码禁用Open Sans即可：

<pre>//禁用Open Sans
function remove_open_sans() {
wp_deregister_style( 'open-sans' );
wp_register_style( 'open-sans', false );
wp_enqueue_style('open-sans', '');
}
add_action( 'init', 'remove_open_sans' );</pre>

如果有其他引用自google的css也可以这样去掉