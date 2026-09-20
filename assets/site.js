(async function(){
  try {
    const data = await fetch('/content/site.json', {cache:'no-store'}).then(r=>r.json());
    const sg = document.getElementById('service-grid');
    if(sg) sg.innerHTML = data.services.map(s => `<article class="service-card"><div class="tag">${s.tag}</div><h3>${s.title}</h3><p>${s.text}</p><ul>${s.items.map(x=>`<li>${x}</li>`).join('')}</ul></article>`).join('');
    const ig = document.getElementById('insight-grid');
    if(ig) ig.innerHTML = data.insights.map(i => `<article class="insight"><div class="tag">${i.category}</div><h3>${i.title}</h3><p>${i.text}</p></article>`).join('');
  } catch(e) { console.warn('Content file could not be loaded', e); }
  const btn=document.querySelector('.menu'), nav=document.getElementById('nav');
  btn?.addEventListener('click',()=>nav.classList.toggle('open'));
  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
})();
