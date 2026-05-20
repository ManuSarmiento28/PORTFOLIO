const glow = document.querySelector(".cursor-glow");

if (glow) {
  document.addEventListener("mousemove", function(event) {
    glow.style.left = event.clientX + "px";
    glow.style.top = event.clientY + "px";
  });
}

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function(card) {
  card.addEventListener("mousemove", function(event) {
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.background = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(0,245,255,0.25),
        rgba(255,255,255,0.05) 40%
      )
    `;
  });

  card.addEventListener("mouseleave", function() {
    card.style.background = "rgba(255,255,255,0.045)";
  });
});