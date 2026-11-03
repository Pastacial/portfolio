const S = SITE, $ = (s, r = document) => r.querySelector(s), pg = document.body.dataset.page;
const md = s => s.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
const ph = s => s.startsWith("[") ? `<span class="ph">${md(s)}</span>` : md(s);
window.fb = i => { const d = document.createElement("div"); d.className = "ph-img " + i.className; d.textContent = i.alt; i.replaceWith(d); };
const img = (src, alt, c = "") => `<img src="${src}" alt="${alt}" class="${c}" onerror="fb(this)">`;
const ico = {
  mail: '<path d="M3 6h18v12H3zM3 7l9 7 9-7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
  linkedin: '<path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.67-1.2 2.3-2.5 4.7-2.5 5 0 5.9 3.3 5.9 7.6V24h-5V16c0-1.9-.03-4.3-2.7-4.3-2.7 0-3.1 2.1-3.1 4.2V24h-5V8z"/>', github: '<path d="M12 .5C5.7.5.5 5.77.5 12.2c0 5.18 3.44 9.57 8.2 11.12.6.1.82-.26.82-.58v-2.02c-3.34.74-4.04-1.64-4.04-1.64-.54-1.4-1.32-1.78-1.32-1.78-1.1-.78.08-.76.08-.76 1.22.1 1.86 1.26 1.86 1.26 1.08 1.9 2.82 1.35 3.5 1.03.1-.8.42-1.35.75-1.66-2.66-.31-5.46-1.36-5.46-6.06 0-1.34.46-2.44 1.22-3.3-.12-.32-.53-1.57.12-3.27 0 0 1-.33 3.3 1.25a11.3 11.3 0 0 1 6 0c2.28-1.58 3.28-1.25 3.28-1.25.66 1.7.25 2.95.12 3.27.76.86 1.22 1.96 1.22 3.3 0 4.72-2.8 5.75-5.48 6.06.44.38.82 1.1.82 2.24v3.32c0 .34.2.7.82.58 4.76-1.55 8.2-5.94 8.2-11.12C23.5 5.77 18.3.5 12 .5z"/>'
};
const PAGES = [["index", "Home"], ["experience", "Experience"], ["projects", "Projects"], ["certifications", "Certifications"], ["activities", "Activities"]];
const i = PAGES.findIndex(p => p[0] == pg);
const list = a => `<ul>${a.map(p => `<li>${ph(p)}</li>`).join("")}</ul>`;

const R = {
  index: () => `<section class="landing"><div class="photo">${img(S.photo, S.initials)}</div><div>
    <p class="role">${S.role}</p><h1>${S.name}</h1><p class="lead">${S.intro}</p>
    <div class="row"><a class="btn" href="experience.html">See my experience</a>
    <a class="btn ghost" href="${S.cv}" download><svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 3v12m0 0-5-5m5 5 5-5M5 19h14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>Download CV</a></div></div></section>`,

  experience: () => `<h1 class="title">Experience</h1><div class="grid wide">${S.experience.map(e => `<article class="card exp">
    <span class="date">${e.dates}</span><h2>${e.title}</h2><p class="org">${e.org}</p>${list(e.points)}${e.more ? `<a class="more" href="${e.more[0]}">${e.more[1]}</a>` : ""}</article>`).join("")}</div>
    <h2 class="sub">Education</h2><div class="grid">${S.education.map(e => `<article class="card"><span class="date">${e.dates}</span><h3>${e.title}</h3><p class="org">${e.org}</p></article>`).join("")}</div>
    <h2 class="sub">Skills</h2><div class="grid">${S.skills.map(k => `<div class="card"><h3>${k[0]}</h3><p class="org">${k[1]}</p></div>`).join("")}</div>`,

  projects: () => `<h1 class="title">Projects</h1><div class="grid">${S.projects.map((p, n) => `<div class="flip" tabindex="0"><div class="inner">
    <div class="front"><h2>${p.title}</h2><div><span class="tag">${ph(p.tag)}</span><small>Hover or tap to flip</small></div></div>
    <div class="back">${list(p.bullets)}<div class="row"><button class="btn sm" data-p="${n}">Full story</button>${p.links.filter(l => l.url).map(l => `<a class="btn ghost sm" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join("")}</div></div></div></div>`).join("")}</div><dialog id="dlg"></dialog>`,

  certifications: () => {
    const c = S.certs, card = x => `<div class="cert" style="--c:${x.color}">${img("assets/certs/" + x.id + ".png", x.name.replace(/\W/g, "")[0], "badge")}<div><b>${ph(x.name)}</b><small>${ph(x.issuer)}</small><small>${x.date}</small></div></div>`;
    return `<div class="head"><h1 class="title">Certifications</h1>${c.profile ? `<a class="btn ghost sm" href="${c.profile}" target="_blank" rel="noopener">${c.profileLabel}</a>` : ""}</div>
    <div class="cards">${c.done.map(card).join("")}</div><h2 class="sub">In progress</h2><div class="cards">${c.progress.map(card).join("")}</div>`;
  },

  activities: () => `<h1 class="title">Activities</h1><div class="grid">${S.activities.map(a => `<article class="card act">${img("assets/activities/" + a.id + ".jpg", "Add photo: assets/activities/" + a.id + ".jpg", "cover")}<h2>${ph(a.title)}</h2><p>${ph(a.text)}</p></article>`).join("")}</div>`,

  developer: () => `<h1 class="title">Developer mode</h1><div class="term"><div class="thead">${S.name.split(" ")[0].toLowerCase()}@portfolio</div><div id="out"></div><label class="inp">$<input id="in" autocomplete="off" spellcheck="false" placeholder="try: help"></label></div>`
};

function projectUI() {
  const dlg = $("#dlg");
  document.querySelectorAll(".flip").forEach(f => f.onclick = () => matchMedia("(hover:none)").matches && f.classList.toggle("on"));
  document.querySelectorAll("[data-p]").forEach(b => b.onclick = e => {
    e.stopPropagation(); const p = S.projects[b.dataset.p], f = "assets/projects/" + p.id + ".png";
    dlg.innerHTML = `<button class="x" aria-label="Close">×</button><span class="tag">${ph(p.tag)}</span><h2>${p.title}</h2>${img(f, "Add a screenshot or diagram: " + f, "shot")}
      ${[["The problem", p.problem], ["What I built", p.approach], ["Result", p.result]].map(([h, t]) => `<h3>${h}</h3><p>${ph(t)}</p>`).join("")}
      <h3>Stack</h3><div class="chips">${p.stack.map(s => `<span class="chip">${ph(s)}</span>`).join("")}</div>`;
    dlg.showModal(); $(".x", dlg).onclick = () => dlg.close();
  });
  dlg.onclick = e => e.target == dlg && dlg.close();
}

function terminal() {
  const out = $("#out"), inp = $("#in"), say = h => { out.insertAdjacentHTML("beforeend", `<p>${h}</p>`); out.scrollTop = out.scrollHeight; };
  const C = {
    about: () => S.intro, ls: () => "about  skills  projects  contact  flag.txt",
    skills: () => S.skills.map(k => `<b>${k[0]}</b>: ${k[1]}`).join("<br>"),
    projects: () => S.projects.map(p => "- " + p.title).join("<br>"),
    contact: () => `${S.email}<br>${S.linkedin}`, "cat flag.txt": () => S.terminal.flag,
    clear: () => { out.innerHTML = ""; return ""; }
  };
  C.help = () => "commands: " + Object.keys(C).join(", ");
  say(S.terminal.welcome);
  inp.onkeydown = e => { if (e.key != "Enter") return; const v = inp.value.trim(); inp.value = ""; if (v) say("$ " + v); const f = C[v], r = f ? f() : v && `command not found: ${v}`; if (r) say(r); };
  inp.focus();
}

document.title = (i > 0 ? PAGES[i][0][0].toUpperCase() + PAGES[i][0].slice(1) + " | " : "") + S.name;
$("#app").innerHTML = R[pg]();
if (pg == "projects") projectUI();
if (pg == "developer") terminal();

const b = document.body, arrow = d => `<svg viewBox="0 0 24 24"><path d="${d}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
if (i >= 0) {
  const P = PAGES[(i + 4) % 5], N = PAGES[(i + 1) % 5];
  b.insertAdjacentHTML("beforeend", `<i class="bar" style="width:${(i + 1) * 20}%"></i>
    <a class="side l" href="${P[0]}.html" aria-label="${P[1]}">${arrow("M19 12H5m6-6-6 6 6 6")}<span>${P[1]}</span></a>
    <a class="side r" href="${N[0]}.html" aria-label="${N[1]}"><span>${N[1]}</span>${arrow("M5 12h14m-6-6 6 6-6 6")}</a>`);
  if (i == 0) b.insertAdjacentHTML("beforeend", `<a class="corner" href="developer.html">Developer mode</a>`);
  else b.insertAdjacentHTML("beforeend", `<a class="brand" href="index.html">${S.initials}</a>`);
  let x0, y0; const go = k => location.href = k[0] + ".html", open = () => $("dialog[open]");
  addEventListener("touchstart", e => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
  addEventListener("touchend", e => { const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0; if (!open() && Math.abs(dx) > 80 && Math.abs(dx) > 2 * Math.abs(dy)) go(dx < 0 ? N : P); });
  addEventListener("keydown", e => { if (open() || e.target.tagName == "INPUT") return; if (e.key == "ArrowRight") go(N); if (e.key == "ArrowLeft") go(P); });
} else b.insertAdjacentHTML("beforeend", `<a class="brand" href="index.html">Back to portfolio</a>`);

b.insertAdjacentHTML("beforeend", `<footer>${[["mail", "mailto:" + S.email], ["linkedin", S.linkedin], ["github", S.github]].filter(x => x[1]).map(([k, u]) => `<a href="${u}" target="_blank" rel="noopener" aria-label="${k}"><svg viewBox="0 0 24 24" fill="currentColor">${ico[k]}</svg></a>`).join("")}<p>© ${new Date().getFullYear()} ${S.name}</p></footer>`);
