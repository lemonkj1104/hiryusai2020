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
    }, 1000, function() {
    });
}


const change_language = [
    [
        "#event_description_0", 
        "#event_description_1", 
        ".leader_title", 
        ".leader_name",
        ".leader_content", 
        ".concept_main",
        ".concept_image", 
        "#concept_text_title",
        "#concept_text_body", 
        ".contact_contents", 
    ],
    [
        "11月下旬に開催！", 
        '<span style="border-bottom: 1px solid #AFAFAF;padding-bottom: 2px;">事前予約は、11/9から開始</span>', 
        "委員長挨拶", 
        "委員長　中里星恋",
        `こんにちは！	<br>
        この度は、HIRYUSAI ONLINEを見に来ていただき誠にありがとうございます！<br>	
        実行委員長の中里星恋です。<br>
        <br>
        HIRYUSAI ONLINEのテーマは <b>｢IMAGINE｣</b>。<br>
        今の世界は、個人だけでなく地球全体が大きく変わることが求められています。そのために必要なものこそが、｢Imagine｣です。一人ひとりが自分たちに何ができるかを想像し、新しいものを創造していく。今の世界ではそんな力が求められているのではないでしょうか。<br>
        渋渋生は現在、各クラス・部活・委員会等で想像力を結集させ、今までとは違う企画の実現に向けて全力を注いでいます。<br>
        当日にはきっと、未来を担う若者たちの努力の結晶が見られるはずです。<br>
        <br>
        それまでご期待の上、もうしばらくお待ちください！`, 
        "～家から学校体験を～",
        "イメージ", 
        "文化祭、新時代へ",
        `コロナ禍で学校にも満足に行けなくなり、エンタメも憚られ....
        <br>
        そんな今こそ力を合わせて新しい時代への挑戦をやめずに居続けたい。
        <br>
        僕たちの挑戦がここから始まる。`, 
        `<span style="font-weight: bold; font-size: 110%;">
            渋谷教育学園渋谷中学高等学校
        </span>
        <br>
        〒150-0002 東京都渋谷区渋谷1-21-18
        <br><br>
        TEL：03-3400-6363
        <br>
        FAX：03-3486-1033
        <br>
        MAIL：<a href="mailto:hiryu25th.2020@gmail.com" target="_blank">hiryu25th.2020@gmail.com</a>`, 
    ],
    [
        "Coming this November", 
        'Reservations start on November 9th',
        "Message From the Chairman", 
        "Chairman of Hiryusai Festival : Seren Nakazato",
        `
        Hello!<br>
        Thank you for visiting HIRYUSAI ONLINE!<br>
        I'm Seren Nakazato, the chairman of the Hiryu Festival executive committee.<br>
        <br>
        The theme of HIRYUSAI ONLINE is <b>"IMAGINE"</b>.<br>
        In today's world, not only individuals but the entire world is required to change significantly.<br>
        "Imagine" is what is needed in order for the whole world to change.<br>
        We must imagine what each of us can do, and create a brighter future.<br>
        I believe that this kind of power is required in today's world.<br>
        Shibu Shibu students are currently focusing on this imagination in every class, club activity, committee, etc., and are making every effort to make many events successful.<br>
        On the day of HIRYUAI ONLINE, you will surely see the result of the efforts of the young people who will lead the future.<br>
        <br>
        Please look forward to it and wait for a while!<br>
        `, 
        "Experiencing school from home",
        "Image", 
        "School Festival, to the newer",
        `Due to the coronavirus outbreak, students were not able to go to school satisfactorily or even be entertained to the fullest.<br>
        But now is the time to join forces and to keep on challenging ourselves to the new era.<br>
        <br>
        Our challenge begins here.`, 
        `<span style="font-weight: bold; font-size: 110%;">
            Shibuya Junior and Senior High School 
        </span>
        <br>
        1-21-18 Shibuya Shibuya, Tokyo 〒150-0002
        <br><br>
        TEL：03-3400-6363
        <br>
        FAX：03-3486-1033
        <br>
        MAIL：<a href="mailto:hiryu25th.2020@gmail.com" target="_blank">hiryu25th.2020@gmail.com</a>`, 
    ]
];

function change_language_func(num){
    console.log(num);
    for (let i = 0; i < change_language[0].length; i++) {
        $(change_language[0][i]).html(change_language[num][i]);
        if(num === 1){ //jp
            $(change_language[0][i]).css({'font-family' : "'Noto Sans JP', sans-serif",'letter-spacing' : '0.14em'});
        }else{ //en
            $(change_language[0][i]).css({'font-family' : "'Tahoma', 'Geneva', sans-serif",'letter-spacing' : '0.08em'});
        }
    }
    if(num === 1){ //jp
        $('#change_language_button_1').css('border', '1px solid #ffffff');
        $('#change_language_button_2').css('border', '0');
    }else{ //en
        $('#change_language_button_1').css('border', '0');
        $('#change_language_button_2').css('border', '1px solid #ffffff');
    }
}