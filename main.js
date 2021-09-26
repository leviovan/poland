$(document).ready(function () {

    var menubutton=$(".menu_burger_button");
    var menubuttonclose=$(".menu_button_close");

    menubutton.on('click',function(){
        menu=$(".menu_mob");
        menu.toggleClass('menu_mob_open');  
    })

    menubuttonclose.on('click',function(){
        menu=$(".menu_mob");
        menu.toggleClass('menu_mob_open');  
    }
    )
})
