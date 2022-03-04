


const sr = ScrollReveal({
  origin:'top',
  distance:'60px',
  duration: 2500,
  delay:400,
  // reset:true
  
})

sr.reveal(`.home-text`);
sr.reveal(`.home-img` , {delay:500});
sr.reveal(`.home-links` , {delay:600} );
sr.reveal(`.about-img` ,{origin : 'left'});
sr.reveal(`.about-text` ,{origin : 'right'});
sr.reveal(`.card` ,{interval:100});

