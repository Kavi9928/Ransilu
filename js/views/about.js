/**
 * Ransilu — About View
 */
window.AboutView = function () {
    return `
<section class="about-hero">
    <div class="about-hero-bg"></div>
    <div class="container hero-shell about-hero-shell">
        <div class="eyebrow sr">Est. 2011</div>
        <h1 class="hero-title sr sr-d1">ABOUT<br>RANSILU</h1>
        <div class="hero-subtitle sr sr-d2">Entertainment with identity, craft, and purpose.</div>
        <p class="hero-desc sr sr-d2">Ransilu brings together music, radio, teledramas, cartoons, and creative talent under one Sri Lankan entertainment network built for audiences at home and abroad.</p>

        <div class="hero-cta-row sr sr-d2">
            <a href="#/teledrama" class="hero-cta-btn cta-primary"><i class="ph-fill ph-television"></i> Explore Teledramas</a>
            <a href="#/cartoon" class="hero-cta-btn cta-outline"><i class="ph-fill ph-smiley"></i> View Cartoons</a>
        </div>
    </div>
</section>

<section class="about-section">
    <div class="container">
        <div class="about-block">
            <div class="about-copy sr from-l">
                <div class="eyebrow">Company Overview</div>
                <h2>OUR <span>COMPANY</span></h2>
                <div class="neon-line"></div>
                <p>Ransilu is a Sri Lankan entertainment brand focused on high-quality storytelling, music publishing, live radio, and digital content distribution. The company was built to support local creativity and deliver a modern viewing and listening experience.</p>
                <p>From production to presentation, we aim to keep every project grounded in local culture while giving it a polished, international standard.</p>
            </div>
            <div class="about-media sr from-r">
                <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1000&auto=format&fit=crop" alt="Ransilu company overview">
            </div>
        </div>
    </div>
</section>

<section class="about-section about-section-alt">
    <div class="container">
        <div class="section-heading sr">
            <div class="eyebrow">Mission And Vision</div>
            <h2>WHAT DRIVES <span>RANSILU</span></h2>
            <p>Our direction is simple: empower creators and build beloved entertainment that lasts.</p>
        </div>

        <div class="mv-grid">
            <article class="mv-card sr sr-d1">
                <div class="mv-icon"><i class="ph ph-target"></i></div>
                <h3>Mission</h3>
                <p>To create and distribute original Sri Lankan entertainment that supports talent, engages families, and sets a consistent production standard across music, drama, radio, and animation.</p>
            </article>
            <article class="mv-card sr sr-d2">
                <div class="mv-icon"><i class="ph ph-eye"></i></div>
                <h3>Vision</h3>
                <p>To become a trusted entertainment network that represents Sri Lankan stories globally while remaining accessible, creative, and culturally rooted.</p>
            </article>
        </div>
    </div>
</section>

<section class="about-section">
    <div class="container">
        <div class="section-heading sr">
            <div class="eyebrow">Achievements</div>
            <h2>OUR <span>MILESTONES</span></h2>
            <p>A timeline of the key moments that shaped Ransilu into the entertainment network it is today.</p>
        </div>

        <div class="achievements-timeline">
            <div class="timeline-line"></div>

            <article class="timeline-item timeline-left sr">
                <div class="timeline-year">2011</div>
                <div class="timeline-card timeline-card-orange">
                    <div class="timeline-title">Ransilu Founded</div>
                    <p>The company started with a vision to create a Sri Lankan media platform for music, stories, and culture.</p>
                </div>
                <div class="timeline-dot dot-orange"><i class="ph ph-house"></i></div>
            </article>

            <article class="timeline-item timeline-right sr sr-d1">
                <div class="timeline-dot dot-red"><i class="ph ph-magnifying-glass"></i></div>
                <div class="timeline-card timeline-card-red">
                    <div class="timeline-title">Record Label Growth</div>
                    <p>Ransilu expanded into music production and publishing, supporting new voices and original releases.</p>
                </div>
                <div class="timeline-year">2015</div>
            </article>

            <article class="timeline-item timeline-left sr sr-d2">
                <div class="timeline-year">2016</div>
                <div class="timeline-card timeline-card-pink">
                    <div class="timeline-title">Teledrama Productions</div>
                    <p>The network began developing original drama projects that connected with family audiences across Sri Lanka.</p>
                </div>
                <div class="timeline-dot dot-pink"><i class="ph ph-television"></i></div>
            </article>

            <article class="timeline-item timeline-right sr sr-d3">
                <div class="timeline-dot dot-green"><i class="ph ph-calendar"></i></div>
                <div class="timeline-card timeline-card-green">
                    <div class="timeline-title">24/7 Web Radio</div>
                    <p>Continuous radio programming helped the brand reach listeners in Sri Lanka and around the world.</p>
                </div>
                <div class="timeline-year">2019</div>
            </article>

            <article class="timeline-item timeline-left sr sr-d4">
                <div class="timeline-year">2026</div>
                <div class="timeline-card timeline-card-blue">
                    <div class="timeline-title">Multi-Platform Expansion</div>
                    <p>Ransilu now connects music, teledramas, cartoons, dubbing talent, and live media under one growing ecosystem.</p>
                </div>
                <div class="timeline-dot dot-blue"><i class="ph ph-chart-bar"></i></div>
            </article>
        </div>
    </div>
</section>

<section class="about-section about-thanks">
    <div class="container">
        <div class="thanks-panel sr">
            <div class="eyebrow">Thank You</div>
            <h2>THANK YOU FOR BEING WITH US</h2>
            <p>Every stream, every play, and every view helps Ransilu keep building stories for the future. We appreciate the support and invite you to stay with us for what comes next.</p>
            <div class="hero-cta-row">
                <a href="#/home" class="hero-cta-btn cta-primary"><i class="ph-fill ph-house"></i> Back Home</a>
                <a href="./radio/" class="hero-cta-btn cta-outline"><i class="ph-fill ph-broadcast"></i> Listen Live</a>
            </div>
        </div>
    </div>
</section>

<style>
.about-hero{position:relative;padding:calc(var(--nav-h) + 4rem) 0 5rem;overflow:hidden;}
.about-hero-bg{position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,.72) 0%,rgba(255,255,255,.95) 60%,#fff 100%),url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1800&auto=format&fit=crop') center/cover no-repeat;}
.about-hero-shell{position:relative;z-index:1;max-width:980px;}
.about-hero-shell .hero-title{font-size:clamp(4rem,10vw,8.8rem);line-height:.84;max-width:8ch;}
.about-hero-shell .hero-desc{max-width:760px;}

.about-section{padding:4rem 0;background:#fff;}
.about-section-alt{background:linear-gradient(180deg,#f8fafc 0%,#fff 100%);border-top:1px solid var(--border);border-bottom:1px solid var(--border);}
.about-block{display:grid;grid-template-columns:1.05fr .95fr;gap:4rem;align-items:center;}
.about-copy h2,.section-heading h2,.thanks-panel h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.4rem,5vw,4.5rem);letter-spacing:2px;line-height:.95;color:var(--text);}
.about-copy h2 span,.section-heading h2 span{color:var(--primary);}
.about-copy p,.section-heading p,.thanks-panel p{color:var(--muted);line-height:1.85;font-size:1.02rem;}
.neon-line{width:110px;height:3px;border-radius:999px;background:linear-gradient(90deg,var(--primary),transparent);margin:1rem 0 1.5rem;}
.about-media{overflow:hidden;border-radius:var(--radius-lg);box-shadow:15px 15px 0 var(--primary-subtle);min-height:420px;}
.about-media img{width:100%;height:100%;object-fit:cover;display:block;}

.section-heading{text-align:center;max-width:760px;margin:0 auto 2.5rem;}

.mv-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.5rem;}
.mv-card{background:var(--bg-card);border:1px solid var(--border);border-radius:18px;padding:2rem;box-shadow:0 12px 28px rgba(2,6,23,.06);}
.mv-icon{width:54px;height:54px;border-radius:50%;background:var(--primary-subtle);display:grid;place-items:center;color:var(--primary);font-size:1.4rem;margin-bottom:1rem;}
.mv-card h3{font-family:'Bebas Neue',sans-serif;font-size:2rem;letter-spacing:1px;margin-bottom:.8rem;color:var(--text);}
.mv-card p{color:var(--muted);line-height:1.85;}

.achievements-timeline{position:relative;max-width:980px;margin:0 auto;padding:1rem 0 0;}
.timeline-line{position:absolute;left:50%;top:0;bottom:0;width:22px;transform:translateX(-50%);border-radius:999px;background:linear-gradient(180deg,#f59e0b 0%,#fb7185 22%,#c084fc 44%,#84cc16 67%,#38bdf8 100%);box-shadow:0 0 0 8px rgba(15,23,42,.02);}
.timeline-item{position:relative;display:grid;grid-template-columns:1fr 92px 1fr;align-items:center;min-height:210px;margin:0 0 .75rem;}
.timeline-left .timeline-year{grid-column:1;justify-self:end;padding-right:2rem;}
.timeline-left .timeline-card{grid-column:1;justify-self:end;text-align:right;}
.timeline-left .timeline-dot{grid-column:2;}
.timeline-right .timeline-year{grid-column:3;justify-self:start;padding-left:2rem;}
.timeline-right .timeline-card{grid-column:3;justify-self:start;text-align:left;}
.timeline-right .timeline-dot{grid-column:2;}
.timeline-year{font-family:'Bebas Neue',sans-serif;font-size:clamp(3rem,5vw,4.7rem);line-height:1;color:#f59e0b;letter-spacing:1px;}
.timeline-card{max-width:360px;background:#fff;border-radius:20px;padding:1.35rem 1.4rem;border:1px solid rgba(15,23,42,.08);box-shadow:0 12px 28px rgba(2,6,23,.08);position:relative;}
.timeline-title{font-family:'Bebas Neue',sans-serif;font-size:1.7rem;letter-spacing:1px;line-height:1;margin-bottom:.55rem;}
.timeline-card p{color:var(--muted);line-height:1.8;font-size:.98rem;}
.timeline-dot{width:92px;height:92px;border-radius:50%;background:#fff;display:grid;place-items:center;justify-self:center;border:14px solid rgba(255,255,255,.95);box-shadow:0 10px 20px rgba(2,6,23,.15);z-index:1;}
.timeline-dot i{font-size:1.5rem;color:#374151;}
.timeline-card-orange{border-left:10px solid #f59e0b;}
.timeline-card-red{border-right:10px solid #fb7185;}
.timeline-card-pink{border-left:10px solid #f97316;}
.timeline-card-green{border-right:10px solid #84cc16;}
.timeline-card-blue{border-left:10px solid #38bdf8;}
.dot-orange{border-color:#f59e0b;}
.dot-red{border-color:#fb7185;}
.dot-pink{border-color:#f97316;}
.dot-green{border-color:#84cc16;}
.dot-blue{border-color:#38bdf8;}

.about-thanks{background:#0f172a;color:#fff;}
.thanks-panel{padding:3rem;border-radius:24px;background:linear-gradient(135deg,rgba(37,99,235,.18),rgba(15,23,42,.96));border:1px solid rgba(255,255,255,.08);box-shadow:0 20px 40px rgba(2,6,23,.28);text-align:center;}
.thanks-panel .eyebrow{justify-content:center;}
.thanks-panel h2{color:#fff;max-width:none;}
.thanks-panel p{color:rgba(255,255,255,.78);max-width:760px;margin:0 auto 1.6rem;}
.thanks-panel .btn-outline{color:#e2e8f0;border-color:rgba(226,232,240,.5);background:rgba(15,23,42,.3);}
.thanks-panel .btn-outline:hover{color:#fff;border-color:rgba(255,255,255,.78);background:rgba(30,41,59,.56);}

@media (max-width: 900px){
    .about-block{grid-template-columns:1fr;gap:2rem;}
    .mv-grid{grid-template-columns:1fr 1fr;}
    .timeline-line{left:28px;transform:none;}
    .timeline-item{grid-template-columns:56px 1fr;gap:1rem;min-height:auto;padding-left:0;margin-bottom:1rem;}
    .timeline-left,.timeline-right{justify-items:start;}
    .timeline-left .timeline-year,.timeline-right .timeline-year{grid-column:2;justify-self:start;padding:0;order:1;}
    .timeline-left .timeline-card,.timeline-right .timeline-card{grid-column:2;justify-self:stretch;text-align:left;order:2;max-width:none;}
    .timeline-left .timeline-dot,.timeline-right .timeline-dot{grid-column:1;grid-row:1 / span 2;}
}
@media (max-width: 640px){
    .about-hero{padding-top:calc(var(--nav-h) + 2.5rem);}
    .mv-grid{grid-template-columns:1fr;}
    .timeline-line{left:18px;}
    .timeline-item{grid-template-columns:38px 1fr;gap:.75rem;}
    .timeline-dot{width:64px;height:64px;border-width:10px;}
    .timeline-year{font-size:clamp(2.4rem,10vw,3.5rem);}
    .timeline-card{padding:1rem 1rem 1.1rem;}
    .thanks-panel{padding:2rem 1.25rem;}
}
</style>
`;
};
