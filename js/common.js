
// auto_scroll ボタンを押して、画面を引数の位置までアニメーションスクロール
function auto_scroll(num, num2) {
    var num2 = num2 || 500; 
    $('html,body').animate({
        scrollTop:$(num).offset().top - 100
    }, num2, function() {
    });
}