const pass = 'f5Ch7J';
let display_section = 0;
let graduate_year = '00';
function next (){
    display_section++;
    const position = $('.scroll_inner_section').width() * display_section;
    $(".scroll_outer").animate({
        scrollLeft: position
    },200);
    check_arrow();

    if(display_section === 4){
        $('#code_input').val(code_generator());
        console.log($('#code_input').val());
        $('.arrow_icon').hide();
    }else{
        $('.arrow_icon').show();
    }
}

function back (){
    if(display_section === 0){
        let result = window.confirm('記入した情報は全て失われます。\n 前の画面に戻りますか？');
        if(result) {
            location.href = '../';
        }
    }else{
        display_section--;
        const position = $('.scroll_inner_section').width() * display_section;
        $(".scroll_outer").animate({
            scrollLeft: position
        },200);
        if(display_section === 4){
            $('.arrow_icon').hide();
        }else{
            $('.arrow_icon').show();
        }
        check_arrow();
    }
}
$(window).on('load', function() {
    $('input').change(function() {
        check_arrow();
    });
    $('body, html').keydown(function() {
        check_arrow();
    });
});

$('html,body').keydown(function() {
    check_arrow();
});
function check_arrow(){
    let text_value = $('#inner_section_' + display_section + ' input').val();
    if(display_section === 3){ //パスワード入力時
        if(text_value.split('').length > 5){
            if(text_value === pass){
                $('.error_messege').hide();
                $('.arrow_icon').css('pointer-events', 'auto');
                $('.arrow_icon').attr('src', '../img/arrow-icon.svg');
            }else{
                $('.error_messege').show();
                $('.arrow_icon').css('pointer-events', 'none');
                $('.arrow_icon').attr('src', '../img/arrow-icon-gray.svg');
                $('.arrow_icon').css('pointer-events', 'none');
            }
        }else{
            $('.arrow_icon').css('pointer-events', 'none');
            $('.arrow_icon').attr('src', '../img/arrow-icon-gray.svg');
            $('.arrow_icon').css('pointer-events', 'none');
        }
    }else{
        if(text_value !== '' && text_value !== undefined){
            $('.arrow_icon').css('pointer-events', 'auto');
            $('.arrow_icon').attr('src', '../img/arrow-icon.svg');
        }else{
            $('.arrow_icon').attr('src', '../img/arrow-icon-gray.svg');
            $('.arrow_icon').css('pointer-events', 'none');
        }
    }
}

window.addEventListener("keydown", function(e) {
    if([9, 13].indexOf(e.keyCode) > -1) { //Tab:9, Enter:13
        e.preventDefault();
    }
}, false);


//  *********************************************  \\

//  **************   認証コード   *****************  \\

//  *********************************************   \\


function code_generator (){
    let code = '';
    const change_number = ['7','3','6','5','9','8','1','4','0','2'];

    // 区分け認識コード
    let category = ((Math.floor(Math.random() * 17) + 2) * 5) + 4; //その他
    code += category.toString();
    
    //卒業生
    code += '1';

    //期
    graduate_year = $('#form_grade').val();
    code += graduate_year;
    
    //ランダム追加
    let random1 = Math.floor(Math.random() * 10);
    let random2 = Math.floor(Math.random() * 10);
    let random3 = Math.floor(Math.random() * 10);
    code += random1.toString();
    code += random2.toString();
    code += random3.toString();
    
    //確認コードの追加
    let check1 = parseInt(code) % 7;
    let check2 = parseInt(code) % 9;
    code += check1.toString();
    code += check2.toString();
    
    //コード変換
    let code_array = code.split('');
    for(let i = 0; i < 10; i++){
        code_array[i] = change_number[parseInt(code_array[i])];
    }
    return code_array.join('');
}