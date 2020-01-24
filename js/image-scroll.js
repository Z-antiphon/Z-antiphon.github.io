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

// $('.slider').slick({
//     dots: true,
//     infinite: true,
//     slidesToShow:3,
//     slidesToScroll: 1,
// });

// $(function(){
//     const $items = $('.slider');
//     const $page = $('.slider.slide__item');
//     const shiftWidth = $page.outerWidth(true);
//     const shiftTime = 800;
//     // ----次へ----
//     const Next = () => {
//         $items.stop().animate({
//         left: -shiftWidth
//         },function(){
//         $items.append($items.find('.slider').eq(0));
//         $items.css({left:0});
//         $items.find('.slider').eq(0).removeClass('center');
//         $items.find('.slider').eq(1).addClass('center');
//         });
//     }
//     // ----前へ----
//     const Prev = () => {
//         $items.animate({
//         left: 0
//         },function(){
//         $items.prepend($items.find('.slider').eq(length-1));
//         $items.css({left: -shiftWidth});
//         $items.find('.slider').eq(3).removeClass('center');
//         $items.find('.slider').eq(2).addClass('center');
//         });
//     }
//     // ----次へボタン----
//     $('#next').click(function(){
//         Next();
//     });
//     // ----前へボタン----
//     $('#prev').click(function(){
//         Prev();
//     });
//     // -----自動送り----
//     setInterval(Next,6000);
// });



$(function(){
    const $items = $('#content-items');
    const $page = $('#content-items li');
    const shiftWidth = $page.outerWidth(true);
    const shiftTime = 800;
  
  
    // ----谺｡縺ｸ----
    const Next = () => {
      $items.stop().animate({
        left: -shiftWidth
      },function(){
        $items.append($items.find('li').eq(0));
        $items.css({left:0});
        $items.find('li').eq(0).removeClass('center');
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
        $items.find('li').eq(3).removeClass('center');
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