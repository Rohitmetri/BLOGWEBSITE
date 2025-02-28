// Add tilt effect to blog sections
document.querySelectorAll('.blog-section').forEach(section => {
  section.addEventListener('mousemove', (e) => {
    const rect = section.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    section.style.transform = `perspective(1000px) rotateX(${y * 5}deg) rotateY(${x * 5}deg) translateZ(20px)`;
  });

  section.addEventListener('mouseleave', () => {
    section.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
  });
});