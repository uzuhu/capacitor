// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  var hamburger = document.querySelector('.hamburger');
  var navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
    });
  }

  // Mobile: expand Resources dropdown without leaving page
  document.querySelectorAll('.nav-dropdown-toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
      if (window.matchMedia('(max-width: 768px)').matches) {
        e.preventDefault();
        this.parentElement.classList.toggle('open');
      }
    });
  });

  // Tab functionality
  document.querySelectorAll('.tab-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var group = this.closest('.tabs-wrapper');
      group.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
      group.querySelectorAll('.tab-content').forEach(function(c) { c.classList.remove('active'); });
      this.classList.add('active');
      var target = group.querySelector('#' + this.dataset.tab);
      if (target) target.classList.add('active');
    });
  });
});
