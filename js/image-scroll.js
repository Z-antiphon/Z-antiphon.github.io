$(function(){
    var setImg = '#about-image';
    var fadeSpeed = 1600;
    var switchDelay = 5000;

    $(setImg).children('img').css({opacity:'0'});
    $(setImg + ' img:first').stop().animate({opacity:'1'},fadeSpeed);

    setInterval(function(){
        $(setImg + ' :first-child').animate({opacity:'0'},fadeSpeed).next('img').animate({opacity:'1'},fadeSpeed).end().appendTo(setImg);
    },switchDelay);
});


$('#our-activities__info-icon').on('click',function(){
    if($('.our-activities__info-card').hasClass('open')){
        $('.our-activities__info-card').removeClass('open');
    } else {
        $('.our-activities__info-card').addClass('open');
    }
});

$('#our-activities__study-icon').on('click',function(){
    if($('.our-activities__study-card').hasClass('open')){
        $('.our-activities__study-card').removeClass('open');
    } else {
        $('.our-activities__study-card').addClass('open');
    }
});

$('#our-activities__event-icon').on('click',function(){
    if($('.our-activities__event-card').hasClass('open')){
        $('.our-activities__event-card').removeClass('open');
    } else {
        $('.our-activities__event-card').addClass('open');
    }
});

// $('#member-image__yama').hide().fadeIn(5000);

$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('scrollin');
            }
        });
    });
});





$(function(){
    const $items = $('#content-items');
    const $page = $('#content-items li');
    const shiftWidth = $page.outerWidth(true);
    const shiftTime = 300;
  
  
    // ---- Next ----
    const Next = () => {
      $items.stop().animate({
        left: -shiftWidth
      },function(){
        // 先頭のli要素を最後部へ移動
        $items.append($items.find('li').eq(0));
        // 先頭にきたli要素のcenterクラスを削除
        $items.find('li').eq(0).removeClass('center');
        //2番目になったli要素へcenterクラスを追加
        $items.find('li').eq(1).addClass('center');
      });
  
    }
  
    // ---- previous ----
    const Prev = () => {
      $items.animate({
        left: 0
      },function(){
        // 最後尾のli要素を取得し要素の先頭へ移動させる
        $items.prepend($items.find('li:last'));
        // $items.css({left: -shiftWidth});
        // 3番目になったli要素のcenterクラスを削除
        $items.find('li').eq(2).removeClass('center');
        // 2番目になったli要素にcenterクラスを追加
        $items.find('li').eq(1).addClass('center');
      });
  
    }
  
    // ---- clickアクション next ----
    $('#next').click(function(){
      Next();
    });
  
    // ---- clickアクション previous ----
    $('#prev').click(function(){
      Prev();
    });
  
    // -----閾ｪ蜍暮√ｊ----
    setInterval(Next,6000);
  });
  
  
  $(function(){
    $('.open').click(function(){
      $(this).fadeOut();
      $('header').slideDown();
    })
  
    $('.close').click(function(){
      $('.open').fadeIn();
      $('header').slideUp();
    });
  });

$(function(){
    $('.navbar-toggler').on('click', function() {
        $(this).toggleClass('active');
        return false;
    });
});

$(function(){
    $('.modal-toggler').on('click',function(){
        $('.modal').fadeIn();
        $(this).toggleClass('modal-toggler__close');
        return false;
    });
    $('.modal-toggler__close').on('click',function(){
        $('.modal').fadeOut();
        $('.modal-toggler').toggleClass('modal-toggler__close active');
        return false;
    });
});

  // レスポンシブ表示の画像表のための機能
  $(function(){
    const $page = $('#content-items li');

    //置換の対象とするclass"js-image-switch"
    var $elem = $('.js-image-switch');
    // 画像を切り替えるウィンドウサイズ。
    var replaceWidth = 575;

    function imageSwitch() {
      // ウィンドウサイズを取得する。
      var windowWidth = parseInt(window.innerWidth);

      // ページ内にあるすべての`.js-image-switch`に適応される。
      $elem.each(function() {
        var $this = $(this);
        // ウィンドウサイズが575px以下であれば先頭のli要素を除いてdisplay:noneをaddClassする。
        if(windowWidth <= replaceWidth) {
          $('#top>li').addClass('display:none');
        }
      });
    }
  });

  // ページtopスクロールイベント
$(function scrooltop(){
  //デフォルトのイベントをキャンセル
  event.preventDefault();

  // 移動先となる要素を取得します。
  var target = $('#main-visual');
  if (!target.length) return;

  // 移動先の位置を取得します
  var targetY = target.offset().top;

  // animateで移動します
  $('body').animate({scrollTop: targetY}, 1000, 'swing');
});
