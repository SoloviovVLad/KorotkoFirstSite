var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 50,
   
    // Navigation arrows
    navigation: {
      nextEl: '.next_slide_1',
      prevEl: '.prev_slide_1',
    },
    
    //breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
    }
  })

  var mySwiper = new Swiper('.swiper-container_2', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 50,
  
    // Navigation arrows
    navigation: {
      nextEl: '.next_slide_2',
      prevEl: '.prev_slide_2',
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
    }
  })

  //sticky-header and upbutton START
  if(pageYOffset > 50){
    //header
    document.querySelector("header").style.top = -70 + 'px';
  }
  let offset = 0
  window.addEventListener('scroll', function() {
    if(pageYOffset > offset){
      document.querySelector("header").style.top = -70 + 'px';   
    }
    if(pageYOffset < offset){
      document.querySelector("header").classList.add("sticky");
      document.querySelector("header").style.top = 0 + 'px';
    }
      offset = pageYOffset
    if(pageYOffset > 30){
        //button-up
        document.getElementById('upbutton').style.right = '50px';
        if ( jQuery(window).width() < 440 ) {
            document.getElementById('upbutton').style.right = '20px';
        }
        //button-up
    }
    else{
          document.getElementById('upbutton').style.right = '-70px';
          document.querySelector("header").classList.remove("sticky");
    }
  });
  //sticky-header and upbutton END

  // menu-pointer change position START
  const pointer = document.getElementById("pointer");
  var menuItem = document.querySelectorAll('.menu_list_item');
 
  for(var i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("mouseenter", changePos(i));
  }

  function changePos(i) {
  return function() {
    for(var j = 0; j < menuItem.length; j++) {
        if(menuItem[j].classList.contains("menu_sublist")){
          if(i!=j){
      
          menuItem[j].querySelector(".submenu").style.opacity = 0;
          menuItem[j].querySelector(".submenu").style.display = "none";
          pointer.style.opacity = 0;
          }
        }
    };
    if(menuItem[i].classList.contains("menu_sublist")){
        menuItem[i].querySelector(".submenu").style.opacity = 1;
        menuItem[i].querySelector(".submenu").style.display = "flex";
      pointer.style.opacity = 1;
    }
      pointer.style.top = 88 * i+ 28 + "px";
  };
  }
   // menu-pointer change position END
   // open and close menu START
   var openMenu = document.querySelector(".menu_open");
   const menu = document.querySelector(".menu_opened");
   openMenu.addEventListener("click", function(){
    menu.style.top = 0;
    document.body.style.overflowY = "hidden";
    document.body.style.marginRight = "20px";
   });

   var closeMenu = document.querySelector(".close_menu");
   closeMenu.addEventListener("click", function(){
    menu.style.top = "-100%";
    document.body.style.overflowY = "auto";
    document.body.style.marginRight = "0px";
   });
  // open and close menu END
  const main = document.querySelectorAll('.swiper-container_2 .swiper-slide');
    if(main.length > 0){
            let itemh = 0;
            main.forEach((item) => {
                if(itemh < item.offsetHeight)
                itemh = item.offsetHeight;
            })
            main.forEach((item) => {
                item.style.height = itemh + 20 + 'px';
            })
    }