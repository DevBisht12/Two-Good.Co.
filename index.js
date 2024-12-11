// Initialize Lenis
const lenis = new Lenis({
  duration:2,
});



function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const headerAnimation = () => {
  const menu = document.querySelector('.menu');
  const leftMenu = document.querySelector('.headerleft');
  const expandHeader = document.querySelector('.header_expand');
  const allH1 = document.querySelectorAll('.header_expand_right h1');
  const closeBtn = document.querySelector('.close_sec_main');

  let isExpanded = false;

  // Handle close button click
  closeBtn.addEventListener('click', () => {
    isExpanded = false;

    // Collapse the header
    gsap.to(expandHeader, {
      height: 0,
      opacity: 0,
      y: -100,
      duration: 0.2,
      ease: 'power2.in',
    });

  });

  // Handle menu button click
  menu.addEventListener('click', () => {
    if (!isExpanded) {
      isExpanded = true;

      // Expand the header
      gsap.to(expandHeader, {
        height: '102vh',
        opacity: 1,
        y: 0,
        duration: 0.2,
        ease: 'power2.out',
      });
    }
  });

  // Add hover effects for H1 elements
  allH1.forEach((elem) => {
    elem.style.cursor='pointer'
    elem.addEventListener('mouseenter', () => {
      gsap.to(elem, {
        opacity: 0.5,
        x: 50,
        ease: 'power2.out',
      });
    });

    elem.addEventListener('mouseleave', () => {
      gsap.to(elem, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    });
  });
};


const heroTextAnimation = () => {
  const homeText = document.querySelectorAll(".hero_sec h1");

  homeText.forEach((heading) => {
    const words = heading.innerText.split(" ");
    heading.innerHTML = words.map((word) => `<h2>${word}</h2>`).join(" ");
  });

  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });


  window.addEventListener('load', () => {
    const loadingPage = document.querySelector('#loading_page');
  

    setTimeout(() => {
      gsap.to(loadingPage, {
        opacity: 0,
        duration: 1, 
        onComplete: () => {
          loadingPage.style.display = 'none'; 
        }
      });
  

      const tl = gsap.timeline();
  
      tl.from(".header", {
        y: -100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      })
        .from(".hero_sec h2", {
          y: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
        })
        .from(
          ".hero_img img",
          {
            scale: 1.1,
            opacity: 0,
            duration: 1.2,
          },
          "-=0.5"
        );
    }, 2000);
  });
  

  // tl.from(".header", {
  //   y: -100,
  //   opacity: 0,
  //   duration: 0.8,
  //   stagger: 0.2,
  // })
  //   .from(".hero_sec h2", {
  //     y: 100,
  //     opacity: 0,
  //     duration: 0.8,
  //     stagger: 0.2,
  //   })
  //   .from(
  //     ".hero_img img",
  //     {
  //       scale: 1.1,
  //       opacity: 0,
  //       duration: 1.2,
  //     },
  //     "-=0.5"
  //   );
};

const emailSecPlaceholder=()=>{
  const placeholder=document.querySelector('.emailSec input')
  placeholder.addEventListener('focus', () => {
    placeholder.placeholder = '';  
  });
  placeholder.addEventListener('blur', () => {
    placeholder.placeholder = 'Enter your email address for good'; 
  });
}

const emailSecCurser = () => {
  const emailSec = document.querySelector('.emailSec');
  const clickMeCurcerMain = document.querySelector('.clickMeCurcer');

  emailSec.addEventListener('mouseenter', () => {
    // Ensure cursor is visible and reset opacity each time
    clickMeCurcerMain.style.opacity = 1;
    clickMeCurcerMain.style.display = 'block';
    
    // Animate from invisible to visible
    gsap.fromTo('.clickMeCurcer', {
      opacity: 0, // Start from invisible
    }, {
      opacity: 1, // Fade in
      duration: 0.3, // Duration of fade-in
    });
  });

  emailSec.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event; 
    
    // Smoothly move the cursor
    gsap.to('.clickMeCurcer', {
      x: clientX , 
      y: clientY , 
      duration: 0.1, 
    });
  });

  emailSec.addEventListener('mouseleave', () => {
    // Fade out the cursor and hide it
    gsap.to('.clickMeCurcer', {
      opacity: 0, 
      duration: 0.2, 
      onComplete: () => {
        clickMeCurcerMain.style.display = 'none'; // Hide after animation completes
      },
    });
  });
};

headerAnimation()


emailSecPlaceholder()

heroTextAnimation();



  


