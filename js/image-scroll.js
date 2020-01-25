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
  
  
    // ----谺｡縺ｸ----
    const Next = () => {
      $items.stop().animate({
        left: -shiftWidth
      },function(){
        // 先頭のli要素を最後部へ移動
        $items.append($items.find('li').eq(0));
        // 先頭にきたli要素のcenterクラスを削除
        $items.find('li').eq(0).removeClass('center');
        //2番目になったli要素へcenterクラスを添付
        $items.find('li').eq(1).addClass('center');
      });
  
    }
  
    // ----蜑阪∈----
    const Prev = () => {
      $items.animate({
        left: 0
      },function(){
        $items.prepend($items.find('li').eq(length-1));
        $items.css({left: -shiftWidth});
        $items.find('li').eq(length-1).removeClass('center');
        $items.find('li').eq(2).addClass('center');
      });
  
    }
  
    // ----谺｡縺ｸ繝懊ち繝ｳ----
    $('#next').click(function(){
      Next();
    });
  
    // ----蜑阪∈繝懊ち繝ｳ----
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