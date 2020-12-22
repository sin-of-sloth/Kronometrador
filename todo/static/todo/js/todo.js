$(document).ready(function(){
    $(".dropdown-trigger").dropdown({
        coverTrigger: false,
        constrainWidth: false,
        closeOnClick: false,
        onOpenStart: function() {
            $(".dropdown-trigger > i").toggleClass("down");
        },
        onCloseStart: function() {
            $(".dropdown-trigger > i").toggleClass("down");
        },
    });
});

function toggler() {
    if (document.getElementById('theme').className == "dark") {
        document.getElementById('theme').href = light_theme;
        document.getElementById('theme').className = "light";
        document.cookie = "theme=light;path=/";
    } else {
        document.getElementById('theme').href = dark_theme;
        document.getElementById('theme').className = "dark";
        document.cookie = "theme=dark;path=/";
    }
}