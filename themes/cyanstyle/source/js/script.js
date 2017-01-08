(function($){
  // Search
  var $searchWrap = $('#search-form-wrap'),
    isSearchAnim = false,
    searchAnimDuration = 200;

  var startSearchAnim = function(){
    isSearchAnim = true;
  };

  var stopSearchAnim = function(callback){
    setTimeout(function(){
      isSearchAnim = false;
      callback && callback();
    }, searchAnimDuration);
  };

  $('#nav-search-btn').on('click', function(){
    if (isSearchAnim) return;

    startSearchAnim();
    $searchWrap.addClass('on');
    stopSearchAnim(function(){
      $('.search-form-input').focus();
    });
  });

  $('.search-form-input').on('blur', function(){
    startSearchAnim();
    $searchWrap.removeClass('on');
    stopSearchAnim();
  });

  // Share
  /*$('body').on('click', function(){
    $('.article-share-box.on').removeClass('on');
  }).on('click', '.article-share-link', function(e){
    e.stopPropagation();

    var $this = $(this),
      url = $this.attr('data-url'),
      encodedUrl = encodeURIComponent(url),
      id = 'article-share-box-' + $this.attr('data-id'),
      offset = $this.offset();

    if ($('#' + id).length){
      var box = $('#' + id);

      if (box.hasClass('on')){
        box.removeClass('on');
        return;
      }
    } else {
      var html = [
        '<div id="' + id + '" class="article-share-box">',
          '<input class="article-share-input" value="' + url + '">',
          '<div class="article-share-links">',
			'<a href="http://tieba.baidu.com/f/commit/share/openShareApi?url=' + encodedUrl + '" class="article-share-tieba" target="_blank" title="百度贴吧"></a>',
			'<a href="http://service.weibo.com/share/share.php?url=' + encodedUrl + '" class="article-share-weibo" target="_blank" title="新浪微博"></a>',
			'<a href="http://share.v.t.qq.com/index.php?c=share&a=index&url=' + encodedUrl + '" class="article-share-tqq" target="_blank" title="腾讯微博"></a>',
			'<a href="http://widget.renren.com/dialog/share?resourceUrl=' + encodedUrl + '" class="article-share-renren" target="_blank" title="人人"></a>',
          '</div>',
        '</div>'
      ].join('');

      var box = $(html);

      $('body').append(box);
    }

    $('.article-share-box.on').hide();

    box.css({
      top: offset.top + 25,
      left: offset.left
    }).addClass('on');
  }).on('click', '.article-share-box', function(e){
    e.stopPropagation();
  }).on('click', '.article-share-box-input', function(){
    $(this).select();
  }).on('click', '.article-share-box-link', function(e){
    e.preventDefault();
    e.stopPropagation();

    window.open(this.href, 'article-share-box-window-' + Date.now(), 'width=500,height=450');
  });*/

  // Caption
  $('.article-entry').each(function(i){
    $(this).find('img').each(function(){
      if ($(this).parent().hasClass('fancybox')) return;

      var alt = this.alt;

      if (alt) $(this).after('<span class="caption">' + alt + '</span>');

      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
    });

    $(this).find('.fancybox').each(function(){
      $(this).attr('rel', 'article' + i);
    });
  });

  if ($.fancybox){
    $('.fancybox').fancybox();
  }

  // Mobile nav
  var $container = $('#container'),
    isMobileNavAnim = false,
    mobileNavAnimDuration = 200;

  var startMobileNavAnim = function(){
    isMobileNavAnim = true;
  };

  var stopMobileNavAnim = function(){
    setTimeout(function(){
      isMobileNavAnim = false;
    }, mobileNavAnimDuration);
  }

  $('#main-nav-toggle').on('click', function(){
    if (isMobileNavAnim) return;

    startMobileNavAnim();
    $container.toggleClass('mobile-nav-on');
    stopMobileNavAnim();
  });

  $('#wrap').on('click', function(){
    if (isMobileNavAnim || !$container.hasClass('mobile-nav-on')) return;

    $container.removeClass('mobile-nav-on');
  });
  
    // link
    var $linkUl = $('#link-list');
    var $list = $('#link-list li');
    $linkUl.empty();
    var count = $list.length;
    for(var i = 0; i < count; i++)
    {
        var ran = Math.floor(Math.random() * $list.length);
        $linkUl.append($list.eq(ran));
        $list.splice(ran, 1);
    }
    
    // subtitle
    var subtitleList = [
        "- 『你觉得董先生连任好不好啊？』 - 『吼啊！』——长者",
        "『你们媒体千万要记着，不要「见得风，是得雨」。』——长者",
        "『接到消息，你们媒体本身也要判断。』——长者",
        "『假设这些完全无中生有的东西，你再帮他说一遍，你等于......你也有责任吧？』——长者",
        "『刚才你问我啊，我可以回答你一句「无可奉告」。』——长者",
        "『你问我资瓷不资瓷，我是资瓷的。』——长者",
        "『我感觉你们新闻界还要学习一个。』——长者",
        "『你们毕竟还 too young，明白这意思吧？』——长者",
        "『我告诉你们我是身经百战了，见得多了！』——长者",
        "『西方的哪一个国家我没去过？』——长者",
        "『美国的华莱士，比你们不知要高到哪里去了，我跟他谈笑风生。』——长者",
        "『所以说媒体呀，还是要提高自己的姿势水平，识得唔识得啊？』——长者",
        "『你们有一个好，全世界跑到什么地方，你们比其他的西方记者跑得还快。』——长者",
        "『问来问的问题呀，都 too simple，sometimes naive。』——长者",
        "『我不是新闻工作者，但是我见得太多了。』——长者",
        "『我有这个必要告诉你们一点，人生的经验。』——长者",
        "『我今天是作为一个长者跟你们讲。......我就讲中国有一句话叫「闷声大发财」。』——长者",
        "『将来如果你们在报道上有偏差，你们是要负责的。』——长者",
        "『我没有说要钦定，没有任何这个意思。』——长者",
        "『当然我们的决定权也是很重要的。......到那个时候我们会表态的！』——长者",
        "『你们啊，不要想喜欢弄个大新闻，说现在已经钦定了，就把我批判一番。』——长者",
        "『你们啊，naive！』——长者",
        "『I am angry！你们这样子啊，是不行的！我今天算是得罪了你们一下。』——长者",
        "『一个人的命运啊，当然要靠自我奋斗，但是也要考虑历史的进程。』——长者",
        "『我说另请高明吧，我实在也不是谦虚。』——长者",
        "『后来我念了两首诗，叫「苟利国家生死以，岂因祸福避趋之」。』——长者",
        "『如果说还有一点成绩就是「军队一律不得经商」。』——长者",
        "『很惭愧，就做了一点微小的工作，谢谢大家！』——长者"
    ];
    var i = Math.floor(Math.random() * subtitleList.length);
    $('#subtitle').text(subtitleList[i]);
})(jQuery);