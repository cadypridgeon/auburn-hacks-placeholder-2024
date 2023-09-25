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

const menuCheckbox = document.querySelector("#menu-checkbox");
const menu = document.querySelector("#menu");
const menuToggle = document.querySelector("#menu-toggle");

menuCheckbox.addEventListener("change", function () {
  if (this.checked) {
    setTimeout(() => {
      menu.style.opacity = "1";
      menu.style.visibility = "visible";
    }, 0);
  } else {
    setTimeout(() => {
      menu.style.opacity = "0";
      menu.style.visibility = "hidden";
    }, 500);
  }
});

function closeAndScroll(id) {
  smoothScroll(id);
  menuCheckbox.click();
}
