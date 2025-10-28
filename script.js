// script.js - small utilities for multi-page site

// Year placeholders
document.getElementById('year')?.textContent = new Date().getFullYear();
document.getElementById('year2')?.textContent = new Date().getFullYear();
document.getElementById('year3')?.textContent = new Date().getFullYear();
document.getElementById('year4')?.textContent = new Date().getFullYear();
document.getElementById('year5')?.textContent = new Date().getFullYear();
document.getElementById('year6')?.textContent = new Date().getFullYear();
document.getElementById('year7')?.textContent = new Date().getFullYear();

// Language toggle (applies to whole site)
function setupLangToggle(selector){
  document.querySelectorAll(selector).forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.body.classList.toggle('lang-ar');
      // persist
      localStorage.setItem('rg_lang_ar', document.body.classList.contains('lang-ar') ? '1' : '0');
    });
  });
}
setupLangToggle('#langToggle');
setupLangToggle('#langToggle2');
setupLangToggle('#langToggle3');
setupLangToggle('#langToggle4');
setupLangToggle('#langToggle5');
setupLangToggle('#langToggle6');
setupLangToggle('#langToggle7');

// persist language on load
if(localStorage.getItem('rg_lang_ar') === '1'){
  document.body.classList.add('lang-ar');
}

// Gallery lightbox
document.querySelectorAll('.gallery-click img').forEach(img=>{
  img.addEventListener('click', ()=>{
    const lb = document.getElementById('lightbox');
    const lbImg = document.getElementById('lbImg');
    if(!lb || !lbImg) return;
    lbImg.src = img.dataset.full || img.src;
    lb.style.display = 'flex';
    lb.setAttribute('aria-hidden','false');
  });
});
document.getElementById('lbClose')?.addEventListener('click', ()=>{
  const lb = document.getElementById('lightbox');
  if(lb){ lb.style.display='none'; lb.setAttribute('aria-hidden','true'); }
});

// Contact form (static) - show a friendly message
document.getElementById('contactForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thanks! Your message preview has been created. We will contact you shortly.');
  this.reset();
});

// Order form - prepare a summary and open WhatsApp or email
document.getElementById('orderForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  const data = new FormData(this);
  let summary = '*New Order Request*\n';
  for(const [k,v] of data.entries()){
    summary += `*${k}:* ${v}\n`;
  }
  // open WhatsApp with prefilled message (URL encoded)
  const wa = 'https://wa.me/96891451698?text=' + encodeURIComponent(summary);
  window.open(wa,'_blank');
});

// Order "Send via Email" button - opens user's mail client with prefilled body
document.getElementById('orderMailBtn')?.addEventListener('click', function(){
  const form = document.getElementById('orderForm');
  if(!form) return;
  const data = new FormData(form);
  let body = '';
  for(const [k,v] of data.entries()){
    body += `${k}: ${v}\n`;
  }
  const mailto = 'mailto:alamtasin18@gmail.com?subject=' + encodeURIComponent('New Order from Website') + '&body=' + encodeURIComponent(body);
  window.location.href = mailto;
});

// Measurement form - preview and send via WhatsApp
document.getElementById('measureForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  const data = new FormData(this);
  let summary = '*Measurement Details*\n';
  for(const [k,v] of data.entries()){
    summary += `${k}: ${v}\n`;
  }
  alert('Measurement saved (preview). You can send via WhatsApp button.');
});

// Send measurement via WhatsApp
document.getElementById('measureMailBtn')?.addEventListener('click', function(){
  const form = document.getElementById('measureForm');
  if(!form) return;
  const data = new FormData(form);
  let summary = '*Measurement Details*\n';
  for(const [k,v] of data.entries()){
    summary += `${k}: ${v}\n`;
  }
  const wa = 'https://wa.me/96891451698?text=' + encodeURIComponent(summary);
  window.open(wa,'_blank');
});

// Small enhancement: smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.length > 1){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth'});
    }
  });
});
