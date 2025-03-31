const mediaQueryList = window.matchMedia('(min-width: 900px)');

// ↓↓MV拡大をやってみた記録↓↓
// 
//  window.onload = function () {
//     //lax.jsを初期化
//     lax.init();

//     lax.addDriver('scrollY', function () {
//             return window.scrollY; //アニメーションに使いたい値
//         },
//         {
//             inertiaEnabled : true,
//             frameStep : 2
//         });
//         lax.addElements(
//             '.mainvisual', 
//             {scrollY : {
//                 scale : [
//                     [0,500],
//                     [1, 3]
//                 ]
//             }
//         });
//         lax.addElements(
//             '.MV1', 
//             {scrollY : {
//                 translateX: [
//                     [0, 500],
//                     //アニメーションさせる範囲の数値
//                     [0, -1000]
//                     ],
//                 scale : [
//                     [0,500],
//                     [1, 3]
//                     ]
//             }
//         });
//         lax.addElements(
//             '.MV3', 
//             {scrollY : {
//                 translateX: [
//                     [0, 500],
//                     //アニメーションさせる範囲の数値
//                     [0,1000]
//                     ],
//                 scale : [
//                     [0,500],
//                     [1, 3]
//                     ]
//             }
//         });


// }

$(function(){
    $('#hamb').on('click', function() {
      $(this).toggleClass('active');
      $('#hamb').toggleClass('active');
      return false;
    });
  });

$('#hamb').click(function() {
    $(this).toggleClass('active');
    $('#black-bg').toggleClass('open');
 });


// header fadein-fadeout

 $(window).scroll(function() {
    let scroll = $(window).scrollTop();

    mv_scale(scroll);

    if (scroll > 520) {
      $('.header-flex').fadeIn(500);
    } else {
      $('.header-flex').fadeOut(500);
        }

    /*=================================================
    サイドボタンを表示 / ヒントから
    ===================================================*/
    // 画面下から#galleryまでの距離を取得
    let gallery_position = $('#gallery').offset().top - $(window).height();
    // 画面下から#accessまでの距離を取得
    let access_position = $('#access').offset().top - $(window).height();
    // window.innerWidthで画面幅を取得
    // PC表示の場合の処理（画面幅が900pxより大きい場合　※900pxはCSSのブレークポイントとあわせる）
    if (window.innerWidth > 900) {
    // #galleryが表示された場合（スクロール位置が、画面下から#galleryまでの距離を超えた場合）
      if(scroll > gallery_position){
        // #accessが表示されるまでの間は、#side-btnを横からスライドさせて表示する
        if(scroll < access_position){
          $('#side-btn').css({
            'transform': 'rotate(-90deg) translateY(0)'
          });
        // #accessが表示されたら、#side-btnをスライドさせて非表示にする
        } else {
          $('#side-btn').css({
            'transform': 'rotate(-90deg) translateY(60px)'
          });
        }
      // #galleryが表示される前は、#side-btnをスライドさせて非表示にする
      } else {
        $('#side-btn').css({
          'transform': 'rotate(-90deg) translateY(60px)'
        });
      }
    }else{
        if(scroll > gallery_position){
            // #accessが表示されるまでの間は、#side-btnを横からスライドさせて表示する
            if(scroll < access_position){
              $('#side-btn').css({
                'transform': 'rotate(-90deg) translateY(0)'
              });
            // #accessが表示されたら、#side-btnをスライドさせて非表示にする
            } else {
              $('#side-btn').css({
                'transform': 'rotate(-90deg) translateY(60px)'
              });
            }
          // #galleryが表示される前は、#side-btnをスライドさせて非表示にする
          } else {
            $('#side-btn').css({
              'transform': 'rotate(-90deg) translateY(60px)'
            });
          }
    }

    $(window).on('load resize', function() {
        // スクロール位置を取得
        let scroll = $(window).scrollTop();
    
        /*=================================================
        メインビジュアルの拡大・縮小
        ===================================================*/
        mv_scale(scroll);
      });
 });

ScrollReveal().reveal('.gallery-img',{
    duration: 1600, 
    origin: 'bottom',
    distance: '50px'
});

// background-img

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
    scale: 1.5
});

ScrollReveal().reveal('.thumbnail',{
    duration: 2400, 
    reset: true 
});

/*=================================================
メインビジュアルの拡大・縮小（共通処理）
===================================================*/
function mv_scale(scroll) {
    // window.innerWidthで画面幅を取得
    // PC表示の場合の処理（画面幅が900pxより大きい場合　※900pxはCSSのブレークポイントとあわせる）
    if (window.innerWidth > 900) {
      // メインビジュアルのCSS（width）を変更する
      // widthの値をスクロール量にあわせて増やすことで画像を拡大させる
      $('#mainvisual img').css({
        'width': 100/3 + scroll/10  + '%'
      });
    // スマホ表示の場合の処理（画面幅が900px以下の場合）
    } else {
      // メインビジュアルのCSS（width）を変更する
      // widthの値をスクロール量にあわせて減らすことで画像を縮小させる
      $('#mainvisual img').css({
        'width': 100 - scroll/10  + '%'
      });
    }
  }

  



 

  


  