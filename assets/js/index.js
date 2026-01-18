const darkbtn = document.getElementById("theme-toggle-button");
const html = document.getElementsByTagName("html")[0];

darkbtn.addEventListener("click", function () {
  html.classList.toggle("dark");
});

var allSections = document.querySelectorAll("section");
var Links = document.querySelectorAll(".nav-linka");

window.addEventListener("scroll", function () {
  var currentId = "";

  for (var i = 0; i < allSections.length; i++) {
    var secTop = allSections[i].offsetTop;
    var secHeight = allSections[i].offsetHeight;

    if (window.scrollY >= secTop - 150 && window.scrollY < secTop + secHeight) {
      currentId = allSections[i].getAttribute("id");
    }
  }

  for (var j = 0; j < Links.length; j++) {
    Links[j].classList.remove("active");
    if (Links[j].getAttribute("href") === "#" + currentId) {
      Links[j].classList.add("active");
    }
  }
});

var filterPrto = document.querySelectorAll(".portfolio-filter");
var items = document.querySelectorAll(".portfolio-item");

for (var i = 0; i < filterPrto.length; i++) {
  filterPrto[i].addEventListener("click", function () {
    for (var j = 0; j < filterPrto.length; j++) {
      filterPrto[j].classList.remove(
        "bg-linear-to-r",
        "from-primary",
        "to-secondary",
        "text-white",
      );
    }

    this.classList.add(
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "text-white",
    );

    var val = this.getAttribute("data-filter");

    for (var k = 0; k < items.length; k++) {
      var cat = items[k].getAttribute("data-category");

      if (val === "all" || val === cat) {
        items[k].classList.remove("hidden");
      } else {
        items[k].classList.add("hidden");
      }
    }
  });
}

var slider = document.getElementById("testimonials-carousel");
var cards = document.querySelectorAll(".testimonial-card");
var next = document.getElementById("next-testimonial");
var prev = document.getElementById("prev-testimonial");
var dots = document.querySelectorAll(".carousel-indicator");

var index = 0;

function cardsCount() {
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 640) return 2;
  return 1;
}

function updateSlider() {
  var perView = cardsCount();
  var move = (index * 100) / perView;
  slider.style.transform = "translateX(" + move + "%)";

  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.remove("bg-accent");
    dots[i].classList.add("bg-slate-400");

    if (i === index) {
      dots[i].classList.add("bg-accent");
      dots[i].classList.remove("bg-slate-400");
    }
  }
}

next.addEventListener("click", function () {
  if (index >= dots.length - 1) {
    index = 0;
  } else {
    index++;
  }
  updateSlider();
});

prev.addEventListener("click", function () {
  if (index <= 0) {
    index = dots.length - 1;
  } else {
    index--;
  }
  updateSlider();
});

for (var i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    index = Number(this.getAttribute("data-index"));
    updateSlider();
  });
}

window.addEventListener("resize", updateSlider);
updateSlider();

var openBtn = document.getElementById("settings-toggle");
var closeBtn = document.getElementById("close-settings");
var side = document.getElementById("settings-sidebar");

openBtn.addEventListener("click", function () {
  side.classList.remove("translate-x-full");
  openBtn.setAttribute("aria-expanded", "true");
  side.setAttribute("aria-hidden", "false");
});

closeBtn.addEventListener("click", function () {
  side.classList.add("translate-x-full");
  openBtn.setAttribute("aria-expanded", "false");
  side.setAttribute("aria-hidden", "true");
});

var fontBtns = document.getElementsByClassName("font-option");
var body = document.body;

for (var i = 0; i < fontBtns.length; i++) {
  fontBtns[i].addEventListener("click", function () {
    for (var j = 0; j < fontBtns.length; j++) {
      fontBtns[j].classList.remove("active");
      fontBtns[j].setAttribute("aria-checked", "false");
    }

    this.classList.add("active");
    this.setAttribute("aria-checked", "true");

    var f = this.getAttribute("data-font");
    body.classList.remove("font-tajawal", "font-cairo", "font-alexandria");
    body.classList.add("font-" + f);
  });
}

var colorArr = ["primary", "secondary", "accent", "emerald", "rose", "sky"];
var grid = document.getElementById("theme-colors-grid");

for (var i = 0; i < colorArr.length; i++) {
  var b = document.createElement("button");
  b.className =
    "color-btn w-10 h-10 rounded-full bg-" +
    colorArr[i] +
    " cursor-pointer border-2 border-transparent";
  b.setAttribute("data-color", colorArr[i]);
  grid.appendChild(b);
}

var colorBtns = document.getElementsByClassName("color-btn");
var txtClasses = [
  "text-primary",
  "text-secondary",
  "text-accent",
  "text-emerald-500",
  "text-rose-500",
];

for (var i = 0; i < colorBtns.length; i++) {
  colorBtns[i].addEventListener("click", function () {
    var c = this.getAttribute("data-color");

    for (var j = 0; j < txtClasses.length; j++) {
      body.classList.remove(txtClasses[j]);
    }

    body.classList.add("text-" + c);
  });
}

var reset = document.getElementById("reset-settings");

reset.addEventListener("click", function () {
  body.classList.remove("font-cairo", "font-alexandria");
  body.classList.add("font-tajawal");
  htmlEl.className = "";
});

var topBtn = document.getElementById("scroll-to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    topBtn.classList.remove("opacity-0", "invisible");
    topBtn.classList.add("opacity-100", "visible");
  } else {
    topBtn.classList.add("opacity-0", "invisible");
    topBtn.classList.remove("opacity-100", "visible");
  }
});

topBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
