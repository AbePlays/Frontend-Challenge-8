var open = document.getElementById("open");
var close = document.getElementById("close");
var links = document.getElementById("links");

open.addEventListener("click", () => {
  open.style.display = "none";
  close.style.display = "block";
  links.style.display = "block";
});

close.addEventListener("click", () => {
  close.style.display = "none";
  open.style.display = "block";
  links.style.display = "none";
});

function show(x) {
  if (x.matches) {
    links.style.display = "block";
  }
}

function hide(y) {
  if (y.matches) {
    links.style.display = "none";
  }
}

var x = window.matchMedia("(min-width: 851px)");
x.addListener(show);

var y = window.matchMedia("(max-width: 850px)");
y.addListener(hide);
