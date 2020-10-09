const mainTitle = [['H▍','　'],['HI▍','　'],['HIR▍','　'],['HIRY▍','　'],['HIRYU▍','　'],['HIRYUS▍','　'],['HIRYUSA▍','　'],['HIRYUSAI▍','　'],['HIRYUSAI','O▍'],['HIRYUSAI','ON▍'],['HIRYUSAI','ONL▍'],['HIRYUSAI','ONLI▍'],['HIRYUSAI','ONLIN▍'],['HIRYUSAI','ONLINE▍'],['HIRYUSAI','ONLINE']];

$(window).on('load', function() {
    startAnime(0);
});

function startAnime(num){
    console.log(num);
    $("#main_title_1").html('<h1 class="main_title" id="main_title_1" data-text="' + mainTitle[num][0] + '">' +  mainTitle[num][0]+ '</h1>');
    $("#main_title_2").html('<h1 class="main_title" id="main_title_2" data-text="' + mainTitle[num][1] + '">' +  mainTitle[num][1]+ '</h1>');
    if(num < 14){
        num++;
    }else{
        return;
    }
    const rand = Math.floor(Math.random() * 400) + 100;
    setTimeout('startAnime(' + num + ')', rand);
}

// auto_scroll ボタンを押して、画面を引数の位置までアニメーションスクロール
function auto_scroll(num) {
    $('html,body').animate({
        scrollTop:$(num).offset().top - 100
    }, 500, function() {
    });
}