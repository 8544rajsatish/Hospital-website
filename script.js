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
  if (!appointmentForm.checkValidity()) {
    return;
  }

  const submitButton = appointmentForm.querySelector('button[type="submit"]');

  if (statusText) {
    statusText.textContent = "Sending appointment request...";
  }

  submitButton?.setAttribute("disabled", "true");
});
