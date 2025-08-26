// Simple script for navigation and character rendering

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('main section');

  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const target = link.getAttribute('data-section');

      sections.forEach(sec => sec.classList.remove('active'));
      navLinks.forEach(l => l.classList.remove('active'));

      document.getElementById(target).classList.add('active');
      link.classList.add('active');
    });
  });

  const characters = [
    { name: 'Ken Kaneki', description: 'A shy student who becomes a half-ghoul after an encounter with Rize.' },
    { name: 'Touka Kirishima', description: 'A ghoul who tries to live a normal life while working at Anteiku.' },
    { name: 'Kishou Arima', description: 'Legendary Ghoul Investigator known as the Reaper.' }
  ];

  const list = document.getElementById('character-list');
  characters.forEach(char => {
    const container = document.createElement('div');
    container.className = 'character';
    container.innerHTML = `<h3>${char.name}</h3><p>${char.description}</p>`;
    list.appendChild(container);
  });
});
