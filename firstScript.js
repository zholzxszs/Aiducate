let sections = ["hiv-overview", "hiv-prevention", "hiv-testing", "hiv-starting-care", "hiv-staying-care", "hiv-living"];

function showSection(sectionId) {
     sections.forEach(id => {
          document.getElementById(id).style.display = (id === sectionId) ? "block" : "none";
     });
}

document.getElementById("sOverview").addEventListener("click", () => showSection("hiv-overview"));
document.getElementById("sPrevention").addEventListener("click", () => showSection("hiv-prevention"));
document.getElementById("sTesting").addEventListener("click", () => showSection("hiv-testing"));
document.getElementById("sStarting").addEventListener("click", () => showSection("hiv-starting-care"));
document.getElementById("sStaying").addEventListener("click", () => showSection("hiv-staying-care"));
document.getElementById("sLiving").addEventListener("click", () => showSection("hiv-living"));
