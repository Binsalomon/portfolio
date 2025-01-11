document.addEventListener("DOMContentLoaded", () => {
    const animatedText = document.getElementById("animated-text");
    const words = ["Welcome to My Portfolio", "Explore My Projects", "Let’s Work Together"];
    let index = 0;

    setInterval(() => {
        animatedText.style.opacity = 0;
        setTimeout(() => {
            animatedText.textContent = words[index];
            animatedText.style.opacity = 1;
            index = (index + 1) % words.length;
        }, 500);
    }, 3000);

    const form = document.getElementById("contact-form");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const response = await fetch("send_email.php", {
            method: "POST",
            body: formData
        });
        if (response.ok) {
            alert("Message sent successfully!");
            form.reset();
        } else {
            alert("There was an error sending your message. Please try again later.");
        }
    });
});








document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.getElementById("skills-section");
    const skillBars = document.querySelectorAll(".progress-bar");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target;
            const targetValue = parseInt(progressBar.getAttribute("data-count"));
            animateSkill(progressBar, targetValue);
            observer.unobserve(progressBar); 
          }
        });
      },
      { threshold: 0.5 }
    );
  
    skillBars.forEach((bar) => observer.observe(bar));
  
    function animateSkill(progressBar, targetValue) {
      progressBar.style.width = targetValue + "%";
  
      const countElement = progressBar.parentElement.nextElementSibling; // Select the count span
      let currentValue = 0;
      const increment = Math.ceil(targetValue / 50); 
  
      const counter = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
          currentValue = targetValue;
          clearInterval(counter);
        }
        countElement.textContent = `${currentValue}%`;
      }, 50); 
    }
  });
  