// FOR HOME
document.addEventListener("DOMContentLoaded", function () {
     const sections = document.querySelectorAll(".hero, .message-container, .info-section, .blogpost-section");

     const options = {
         threshold: 0.2, // Trigger when 20% of the section is visible
     };

     const observer = new IntersectionObserver(function (entries, observer) {
          entries.forEach(entry => {
               if (entry.isIntersecting) {
                    entry.target.classList.add("animate-section");
               } else {
                    entry.target.classList.remove("animate-section");
               }
          });
     }, options);

     sections.forEach(section => {
          observer.observe(section);
     });
});

// CSS to apply different animations
const style = document.createElement("style");
style.innerHTML = `
     .hero, .message-container, .info-section, .blogpost-section {
          opacity: 0;
          transform: scale(0.95) rotateX(10deg);
          transition: opacity 0.8s ease-out, transform 1s ease-out;
     }
     
     .animate-section {
          opacity: 1;
          transform: scale(1) rotateX(0deg);
     }
`;
document.head.appendChild(style);

// FOR EDUCATION