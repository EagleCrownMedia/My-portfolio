const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
$("#menu")?.addEventListener("click", (e) => {
  const u = $("nav ul"),
    o = u.classList.toggle("open");
  e.currentTarget.setAttribute("aria-expanded", o);
});
$$(".filters button").forEach((b) =>
  b.addEventListener("click", () => {
    $$(".filters button").forEach((x) => x.classList.remove("on"));
    b.classList.add("on");
    $$(".tile").forEach((t) =>
      t.classList.toggle("hide", b.dataset.f !== "all" && t.dataset.cat !== b.dataset.f),
    );
  }),
);
$("#contact-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const msg = `Hi Suryanarayanan, I'm ${f.get("name")}.\nService: ${f.get("service")}\n\n${f.get("message")}`;
  $("#note").textContent = "Opening WhatsApp… thank you!";
  window.open(`https://wa.me/919363745549?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
});
// close mobile menu on link tap / Escape
const closeMenu = () => {
  $("nav ul")?.classList.remove("open");
  $("#menu")?.setAttribute("aria-expanded", "false");
};
$$("nav a").forEach((a) => a.addEventListener("click", closeMenu));
addEventListener("keydown", (e) => e.key === "Escape" && closeMenu());
$$(".yr").forEach((y) => (y.textContent = new Date().getFullYear()));
(() => {
  const rm = matchMedia("(prefers-reduced-motion:reduce)").matches,
    fine = matchMedia("(pointer:fine)").matches;
  const bar = document.body.appendChild(Object.assign(document.createElement("div"), { id: "bar" }));
  const hd = $("header");
  let ly = 0;
  addEventListener(
    "scroll",
    () => {
      const y = scrollY,
        h = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = "scaleX(" + (h > 0 ? y / h : 0) + ")";
      hd.classList.toggle("gone", y > ly && y > 200 && !$("nav ul.open"));
      ly = y;
    },
    { passive: true },
  );
  if (!rm) {
    const cnt = (el) => {
      const m = el.dataset.v.match(/^(\d+)(.*)$/);
      if (!m) return;
      const n = +m[1];
      let t0;
      const f = (t) => {
        t0 = t0 || t;
        const p = Math.min((t - t0) / 1500, 1);
        el.textContent = Math.round(n * (1 - Math.pow(1 - p, 3))) + m[2];
        if (p < 1) requestAnimationFrame(f);
      };
      requestAnimationFrame(f);
    };
    $$(".stats b").forEach((b) => {
      b.dataset.v = b.textContent;
      b.textContent = "0";
    });
    $$(".bar i").forEach((i) => {
      i.dataset.w = i.style.width;
      i.style.width = "0";
    });
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          io.unobserve(el);
          el.classList.add("in");
          el.querySelectorAll("b").forEach(cnt);
          el.querySelectorAll(".bar i").forEach((i) => (i.style.width = i.dataset.w));
          if (el.matches(".bar")) el.querySelector("i").style.width = el.querySelector("i").dataset.w;
          if (el.matches(".stats>div")) cnt(el.querySelector("b"));
          setTimeout(() => el.classList.remove("rv", "in"), 1100);
        }),
      { threshold: 0.15 },
    );
    $$(".card,details,.stats>div,h2,.lead,.bar,.photo,.cta,.info,form,.filters").forEach((el, i) => {
      el.classList.add("rv");
      el.style.setProperty("--d", (i % 4) * 0.09 + "s");
      io.observe(el);
    });
    const ch = $$(".chip");
    if (ch.length) {
      let k = 0;
      const go = () => {
        ch.forEach((c, j) => c.classList.toggle("on", j === k));
        k = (k + 1) % ch.length;
      };
      go();
      setInterval(go, 1800);
    }
  }
  if (fine && !rm) {
    const g = document.body.appendChild(Object.assign(document.createElement("div"), { className: "glow" }));
    let gx = 0,
      gy = 0,
      tx = innerWidth / 2,
      ty = 200;
    addEventListener(
      "pointermove",
      (e) => {
        tx = e.clientX;
        ty = e.clientY;
      },
      { passive: true },
    );
    (function a() {
      gx += (tx - gx) * 0.12;
      gy += (ty - gy) * 0.12;
      g.style.transform = "translate(" + gx + "px," + gy + "px)";
      requestAnimationFrame(a);
    })();
    $$(".card,.tile,.photo").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect(),
          x = (e.clientX - r.left) / r.width - 0.5,
          y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform =
          "perspective(800px) rotateY(" + x * 10 + "deg) rotateX(" + -y * 10 + "deg) translateY(-6px)";
      });
      el.addEventListener("pointerleave", () => (el.style.transform = ""));
    });
    $$(".btn").forEach((b) => {
      b.addEventListener("pointermove", (e) => {
        const r = b.getBoundingClientRect();
        b.style.transform =
          "translate(" +
          (e.clientX - r.left - r.width / 2) * 0.25 +
          "px," +
          (e.clientY - r.top - r.height / 2) * 0.35 +
          "px)";
      });
      b.addEventListener("pointerleave", () => (b.style.transform = ""));
    });
  }
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href]");
    if (
      !a ||
      a.target ||
      e.metaKey ||
      e.ctrlKey ||
      a.protocol !== location.protocol ||
      a.host !== location.host ||
      a.pathname === location.pathname
    )
      return;
    e.preventDefault();
    document.body.classList.add("out");
    setTimeout(() => (location.href = a.href), 220);
  });
  addEventListener("pageshow", () => document.body.classList.remove("out"));
})();
