
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container .header__flex", {
  ...scrollRevealOption,
  delay: 1000,
});

const faq = document.querySelector(".faq__grid");

faq.addEventListener("click", (e) => {
  const target = e.target;
  const faqCard = target.closest(".faq__card");
  if (target.classList.contains("ri-arrow-down-s-line")) {
    if (faqCard.classList.contains("active")) {
      faqCard.classList.remove("active");
    } else {
      Array.from(faq.children).forEach((item) => {
        item.classList.remove("active");
      });
      faqCard.classList.add("active");
    }
  }
});

ScrollReveal().reveal(".faq__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".article__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

document.getElementById('emailForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  var form = event.target;
  var isValid = true;
  var formData = new FormData(form);

  // Check if the email field is filled
  var emailField = form.querySelector('input[name="email"]');
  if (!emailField.value.trim()) {
    isValid = false;
  }

  if (!isValid) {
    showPopup('errorPopup');
    return;
  }

  // Send the form data using Fetch API
  fetch(form.action, {
    method: form.method,
    headers: {
      'Accept': 'application/json'
    },
    body: formData
  })
  .then(function(response) {
    if (response.ok) {
      showPopup('successPopup');
      form.reset();
    } else {
      return response.json().then(function(data) {
        throw new Error(data.error || 'Form submission error');
      });
    }
  })
  .catch(function(error) {
    showPopup('errorPopup');
    console.error('Form submission error:', error);
  });
});

function showPopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = 'block';
  setTimeout(function() {
    popup.style.display = 'none';
  }, 3000);
}

