

$(function () {
    $("#run").on("click", function (e) {
        const val = $("p").map(function (index, element) {
            return $(element).text();
        });
        console.log(val.get());
    })
});


