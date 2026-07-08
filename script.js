
    // Custom cursor
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('follower');
    let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX; mouseY = e.clientY;
      cursor.style.left = mouseX - 6 + 'px';
      cursor.style.top = mouseY - 6 + 'px';
    });

    function animateFollower() {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;
      follower.style.left = followerX - 18 + 'px';
      follower.style.top = followerY - 18 + 'px';
      requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 100);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));
  