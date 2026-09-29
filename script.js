const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  });
});

document.getElementById("booking-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const message = [
    "Hello, I would like to request an appliance repair.",
    "",
    `Name: ${form.get("name")}`,
    `Phone: ${form.get("phone")}`,
    `Location: ${form.get("location")}`,
    `Service: ${form.get("service")}`,
    `Problem: ${form.get("message")}`
  ].join("\n");

  window.open(`https://wa.me/254790076362?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});

document.getElementById("year").textContent = new Date().getFullYear();
