

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".feature__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".digital-transformation__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".digital-transformation__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".digital-transformation__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 0,
});

ScrollReveal().reveal(".vision__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".vision__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".vision__btn", {
  ...scrollRevealOption,
  delay: 1000,
});