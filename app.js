// Navigation and character rendering with images

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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  const characters = [
    {
      name: 'Ken Kaneki',
      description: 'A shy student who becomes a half-ghoul after an encounter with Rize.',
      img: 'https://en.wikipedia.org/wiki/Special:FilePath/Ken_Kaneki.png'
    },
    {
      name: 'Touka Kirishima',
      description: 'A ghoul who tries to live a normal life while working at Anteiku.',
      img: 'https://en.wikipedia.org/wiki/Special:FilePath/Touka_Kirishima.png'
    },
    {
      name: 'Kishou Arima',
      description: 'Legendary Ghoul Investigator known as the Reaper.',
      img: 'https://en.wikipedia.org/wiki/Special:FilePath/Kishou_Arima.png'
    }
  ];

  const list = document.getElementById('character-list');
  characters.forEach(char => {
    const card = document.createElement('div');
    card.className = 'character-card';
    card.innerHTML = `
      <img src="${char.img}" alt="${char.name}">
      <h3>${char.name}</h3>
      <p>${char.description}</p>
    `;
    list.appendChild(card);
  });
});
