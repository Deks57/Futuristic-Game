function mobileNav() {
  const navBtn = document.querySelector(".burger-button");
  const nav = document.querySelector(".mobile-nav");

  navBtn.onclick = function() {
    nav.classList.toggle("open");
    navBtn.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  };

  document.addEventListener("click", function(event) {
    if (
      !nav.contains(event.target) &&
      !navBtn.contains(event.target) &&
      nav.classList.contains("open")
    ) {
      nav.classList.remove("open");
      navBtn.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });
}

export default mobileNav;
