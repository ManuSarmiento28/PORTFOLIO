const glow = document.querySelector(".cursor-glow");

if (glow) {
  document.addEventListener("mousemove", function(event) {
    glow.style.left = event.clientX + "px";
    glow.style.top = event.clientY + "px";
  });
}
