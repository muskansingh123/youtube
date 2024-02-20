var tl = gsap.timeline()

tl.from ("h1",{
    x:1000,
    delay:0.5,
    duration:2,
    stagger:1,
    // opacity:0.3

})
tl.from("h2",{
    x:1000,
    delay:0.5,
    // rotate:360,
    duration:2.5,
    stagger:1,
    scale:0.3

})
tl.from("h3",{
    scale:0
})