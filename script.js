// Tahun footer otomatis
document.querySelector("footer p").innerHTML =
  `© ${new Date().getFullYear()} Ryan Kurniawan. All rights reserved.`;

// Efek sederhana saat elemen masuk layar
const items = document.querySelectorAll(".project, .service-grid > div");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.12 });

items.forEach(item => {
  item.style.opacity = "0";
  item.style.transform = "translateY(15px)";
  item.style.transition = "opacity .6s ease, transform .6s ease";
  observer.observe(item);
});
