$("#slide").on("click", function (e) {
    $(".box").slideToggle(3000, function (e) {
        console.log("test");
    })
})
$("#stop").on("click", function (e) {
    $(".box").stop();
})
$("#animate").on("click", function (e) {
    const special = $(".special");
    special.animate({
        left: 300,
        top: 300
    });
    // special.animate({
        
    // });
    // special.animate({        
    //     left: 0
    // });
    // special.animate({
    //     top: 0        
    // });

})