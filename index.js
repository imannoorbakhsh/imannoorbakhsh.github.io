function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInUp");
    },800);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutDown");
        $("#about_container").css("display","none");
    },800);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#about").removeClass("animated fadeIn");
      $("#contact").removeClass("animated fadeIn");
      $("#work").removeClass("animated fadeIn");
    },1000);
},1500);
