$(document).ready(function() {
    
    $("#mycarousel").carousel({interval: 2000});
    $("#carousel-button").click(function(){
        if($("#carousel-button").children("span").hasClass("fa-pause")){
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass("fa-pause");
            $("#carousel-button").children("span").addClass("fa-play");
        }
        else if ($("#carousel-button").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carousel-button").children("span").removeClass('fa-play');
            $("#carousel-button").children("span").addClass('fa-pause');                    
        }             
    });
    $("#reserve").click(function(){
        $("#reserveModal").modal();
    });
    $("#btnLogin").click(function(){
        $("#loginModal").modal();
    });
    $("#btnLoginClose").click(function(){
        $("#loginModal").modal("hide");
    });
    $("#btnLoginCancel").click(function(){
        $("#loginModal").modal("hide");
    });
    $("#btnResClose").click(function(){
        $("#reserveModal").modal("hide");
    });
    $("#btnResCancel").click(function(){
        $("#reserveModal").modal("hide");
    });
});

