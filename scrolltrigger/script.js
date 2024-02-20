

gsap.from("#page1 img",{
    rotate:720,
    // scale:0,
    opacity:0,
    duration:1,
    delay:1
})


gsap.from("#page2 img",{
    rotate:720,
    scale:0,
    opacity:0,
    duration:1, 
    scrollTrigger:{
        trigger:"#img2 img",
        scroller:"body",
        markers:true,
        Start: "top 60%",
        // end: "top 30%",
        scrub:2,

    }
})

gsap.from("#page3 img",{
    rotate:720,
    scale:0,
    opacity:1,
    duration:1, 
    scrollTrigger:{
        trigger:"#img3 img",
        scroller:"body",
        markers:true,
        start: "top 60%",
        // end: "bottom 30%",
        scrub:2,

    }
})