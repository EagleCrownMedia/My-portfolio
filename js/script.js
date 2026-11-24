:root {
  --ink: #150f0a;
  --card: #241a12;
  --line: #3d2e20;
  --paper: #f7f1e3;
  --mute: #c4b49c;
  --mk: #f2b31b;
  --ed: #d9642b;
  --wd: #8fc1d9;
  --r: 18px;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  scroll-behavior: smooth;
}
body {
  background: var(--ink);
  color: var(--paper);
  font:
    400 1.05rem/1.7 system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    Arial,
    sans-serif;
  overflow-x: hidden;
}
h1,
h2,
h3 {
  font-family:
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    Arial,
    sans-serif;
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.02em;
}
a {
  color: inherit;
}
:focus-visible {
  outline: 3px solid var(--mk);
  outline-offset: 3px;
}
.wrap {
  width: min(1120px, 92%);
  margin-inline: auto;
}
section {
  padding: 5rem 0;
}
/* header */
header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(21, 15, 10, 0.96);
  border-bottom: 1px solid var(--line);
}
header .wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}
.logo {
  font:
    700 1.1rem system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    Arial,
    sans-serif;
  text-decoration: none;
}
.logo i {
  font-style: normal;
  color: var(--ed);
}
nav ul {
  display: flex;
  gap: 0.4rem;
  list-style: none;
}
nav a {
  display: block;
  padding: 0.5rem 1rem;
  border-radius: 99px;
  text-decoration: none;
  color: var(--mute);
  font-weight: 600;
  transition: 0.2s;
}
nav a:hover,
nav a[aria-current] {
  background: var(--card);
  color: var(--paper);
}
#menu {
  display: none;
  background: none;
  border: 1px solid var(--line);
  color: var(--paper);
  padding: 0.5rem 0.9rem;
  border-radius: 10px;
  font: inherit;
  cursor: pointer;
}
/* hero */
.hero {
  padding: 6rem 0 4rem;
  position: relative;
  overflow-x: clip;
}
.hero:before {
  content: "";
  position: absolute;
  right: -8%;
  top: -10%;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(242, 179, 27, 0.3), rgba(217, 100, 43, 0.12) 50%, transparent 70%);
  z-index: -1;
}
.hero h1 {
  font-size: clamp(2.4rem, 7vw, 5.6rem);
  max-width: 15ch;
}
.hero h1 span {
  display: inline-block;
  opacity: 0;
  transform: translateY(40px) rotate(3deg);
  animation: pop 0.8s cubic-bezier(0.2, 0.9, 0.3, 1.2) forwards;
}
.hero h1 span:nth-child(2) {
  animation-delay: 0.12s;
}
.hero h1 span:nth-child(3) {
  animation-delay: 0.24s;
}
.hero h1 span:nth-child(4) {
  animation-delay: 0.36s;
}
.hero h1 span:nth-child(5) {
  animation-delay: 0.48s;
}
@keyframes pop {
  to {
    opacity: 1;
    transform: none;
  }
}
.mk {
  color: var(--mk);
}
.ed {
  color: var(--ed);
}
.wd {
  color: var(--wd);
}
.hero p {
  max-width: 56ch;
  color: var(--mute);
  margin: 1.6rem 0 2rem;
  font-size: 1.15rem;
}
.roles {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-bottom: 2rem;
}
.chip {
  padding: 0.45rem 1.1rem;
  border-radius: 99px;
  border: 1.5px solid currentColor;
  font-weight: 700;
  font-size: 0.95rem;
}
.btn {
  display: inline-block;
  padding: 0.9rem 1.8rem;
  border-radius: 99px;
  background: var(--paper);
  color: var(--ink);
  font-weight: 800;
  text-decoration: none;
  border: 0;
  font: inherit;
  font-weight: 800;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}
.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px -8px var(--mk);
}
.btn.ghost {
  background: none;
  color: var(--paper);
  border: 1.5px solid var(--line);
  margin-left: 0.6rem;
}
.marquee {
  overflow: hidden;
  border-block: 1px solid var(--line);
  padding: 1rem 0;
  margin-top: 3rem;
  font:
    700 1.4rem system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    Arial,
    sans-serif;
  color: var(--line);
  white-space: nowrap;
}
.marquee div {
  display: inline-block;
  animation: slide 28s linear infinite;
}
@keyframes slide {
  to {
    transform: translateX(-50%);
  }
}
/* cards */
h2 {
  font-size: clamp(1.8rem, 4vw, 3rem);
  margin-bottom: 1rem;
}
.lead {
  color: var(--mute);
  max-width: 60ch;
  margin-bottom: 2.5rem;
}
.grid {
  display: grid;
  gap: 1.4rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
.card {
  background: var(--card);
  border: 1px solid var(--line);
  border-top: 5px solid var(--c);
  border-radius: var(--r);
  padding: 2rem;
  transition: transform 0.25s;
}
.card:hover {
  transform: translateY(-6px) rotate(-0.6deg);
}
.card h3 {
  font-size: 1.3rem;
  color: var(--c);
  margin-bottom: 0.7rem;
}
.card ul {
  margin: 1rem 0 0 1.1rem;
  color: var(--mute);
}
.mkc {
  --c: var(--mk);
}
.edc {
  --c: var(--ed);
}
.wdc {
  --c: var(--wd);
}
.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  margin-top: 2rem;
}
.stats b {
  display: block;
  font:
    800 2.4rem system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    Arial,
    sans-serif;
  color: var(--mk);
}
.stats span {
  color: var(--mute);
}
.cta {
  background: linear-gradient(120deg, #f2b31b, #d9642b);
  color: var(--ink);
  border-radius: 28px;
  padding: 4rem 2rem;
  text-align: center;
}
.cta p {
  margin: 0 auto 1.8rem;
  max-width: 48ch;
}
/* pages */
.pagehead {
  padding: 5rem 0 1rem;
}
.pagehead h1 {
  font-size: clamp(2.2rem, 6vw, 4.4rem);
}
details {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 1.1rem 1.4rem;
  margin-bottom: 0.8rem;
}
summary {
  cursor: pointer;
  font-weight: 700;
}
details p {
  color: var(--mute);
  margin-top: 0.7rem;
}
.two {
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr 1fr;
  align-items: start;
}
.photo {
  aspect-ratio: 4/5;
  border-radius: var(--r);
  background: linear-gradient(160deg, var(--mk), var(--ed) 60%, #5a3418);
  color: var(--ink);
  display: grid;
  place-items: center;
  font:
    800 1.2rem system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    Arial,
    sans-serif;
  text-align: center;
  padding: 1rem;
}
.bar {
  margin: 1rem 0;
}
.bar p {
  display: flex;
  justify-content: space-between;
  font-weight: 700;
}
.bar div {
  height: 8px;
  background: var(--line);
  border-radius: 9px;
  margin-top: 0.3rem;
}
.bar i {
  display: block;
  height: 100%;
  border-radius: 9px;
  background: var(--c);
}
/* gallery */
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 2rem;
}
.filters button {
  background: none;
  border: 1.5px solid var(--line);
  color: var(--paper);
  padding: 0.5rem 1.2rem;
  border-radius: 99px;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}
.filters button.on {
  background: var(--paper);
  color: var(--ink);
}
.tiles {
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
.tile {
  position: relative;
  aspect-ratio: 1;
  border-radius: var(--r);
  overflow: hidden;
  background: linear-gradient(145deg, var(--c), var(--card));
  display: flex;
  align-items: flex-end;
  transition: transform 0.25s;
}
.tile:nth-child(3n) {
  aspect-ratio: 3/4;
}
.tile:hover {
  transform: scale(1.03);
}
.tile.hide {
  display: none;
}
.tile img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.tile figcaption {
  position: relative;
  width: 100%;
  padding: 1rem 1.2rem;
  background: linear-gradient(transparent, rgba(21, 15, 10, 0.9));
  font-weight: 700;
}
.tile small {
  display: block;
  color: var(--mute);
  font-weight: 400;
}
/* contact */
form {
  display: grid;
  gap: 1rem;
}
label {
  font-weight: 700;
  display: grid;
  gap: 0.4rem;
}
input,
select,
textarea {
  background: var(--card);
  border: 1.5px solid var(--line);
  border-radius: 12px;
  padding: 0.9rem 1rem;
  color: var(--paper);
  font: inherit;
}
input:focus,
select:focus,
textarea:focus {
  border-color: var(--wd);
  outline: 0;
}
#note {
  color: var(--wd);
  font-weight: 700;
  min-height: 1.5rem;
}
.info a {
  color: var(--mk);
}
footer {
  border-top: 1px solid var(--line);
  padding: 2.5rem 0;
  color: var(--mute);
}
footer .wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
}
@media (max-width: 760px) {
  #menu {
    display: block;
  }
  nav ul {
    display: none;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background: var(--ink);
    flex-direction: column;
    padding: 1rem 4%;
    border-bottom: 1px solid var(--line);
  }
  nav ul.open {
    display: flex;
  }
  .two {
    grid-template-columns: 1fr;
  }
  .btn.ghost {
    margin: 0.8rem 0 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
  .hero h1 span {
    opacity: 1;
    transform: none;
  }
}
/* ===== ACTION UI ===== */
#bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  width: 100%;
  background: linear-gradient(90deg, var(--mk), var(--ed));
  transform-origin: 0 50%;
  transform: scaleX(0);
  z-index: 50;
}
body {
  animation: fin 0.5s;
}
@keyframes fin {
  from {
    opacity: 0;
  }
}
body.out {
  opacity: 0;
  transition: opacity 0.22s;
}
header {
  transition: transform 0.35s;
}
header.gone {
  transform: translateY(-100%);
}
.glow {
  position: fixed;
  left: -210px;
  top: -210px;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(circle, rgba(242, 179, 27, 0.14), transparent 65%);
  z-index: -1;
  will-change: transform;
}
.rv {
  opacity: 0;
  transform: translateY(38px);
  transition:
    opacity 0.7s,
    transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  transition-delay: var(--d, 0s);
}
.rv.in {
  opacity: 1;
  transform: none;
}
.chip {
  transition:
    background 0.35s,
    color 0.35s,
    transform 0.35s;
}
.chip.mk.on {
  background: var(--mk);
  color: var(--ink);
  transform: scale(1.08);
}
.chip.ed.on {
  background: var(--ed);
  color: var(--ink);
  transform: scale(1.08);
}
.chip.wd.on {
  background: var(--wd);
  color: var(--ink);
  transform: scale(1.08);
}
.marquee:hover div {
  animation-play-state: paused;
}
.bar i {
  transition: width 1.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.tile {
  animation: tin 0.45s cubic-bezier(0.2, 0.9, 0.3, 1.2) backwards;
}
@keyframes tin {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
}
.tile[data-cat="video"]:after {
  content: "\25B6";
  position: absolute;
  top: 42%;
  left: 50%;
  width: 64px;
  height: 64px;
  margin: -32px 0 0 -32px;
  border-radius: 50%;
  background: rgba(21, 15, 10, 0.6);
  border: 2px solid var(--paper);
  display: grid;
  place-items: center;
  padding-left: 4px;
  transition: transform 0.3s;
}
.tile[data-cat="video"]:hover:after {
  transform: scale(1.25);
}
.card,
.tile,
.photo {
  transform-style: preserve-3d;
}
.btn {
  will-change: transform;
}
.card h3:after {
  content: " \2192";
  opacity: 0;
  display: inline-block;
  transform: translateX(-8px);
  transition: 0.3s;
}
.card:hover h3:after {
  opacity: 1;
  transform: none;
}

/* footer links */
footer .wrap {
  display: block;
}
.fgrid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
  margin-bottom: 2rem;
}
footer h3 {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--mk);
  margin-bottom: 0.9rem;
}
footer p {
  margin-top: 0.8rem;
  max-width: 34ch;
}
.fl {
  list-style: none;
}
.fl li {
  margin-bottom: 0.5rem;
}
.fl a,
.fbot a {
  text-decoration: none;
  position: relative;
  transition: color 0.2s;
}
.fl a:hover,
.fbot a:hover {
  color: var(--mk);
}
.fl a:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  height: 2px;
  width: 0;
  background: var(--mk);
  transition: width 0.3s;
}
.fl a:hover:after {
  width: 100%;
}
.fbot {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  border-top: 1px solid var(--line);
  padding-top: 1.5rem;
}
.fbot p {
  margin: 0;
  max-width: none;
}
@media (max-width: 760px) {
  .fgrid {
    grid-template-columns: 1fr 1fr;
  }
  .fgrid > div:first-child {
    grid-column: 1/-1;
  }
}
