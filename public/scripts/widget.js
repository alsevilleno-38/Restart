
// $(".box")
//     .animate({
//         height: "15rem"
//     }, 1000)
//     .queue(function () {
//         console.log($(this).queue("fx"));
//         const box = $(this);
//         setTimeout(function () {
//             box.dequeue();    
//             console.log(box.queue("fx"));
//         }, 1000)
//     })
//     .animate({
//         fontSize: "4rem"
//     }, 1000, function () {
//             console.log("done");
//     })
// $(".square")
//     .animate({
//         height: "15rem"
//     }, 1000)
//     .animate({
//         fontSize: "4rem"
//     }, 1000);

// // setTimeout(function () {
// //     console.log("done!");
// // }, 1000)
// // $(".timeout").animate({
// //     "font-size": "2rem"
// // }, 3000)
// $.fx.off = true;
$({ counter: 1, index: 0 }).animate({
    counter: 100, index: 99
}, {
    duration: 1000, step: function (now, tween) { 
        console.log("test");
}})