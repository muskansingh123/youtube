var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0",
        scrub:1,
        pin:true

    }
})

tl.from(".left",{
    x:-500,
    rotate:-45,
    duration:1
},"ani")
tl.from(".right",{
    x:500,
    rotate:45,
    duration:1
},"ani")
tl.to(".circle",{
    scale:9
})