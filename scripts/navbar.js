let prevScrollPos = window.scrollY;

window.addEventListener("scroll", function () {
  const currentScrollPos = window.scrollY;

  var percentage = currentScrollPos/document.documentElement.scrollHeight;

  var color = "rgba(" + [37 + percentage * (119 - 37), 31 + percentage * (52 - 31), 71 + percentage * (127 - 71), 0].join(',') + ") 0%";
  var color2 = "rgba(" + [37 + percentage * (119 - 37), 31 + percentage * (52 - 31), 71 + percentage * (127 - 71), 0.8].join(',') + ") 25%";
  var color3 = "rgba(" + [37 + percentage * (119 - 37), 31 + percentage * (52 - 31), 71 + percentage * (127 - 71), 1.0].join(',') + ") 100%";
  var outputShade = "linear-gradient(0deg, " + [color, color2, color3].join(',') + ")";

  document.querySelector(".navbar").style.background = outputShade
    
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
      // menu.style.display = "flex";
      menuToggle.style.width = "100vw";
      menuToggle.style.height = "100vh";
    }, 0);
  } else {
    setTimeout(() => {
      // menu.style.display = "none";
      menuToggle.style.width = "0";
      menuToggle.style.height = "100%";
    }, 500);
  }
});

function closeAndScroll(id) {
  smoothScroll(id);
  menuCheckbox.click();
}
