document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.getElementById("scrollContainer");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const menuIcon = document.getElementById("menuIcon");
  const xIcon = document.getElementById("xIcon");

  const mobileNav = document.getElementById("mobileNavListContainer");

  // scrollContainer.addEventListener('wheel', (e) => {
  //     e.preventDefault();
  //     scrollContainer.style.scrollBehavior = 'smooth';
  //     scrollContainer.scrollLeft += e.deltaY;
  // });

  menuIcon.addEventListener("click", () => {
    mobileNav.style.display = "block";
    menuIcon.style.display = "none";
    xIcon.style.display = "block";

    setTimeout(() => {
      mobileNav.style.opacity = "1";
    }, 10);
  });

  xIcon.addEventListener("click", () => {
    mobileNav.style.opacity = "0";

    setTimeout(() => {
      mobileNav.style.display = "none";
      xIcon.style.display = "none";
      menuIcon.style.display = "block";
    }, 300);
  });
  nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 300;
  });

  prevBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 300;
  });
});
