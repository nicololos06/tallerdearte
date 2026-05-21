// Custom cursor
  const cur = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cur.style.left = mx+'px'; cur.style.top = my+'px'; });
  (function animRing(){
    rx += (mx-rx)*.12; ry += (my-ry)*.12;
    ring.style.left = rx+'px'; ring.style.top = ry+'px';
    requestAnimationFrame(animRing);
  })();
  document.querySelectorAll('a,button,input,textarea,select,.gal,.service-card').forEach(el=>{
    el.addEventListener('mouseenter',()=>{ cur.style.transform='translate(-50%,-50%) scale(2.5)'; ring.style.transform='translate(-50%,-50%) scale(1.5)'; ring.style.opacity='0'; });
    el.addEventListener('mouseleave',()=>{ cur.style.transform='translate(-50%,-50%) scale(1)'; ring.style.transform='translate(-50%,-50%) scale(1)'; ring.style.opacity='.5'; });
  });

  // Navbar scroll
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', ()=>{ nav.classList.toggle('scrolled', window.scrollY > 60); });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  reveals.forEach(el=>observer.observe(el));

  // Form submit
  function handleSubmit(e){
    e.preventDefault();
    document.getElementById('contactForm').style.display = 'none';
    const s = document.getElementById('formSuccess');
    s.classList.add('show');
  }