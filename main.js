canvas - 
document.getElementById("myCanvas");
ctx- canvas.getContext("2d");
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color - document.getElementById("color").value;
    width_of_line - document.getElementById("width_of_line").value;
    radius - document.getElementById("radius").value;
    mouseEvent - "mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offstLeft;
    current_position_of_mouse_y = e.clientY - canvas.offstTop;
    if(mouseEvent =="mouseDown"){
        console.log()
    }
}