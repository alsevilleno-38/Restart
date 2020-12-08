// version BLD - 373

"use strict"
function initializer1() {
    let hintState = true;    
    const listItemClickHandler = function (e) {
        console.log($(this));
        console.log($(this).text());
        // console.log(`click-${$(this).text()}`);
    }
    
    $("li.list-item").on("click", listItemClickHandler);
}
function initializer2() {

}
$(function () {
    $("#img").css("display", "none");
    $("#container").on("click", ".list-item", function (e) {        
        $(this).fadeOut(500, function (e) {
            $(this).remove();   
        })
    })
    $("#hint").on("click", function (e) {
        if ($("#name").val() != "") {   
            $("#container").append(`<li class="list-item">${$("#name").val()}</li>`);
            $("#name").val("")
        }
    });
    $("#btn").on("click", function (e) {
        $("#img").fadeIn(500);
    })
    $("#reset").on("click", function (e) {
        $("#img").css("display", "none");
    });
    $("#change").on("click", function (e) {
        $("#img").attr("src", "img/earth.jpg");
    })
});
