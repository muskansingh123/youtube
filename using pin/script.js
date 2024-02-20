var tl = gsap.timeline()


tl.to("#page1 img",{
    width:"100%",
    duration:2,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true,
    }

})
tl.to("#page2 h1",{
    width:"100%",
    transform:"trnslateX(-50%,0%)",
    scrollTrigger:{
       trigger:"#page2",
       scroller:"body",
       markers:true,
       start:"top 0%",
       end:"top -100%",
       pin:true,
       scrub:2
    }
})
tl.from("#page3 img",{
    scale:0,
    opacity:0,
    rotate:720,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        pin:true,
        scrub:2
    
    }
    
})