const ripples = document.querySelectorAll('.ripple');
ripples.forEach(ripple => {
   ripple.addEventListener('mousedown', (event) => {
     const target = event.currentTarget;
      const circle = document.createElement('div');
      const diameter = Math.max(target.clientWidth, target.clientHeight);
      const radius = diameter / 2;
      circle.style.width = circle.style.height = diameter + 'px';
      circle.style.left = event.clientX - (target.offsetLeft + radius) + 'px';
      circle.style.top = event.clientY - (target.offsetTop + radius) + 'px';
      circle.classList.add('ripple__circle');
      circle.classList.add('delay');
      target.appendChild(circle);
      setTimeout(() => {
        circle.classList.remove('delay');
      }, 350)
      window.addEventListener('mouseup', () => {
        circle.classList.add('fade');
        setTimeout(() => {
          circle.remove();
        }, 700);
      }, {once: true, passive: true});
   });
});
