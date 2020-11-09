const pass = 'Fjh53R';
let display_section = 0;
let grade = 1;
let class_num = 1;
function next (){
    display_section++;
    const position = $('.scroll_inner_section').width() * display_section;
    $(".scroll_outer").animate({
        scrollLeft: position
    },200);
    check_arrow();

    if(display_section === 5){
        $('#code_input').val(code_generator());
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
        if(display_section === 5){
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
function check_arrow(){
    let text_value = $('#inner_section_' + display_section + ' input').val();
    if(display_section === 4){ //パスワード入力時
        if(text_value === pass){
            $('.error_messege').hide();
            $('.arrow_icon').css('pointer-events', 'auto');
            $('.arrow_icon').attr('src', '../img/arrow-icon.svg');
        }else if(text_value.split('').length > 5){
            $('.error_messege').show();
            $('.arrow_icon').css('pointer-events', 'none');
            $('.arrow_icon').attr('src', '../img/arrow-icon-gray.svg');
            $('.arrow_icon').css('pointer-events', 'none');
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


let terget_category = 0;
function form_choices_click(num, parents_class){
    $(parents_class + ' .form_choices').removeClass('active_choice');
    $(parents_class + ' #choice_' + num).addClass('active_choice');
    let category_name;
    if(parents_class === '#inner_section_2'){
        category_name = ['中1', '中2', '中3', '高1', '高2', '高3'];
        $('#form_grade').val(category_name[num]);
        grade = num;
    }else if(parents_class === '#inner_section_3'){
        category_name = ['1 (A)', '2 (B)', '3 (C)', '4 (D)', '5 (E)', '6'];
        $('#form_class').val(category_name[num]);
        class_num = num;
    }
    for (let i = 0; i < category_name.length; i++) {
        $(parents_class + ' #choice_' + i).html(category_name[i]);
    }
    $(parents_class + ' #choice_' + num).html('<span style="font-size: 20px;line-height: 80%;">< </span>' + category_name[num] + '<span style="font-size: 20px;line-height: 80%;"> /></span>');
}







//  *********************************************  \\

//  **************   認証コード   *****************  \\

//  *********************************************   \\


function code_generator (){
    let code = '';
    const change_number = ['7','3','6','5','9','8','1','4','0','2'];
    const grade_array = [1,2,3,4,5,6];

    // 区分け認識コード
    let category = ((Math.floor(Math.random() * 17) + 2) * 5) + 1;  //for parents
    code += category.toString();

    code += grade_array[grade].toString();
    code += grade_array[class_num].toString();

    //ランダム追加
    let random1 = Math.floor(Math.random() * 10);
    let random2 = Math.floor(Math.random() * 10);
    let random3 = Math.floor(Math.random() * 10);
    let random4 = Math.floor(Math.random() * 10);
    code += random1.toString();
    code += random2.toString();
    code += random3.toString();
    code += random4.toString();
    
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