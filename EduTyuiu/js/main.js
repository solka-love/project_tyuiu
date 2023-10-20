function adaptive()
{
    if  (document.body.clientWidth <= document.body.clientHeight) {
        document.getElementById("courses").style.gridTemplateColumns = "repeat(2, 40vw)";
        document.getElementById("courses").style.height = "71vmax";
    }
    else {
        document.getElementById("courses").style.gridTemplateColumns = "repeat(4, 22vw)";
        document.getElementById("courses").style.height = "71vmin";
    }
}

function user_status()
{
    // Проверка юзера на его статус (препод/студент). Мне нужны роли
    if (1) {
        var_ref = document.getElementById("var_ref");
        var_ref.style.backgroundImage = 'url("img/+.svg")';
        var_ref.style.visibility = "visible";
        var_ref.href = "add_course.html";
    }
    else {        
        var_ref = document.getElementById("var_ref");
        var_ref.style.backgroundImage = 'url("img/Thumbtack.svg")';
        var_ref.style.visibility = "visible";
        var_ref.href = "";
    }
}

// Функции на загрузку страницы
function func_on_load()
{
    adaptive();
    user_status();
}

// Функции на изменения размера экрана
function func_on_resize()
{
    adaptive();
}

document.addEventListener("DOMContentLoaded", func_on_load);
window.addEventListener("resize", func_on_resize);