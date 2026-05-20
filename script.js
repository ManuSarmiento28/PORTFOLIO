const glow = document.querySelector(".cursor-glow");

if (glow) {
  document.addEventListener("mousemove", function(event) {
    glow.style.left = event.clientX + "px";
    glow.style.top = event.clientY + "px";
  });
}

const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
  card.addEventListener("mousemove", function(event) {
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.background = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(0,245,255,0.22),
        rgba(255,255,255,0.045) 42%
      )
    `;
  });

  card.addEventListener("mouseleave", function() {
    card.style.background = `
      linear-gradient(
        135deg,
        rgba(255,255,255,0.08),
        rgba(255,255,255,0.02)
      )
    `;
  });
});