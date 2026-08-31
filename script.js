document.body.classList.add('motion-ready');

const bio = document.querySelector('.plain-bio');
if (bio) {
  bio.outerHTML = `<div class="fact-scraps"><p><b>01 / STUDY</b>AI Solutions &amp; Applications at PDP University</p><p><b>02 / BUILD</b>Python backend systems and REST APIs</p><p><b>03 / LIVE IN</b>Linux, terminals, systems and automation</p><p><b>04 / PRACTICE</b>Algorithms and problem solving on LeetCode</p></div>`;
}

const aboutGrid = document.querySelector('.about-grid');
if (aboutGrid) {
  aboutGrid.insertAdjacentHTML('afterend', `<article class="about-story"><h3>THE PERSON BEHIND<br>THE TERMINAL.</h3><p>I’m <span class="cut">Azimjon</span>, also known as <span class="cut warm">Zimi</span>. My path started with mathematics and exact sciences at Academic Lyceum. In 2024, I began programming through Python and frontend development; now I study <span class="cut">AI Solutions &amp; Applications</span> at PDP University and keep connecting mathematics, code and intelligent systems. I’m not trying to look finished — I’m <span class="cut warm">building a stronger way of thinking</span>, one system and one problem at a time.</p><span class="margin-note">still learning ↗</span></article>`);
}

const aiField = document.querySelector('.field.ai');
if (aiField) {
  aiField.querySelector('h3').innerHTML = 'ARTIFICIAL<br>INTELLIGENCE';
  aiField.querySelector('p').textContent = 'learning to connect mathematics, code and useful intelligent systems.';
}

const contactNav = document.querySelector('.contact-paper nav');
if (contactNav) {
  contactNav.className = 'social-stickers';
  const icons = ['github/12241d', 'linkedin/0A66C2', 'telegram/229ED9', 'leetcode/FFA116'];
  contactNav.querySelectorAll('a').forEach((link, index) => {
    link.insertAdjacentHTML('afterbegin', `<img src="https://cdn.simpleicons.org/${icons[index]}" alt="">`);
  });
}

const sections = document.querySelectorAll('.section, .contact');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
sections.forEach((section) => observer.observe(section));
