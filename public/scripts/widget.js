$(function () {
    $("#name").val("");
    $("#btn").on("click", function (e) {
        // $(".container").load("/process", {text: "text"});
    })
    $("#name").on("keyup", function (e) {
        $.get("/process", {input:$(this).val()}, function (res) {        
            let result = res.result;            
            $(".container").html(`<p>${Math.sin(result)}</p>`);
        })
    })
})
