const data = ;

console.log(JSON.parse(data));

const class_name = [''];

window.addEventListener('DOMContentLoaded', function() {
    for (let grade = 1; grade < 7; grade++) {
        for (let classNum = 1; classNum < 7; classNum++) {
            const classData = eval('data.class["' + grade + '-' + classNum + '"]');
            // set_thumbnail(classData);
            if($('img').hasClass('image_set_thumbnails_class_' +  grade + '_' + classNum )){
                $(this).attr('src','../' + eval(classData + '.imagePath'));
            }
            console.log(classData);
        }
    }    
});


function set_thumbnail (classData){
    if($('img').hasClass('image_set_thumbnails_class_' + eval(classData + '.title'))){
        $(this).attr('src','../' + eval(classData + '.imagePath'));
    }
    // console.log(classData);
}

// image_set_thumbnails_class_2_1