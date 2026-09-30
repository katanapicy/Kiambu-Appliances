const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
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
}

const bookingForm = document.getElementById("booking-form");

if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
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

    window.open(`https://wa.me/254799198102?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  });
}

document.querySelectorAll(".current-year").forEach((year) => {
  year.textContent = new Date().getFullYear();
});

const legacyYear = document.getElementById("year");
if (legacyYear) {
  legacyYear.textContent = new Date().getFullYear();
}
