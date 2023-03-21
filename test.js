AFRAME.registerComponent('startbutton',{
    init: function(){
        var cube = document.querySelector("#box1");
        cube.addEventListener("mousedown",function(evt){
            cube.setAttribute('material','color',"##EF2D5E");
        });
    }
});