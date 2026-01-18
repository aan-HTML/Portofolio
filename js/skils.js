document.addEventListener('DOMContentLoaded', () => {

  const skills = [
    { name: 'HTML5', icon: 'devicon-html5-plain colored' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
    { name: 'PHP', icon: 'devicon-php-plain colored' },
    { name: 'Laravel', icon: 'devicon-laravel-plain colored' },
    { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
    { name: 'WordPress', icon: 'devicon-wordpress-plain colored' },
    { name: 'GitHub', icon: 'devicon-github-original colored' }
  ];

  const track = document.getElementById('skillsTrack');

  /* render dua kali supaya seamless */
  skills.concat(skills).forEach(skill => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.innerHTML = `
      <div class="skill-icon"><i class="${skill.icon}"></i></div>
      <div class="skill-name">${skill.name}</div>
    `;
    track.appendChild(card);
  });

  let x = 0;
  let lastTime = null;

  const mobile = window.matchMedia('(max-width: 768px)').matches;
  const speed = mobile ? 20 : 40; // px per detik

  function loop(time) {
    if (!lastTime) lastTime = time;
    const delta = time - lastTime;
    lastTime = time;

    x -= (speed * delta) / 1000;

    if (Math.abs(x) >= track.scrollWidth / 2) {
      x = 0;
    }

    track.style.transform = `translateX(${x}px)`;
    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
});