// Custom cursor
const cur = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');

let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cur.style.left = mx + 'px';
  cur.style.top = my + 'px';
});

(function animRing() {
  rx += (mx - rx) * .12;
  ry += (my - ry) * .12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animRing);
})();

document.querySelectorAll('a,button,input,textarea,select,.gal,.service-card')
.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cur.style.transform = 'translate(-50%,-50%) scale(2.5)';
    ring.style.transform = 'translate(-50%,-50%) scale(1.5)';
    ring.style.opacity = '0';
  });

  el.addEventListener('mouseleave', () => {
    cur.style.transform = 'translate(-50%,-50%) scale(1)';
    ring.style.transform = 'translate(-50%,-50%) scale(1)';
    ring.style.opacity = '.5';
  });
});

// Navbar scroll
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));


// FORM WHATSAPP


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (!form) {
    console.error("No se encontró el formulario");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre")?.value || "";
    const edad = document.getElementById("edad")?.value || "";
    const telefono = document.getElementById("telefono")?.value || "";
    const estilo = document.getElementById("estilo")?.value || "";
    const interes = document.getElementById("interes")?.value || "";
    const mensaje = document.getElementById("mensaje")?.value || "";

    const texto = `
🎨 Nuevo contacto - Ro Arte

👤 Nombre: ${nombre}
🎂 Edad: ${edad}
📱 Teléfono: ${telefono}
🖌️ Estilo: ${estilo}
✨ Interés: ${interes}

💬 Mensaje:
${mensaje}
    `;

    const numero = "5491165964754";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  });
});