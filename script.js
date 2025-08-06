// Toggle dropdown menu
document.addEventListener('DOMContentLoaded', () => {
  const dropbtn = document.querySelector('.dropbtn');
  const dropdown = document.getElementById('dropdownContent');

  dropbtn.addEventListener('click', function (e) {
    e.stopPropagation();
    dropdown.style.display = dropdown.style.display === 'block';
    dropdown.style.display = isVisible ? 'none' : 'block';
  });

  document.addEventListener('click', function () {
    dropdown.style.display = 'none';
  });
});

// Optional: Scroll behavior for nav (e.g., shrink on scroll)
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 20) {
    nav.style.padding = '5px 20px';
  } else {
    nav.style.padding = '10px 20px';
  }
});
