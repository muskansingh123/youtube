var h1text = document.querySelector("h1").textContent

var splittedtext = h1text.split("")

var clutter = ""
splittedtext.forEach(function(elem){
    clutter += `<span>${elem}</span>`
})
document.querySelector("h1").innerHTML = clutter

gsap.from("h1 span",{
    opacity:0,
    stagger:0.3,
    y:20,
    delay:1,
    duration:0.5,
    // rotate:360,
    color: "#0000002b",

    
})