$(".container").hover(function(){
        $(this).css("margin","0px");
    },function(){
        $(this).css("margin","-90px");
    })

    $(".bigDiv1").click(function () {
        $(".inner1").toggle() 
    })
    $(".bigDiv2").click(function () {
        $(".inner2").toggle()
        
    })
