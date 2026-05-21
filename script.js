const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const appointmentForm = document.querySelector("#appointmentForm");
const statusText = document.querySelector(".form-status");
const dateInput = document.querySelector('input[type="date"]');

if (dateInput) {
  dateInput.min = new Date().toISOString().slice(0, 10);
}

navToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

siteNav?.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    siteNav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
    navToggle?.setAttribute("aria-label", "Open navigation");
  }
});

appointmentForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(appointmentForm);
  const name = String(data.get("name") || "").trim().split(" ")[0] || "there";

  statusText.textContent = `Thanks, ${name}. Our appointment desk will call you shortly.`;
  appointmentForm.reset();

  if (dateInput) {
    dateInput.min = new Date().toISOString().slice(0, 10);
  }
});
