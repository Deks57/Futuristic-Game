// Галерея и лайтбоксы от Fancybox
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

// Мобильная навигация
import mobileNav from "./modules/mobile-nav.js";
mobileNav();

const selects = document.querySelectorAll(".footer__sos1al-nav");

for (const select of selects) {
  const trigger = select.querySelector(".select-trigger");

  trigger.addEventListener("click", () => {
    select.classList.toggle("active");
  });
}
