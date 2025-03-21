// FOR HOME
// Wait until the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
     
     // Select all sections that need animation when they appear in the viewport
     const sections = document.querySelectorAll(".hero, .message-container, .info-section, .blogpost-section");

     // Set up options for the Intersection Observer
     const options = {
          threshold: 0.2, // Trigger animation when 20% of the section is visible
     };

     // Create an Intersection Observer to detect when sections come into view
     const observer = new IntersectionObserver(function (entries, observer) {
          entries.forEach(entry => {
               // Check if the section is visible and hasn't been animated yet
               if (entry.isIntersecting && !entry.target.classList.contains("animate-section")) {
                    entry.target.classList.add("animate-section"); // Add animation class
               }
          });
     }, options);

     // Observe each selected section to detect when it enters the viewport
     sections.forEach(section => {
          observer.observe(section);
     });
});


// CSS for animations
// Create a <style> element to hold the animation styles
const style = document.createElement("style");

style.innerHTML = `
     /* Initial state: sections are hidden with a slight scale-down and rotation effect */
     .hero, .message-container, .info-section, .blogpost-section {
          opacity: 0; /* Make sections invisible initially */
          transform: scale(0.95) rotateX(10deg); /* Slight shrink and tilt */
          transition: opacity 0.8s ease-out, transform 1s ease-out; /* Smooth transition */
     }
     
     /* When the section becomes visible, apply animation */
     .animate-section {
          opacity: 1; /* Fully visible */
          transform: scale(1) rotateX(0deg); /* Reset scale and rotation */
     }
`;

// Append the <style> element to the document's <head>, applying the styles globally
document.head.appendChild(style);



// FOR EDUCATION
// Show or hide the "Scroll to Top" button based on the scroll position
window.onscroll = function() {
     let button = document.getElementById("scrollTopBtn");
     
     // If the user scrolls down more than 100px, display the button
     if (document.documentElement.scrollTop > 100) {
          button.style.display = "block";
     } else {
          button.style.display = "none"; // Hide the button when scrolled to the top
     }
};

// Function to scroll back to the top smoothly
function scrollToTop() {
     window.scrollTo({ top: 0, behavior: 'smooth' });
}

// SUBTOPICS
function toggleSubTopics(event, id, whatTopic) {
     event.preventDefault(); // Prevent default anchor behavior

     // Hide all sub-topics first
     document.querySelectorAll(".sub-topics").forEach(subTopic => {
          subTopic.classList.remove("show");
     });

     // Show the selected sub-topics
     let subTopics = document.getElementById(id);
     if (subTopics) {
          subTopics.classList.add("show");
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
          let topicElement = document.getElementById(topic);
          if (topicElement) {
               topicElement.style.display = "none";
          }
     });

     // Show the selected topic
     let selectedTopic = document.getElementById(`hiv-${whatTopic}`);
     if (selectedTopic) {
          selectedTopic.style.display = "block";

          // Scroll to the section smoothly with offset for fixed header
          const headerOffset = 80; // Adjust this based on your fixed header height
          const elementPosition = selectedTopic.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
               top: offsetPosition,
               behavior: "smooth"
          });
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

               // Scroll to the section smoothly with offset
               const headerOffset = 80; // Adjust this based on your fixed header height
               const elementPosition = targetSection.getBoundingClientRect().top + window.scrollY;
               const offsetPosition = elementPosition - headerOffset;

               window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
               });
          }
     });
});


// FOR STORIES 
function openModal(img, modalContent) {
     let text = {
          sOne: `
          Jerico Paterno, a 34-year-old Filipino, thought his life was over when he was diagnosed with HIV in 2005. At the time, he didn’t understand the difference between HIV and AIDS and believed he was dying. Depression consumed him, and he avoided treatment, thinking it was futile. By 2007, his health deteriorated as he battled tuberculosis and pneumonia. A small ad in a local tabloid led him to San Lazaro Hospital, where he finally sought help.

          There, Jerico met members of the Pinoy Plus Association, a support group for people living with HIV. Their encouragement inspired him to join and later become its chairman. Through peer counseling, Jerico helped others navigate their diagnoses, offering hope by sharing his own journey of recovery and empowerment. Today, Jerico lives a fulfilling life with his partner—also HIV-positive—and continues to educate others about prevention and treatment.`,
          
          sTwo: `
          Roberto Ruiz was diagnosed with HIV in the early 1990s when medical treatments were limited, and public knowledge about the virus was scarce. At first, he lived in fear of discrimination and rejection, keeping his condition a secret. As he struggled with the physical and emotional burden of his diagnosis, he realized that accepting his condition was the key to living fully. Despite his initial fears, he sought medical help and joined a support group, which helped him embrace his journey with HIV.

          Now, Ruiz is one of the longest-living individuals with HIV in the Philippines, proving that early detection and proper medication can enable a long and healthy life. He actively participates in HIV advocacy, educating young people about the importance of regular testing and debunking myths surrounding the virus. Through his story, Ruiz hopes to encourage others to seek medical help early and not let stigma prevent them from living their lives to the fullest.`,

          sThree: `
          Marvin Ted Membreve was diagnosed with HIV in 2013 after a single unprotected encounter changed his life forever. Initially consumed by denial and suicidal thoughts, Marvin found strength through community support from Amnesty International and other organizations. With their encouragement, he began treatment and embraced his identity as an advocate for people living with HIV.

          Today, Marvin serves as a peer educator for the Family Planning Organization of the Philippines. He campaigns for better access to reproductive health services and fights against stigma through education initiatives targeting vulnerable communities. Marvin’s journey from despair to activism showcases the transformative power of acceptance and community support.`,
          
          sFour: `
          Beyond his legendary music career, Elton John has been a tireless advocate for HIV and AIDS awareness. After witnessing the devastating effects of the virus, especially in the LGBTQ+ community, he decided to take action. The death of his close friend Ryan White, a teenager who contracted HIV through a blood transfusion, deeply impacted him and motivated him to make a difference.

          In response, Elton John founded the Elton John AIDS Foundation, which has since become one of the largest organizations dedicated to fighting HIV and AIDS worldwide. His foundation funds research, treatment, and education programs, ensuring that those affected by the virus receive the care and support they need. His unwavering commitment to the cause has saved countless lives and continues to inspire global efforts in the fight against HIV/AIDS.`,
          
          sFive: `
          Gabby’s journey with HIV began unexpectedly when he donated blood in 1990, only to receive a call later informing him that he had tested positive. At a time when there was little knowledge about HIV, the diagnosis came as a shock, and he feared the worst. His life took another painful turn when his first wife passed away due to AIDS-related complications. Facing discrimination and isolation, Gabby struggled to find acceptance in society. However, instead of giving in to despair, he sought treatment and education about the virus, determined to continue living his life.

          Now, over 17 years since his diagnosis, Gabby has become an advocate for HIV awareness in the Philippines. He uses his experience to educate others on the importance of early testing and treatment. Through public speaking engagements and community outreach programs, he hopes to eliminate the fear and misinformation surrounding HIV, encouraging more people to take control of their health.`,
          
          sSix: `
          Elena Felix, fondly called ‘Nay Elena, is a trailblazer for women living with HIV in the Philippines. After being diagnosed herself, she faced stigma and discrimination but turned her struggles into opportunities for advocacy. As one of the founders of the Association of Positive Women Advocates Inc., Elena mentors women who share similar experiences and helps them navigate life with dignity.

          Her work extends beyond mentorship; she actively pushes for policy changes through collaborations with organizations like the Network to Stop AIDS Philippines. Despite challenges like the COVID-19 pandemic, Elena continues her mission tirelessly. Her story exemplifies resilience and serves as an inspiration for women living with HIV who seek hope and empowerment.`,

          sSeven: `
          Young Filipino men who have sex with men (MSM) often face unique challenges after an HIV diagnosis. Many experience denial, anger, and depression due to societal stigma. However, support networks like Klinika Bernardo in Quezon City offer a lifeline through counseling and treatment tailored to their needs.

          These stories highlight resilience as individuals move from despair to acceptance. With proper care and community support, they regain hope and pursue their dreams despite the diagnosis. Their journeys emphasize that HIV does not define one’s worth or future.`,

          sEight: `
          Anthony Louie David captured hearts and minds with his photo essay, "Unconditional Love," a poignant depiction of his HIV journey7. Anthony likened his status to being swallowed by waves after his partner's death from HIV complications, feeling tired and wanting to give up7. However, Anthony chose to survive the waves and embrace every splash with a smile.

          He found the strength to survive the grief from his partner's death from HIV complications and also upon learning about his HIV status. Despite the darkness, Anthony resolved to not sink to the bottom; rather, he would walk on water, meeting life's challenges with resilience and a smile.`,

          sNine: `
          EJ Taguba, an 18-year-old from Cagayan de Oro, has become a powerful voice in the fight against HIV stigma in the Philippines. As a peer educator and counselor, EJ works with Save the Children and The Red Whistle to educate young people about HIV and AIDS. His journey began in 2016 when he learned that the Philippines had the fastest-growing HIV epidemic globally. Determined to make a difference, he underwent training to counsel both teens and adults.

          EJ’s ability to connect with his peers stems from his own experiences as a teenager. He uses his local celebrity status, gained after winning a talent contest in Northern Mindanao, to amplify his message. EJ encourages teens to stay informed and urges adults to support youth-led advocacy efforts. His work has inspired many to seek testing and embrace education, proving that even the youngest voices can make a profound impact.`
     };

     let title = {
          sOne: "Hope Beyond the Diagnosis: Jerico’s Journey",
          sTwo: "Dolzura Cortez: Breaking the Silence",
          sThree: "From Stigma to Self-Love: MSM Stories in Metro Manila",
          sFour: "A Global Icon's Advocacy Elton John's Commitment",
          sFive: "Surviving and Thriving Gabby's 17-Year Battle",
          sSix: "Elena Felix Empowers Women Living with HIV",
          sSeven: "From Stigma to Self-Love: MSM Stories in Metro Manila",
          sEight: "Unconditional Love: Anthony's Triumph Over Darkness",
          sNine: "EJ Taguba Inspires Youth to Fight HIV Stigma"
     };

     // Set modal text and title based on the key passed
     if (text.hasOwnProperty(modalContent) && title.hasOwnProperty(modalContent)) {
          document.getElementById("modalText").innerText = text[modalContent];
          document.getElementById("modalTitle").innerText = title[modalContent];
     }

     // Set other modal elements
     // document.getElementById("modalImage").src = img;
     document.getElementById("storyModal").style.display = "flex";
}

function closeModal() {
     document.getElementById("storyModal").style.display = "none";
}


// FOR LOGIN AND REGISTRATION SECTION
document.addEventListener("DOMContentLoaded", function () {
     const splashscreenSection = document.querySelector(".splashscreen-section");
     const containerSplash = document.querySelector(".container-splash");
     const container = document.querySelector(".container");
     const loginBox = document.querySelector(".login-box");
     const registrationBox = document.querySelector(".registration-box");
     const showLogin = document.getElementById("showLogin");
     const showRegister = document.getElementById("showRegister");
     const isSignInClicked = document.getElementById("btnSignIn");
     const isSignUpClicked = document.getElementById("btnSignUp");

     // Function to clear all input fields
     function clearFields(form) {
          if (form) {
               const inputs = form.querySelectorAll("input");
               inputs.forEach(input => {
                    if (input.type !== "checkbox") {
                         input.value = "";
                    } else {
                         input.checked = false;
                    }
               });
          }
     }

     // Function to show login section and hide registration section
     if (showLogin) {
          showLogin.addEventListener("click", function (event) {
               event.preventDefault();
               console.log("Sign-in clicked"); // Debugging
               clearFields(registrationBox);
               loginBox.classList.add("active");
               registrationBox.classList.remove("active");
          });
     }

     // Function to show registration section and hide login section
     if (showRegister) {
          showRegister.addEventListener("click", function (event) {
               event.preventDefault();
               console.log("Sign-up clicked"); // Debugging
               clearFields(loginBox);
               loginBox.classList.remove("active");
               registrationBox.classList.add("active");
          });
     }

     // Function to handle sign-in button
     if (isSignInClicked) {
          isSignInClicked.addEventListener("click", function () {
               window.open("landing-page.html", "_self");
          });
     }

     // Function to handle sign-up button
     if (isSignUpClicked) {
          isSignUpClicked.addEventListener("click", function () {
               clearFields(registrationBox);
               loginBox.classList.add("active");
               registrationBox.classList.remove("active");
          })
     }

     // 🎬 Show Splash Screen and Smoothly Fade Out
     setTimeout(function () {
          containerSplash.classList.add("hide");

          setTimeout(function () {
               splashscreenSection.style.display = "none";
               container.classList.add("show");
               loginBox.classList.add("active");
          }, 1500);
     }, 3000);

     // Handle Show Password
     const loginPasswordField = document.getElementById("loginPassword");
     const registerPasswordField = document.getElementById("registerPassword");
     const toggleLoginPassword = document.getElementById("showLoginPassword");
     const toggleRegisterPassword = document.getElementById("showRegisterPassword");

     if (toggleLoginPassword && loginPasswordField) {
          toggleLoginPassword.addEventListener("change", function () {
               loginPasswordField.type = this.checked ? "text" : "password";
          });
     }

     if (toggleRegisterPassword && registerPasswordField) {
          toggleRegisterPassword.addEventListener("change", function () {
               registerPasswordField.type = this.checked ? "text" : "password";
          });
     }
});


// HEADER RESPONSIVENESS
document.addEventListener("DOMContentLoaded", function () {
     const burgerMenu = document.getElementById("burgerMenu");
     const navMenu = document.getElementById("navMenu");

     burgerMenu.addEventListener("click", function () {
          navMenu.classList.toggle("active");
     });
});

// FOR BUTTON ALL BASICS
let btnHivBasics = document.getElementById("btnHivBasics");

btnHivBasics.addEventListener("click", function () {
     window.open("education.html", "_self");
})


// FOR ABOUT WEBSITE
// Scroll animation for About Section
document.addEventListener("DOMContentLoaded", function() {
     const aboutSection = document.querySelector(".about");
     
     function revealOnScroll() {
          const sectionTop = aboutSection.getBoundingClientRect().top;
          const screenHeight = window.innerHeight;

          if (sectionTop < screenHeight * 0.8) {
               aboutSection.style.opacity = "1";
               aboutSection.style.transform = "translateY(0)";
          }
     }

     window.addEventListener("scroll", revealOnScroll);
});






















