      const menuHamburger = document.querySelector(".menu-hamburger")
      const navLinks = document.querySelector(".nav-links")
      const body = document.querySelector("body")


      menuHamburger.addEventListener('click', ()=>{
      navLinks.classList.toggle('mobile-menu')
      body.classList.toggle('overflow-hidden')
      })