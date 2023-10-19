function adaptive_function(){
    if  (document.body.clientWidth <= document.body.clientHeight) {
        document.getElementById("courses").style.gridTemplateColumns = "repeat(2, 40vw)";
        document.getElementById("courses").style.height = "71vmax";
    }
    else {
        document.getElementById("courses").style.gridTemplateColumns = "repeat(4, 22vw)";
        document.getElementById("courses").style.height = "71vmin";
    }
}

// Бессмысленная и беспощадная адаптивность
document.addEventListener("DOMContentLoaded", adaptive_function);
window.addEventListener("resize", adaptive_function);