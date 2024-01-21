let menu = document.querySelector("#menu-bars")
let navbar = document.querySelector(".navbar")

menu.addEventListener("click",()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
})

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');


window.onscroll = ()=>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec =>{
      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute(' id');

      if(top >= offset && top < offset+height){
        navLinks.forEach(Links =>{
          Links.classList.remove('active');
          document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
        });
      };
    });
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active')
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove ('active')
}


var swiper = new Swiper('.home-slider', {
  // Optional parameters
  spaceBetween:30,
  centerSlides:true,
  autoplay:{
      delay:7500,
      disableOnInteraction:false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  // If we need pagination
});

var swiper = new Swiper('.review-slider', {
  // Optional parameters
  spaceBetween:30,
  centerSlides:true,
  autoplay:{
      delay:7500,
      disableOnInteraction:false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  // If we need pagination
});