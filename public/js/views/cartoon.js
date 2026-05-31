/**
 * Ransilu — Cartoon View
 * Home-style hero + Teledrama-like featured and catalog sections
 */

const cartoonItems = [
    {
        title: 'Ransilu Toons',
        category: 'fun',
        genre: 'Kids / Comedy',
        episodes: 'Episode 67',
        image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=1200&auto=format&fit=crop',
        summary: 'Fast, playful adventures with classic cartoon humor and lovable characters.'
    },
    {
        title: 'Seetha Devi',
        category: 'adventure',
        genre: 'Adventure / Family',
        episodes: 'Episode 42',
        image: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=1200&auto=format&fit=crop',
        summary: 'A magical quest across ancient kingdoms with bravery, friendship, and wonder.'
    },
    {
        title: 'Lama Lokaya',
        category: 'education',
        genre: 'Educational',
        episodes: 'Episode 53',
        image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=1200&auto=format&fit=crop',
        summary: 'Curious young minds discover science, culture, and creativity through stories.'
    },
    {
        title: 'Punchi Hamu',
        category: 'fun',
        genre: 'Comedy',
        episodes: 'Episode 38',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1200&auto=format&fit=crop',
        summary: 'Small hero, big mischief. Everyday troubles become unforgettable laughter.'
    },
    {
        title: 'Podi Api',
        category: 'adventure',
        genre: 'Adventure',
        episodes: 'Episode 44',
        image: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?q=80&w=1200&auto=format&fit=crop',
        summary: 'A vibrant team of kids solves mysteries and protects their neighborhood.'
    },
    {
        title: 'Rathu Aliya',
        category: 'fun',
        genre: 'Comedy / Family',
        episodes: 'Episode 29',
        image: 'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?q=80&w=1200&auto=format&fit=crop',
        summary: 'A giant-hearted elephant and friends create joyful chaos in every episode.'
    },
    {
        title: 'Sihinaya Kids',
        category: 'education',
        genre: 'Educational / Songs',
        episodes: 'Episode 61',
        image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=1200&auto=format&fit=crop',
        summary: 'Music, language, and numbers brought to life with colorful characters.'
    }
];

const cartoonTalent = {
    dubbing: [
        { name: 'Sajith M.', role: 'Lead Voice Artist', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop', specialty: 'Anchor Voice', credits: 'Ransilu Toons, Punchi Hamu, Podi Api', bio: 'Brings the signature hero tone and emotional clarity that anchors the biggest cartoon leads.' },
        { name: 'Iresha P.', role: 'Female Lead Voice', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop', specialty: 'Lead Character', credits: 'Seetha Devi, Sihinaya Kids, Lama Lokaya', bio: 'Known for bright, expressive delivery that gives young heroines warmth, charm, and confidence.' },
        { name: 'Nuwan K.', role: 'Character Voice', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=800&auto=format&fit=crop', specialty: 'Flexible Range', credits: 'Rathu Aliya, Ransilu Toons, Podi Api', bio: 'A versatile performer who shifts quickly between comic timing, side characters, and ensemble scenes.' },
        { name: 'Shalini R.', role: 'Supporting Voice', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop', specialty: 'Emotional Support', credits: 'Lama Lokaya, Sihinaya Kids', bio: 'Adds depth to family stories and educational scenes with calm, heartfelt delivery.' },
        { name: 'Dilan T.', role: 'Comedy Voice', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop', specialty: 'Comic Timing', credits: 'Punchi Hamu, Rathu Aliya', bio: 'Turns every reaction, stumble, and punchline into a memorable laugh-out-loud moment.' },
        { name: 'Kavindi L.', role: 'Kids Voice Specialist', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop', specialty: 'Youthful Energy', credits: 'Sihinaya Kids, Podi Api', bio: 'Creates playful child voices that feel lively, natural, and instantly lovable.' },
        { name: 'Ruwan H.', role: 'Villain Voice', image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=800&auto=format&fit=crop', specialty: 'Dark Character Work', credits: 'Seetha Devi, Ransilu Toons', bio: 'Shapes intimidating, sly, or dramatic villains with a deep, cinematic presence.' },
        { name: 'Nethmi A.', role: 'Dialogue Dub Artist', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop', specialty: 'Localization', credits: 'All major dub releases', bio: 'Cleans up timing and emotional cadence so dubbed dialogue lands naturally in every scene.' },
        { name: 'Tharindu J.', role: 'Narration Voice', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop', specialty: 'Storytelling', credits: 'Lama Lokaya, Sihinaya Kids', bio: 'Guides viewers through story beats with a calm, trustworthy narration style.' },
        { name: 'Samadhi W.', role: 'Voice Director', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop', specialty: 'Performance Direction', credits: 'Cartoon dub pipeline', bio: 'Shapes the final voice blend, coaching performances until every character feels fully alive.' }
    ]
};

const cartoonTalentCarousel = (items, sectionTitle, sectionEyebrow, sectionCopy, trackId) => {
    const cards = items.map(item => `
        <article class="ct-talent-card" role="button" tabindex="0" data-name="${item.name}" data-role="${item.role}" data-specialty="${item.specialty}" data-credits="${item.credits}" data-bio="${item.bio}" data-image="${item.image}">
            <div class="ct-talent-poster">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <h4 class="ct-talent-name">${item.name}</h4>
            <p class="ct-talent-role">${item.role}</p>
        </article>
    `).join('');

    return `
    <section class="ct-talent-section">
        <div class="container">
            <div class="ct-talent-head sr">
                <div class="eyebrow">${sectionEyebrow}</div>
                <h2>${sectionTitle}</h2>
                <p>${sectionCopy}</p>
            </div>

            <div class="ct-talent-carousel sr">
                <button class="ct-talent-nav" data-dir="prev" data-track="${trackId}" aria-label="Previous">
                    <i class="ph ph-caret-left"></i>
                </button>
                <div class="ct-talent-track" id="${trackId}">
                    ${cards}
                </div>
                <button class="ct-talent-nav" data-dir="next" data-track="${trackId}" aria-label="Next">
                    <i class="ph ph-caret-right"></i>
                </button>
            </div>
        </div>
    </section>
    `;
};

window.CartoonView = function () {
    const cards = cartoonItems.map(item => `
        <article class="ct-card sr" data-cat="${item.category}" data-title="${item.title}" data-genre="${item.genre}" data-episodes="${item.episodes}" data-image="${item.image}" data-summary="${item.summary}">
            <img src="${item.image}" alt="${item.title}">
            <div class="ct-overlay">
                <span class="ct-chip">${item.genre}</span>
                <h4>${item.title}</h4>
                <p>${item.episodes}</p>
            </div>
        </article>
    `).join('');

    const thumbs = cartoonItems.map((item, index) => `
        <button class="ct-thumb ${index === 0 ? 'active' : ''}" data-slide="${index}" aria-label="Show ${item.title}">
            <img src="${item.image}" alt="${item.title}">
        </button>
    `).join('');

    return `
<section class="ct-hero">
    <div class="ct-hero-bg"></div>
    <div class="container ct-hero-content">
        <h1 class="hero-title sr">CARTOON</h1>
        <div class="hero-subtitle sr sr-d1">Stories Full Of Joy.</div>
        <p class="hero-desc sr sr-d2">From funny adventures to educational favorites, discover Ransilu cartoons for every age.</p>
    </div>
</section>

<section class="ct-featured-section">
    <div class="container">
        <div class="ct-featured-shell sr">
            <button class="ct-slide-nav ct-slide-prev" id="ct-slide-prev" aria-label="Previous cartoon"><i class="ph ph-caret-left"></i></button>
            <button class="ct-slide-nav ct-slide-next" id="ct-slide-next" aria-label="Next cartoon"><i class="ph ph-caret-right"></i></button>

            <div class="ct-featured-media">
                <img id="ct-featured-image" src="${cartoonItems[0].image}" alt="${cartoonItems[0].title}">
            </div>

            <div class="ct-featured-copy">
                <div class="ct-featured-kicker" id="ct-featured-kicker">${cartoonItems[0].category.toUpperCase()}</div>
                <h2 id="ct-featured-title">${cartoonItems[0].title}</h2>
                <div class="ct-featured-meta" id="ct-featured-meta">${cartoonItems[0].genre} • ${cartoonItems[0].episodes}</div>
                <p id="ct-featured-summary">${cartoonItems[0].summary}</p>
                <div class="ct-featured-actions">
                    <button class="btn" style="background:var(--primary);border-color:var(--primary);color:#fff;">Play</button>
                    <button class="btn" style="background:#1f2937;border-color:#1f2937;color:#fff;">My List</button>
                </div>
            </div>

            <div class="ct-featured-thumbs">${thumbs}</div>
        </div>
    </div>
</section>

${cartoonTalentCarousel(
    cartoonTalent.dubbing,
    'DUBBING ARTISTS',
    'Voice Team',
    'Professional voice artists who give life, emotion, and personality to every cartoon character.',
    'ct-dubbing-track'
)}

<div id="ct-voice-modal" class="ct-voice-modal" aria-hidden="true">
    <div class="ct-voice-modal-backdrop" data-voice-close="true"></div>
    <div class="ct-voice-modal-dialog" role="dialog" aria-modal="true" aria-label="Dubbing artist spotlight">
        <button class="ct-voice-modal-close" id="ct-voice-modal-close" aria-label="Close"><i class="ph ph-x"></i></button>
        <button class="ct-voice-modal-nav ct-voice-modal-prev" id="ct-voice-modal-prev" aria-label="Previous voice artist"><i class="ph ph-caret-left"></i></button>
        <button class="ct-voice-modal-nav ct-voice-modal-next" id="ct-voice-modal-next" aria-label="Next voice artist"><i class="ph ph-caret-right"></i></button>

        <div class="ct-voice-modal-media">
            <img id="ct-voice-modal-image" src="" alt="Selected dubbing artist">
        </div>

        <div class="ct-voice-modal-copy">
            <div class="ct-voice-modal-kicker">PERFORMER SPOTLIGHT</div>
            <h3 id="ct-voice-modal-name"></h3>
            <div class="ct-voice-modal-role" id="ct-voice-modal-role"></div>
            <p id="ct-voice-modal-bio"></p>
            <div class="ct-voice-modal-meta">
                <span class="ct-voice-modal-label">Specialty</span>
                <span id="ct-voice-modal-specialty"></span>
            </div>
            <div class="ct-voice-modal-meta">
                <span class="ct-voice-modal-label">Featured Credits</span>
                <span id="ct-voice-modal-credits"></span>
            </div>
            <div class="ct-voice-modal-actions">
                <button class="btn" style="background:var(--primary);border-color:var(--primary);color:#fff;">View Profile</button>
                <button class="btn" style="background:transparent;border-color:rgba(255,255,255,.2);color:#fff;">More Details</button>
            </div>
        </div>

        <div class="ct-voice-modal-thumbs" id="ct-voice-modal-thumbs"></div>
    </div>
</div>

<section class="section-pad ct-catalog-wrap">
    <div class="container">
        <div class="ct-toolbar sr">
            <div class="ct-toolbar-title">
                <h2>ALL CARTOONS</h2>
                <p>Browse the full cartoon library.</p>
            </div>
            <div id="ct-filter-tabs" class="ct-filters">
                <button class="ct-filter-tab active" data-cat="all">All</button>
                <button class="ct-filter-tab" data-cat="fun">Fun</button>
                <button class="ct-filter-tab" data-cat="adventure">Adventure</button>
                <button class="ct-filter-tab" data-cat="education">Educational</button>
            </div>
        </div>

        <div id="ct-grid" class="ct-grid">
            ${cards}
            <article class="ct-card ct-more-card sr" data-cat="all">
                <div class="ct-more-inner">
                    <i class="ph ph-plus"></i>
                    <h4>40+ More</h4>
                </div>
            </article>
        </div>
    </div>
</section>

<div id="ct-modal" class="ct-modal" aria-hidden="true">
    <div class="ct-modal-backdrop" data-close="true"></div>
    <div class="ct-modal-dialog" role="dialog" aria-modal="true" aria-label="Cartoon details">
        <button class="ct-modal-close" id="ct-modal-close" aria-label="Close"><i class="ph ph-x"></i></button>
        <div class="ct-modal-media"><img id="ct-modal-image" src="" alt="Selected cartoon"></div>
        <div class="ct-modal-body">
            <div class="ct-modal-meta" id="ct-modal-genre"></div>
            <h3 id="ct-modal-title"></h3>
            <p class="ct-modal-episode" id="ct-modal-episodes"></p>
            <p class="ct-modal-summary" id="ct-modal-summary"></p>
            <button class="btn" style="background:var(--primary);border-color:var(--primary);color:#fff;">Watch Trailer</button>
        </div>
    </div>
</div>

<style>
.ct-hero{position:relative;padding:calc(var(--nav-h) + 4rem) 0 4rem;overflow:hidden;}
.ct-hero-bg{position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,.78) 0%,rgba(255,255,255,.95) 55%,#fff 100%),url('https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?q=80&w=1800&auto=format&fit=crop') center/cover no-repeat;}
.ct-hero-content{position:relative;z-index:1;}

.ct-featured-section{padding:0 0 2rem;background:#fff;}
.ct-featured-shell{position:relative;display:grid;grid-template-columns:minmax(0,1.15fr) minmax(320px,.85fr);grid-template-rows:auto auto;gap:1rem;padding:1rem;border:1px solid var(--border);background:#fff;box-shadow:0 16px 40px rgba(2,6,23,.08);}
.ct-featured-media{grid-column:1;grid-row:1 / span 2;min-height:520px;overflow:hidden;background:#0b0f19;}
.ct-featured-media img{width:100%;height:100%;object-fit:cover;display:block;}
.ct-featured-copy{grid-column:2;grid-row:1;display:flex;flex-direction:column;justify-content:center;padding:1.5rem 1.5rem 0 0;}
.ct-featured-kicker{font-size:.68rem;letter-spacing:3px;text-transform:uppercase;color:var(--primary);font-weight:700;margin-bottom:.75rem;}
.ct-featured-copy h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(3rem,6vw,5.2rem);line-height:.88;letter-spacing:2px;color:var(--text);}
.ct-featured-meta{margin:.8rem 0 1rem;color:var(--muted);font-size:.85rem;}
.ct-featured-copy p{color:var(--muted);line-height:1.8;max-width:30rem;}
.ct-featured-actions{display:flex;gap:.8rem;flex-wrap:wrap;margin-top:1.5rem;}
.ct-featured-thumbs{grid-column:2;grid-row:2;display:flex;gap:.7rem;align-items:center;overflow-x:auto;padding:0 1.5rem 1rem 0;}
.ct-thumb{width:78px;height:108px;border-radius:10px;overflow:hidden;border:1px solid rgba(255,255,255,.15);background:#0f172a;opacity:.55;flex:0 0 auto;box-shadow:0 8px 18px rgba(2,6,23,.18);transition:transform .25s var(--ease),opacity .25s var(--ease),border-color .25s var(--ease);}
.ct-thumb.active,.ct-thumb:hover{opacity:1;transform:translateY(-3px);border-color:var(--primary);}
.ct-thumb img{width:100%;height:100%;object-fit:cover;display:block;}
.ct-slide-nav{position:absolute;top:50%;transform:translateY(-50%);z-index:2;width:42px;height:42px;border-radius:999px;background:rgba(15,23,42,.88);color:#fff;display:grid;place-items:center;box-shadow:0 10px 24px rgba(2,6,23,.24);}
.ct-slide-nav i{font-size:1.25rem;}
.ct-slide-prev{left:.8rem;}
.ct-slide-next{right:.8rem;}

.ct-talent-section{padding:3.2rem 0;background:linear-gradient(180deg,#f1f5f9 0%,#eef2f7 100%);border-top:1px solid var(--border);}
.ct-talent-head{text-align:center;max-width:760px;margin:0 auto 2rem;}
.ct-talent-head .eyebrow{justify-content:center;margin-bottom:.65rem;}
.ct-talent-head h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.2rem,4.2vw,4rem);letter-spacing:2px;line-height:.95;color:var(--text);}
.ct-talent-head p{color:var(--muted);margin-top:.65rem;line-height:1.7;}
.ct-talent-carousel{display:grid;grid-template-columns:44px 1fr 44px;gap:.75rem;align-items:center;}
.ct-talent-nav{width:44px;height:44px;border-radius:999px;background:#fff;border:1px solid var(--border);color:#ef4444;display:grid;place-items:center;box-shadow:0 8px 18px rgba(15,23,42,.08);}
.ct-talent-nav i{font-size:1.2rem;}
.ct-talent-track{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(180px,1fr);gap:.8rem;overflow-x:auto;scroll-behavior:smooth;padding:.2rem .1rem .5rem;}
.ct-talent-track::-webkit-scrollbar{height:6px;}
.ct-talent-track::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:999px;}
.ct-talent-card{background:#0b1220;border-radius:10px;overflow:hidden;border:1px solid rgba(255,255,255,.08);box-shadow:0 10px 24px rgba(2,6,23,.2);min-height:276px;}
.ct-talent-card[role="button"]{cursor:pointer;transition:transform .28s var(--ease),box-shadow .28s var(--ease),border-color .28s var(--ease);}
.ct-talent-card[role="button"]:hover{transform:translateY(-6px);border-color:rgba(59,130,246,.55);box-shadow:0 16px 30px rgba(2,6,23,.28);}
.ct-talent-poster{height:220px;overflow:hidden;background:#0f172a;}
.ct-talent-poster img{width:100%;height:100%;object-fit:cover;display:block;}
.ct-talent-name{font-family:'Bebas Neue',sans-serif;color:#fff;font-size:1.12rem;letter-spacing:1px;padding:.75rem .72rem 0;line-height:1;}
.ct-talent-role{color:#93c5fd;font-size:.67rem;letter-spacing:1.1px;text-transform:uppercase;padding:.3rem .72rem .9rem;}

.ct-voice-modal{position:fixed;inset:0;z-index:2147483646;display:none;}
.ct-voice-modal.open{display:block;}
.ct-voice-modal-backdrop{position:absolute;inset:0;background:rgba(3,7,18,.88);backdrop-filter:blur(12px);}
.ct-voice-modal-dialog{position:relative;z-index:1;width:min(1240px,calc(100% - 2rem));min-height:min(760px,calc(100vh - 4rem));margin:2rem auto;border-radius:22px;overflow:hidden;border:1px solid rgba(255,255,255,.08);box-shadow:0 36px 90px rgba(2,6,23,.62);background:#070b17;display:grid;grid-template-columns:minmax(0,1fr);}
.ct-voice-modal-media{position:absolute;inset:0;}
.ct-voice-modal-media::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(6,10,22,.96) 0%,rgba(6,10,22,.78) 35%,rgba(6,10,22,.24) 74%,rgba(6,10,22,.72) 100%),linear-gradient(180deg,rgba(6,10,22,.12),rgba(6,10,22,.44));}
.ct-voice-modal-media img{width:100%;height:100%;object-fit:cover;display:block;filter:brightness(.72);}
.ct-voice-modal-copy{position:relative;z-index:1;max-width:560px;padding:5rem 2.8rem 2rem;display:flex;flex-direction:column;justify-content:flex-start;min-height:inherit;color:#fff;}
.ct-voice-modal-kicker{font-size:.72rem;letter-spacing:3px;text-transform:uppercase;color:#ef4444;font-weight:700;margin-bottom:.8rem;}
.ct-voice-modal-copy h3{font-family:var(--font-display);font-size:clamp(2.9rem,8vw,6.4rem);letter-spacing:2px;line-height:.88;margin-bottom:.55rem;color:#fff;}
.ct-voice-modal-role{font-size:.95rem;letter-spacing:1.6px;text-transform:uppercase;color:#fca5a5;margin-bottom:1rem;}
.ct-voice-modal-copy p{font-size:1.02rem;line-height:1.8;color:#dbe4f0;max-width:38rem;margin-bottom:1.4rem;}
.ct-voice-modal-meta{display:flex;flex-direction:column;gap:.25rem;margin-bottom:1rem;}
.ct-voice-modal-label{font-size:.68rem;letter-spacing:2px;text-transform:uppercase;color:#93c5fd;}
.ct-voice-modal-meta span:last-child{font-size:.9rem;line-height:1.6;color:#fff;}
.ct-voice-modal-actions{display:flex;gap:.8rem;flex-wrap:wrap;margin-top:.6rem;}
.ct-voice-modal-close,.ct-voice-modal-nav{position:absolute;z-index:3;border-radius:999px;border:1px solid rgba(255,255,255,.16);background:rgba(10,15,28,.7);color:#fff;display:grid;place-items:center;box-shadow:0 10px 24px rgba(2,6,23,.28);}
.ct-voice-modal-close{top:1rem;right:1rem;width:42px;height:42px;}
.ct-voice-modal-nav{top:50%;transform:translateY(-50%);width:44px;height:44px;}
.ct-voice-modal-prev{left:1rem;}
.ct-voice-modal-next{right:1rem;}
.ct-voice-modal-thumbs{position:relative;z-index:1;display:flex;gap:.75rem;overflow-x:auto;padding:0 2.8rem 2rem;align-items:center;margin-top:auto;}
.ct-voice-modal-thumbs::-webkit-scrollbar{height:6px;}
.ct-voice-modal-thumbs::-webkit-scrollbar-thumb{background:rgba(148,163,184,.45);border-radius:999px;}
.ct-voice-thumb{width:92px;height:122px;border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,.16);background:#101828;flex:0 0 auto;opacity:.52;box-shadow:0 8px 18px rgba(2,6,23,.22);transition:transform .25s var(--ease),opacity .25s var(--ease),border-color .25s var(--ease);}
.ct-voice-thumb.active,.ct-voice-thumb:hover{opacity:1;transform:translateY(-4px);border-color:#ef4444;}
.ct-voice-thumb img{width:100%;height:100%;object-fit:cover;display:block;}

.ct-catalog-wrap{background:linear-gradient(180deg,var(--bg) 0%,var(--bg-2) 100%);border-top:1px solid var(--border);}
.ct-toolbar{display:flex;justify-content:space-between;gap:1.5rem;align-items:end;flex-wrap:wrap;margin-bottom:2rem;}
.ct-toolbar-title h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.2rem,4.6vw,4rem);letter-spacing:2px;color:var(--text);line-height:.95;}
.ct-toolbar-title p{color:var(--muted);margin-top:.35rem;}
.ct-filters{display:flex;gap:.65rem;flex-wrap:wrap;}
.ct-filter-tab{padding:.62rem 1.2rem;border-radius:999px;font-size:.75rem;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;border:1px solid var(--border);background:#fff;color:var(--muted);transition:all .25s var(--ease);}
.ct-filter-tab.active,.ct-filter-tab:hover{background:var(--primary);border-color:var(--primary);color:#fff;box-shadow:0 8px 18px var(--primary-dim);}

.ct-grid{display:grid;grid-template-columns:repeat(5,minmax(120px,1fr));gap:1rem;}
.ct-card{position:relative;aspect-ratio:3/4;border-radius:12px;overflow:hidden;cursor:pointer;border:1px solid rgba(255,255,255,.2);box-shadow:0 12px 24px rgba(2,6,23,.12);transform:translateY(0);transition:transform .28s var(--ease),box-shadow .28s var(--ease),opacity .35s var(--ease);}
.ct-card img{width:100%;height:100%;object-fit:cover;transition:transform .45s var(--ease);}
.ct-card:hover{transform:translateY(-6px);box-shadow:0 20px 28px rgba(2,6,23,.22);}
.ct-card:hover img{transform:scale(1.06);}
.ct-overlay{position:absolute;inset:auto 0 0 0;padding:1rem .85rem;background:linear-gradient(to top,rgba(2,6,23,.92) 0%,rgba(2,6,23,.15) 75%,transparent 100%);color:#fff;}
.ct-chip{display:inline-block;font-size:.56rem;letter-spacing:1.5px;text-transform:uppercase;padding:.2rem .5rem;border-radius:999px;background:rgba(255,255,255,.2);margin-bottom:.5rem;}
.ct-overlay h4{font-family:'Bebas Neue',sans-serif;letter-spacing:1px;font-size:1.25rem;line-height:.95;margin-bottom:.3rem;}
.ct-overlay p{font-size:.72rem;color:rgba(255,255,255,.78);}
.ct-card.hide{opacity:0;transform:scale(.95);pointer-events:none;max-height:0;margin:0;}
.ct-more-card{background:linear-gradient(145deg,#2d66eb,#1d4ed8);display:flex;align-items:center;justify-content:center;}
.ct-more-inner{text-align:center;color:#fff;}
.ct-more-inner i{font-size:2.7rem;}
.ct-more-inner h4{margin-top:.5rem;font-family:'Bebas Neue',sans-serif;font-size:1.5rem;letter-spacing:2px;}

.ct-modal{position:fixed;inset:0;z-index:2147483645;display:none;}
.ct-modal.open{display:block;}
.ct-modal-backdrop{position:absolute;inset:0;background:rgba(2,6,23,.84);backdrop-filter:blur(6px);}
.ct-modal-dialog{position:relative;z-index:1;width:min(1120px,calc(100% - 2rem));margin:1.9rem auto;min-height:min(690px,calc(100vh - 3.8rem));border-radius:18px;border:1px solid rgba(148,163,184,.22);overflow:hidden;background:#020611;box-shadow:0 36px 70px rgba(2,6,23,.52);display:grid;grid-template-rows:1fr auto;}
.ct-modal-media{position:absolute;inset:0;}
.ct-modal-media img{width:100%;height:100%;min-height:100%;object-fit:cover;filter:brightness(.82);}
.ct-modal-media::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(3,9,24,.94) 0%,rgba(3,9,24,.74) 44%,rgba(3,9,24,.28) 78%,rgba(3,9,24,.82) 100%),linear-gradient(180deg,rgba(3,9,24,.08),rgba(3,9,24,.42));}
.ct-modal-body{position:relative;z-index:1;max-width:540px;padding:5rem 2.8rem 1.8rem;display:flex;flex-direction:column;justify-content:flex-start;min-height:inherit;grid-row:1;}
.ct-modal-meta{font-size:.72rem;letter-spacing:2.5px;text-transform:uppercase;color:#f43f5e;font-weight:700;margin-bottom:.65rem;}
.ct-modal-body h3{font-family:var(--font-display);font-size:clamp(2.8rem,8vw,6.2rem);letter-spacing:2px;line-height:.88;margin-bottom:.55rem;color:#fff;}
.ct-modal-episode{font-size:.84rem;color:#fca5a5;text-transform:uppercase;letter-spacing:1.4px;margin-bottom:1rem;}
.ct-modal-summary{color:#cbd5e1;opacity:1;line-height:1.75;margin-bottom:1.4rem;}
.ct-modal-body .btn{align-self:flex-start;}
.ct-modal-close{position:absolute;top:.9rem;right:1rem;width:38px;height:38px;border-radius:999px;border:1px solid rgba(255,255,255,.24);background:rgba(2,6,23,.62);color:#fff;display:grid;place-items:center;z-index:3;}

@media (max-width:900px){
    .ct-modal-dialog{width:calc(100% - 1rem);margin:0.5rem auto;min-height:calc(100vh - 1rem);}
    .ct-modal-body{padding:4.5rem 1.3rem 1rem;max-width:none;}
    .ct-voice-modal-dialog{width:calc(100% - 1rem);min-height:calc(100vh - 1rem);margin:0.5rem auto;}
    .ct-voice-modal-copy{padding:4.5rem 1.3rem 1.2rem;max-width:none;}
    .ct-voice-modal-thumbs{padding:0 1.3rem 1.2rem;}
}
@media (max-width:640px){
    .ct-modal-dialog{width:calc(100% - 1rem);margin:0.5rem auto;}
    .ct-modal-body{padding:4.2rem 1rem 0.9rem;}
    .ct-modal-body h3{font-size:clamp(2.3rem,11vw,3.7rem);}
    .ct-voice-modal-copy{padding:4.2rem 1rem 1rem;}
    .ct-voice-modal-copy h3{font-size:clamp(2.5rem,12vw,4rem);}
    .ct-voice-modal-actions .btn{flex:1 1 130px;}
    .ct-voice-modal-thumbs{padding:0 1rem 1rem;}
    .ct-voice-thumb{width:78px;height:106px;}
}

@media (max-width:1100px){
    .ct-featured-shell{grid-template-columns:1fr;}
    .ct-featured-media{grid-column:1;grid-row:auto;min-height:420px;}
    .ct-featured-copy{grid-column:1;grid-row:auto;padding:0 1rem 0.25rem;}
    .ct-featured-thumbs{grid-column:1;grid-row:auto;padding:0 1rem .5rem;}
    .ct-grid{grid-template-columns:repeat(4,minmax(130px,1fr));}
    .ct-talent-track{grid-auto-columns:minmax(170px,1fr);}
}
@media (max-width:900px){
    .ct-featured-media{min-height:360px;}
    .ct-grid{grid-template-columns:repeat(3,minmax(120px,1fr));}
    .ct-talent-carousel{grid-template-columns:36px 1fr 36px;}
    .ct-talent-nav{width:36px;height:36px;}
}
@media (max-width:640px){
    .ct-hero{padding-top:calc(var(--nav-h) + 2.5rem);}
    .ct-featured-copy h2{font-size:clamp(2.4rem,13vw,4rem);}
    .ct-featured-actions .btn{flex:1 1 120px;}
    .ct-grid{grid-template-columns:repeat(2,minmax(120px,1fr));}
    .ct-toolbar-title h2{font-size:2.2rem;}
    .ct-talent-track{grid-auto-columns:minmax(145px,1fr);}
    .ct-talent-poster{height:182px;}
}
</style>
`;
};

window.initCartoonView = function () {
    const featuredItems = cartoonItems;
    const voiceItems = cartoonTalent.dubbing;
    let activeIndex = 0;
    let autoPlayId = null;
    const autoPlayDelay = 4300;

    const featuredShell = document.querySelector('.ct-featured-shell');
    const featuredImage = document.getElementById('ct-featured-image');
    const featuredKicker = document.getElementById('ct-featured-kicker');
    const featuredTitle = document.getElementById('ct-featured-title');
    const featuredMeta = document.getElementById('ct-featured-meta');
    const featuredSummary = document.getElementById('ct-featured-summary');
    const thumbButtons = document.querySelectorAll('.ct-thumb');
    const prevButton = document.getElementById('ct-slide-prev');
    const nextButton = document.getElementById('ct-slide-next');

    const setSlide = (index) => {
        activeIndex = (index + featuredItems.length) % featuredItems.length;
        const item = featuredItems[activeIndex];
        featuredImage.src = item.image;
        featuredImage.alt = item.title;
        featuredKicker.textContent = item.category.toUpperCase();
        featuredTitle.textContent = item.title;
        featuredMeta.textContent = `${item.genre} • ${item.episodes}`;
        featuredSummary.textContent = item.summary;
        thumbButtons.forEach((button, i) => button.classList.toggle('active', i === activeIndex));
    };

    const stopAutoPlay = () => {
        if (!autoPlayId) return;
        clearInterval(autoPlayId);
        autoPlayId = null;
    };

    const startAutoPlay = () => {
        stopAutoPlay();
        autoPlayId = setInterval(() => setSlide(activeIndex + 1), autoPlayDelay);
    };

    thumbButtons.forEach(button => {
        button.addEventListener('click', () => {
            setSlide(parseInt(button.dataset.slide, 10));
            startAutoPlay();
        });
    });

    prevButton.addEventListener('click', () => {
        setSlide(activeIndex - 1);
        startAutoPlay();
    });
    nextButton.addEventListener('click', () => {
        setSlide(activeIndex + 1);
        startAutoPlay();
    });

    if (featuredShell) {
        featuredShell.addEventListener('mouseenter', stopAutoPlay);
        featuredShell.addEventListener('mouseleave', startAutoPlay);
    }

    // Auto-play dubbing artists carousel.
    document.querySelectorAll('.ct-talent-track').forEach(track => {
        let talentAutoId = null;

        const getJump = () => {
            const card = track.querySelector('.ct-talent-card');
            return card ? card.getBoundingClientRect().width + 12 : 220;
        };

        const runAuto = () => {
            if (!document.body.contains(track)) {
                if (talentAutoId) clearInterval(talentAutoId);
                return;
            }
            const jump = getJump();
            const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
            if (atEnd) {
                track.scrollTo({ left: 0, behavior: 'smooth' });
                return;
            }
            track.scrollBy({ left: jump, behavior: 'smooth' });
        };

        const startTalentAuto = () => {
            if (talentAutoId) clearInterval(talentAutoId);
            talentAutoId = setInterval(runAuto, 2800);
        };

        const stopTalentAuto = () => {
            if (!talentAutoId) return;
            clearInterval(talentAutoId);
            talentAutoId = null;
        };

        track.addEventListener('mouseenter', stopTalentAuto);
        track.addEventListener('mouseleave', startTalentAuto);
        startTalentAuto();
    });

    document.querySelectorAll('.ct-talent-nav').forEach(button => {
        button.addEventListener('click', () => {
            const track = document.getElementById(button.dataset.track);
            if (!track) return;
            const card = track.querySelector('.ct-talent-card');
            const jump = card ? card.getBoundingClientRect().width + 12 : 220;
            const direction = button.dataset.dir === 'next' ? 1 : -1;
            track.scrollBy({ left: direction * jump * 2, behavior: 'smooth' });
        });
    });

    const tabs = document.querySelectorAll('.ct-filter-tab');
    const cards = document.querySelectorAll('.ct-card');
    tabs.forEach(tab => tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const cat = tab.dataset.cat;
        cards.forEach(card => {
            if (card.classList.contains('ct-more-card')) {
                card.classList.remove('hide');
                return;
            }
            const show = cat === 'all' || card.dataset.cat === cat;
            card.classList.toggle('hide', !show);
        });
    }));

    const modal = document.getElementById('ct-modal');
    const modalTitle = document.getElementById('ct-modal-title');
    const modalGenre = document.getElementById('ct-modal-genre');
    const modalEpisodes = document.getElementById('ct-modal-episodes');
    const modalSummary = document.getElementById('ct-modal-summary');
    const modalImage = document.getElementById('ct-modal-image');
    const closeBtn = document.getElementById('ct-modal-close');
    const voiceModal = document.getElementById('ct-voice-modal');
    const voiceModalImage = document.getElementById('ct-voice-modal-image');
    const voiceModalName = document.getElementById('ct-voice-modal-name');
    const voiceModalRole = document.getElementById('ct-voice-modal-role');
    const voiceModalBio = document.getElementById('ct-voice-modal-bio');
    const voiceModalSpecialty = document.getElementById('ct-voice-modal-specialty');
    const voiceModalCredits = document.getElementById('ct-voice-modal-credits');
    const voiceModalThumbs = document.getElementById('ct-voice-modal-thumbs');
    const voiceModalClose = document.getElementById('ct-voice-modal-close');
    const voiceModalPrev = document.getElementById('ct-voice-modal-prev');
    const voiceModalNext = document.getElementById('ct-voice-modal-next');
    let voiceIndex = 0;

    if (modal && modal.parentElement !== document.body) {
        document.body.appendChild(modal);
    }
    if (voiceModal && voiceModal.parentElement !== document.body) {
        document.body.appendChild(voiceModal);
    }

    const renderVoiceThumbs = () => {
        if (!voiceModalThumbs) return;
        voiceModalThumbs.innerHTML = voiceItems.map((item, index) => `
            <button class="ct-voice-thumb ${index === voiceIndex ? 'active' : ''}" data-voice-slide="${index}" aria-label="Show ${item.name}">
                <img src="${item.image}" alt="${item.name}">
            </button>
        `).join('');

        voiceModalThumbs.querySelectorAll('[data-voice-slide]').forEach(button => {
            button.addEventListener('click', () => {
                openVoiceModal(parseInt(button.dataset.voiceSlide, 10));
            });
        });
    };

    const openVoiceModal = (index) => {
        voiceIndex = (index + voiceItems.length) % voiceItems.length;
        const item = voiceItems[voiceIndex];
        voiceModalImage.src = item.image;
        voiceModalImage.alt = item.name;
        voiceModalName.textContent = item.name;
        voiceModalRole.textContent = item.role;
        voiceModalBio.textContent = item.bio;
        voiceModalSpecialty.textContent = item.specialty;
        voiceModalCredits.textContent = item.credits;
        renderVoiceThumbs();
        voiceModal.classList.add('open');
        voiceModal.setAttribute('aria-hidden', 'false');
        voiceModal.style.display = 'block';
        voiceModal.style.visibility = 'visible';
        voiceModal.style.pointerEvents = 'auto';
        document.body.style.overflow = 'hidden';
    };

    const closeVoiceModal = () => {
        voiceModal.classList.remove('open');
        voiceModal.setAttribute('aria-hidden', 'true');
        voiceModal.style.display = '';
        voiceModal.style.visibility = '';
        voiceModal.style.pointerEvents = '';
        document.body.style.overflow = '';
    };

    const stepVoiceModal = (direction) => {
        openVoiceModal(voiceIndex + direction);
    };

    const closeModal = () => {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        modal.style.display = '';
        modal.style.visibility = '';
        modal.style.pointerEvents = '';
        document.body.style.overflow = '';
    };

    const openModal = (card) => {
        modalTitle.textContent = card.dataset.title || '';
        modalGenre.textContent = card.dataset.genre || '';
        modalEpisodes.textContent = card.dataset.episodes || '';
        modalSummary.textContent = card.dataset.summary || '';
        modalImage.src = card.dataset.image || '';
        modalImage.alt = card.dataset.title || 'Selected cartoon';
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        modal.style.display = 'block';
        modal.style.visibility = 'visible';
        modal.style.pointerEvents = 'auto';
        document.body.style.overflow = 'hidden';
    };

    document.querySelectorAll('.ct-card:not(.ct-more-card)').forEach(card => {
        card.addEventListener('click', () => openModal(card));
    });

    const talentTrack = document.getElementById('ct-dubbing-track');
    if (talentTrack) {
        talentTrack.addEventListener('click', (event) => {
            const card = event.target.closest('.ct-talent-card[role="button"]');
            if (!card) return;
            const index = voiceItems.findIndex(item => item.name === card.dataset.name);
            openVoiceModal(index >= 0 ? index : 0);
        });

        talentTrack.addEventListener('keydown', (event) => {
            const card = event.target.closest('.ct-talent-card[role="button"]');
            if (!card) return;
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                const index = voiceItems.findIndex(item => item.name === card.dataset.name);
                openVoiceModal(index >= 0 ? index : 0);
            }
        });
    }

    document.querySelectorAll('[data-close="true"]').forEach(el => {
        el.addEventListener('click', closeModal);
    });
    closeBtn.addEventListener('click', closeModal);

    document.querySelectorAll('[data-voice-close="true"]').forEach(el => {
        el.addEventListener('click', closeVoiceModal);
    });
    voiceModalClose.addEventListener('click', closeVoiceModal);
    voiceModalPrev.addEventListener('click', () => stepVoiceModal(-1));
    voiceModalNext.addEventListener('click', () => stepVoiceModal(1));

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
        if (e.key === 'Escape' && voiceModal.classList.contains('open')) closeVoiceModal();
    });

    setSlide(0);
    startAutoPlay();
};
