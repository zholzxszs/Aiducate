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
window.onscroll = function() {
     let button = document.getElementById("scrollTopBtn");
     if (document.documentElement.scrollTop > 100) {
          button.style.display = "block";
     } else {
          button.style.display = "none";
     }
};

function scrollToTop() {
     window.scrollTo({ top: 0, behavior: 'smooth' });
}

// SUBTOPICS
function toggleSubTopics(event, id, whatTopic) {
     event.preventDefault(); // Prevent page jumping

     let subTopics = document.getElementById(id);
     if (subTopics) {
          subTopics.classList.toggle("show");
     }

     // Define topic sections
     const topics = [
          "hiv-overview",
          "hiv-prevention",
          "hiv-testing",
          "hiv-starting-care",
          "hiv-staying-care",
          "hiv-living"
     ];

     // Hide all topics first
     topics.forEach(topic => {
          document.getElementById(topic).style.display = "none";
     });

     // Show the selected topic
     let selectedTopic = document.getElementById(`hiv-${whatTopic}`);
     if (selectedTopic) {
          selectedTopic.style.display = "block";
     }
}

 // Add event listeners to sub-topic links
document.querySelectorAll(".sub-topics a").forEach(link => {
     link.addEventListener("click", function (event) {
          event.preventDefault();
     
          let targetId = this.getAttribute("href").substring(1); // Get section ID (remove #)
          let targetSection = document.getElementById(targetId);

          if (targetSection) {
               // Hide all sections
               document.querySelectorAll(".main-content section").forEach(section => {
                    section.style.display = "none";
               });
     
               // Show the clicked section
               targetSection.style.display = "block";
     
               // Scroll to the section smoothly
               targetSection.scrollIntoView({ behavior: "smooth" });
          }
     });
});
