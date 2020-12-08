$(".box").animate({
    height: "15rem"
}, 2000)
$(".square").animate({
    height: "15rem"
}, 2000)
const init = function () {
    let sum = 0;
    for (let i = 0; i < Math.pow(10, 10); i++) {
        sum =+ i;
    }
    console.log(sum);
};
init();