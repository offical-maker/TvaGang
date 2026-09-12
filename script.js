const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
menu?.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('.nav nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
  const header = document.querySelector('.nav');
  header.style.background = window.scrollY > 50 ? '#050505ee' : 'linear-gradient(#050505dd, transparent)';
});