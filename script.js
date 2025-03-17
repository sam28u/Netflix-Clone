function page1animation() {
  var tl = gsap.timeline();
  tl.from(".main", {
    opacity: 0,
    duration: 0.8,
  });
  tl.from("nav .logo img", {
    y: -80,
    opacity: 0,
    duration: 0.8,
  });
  tl.from("nav button", {
    y: -80,
    opacity: 0,
    duration: 0.8,
    // delay: 0.1,
    stagger: 0.25,
  });

  tl.from(".content .c1", {
    // x: -500,
    opacity: 0,
    duration: 0.8,
    // delay: 0.1,
  });

  tl.from(".content .c2,.content .c3", {
    // x: 500,
    opacity: 0,
    duration: 0.7,
    // delay: 0.1,
  });
  tl.from(".content .c4", {
    opacity: 0,
    duration: 0.7,
  });
}
page1animation();
let fb1 = document.querySelector(".fb1");
let fb2 = document.querySelector(".fb2");
let fb3 = document.querySelector(".fb3");
let fb4 = document.querySelector(".fb4");
let fb5 = document.querySelector(".fb5");
let fb6 = document.querySelector(".fb6");
let f1 = document.querySelector(".f1");
let f2 = document.querySelector(".f2");
let f3 = document.querySelector(".f3");
let f4 = document.querySelector(".f4");
let f5 = document.querySelector(".f5");
let f6 = document.querySelector(".f6");
fb1.addEventListener("click", () => {
  f1.classList.toggle("open");
  f2.classList.remove("open");
  f3.classList.remove("open");
  f4.classList.remove("open");
  f5.classList.remove("open");
  f6.classList.remove("open");
});
fb2.addEventListener("click", () => {
  f2.classList.toggle("open");
  f1.classList.remove("open");
  f3.classList.remove("open");
  f4.classList.remove("open");
  f5.classList.remove("open");
  f6.classList.remove("open");
});
fb3.addEventListener("click", () => {
  f3.classList.toggle("open");
  f2.classList.remove("open");
  f1.classList.remove("open");
  f4.classList.remove("open");
  f5.classList.remove("open");
  f6.classList.remove("open");
});
fb4.addEventListener("click", () => {
  f4.classList.toggle("open");
  f2.classList.remove("open");
  f3.classList.remove("open");
  f1.classList.remove("open");
  f5.classList.remove("open");
  f6.classList.remove("open");
});
fb5.addEventListener("click", () => {
  f5.classList.toggle("open");
  f2.classList.remove("open");
  f3.classList.remove("open");
  f4.classList.remove("open");
  f1.classList.remove("open");
  f6.classList.remove("open");
});
fb6.addEventListener("click", () => {
  f6.classList.toggle("open");
  f2.classList.remove("open");
  f3.classList.remove("open");
  f4.classList.remove("open");
  f5.classList.remove("open");
  f1.classList.remove("open");
});
