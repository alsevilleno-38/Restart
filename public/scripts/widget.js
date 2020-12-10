$(function () {  
    function initialize() {
        $(`input[type="text"], input[type="number"], textarea`).val("");
        $(`select`).val("none");
        $(`input[type="radio"]`).prop("checked", false);
        $(`input[type="checkbox"]`).prop("checked", false);
    }
    initialize();
    $("#reset").on("click", function (e) {
        e.preventDefault();
        initialize();
    })
    $("#application-form").on("submit", function (e) {   
        e.preventDefault();
        const info = {};
        info.favFoods = [];        
        
        $(this).find(`input[type='text'], 
            input[type='number'],
            select, textarea,
            input[type='radio']:checked,
            input[type="checkbox"]:checked`)
            .each(function (index, value) {
                let id = $(this).attr("id");
                let val = $(this).val()
                if ($(this).attr("type") == "radio") {
                    id = $(this).attr("name");
                    val = $(this).attr("id");
                }
                else if ($(this).attr("type") == "checkbox") {
                    if ($(this).attr("class") == "fav-food") {
                        info.favFoods.push($(this).attr("id"));
                        return;
                    }                    
                }                
                info[id] = val;
                // console.log(id);                
                // console.log(info[id]);                
            })
        // console.log(info);
        $.ajax({
            url: "/store",
            method: "post",
            data: { info: info }, 
            dataType: "text",
            success: function (response) {
                alert("Success!");
                initialize();
            },
            error: function () {
                alert("Error!");
            }
        });         
    })
    $("#populate").on("click", function (e) {
        e.preventDefault();
        $.ajax({
            url: "/store",
            method: "get",
            data: { info: "info" },
            dataType: "json",
            headers: {"Content-Type": "application/json"},
            success: function (response) {
                // console.log(response);
                $("#application-form #name").val(response.name);
                $("#application-form #age").val(response.age);
                $("#application-form #gender").val(response.gender);
                $("#application-form #description").val(response.description);
                $("#application-form #comment").val(response.comment);
                const maritalStatus = response["marital-status"];
                if (maritalStatus) {
                    $(`#${response["marital-status"]}`).prop("checked", true);
                }
                if (response.favFoods) {
                    const favFoodsIds = response.favFoods.map(function (value, index) {
                        return `#${value}`
                    }).join(", ");
                    $(favFoodsIds).prop("checked", true);
                }
            },
            error: function () {
                alert("Error!");                
            }
        })
    })
})
