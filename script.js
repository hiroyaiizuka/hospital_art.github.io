$(function(){

$('.faq-list-item').click(function(){
    var $answer = $(this).find('.answer');

    if($answer.hasClass('open')){
        $answer.removeClass('open');
        $answer.slideUp();
        $(this).find('span').text('+');
    }else{
        $answer.addClass('open');
        $answer.slideDown();
        $(this).find('span').text('-');
    }

});


$('.logo').click(function(){
    $('html,body').animate({'scrollTop':0},500);
});

$('header a').click(function(){

    var id = $(this).attr('href');
    var position = $(id).offset().top;

    $('html,body').animate({
        'scrollTop':position
    },500);
});


$('#slider1').sliderPro({
    width:600,//横幅
    buttons: false,//ナビゲーションボタン
    shuffle: true,//スライドのシャッフル
    thumbnailWidth: 200,//サムネイルの横幅
    thumbnailHeight: 60,//サムネイルの縦幅
    slideDistance:0,//スライド同士の距離
    breakpoints: {
      480: {//表示方法を変えるサイズ
        thumbnailWidth: 110,
        thumbnailHeight: 40
          }
        }
     
    });


});
