document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector(".animate-text");
    text.classList.add("animate");
  
    // Add scrolling effect
    window.addEventListener("scroll", () => {
      const projectsSection = document.querySelector(".projects");
      const position = projectsSection.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
  
      if (position < screenHeight) {
        projectsSection.classList.add("animate-projects");
      }
    });
  });
  