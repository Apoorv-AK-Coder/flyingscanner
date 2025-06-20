setInterval(mufun, 1000);
function mufun() {
  let b1 = document.getElementById("on");
  let b2 = document.getElementById("off");
  let view = document.getElementById("view");

  b1.addEventListener("click", function () {
    if ((view.style.display = "none")) {
      view.style.display = "block";

    }
  })

  b2.addEventListener("click", function () {
    if ((view.style.display = "block")) {
      view.style.display = "none";
    }
  })
}

const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll(".navigate nav ul li a");
navLinks.forEach(link => {
  const linkPath = new URL(link.href).pathname;
  if (linkPath === currentPath) {
    link.classList.add("active");
  }
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('.newheader');
  if (window.scrollY > 100) { // Adjust the threshold as needed
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

document.querySelectorAll('.faqhead').forEach(head => {
  head.addEventListener('click', () => {
    const detail = head.nextElementSibling; // Get the next sibling (headdetail)
    const plusIcon = head.querySelector('.fa-angle-down');
    const minusIcon = head.querySelector('.fa-angle-up');

    detail.classList.toggle('show'); // Toggle visibility

    // Toggle icons
    if (detail.classList.contains('show')) {
      plusIcon.style.display = 'none'; // Hide plus
      minusIcon.style.display = 'inline'; // Show minus
    } else {
      plusIcon.style.display = 'inline'; // Show plus
      minusIcon.style.display = 'none'; // Hide minus
    }
  });
});