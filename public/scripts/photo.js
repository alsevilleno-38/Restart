$(function () {    
    const mainImgUrl = $(".main img").attr("src");    
    let image = $(".stamp-item").find(`img[src="${mainImgUrl}"]`);
    image.addClass("border");
    $(".stamp-item").on("click", "img", function (e) {
        const duration = $("#duration").val();
        const durationMs = +duration * 1000;
        console.log(duration);
        const selectedImg = $(this);
        if ($("#main-item").attr("src") != selectedImg.attr("src")) {
            // console.log($(this));
            image.removeClass("border");
            image = $(this);
            image.addClass("border");
            const choice = $("#effect").val();
            if (choice == "fade") {
                $("#main-item").fadeOut(durationMs, function() {
                    $(this).attr("src", selectedImg.attr("src"));
                }).fadeIn(durationMs);
            }
            else if (choice == "slide") {
                $("#main-item").slideUp(durationMs, function() {
                    $(this).attr("src", selectedImg.attr("src"));
                }).slideDown(durationMs);
            }
        }
    })
    $(".area").on("click", function(e) {
        console.log($(this));
    })
    const size = $(".animate").css("font-size");    
    let toggleBtn = false;
    $("#btn").on("click", function (e) {
        console.log(size);
        if (toggleBtn == false) {
            toggleBtn = undefined
            $(".animate").animate({                
                color: ""   
            }, 1000).animate({
            }, 1000, function () {
                toggleBtn = true;
            })
        }
        else if (toggleBtn == true) {
            toggleBtn = undefined
            $(".animate").animate({
                "font-size" : parseInt(size)
            }, 1000, function () {
                toggleBtn = false;
            })
        }
    })
    
})