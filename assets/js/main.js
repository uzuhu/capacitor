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
