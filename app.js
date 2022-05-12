const btn = document.getElementById("btn");
const topLine = document.querySelector(".burger-top");
const middle = document.querySelector(".burger-middle");
const bottom = document.querySelector(".burger-bottom");
const menu = document.querySelector(".mobile-menu");

function toggle() {
  topLine.classList.toggle("rotate-top");
  middle.classList.toggle("open");
  bottom.classList.toggle("rotate-bottom");
  menu.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");

  if (document.body.classList.contains("no-scroll")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
}

btn.addEventListener("click", toggle);
