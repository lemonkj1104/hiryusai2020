let terget_category = 0;
function form_choices_click(num){
    $('.form_choices').removeClass('active_choice');
    $('#choice_' + num).addClass('active_choice');
    terget_category = num;
    const category_name = ['Parents and Guardians', 'School Information Session Participants', 'Graduates', 'Others'];
    for (let i = 0; i < category_name.length; i++) {
        $('#choice_' + i).html(category_name[i]);
    }
    $('#choice_' + num).html('<span style="font-size: 20px;line-height: 80%;">< </span>' + category_name[num] + '<span style="font-size: 20px;line-height: 80%;"> /></span>');
}

function next(){
    switch(terget_category) {
        case 0:
            location.href = 'parents/';
            break;
        case 1:
            location.href = 'candidates/';
            break;
        case 2:
            location.href = 'graduates/';
            break;
        case 3:
            location.href = 'general/';
            break;
        default:
            
    }
}