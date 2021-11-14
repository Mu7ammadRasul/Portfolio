
const l = ScrollReveal({origin: 'left', distance: '100px',
duration:2000, reset: true
})

l.reveal('.Centeredtext',{})
l.reveal('.Centeredtext h2',{delay:200})
l.reveal('.Centeredtext h4',{delay:100})
l.reveal('.explore a',{delay:90})
l.reveal('.socials li a',{interval:200})
l.reveal('.work-reveal img', {interval:200})
l.reveal('.work-text h2', {delay:200})
l.reveal('.work-text .p1', {delay:300})
l.reveal('.work-text .p2', {delay:300})

const t = ScrollReveal({origin: 'top', distance: '50px',
duration:2000, reset: true
})

t.reveal('.other-works .box', {interval:150})