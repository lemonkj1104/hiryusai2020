let link;
let code_starts;
let code;
function show_code(){
    link = location.href;
    code_starts = link.indexOf('?');
    console.log(link, code_starts);
    let code = link.charAt(code_starts + 1) + link.charAt(code_starts + 2) + link.charAt(code_starts + 3) + link.charAt(code_starts + 4) + link.charAt(code_starts + 5) + link.charAt(code_starts + 6) + link.charAt(code_starts + 7) + link.charAt(code_starts + 8) + link.charAt(code_starts + 9) + link.charAt(code_starts + 10) + link.charAt(code_starts + 11) + link.charAt(code_starts + 12);
    $('.code').text(code);
}