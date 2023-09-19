let prevScrollPos = window.scrollY;

window.addEventListener("scroll", function () {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos < currentScrollPos) {
    document.querySelector(".navbar").classList.remove("show");
    document.querySelector(".navbar").classList.add("hidden");
  } else {
    document.querySelector(".navbar").classList.add("show");
    document.querySelector(".navbar").classList.remove("hidden");
  }

  prevScrollPos = currentScrollPos;
});
