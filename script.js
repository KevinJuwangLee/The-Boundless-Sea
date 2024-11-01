var introText=document.getElementsByClassName("intro-text")[0];
var mainText=document.getElementsByClassName("main-text")[0];
var secondaryText=document.getElementsByClassName("secondary-text")[0];
var description=document.getElementsByClassName("description")[0];
var blueWhale=document.getElementsByClassName("blue-whale")



window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  var currScroll=document.documentElement.scrollTop;
  if(currScroll<640){
    introText.style.top="200px";
    mainText.innerHTML="The Boundless Sea";
    secondaryText.innerHTML="An Exploration of the Infinite";
    description.innerHTML="";
    introText.style.left="50%";
    mainText.style.fontSize="80px";
    secondaryText.style.fontSize="35px";
    introText.style.opacity=1 - document.documentElement.scrollTop / 500;
  }
  if(800<currScroll&&currScroll<1200){
    introText.style.left="20%";
    introText.style.top="200px";
    mainText.innerHTML="Great Sapphire";
    secondaryText.innerHTML="DEPTH: 330FT";
    description.innerHTML="Also known as the sunlight zone, this level of the ocean boasts its blue whales. 90% of marine life reside in the sunlight zone."
    mainText.style.fontSize="55px";
    secondaryText.style.fontSize="40px";
    introText.style.opacity=(document.documentElement.scrollTop-800) / 300;
  }
  if(1300<currScroll&&currScroll<1800){
    introText.style.left="20%";
    introText.style.top="200px";
    mainText.innerHTML="Great Sapphire";
    secondaryText.innerHTML="DEPTH: 330FT";
    description.innerHTML="Also known as the sunlight zone, this level of the ocean boasts its blue whales. 90% of marine life reside in the sunlight zone."
    mainText.style.fontSize="55px";
    secondaryText.style.fontSize="40px";
    introText.style.opacity=(1500-document.documentElement.scrollTop) / 300;
  }
  if(1800<currScroll&&currScroll<2500){
    introText.style.left="80%";
    introText.style.top="380px";
    mainText.innerHTML="Deep Novelty";
    secondaryText.innerHTML="DEPTH: 700FT";
    description.innerHTML="Deeper down at 700 feet, the USS Triton became the first submarine to circumnavigate the earth in 1960."
    introText.style.opacity=(document.documentElement.scrollTop-1900) / 300;
  }
  if(2500<currScroll&&currScroll<2900){
    introText.style.left="80%";
    introText.style.top="380px";
    mainText.innerHTML="Deep Novelty";
    secondaryText.innerHTML="DEPTH: 700FT";
    description.innerHTML="Deeper down at 700 feet, the USS Triton became the first submarine to circumnavigate the earth in 1960."
    introText.style.opacity=(2820-document.documentElement.scrollTop) / 200;
  }
  if(3000<currScroll&&currScroll<3400){
    introText.style.left="80%";
    introText.style.top="50px";
    mainText.innerHTML="Navy Nightfall";
    secondaryText.innerHTML="DEPTH: 831FT";
    description.innerHTML="All known as the Twilight Zone, at 831 feet, we reached the deepest free dive in recorded history. Down here, the pressure is 26 times greater than at the surface which would crush most human lungs."
    introText.style.opacity=(document.documentElement.scrollTop-3070)/ 300;
  }
  if(3500<currScroll&&currScroll<3900){
    introText.style.left="80%";
    introText.style.top="50px";
    mainText.innerHTML="Navy Nightfall";
    secondaryText.innerHTML="DEPTH: 831FT";
    description.innerHTML="All known as the Twilight Zone, at 831 feet, we reached the deepest free dive in recorded history. Down here, the pressure is 26 times greater than at the surface which would crush most human lungs."
    introText.style.opacity=(3800-document.documentElement.scrollTop)/ 200;
  }
  if(3900<currScroll&&currScroll<4300){
    introText.style.left="50%";
    introText.style.top="50px";
    mainText.innerHTML="Thalassic Pursuit";
    secondaryText.innerHTML="DEPTH: 1640FT";
    description.innerHTML="At the Midnight Zone, Whales dive to a max depth of 1640 feet where they hunt giant squid."
    introText.style.opacity=(document.documentElement.scrollTop-3950)/ 200;
  }
  if(4450<currScroll&&currScroll<4800){
    introText.style.left="50%";
    introText.style.top="50px";
    mainText.innerHTML="Thalassic Pursuit";
    secondaryText.innerHTML="DEPTH: 1640FT";
    description.innerHTML="At the Midnight Zone, Whales dive to a max depth of 1640 feet where they hunt giant squid."
    introText.style.opacity=(4700-document.documentElement.scrollTop)/ 200;
  }
  if(5100<currScroll&&currScroll<5600){
    introText.style.left="20%";
    introText.style.top="200px";
    mainText.innerHTML="Murky Marine";
    secondaryText.innerHTML="DEPTH: 7500FT";
    description.innerHTML="Many animals down here can't see - like these eyeless shrimp at 7500 feet who thrive near scalding hot underwater volcanoes. At this depth, temperatures are just a few degrees above freezing, but the waters around hydrothermal vents can heat up to 800 degrees fahrenheit."
    introText.style.opacity=(document.documentElement.scrollTop-5200)/ 300;
  }
  if(5800<currScroll&&currScroll<6200){
    introText.style.left="20%";
    introText.style.top="200px";
    mainText.innerHTML="Murky Marine";
    secondaryText.innerHTML="DEPTH: 7500FT";
    description.innerHTML="Many animals down here can't see - like these eyeless shrimp at 7500 feet who thrive near scalding hot underwater volcanoes. At this depth, temperatures are just a few degrees above freezing, but the waters around hydrothermal vents can heat up to 800 degrees fahrenheit."
    introText.style.opacity=(6100-document.documentElement.scrollTop)/ 200;
  }
  if(6200<currScroll&&currScroll<6600){
    introText.style.left="70%";
    introText.style.top="150px";
    mainText.innerHTML="Fallen Vessel";
    secondaryText.innerHTML="DEPTH: 12500FT";
    description.innerHTML="The RMS Titanic rests at a staggering depth of 12500 feet. The pressure is now 378 times greater than at the surface."
    introText.style.opacity=(document.documentElement.scrollTop-6250)/ 300;
  }
  if(6800<currScroll&&currScroll<7150){
    introText.style.left="70%";
    introText.style.top="150px";
    mainText.innerHTML="Fallen Vessel";
    secondaryText.innerHTML="DEPTH: 12500FT";
    description.innerHTML="The RMS Titanic rests at a staggering depth of 12500 feet. The pressure is now 378 times greater than at the surface."
    introText.style.opacity=(7100-document.documentElement.scrollTop)/ 200;
  }
  if(7400<currScroll&&currScroll<7800){
    introText.style.top="200px";
    mainText.innerHTML="But...";
    secondaryText.innerHTML="";
    description.innerHTML="";
    introText.style.left="50%";
    mainText.style.fontSize="80px";
    secondaryText.style.fontSize="35px";
    introText.style.opacity=(document.documentElement.scrollTop-7750) / 200;
  }
  if(7900<currScroll&&currScroll<8300){
    introText.style.top="200px";
    mainText.innerHTML="But...";
    secondaryText.innerHTML="";
    description.innerHTML="";
    introText.style.left="50%";
    mainText.style.fontSize="80px";
    secondaryText.style.fontSize="35px";
    introText.style.opacity=(8250-document.documentElement.scrollTop) / 200;
  }
  if(8600<currScroll&&currScroll<9000){
    introText.style.top="200px";
    mainText.innerHTML="Something is common in all of these zones...";
    secondaryText.innerHTML="";
    description.innerHTML="";
    introText.style.left="50%";
    mainText.style.fontSize="80px";
    secondaryText.style.fontSize="35px";
    introText.style.opacity=(document.documentElement.scrollTop-8950) / 200;
  }
  if(9100<currScroll&&currScroll<9400){
    introText.style.top="200px";
    mainText.innerHTML="Something is common in all of these zones...";
    secondaryText.innerHTML="";
    description.innerHTML="";
    introText.style.left="50%";
    mainText.style.fontSize="80px";
    secondaryText.style.fontSize="35px";
    introText.style.opacity=(9350-document.documentElement.scrollTop) / 200;
  }
  if(9700<currScroll&&currScroll<10100){
    introText.style.top="200px";
    mainText.innerHTML="Trash.";
    secondaryText.innerHTML="";
    description.innerHTML="";
    introText.style.left="50%";
    mainText.style.fontSize="80px";
    secondaryText.style.fontSize="35px";
    introText.style.opacity=(document.documentElement.scrollTop-10100-50) / 200;
  }
  if(10200<currScroll&&currScroll<10600){
    introText.style.top="200px";
    mainText.innerHTML="Trash.";
    secondaryText.innerHTML="";
    description.innerHTML="";
    introText.style.left="50%";
    mainText.style.fontSize="80px";
    secondaryText.style.fontSize="35px";
    introText.style.opacity=(10550-document.documentElement.scrollTop) / 200;
  }
  if(10900<currScroll&&currScroll<11300){
    mainText.innerHTML="The weight of the trash is great, but what weighs more? Our moral responsibility for our actions.";
    mainText.style.fontSize="50px";
    secondaryText.innerHTML=" ";
    introText.style.opacity=(document.documentElement.scrollTop-11250) / 200;
  }
  if(11400<currScroll&&currScroll<14000){
    mainText.innerHTML="The weight of the trash is great, but what weighs more? Our moral responsibility for our actions.";
    mainText.style.fontSize="50px";
    secondaryText.innerHTML=" ";
    introText.style.opacity=(13800-document.documentElement.scrollTop) / 300;
  }
  if(14500<currScroll&&currScroll<18000){
    introText.style.top="200px";
    mainText.innerHTML="The Boundless Sea";
    secondaryText.innerHTML="An Exploration of the Infinite";
    description.innerHTML="";
    introText.style.left="50%";
    mainText.style.fontSize="80px";
    secondaryText.style.fontSize="35px";
    introText.style.opacity=(document.documentElement.scrollTop-17000) / 300;
  }
  
}, false);
