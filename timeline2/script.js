var menu = document.querySelector("#nav i")
var close = document.querySelector("#full i")


var tl = gsap.timeline()

tl.to("#full",{
    right:0,
    // delay:0.3,
    duration:0.6
})
tl.from("#full h3",{
    x:100,
    // delay:0.3,
    stagger:1,
    opacity:0,
    duration:0.8

})
// tl.pause()

menu.addEventListener("click",function(){
    tl.play()
})
close.addEventListener("click",function(){
    tl.reverse()
})