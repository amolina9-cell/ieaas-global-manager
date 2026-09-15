interface Env {
  ASSETS: Fetcher;
}

const landing = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Global Manager Consulting | International Growth Services</title>
<meta name="description" content="Build your international markets without building a full-time international operation. Global Manager provides an external international team for companies expanding across borders.">
<style>
:root{--ink:#123b3d;--ink2:#0a2c2d;--cream:#f7f4ed;--paper:#fffdf8;--muted:#667474;--line:#d9ddd7;--accent:#1c6866}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:var(--ink2);background:var(--cream);line-height:1.5}a{color:inherit;text-decoration:none}.wrap{max-width:1180px;margin:auto;padding:0 28px}
header{position:sticky;top:0;z-index:10;background:rgba(247,244,237,.94);backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}
.nav{height:76px;display:flex;align-items:center;justify-content:space-between}.brand{font-weight:800;letter-spacing:-.04em;font-size:21px}.brand span{font-weight:500;color:var(--accent);margin-left:8px}.links{display:flex;gap:30px;font-size:14px;color:#425354}.links a:hover{color:var(--accent)}
.hero{padding:110px 0 105px;background:var(--paper)}.eyebrow{font-size:13px;letter-spacing:.19em;text-transform:uppercase;color:var(--accent);font-weight:700;margin-bottom:24px}.hero h1{font-size:clamp(48px,7vw,88px);line-height:.98;letter-spacing:-.065em;max-width:950px;margin:0 0 30px;color:var(--ink2)}.hero p{font-size:22px;line-height:1.4;max-width:700px;color:#526263;margin:0 0 38px}.buttons{display:flex;gap:12px;flex-wrap:wrap}.btn{display:inline-block;padding:15px 22px;border-radius:3px;background:var(--ink);color:white;font-weight:700}.btn.alt{background:transparent;color:var(--ink);border:1px solid #9ca9a6}
section{padding:90px 0}.section-head{max-width:760px;margin-bottom:48px}.section-head h2{font-size:clamp(34px,5vw,58px);line-height:1.02;letter-spacing:-.045em;margin:0 0 18px}.section-head p{font-size:19px;color:var(--muted);margin:0}
.cards{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}.card{background:var(--paper);border:1px solid var(--line);padding:34px;min-height:220px}.card h3{font-size:25px;letter-spacing:-.025em;margin:0 0 12px}.card p{color:#596767;margin:0}.card .tag{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);font-weight:700;margin-bottom:22px}
.dark{background:var(--ink);color:#f5f5ee}.dark .section-head p{color:#c5d0cd}.dark .card{background:#16484a;border-color:#356466}.dark .card p{color:#d2dcda}.dark .card h3{color:#fff}
.split{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:start}.split h2{font-size:clamp(36px,5vw,62px);line-height:1;letter-spacing:-.05em;margin:0}.split p{font-size:18px;color:#586767}.list{border-top:1px solid var(--line)}.item{padding:23px 0;border-bottom:1px solid var(--line)}.item strong{display:block;font-size:20px;margin-bottom:5px}.item span{color:#687575}
.cta{background:#dfe9e2;padding:90px 0}.cta h2{font-size:clamp(38px,5vw,62px);line-height:1;letter-spacing:-.05em;margin:0 0 18px;max-width:850px}.cta p{font-size:20px;color:#526160;max-width:700px}
footer{padding:38px 0;border-top:1px solid var(--line);font-size:14px;color:#61706f}.foot{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap}
@media(max-width:760px){.links{display:none}.hero{padding:80px 0}.cards,.split{grid-template-columns:1fr}.split{gap:35px}section{padding:65px 0}.hero p{font-size:19px}}
</style>
</head>
<body>
<header><div class="wrap nav"><a class="brand" href="/">GLOBAL MANAGER<span>/ International Growth</span></a><nav class="links"><a href="#services">How we help</a><a href="/ieaas/">IEaaS™</a><a href="#multicultural">Multicultural management</a><a href="#contact">Contact</a></nav></div></header>

<main>
<section class="hero"><div class="wrap">
<div class="eyebrow">International Growth Services</div>
<h1>Build your international markets without building a full-time international operation.</h1>
<p>Your external international team. No matter your stage.</p>
<div class="buttons"><a class="btn" href="/ieaas/">Explore IEaaS™</a><a class="btn alt" href="#contact">Let's explore how we can help</a></div>
</div></section>

<section id="services"><div class="wrap">
<div class="section-head"><div class="eyebrow">Your external international team</div><h2>One partner for the capability you need now.</h2><p>Whether you are building international capability or already operating across borders, Global Manager combines international business execution with multicultural management.</p></div>
<div class="cards">
<article class="card"><div class="tag">Building international capability?</div><h3>IEaaS™</h3><p>Build and operate your internationalization capability without building a full-time international operation. Strategy, readiness, market activation and executive coordination in one external function.</p><p style="margin-top:22px"><a class="btn" href="/ieaas/">Learn more about IEaaS™</a></p></article>
<article class="card"><div class="tag">Already international?</div><h3>Leadership, culture and execution</h3><p>Align multicultural teams, navigate intercultural negotiations and remove the organizational friction that slows international execution.</p><p style="margin-top:22px"><a class="btn alt" href="#multicultural">Explore the capabilities</a></p></article>
</div></div></section>

<section class="dark" id="multicultural"><div class="wrap">
<div class="split"><div><div class="eyebrow" style="color:#9fd2ca">Multicultural management</div><h2>Turn cultural differences into execution capacity.</h2></div>
<div class="list" style="border-color:#356466">
<div class="item"><strong>Manage tensions within teams</strong><span>Identify and resolve intercultural friction before it becomes an execution problem.</span></div>
<div class="item"><strong>Unblock revenue</strong><span>Improve the way international teams, customers, partners and suppliers negotiate and work together.</span></div>
<div class="item"><strong>Be the right leader</strong><span>Develop the capabilities required to lead multicultural, intergenerational and interdisciplinary teams.</span></div>
</div></div></div></section>

<section><div class="wrap"><div class="section-head"><div class="eyebrow">What we work on</div><h2>International growth is not only a market question.</h2><p>It is a strategy, capability, commercial, organizational and cultural execution question.</p></div>
<div class="cards">
<div class="card"><h3>Internationalization</h3><p>Market entry, international business strategy, readiness, commercial activation and the operating model required to turn international ambition into execution.</p></div>
<div class="card"><h3>Intercultural negotiation</h3><p>Prepare leaders and teams to negotiate across cultural contexts with customers, suppliers, partners, employees and other stakeholders.</p></div>
<div class="card"><h3>Multicultural teams</h3><p>Build common ways of working without erasing the cultural differences that can create value.</p></div>
<div class="card"><h3>Cultural alignment</h3><p>Support organizations facing international expansion, integration, organizational change and cross-border collaboration.</p></div>
</div></div></section>

<section class="cta" id="contact"><div class="wrap"><div class="eyebrow">Let's talk</div><h2>Let's explore how much we can help boost your company's international growth.</h2><p>Tell us where you are today and what you are trying to achieve.</p><div class="buttons"><a class="btn" href="mailto:amolina@globalmanager.co">Contact Global Manager</a><a class="btn alt" href="/ieaas/">Take the IEaaS™ diagnostic</a></div></div></section>
</main>

<footer><div class="wrap foot"><div><strong>Global Manager Consulting</strong></div><div>amolina@globalmanager.co</div><div><a href="/ieaas/">IEaaS™</a></div></div></footer>
</body></html>`;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/" || url.pathname === "") {
      return new Response(landing, {
        headers: {
          "content-type": "text/html; charset=UTF-8",
          "cache-control": "public, max-age=300"
        }
      });
    }
    return env.ASSETS.fetch(request);
  }
};
