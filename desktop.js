function showwin(name) {
    $('.window.' + name).addClass('show-begin');
    $('#taskbar').attr('count', Number($('#taskbar').attr('count')) + 1)
    $('#taskbar').html($('#taskbar').html() + '<a class="' + name + '"><img src="icon/' + name + '.png"></a>');
    if ($('#taskbar').attr('count') == '1') $('#taskbar').show();
    setTimeout(() => { $('.window.' + name).addClass('show'); }, 0);
    setTimeout(() => { $('.window.' + name).addClass('notrans'); }, 200);
}
function hidewin(name) {
    $('.window.' + name).removeClass('notrans');
    $('.window.' + name).removeClass('show');
    $('#taskbar').attr('count', Number($('#taskbar').attr('count')) - 1)
    $('#taskbar>.' + name).remove();
    if ($('#taskbar').attr('count') == '0') $('#taskbar').hide();
    setTimeout(() => { $('.window.' + name).removeClass('show-begin'); }, 200);
}
function maxwin(name) {
    if ($('.window.' + name).hasClass('max')) {
        $('.window.' + name).removeClass('max');
        setTimeout(() => { $('.window.' + name).addClass('notrans'); }, 200);
        $('.window.' + name + '>.titbar>div>.wbtg.max').html('<i class="bi bi-app"></i>');
    } else {
        $('.window.' + name).removeClass('notrans');
        $('.window.' + name).addClass('max');
        $('.window.' + name + '>.titbar>div>.wbtg.max').html('<svg version="1.1" width="12" height="12" viewBox="0,0,37.65105,35.84556" style="margin-top:4px;"><g transform="translate(-221.17804,-161.33903)"><g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="none" fill-rule="nonzero" stroke="#000000" stroke-width="2" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style="mix-blend-mode: normal"><path d="M224.68734,195.6846c-2.07955,-2.10903 -2.00902,-6.3576 -2.00902,-6.3576l0,-13.72831c0,0 -0.23986,-1.64534 2.00902,-4.69202c1.97975,-2.68208 4.91067,-2.00902 4.91067,-2.00902h14.06315c0,0 3.77086,-0.23314 5.80411,1.67418c2.03325,1.90732 1.33935,5.02685 1.33935,5.02685v13.39347c0,0 0.74377,4.01543 -1.33935,6.3576c-2.08312,2.34217 -5.80411,1.67418 -5.80411,1.67418h-13.39347c0,0 -3.50079,0.76968 -5.58035,-1.33935z"/><path d="M229.7952,162.85325h16.06111c0,0 5.96092,-0.36854 9.17505,2.64653c3.21412,3.01506 2.11723,7.94638 2.11723,7.94638v18.55642"/></g></g></svg>')
    }
}
function showdropdown(dropid, type1, pos1, type2, pos2) {
    var dd = document.getElementById(dropid);
    dd.style.setProperty(type1, pos1 + "px", "important");
    dd.style.setProperty(type2, pos2 + "px", "important");
    if (dd.style.display != "block") {
        dd.style.setProperty("display", "block", "important");
    } else
        dd.style.setProperty("display", "none", "important");
}
const main = document.getElementsByTagName('html')[0];
const setting_tit = document.querySelector('.window.setting>.titbar');
const setting_win = document.querySelector('.window.setting');
let deltaLeft = 0, deltaTop = 0;
function setting_move(e) {
    setting_win.setAttribute('style', `left:${e.clientX - deltaLeft}px;top:${e.clientY - deltaTop}px`)
}
setting_tit.addEventListener('mousedown', function (e) {
    deltaLeft = e.clientX - setting_win.offsetLeft;
    deltaTop = e.clientY - setting_win.offsetTop;
    main.addEventListener('mousemove', setting_move)
})
main.addEventListener('mouseup', function (e) {
    main.removeEventListener('mousemove', setting_move);
})
const explorer_tit = document.querySelector('.window.explorer>.titbar');
const explorer_win = document.querySelector('.window.explorer');
function explorer_move(e) {
    explorer_win.setAttribute('style', `left:${e.clientX - deltaLeft}px;top:${e.clientY - deltaTop}px`)
}
explorer_tit.addEventListener('mousedown', function (e) {
    deltaLeft = e.clientX - explorer_win.offsetLeft;
    deltaTop = e.clientY - explorer_win.offsetTop;
    main.addEventListener('mousemove', explorer_move)
})
main.addEventListener('mouseup', function (e) {
    main.removeEventListener('mousemove', explorer_move);
})
const calc_tit = document.querySelector('.window.calc>.titbar');
const calc_win = document.querySelector('.window.calc');
function calc_move(e) {
    calc_win.setAttribute('style', `left:${e.clientX - deltaLeft}px;top:${e.clientY - deltaTop}px`)
}
calc_tit.addEventListener('mousedown', function (e) {
    deltaLeft = e.clientX - calc_win.offsetLeft;
    deltaTop = e.clientY - calc_win.offsetTop;
    main.addEventListener('mousemove', calc_move)
})
main.addEventListener('mouseup', function (e) {
    main.removeEventListener('mousemove', calc_move);
})
const about_tit = document.querySelector('.window.about>.titbar');
const about_win = document.querySelector('.window.about');
function about_move(e) {
    about_win.setAttribute('style', `left:${e.clientX - deltaLeft}px;top:${e.clientY - deltaTop}px`)
}
about_tit.addEventListener('mousedown', function (e) {
    deltaLeft = e.clientX - about_win.offsetLeft;
    deltaTop = e.clientY - about_win.offsetTop;
    main.addEventListener('mousemove', about_move)
})
main.addEventListener('mouseup', function (e) {
    main.removeEventListener('mousemove', about_move);
})