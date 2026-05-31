/**
 * Ransilu — Teledrama Page View
 * Home-style hero + top poster grid + single-drama detail modal
 */

const teledramaItems = [
    {
        title: 'Sonduru Wasanthaya',
        category: 'romance',
        genre: 'Romance / Drama',
        episodes: 'Episode 45',
        image: 'https://images.unsplash.com/photo-1485001254623-fc2477ba06ea?q=80&w=900&auto=format&fit=crop',
        summary: 'Love, betrayal, and redemption unfold in the misty tea estates of Nuwara Eliya.'
    },
    {
        title: 'Gini Avisi',
        category: 'action',
        genre: 'Action / Thriller',
        episodes: 'Episode 31',
        image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=900&auto=format&fit=crop',
        summary: 'A former soldier uncovers a dangerous conspiracy that threatens the nation.'
    },
    {
        title: 'Waligampitiya',
        category: 'comedy',
        genre: 'Comedy / Family',
        episodes: 'Episode 54',
        image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=900&auto=format&fit=crop',
        summary: 'A heartwarming village comedy packed with laughter, chaos, and family drama.'
    },
    {
        title: 'Kaluwara Gedara',
        category: 'thriller',
        genre: 'Mystery / Thriller',
        episodes: 'Episode 26',
        image: 'https://images.unsplash.com/photo-1510884639454-0a3014a682da?q=80&w=900&auto=format&fit=crop',
        summary: 'Dark secrets emerge from an ancestral mansion where every room hides a clue.'
    },
    {
        title: 'Adaraneeya Kathawak',
        category: 'romance',
        genre: 'Romance',
        episodes: 'Episode 50',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=900&auto=format&fit=crop',
        summary: 'A timeless love story between two families divided by pride and power.'
    },
    {
        title: 'Ran Asipatha',
        category: 'action',
        genre: 'Action / Crime',
        episodes: 'Episode 38',
        image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=900&auto=format&fit=crop',
        summary: 'A fearless detective fights crime syndicates across Colombo underworld networks.'
    },
    {
        title: 'Ahas Maliga',
        category: 'thriller',
        genre: 'Drama / Suspense',
        episodes: 'Episode 19',
        image: 'https://images.unsplash.com/photo-1533104816-cdd230239634?q=80&w=900&auto=format&fit=crop',
        summary: 'Ambition and betrayal collide in the high society corridors of power.'
    }
];

const teledramaTalent = {
    actors: [
        { name: 'Kamal A.', role: 'Lead Actor', image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=400&auto=format&fit=crop' },
        { name: 'Pooja U.', role: 'Lead Actress', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' },
        { name: 'Jackson A.', role: 'Supporting Actor', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop' },
        { name: 'Yashoda W.', role: 'Supporting Actress', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&auto=format&fit=crop' },
        { name: 'Damith R.', role: 'Character Actor', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop' },
        { name: 'Nelum P.', role: 'Guest Star', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&auto=format&fit=crop' },
        { name: 'Nadeesha K.', role: 'Lead Actress', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop' },
        { name: 'Prabath D.', role: 'Supporting Actor', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=400&auto=format&fit=crop' },
        { name: 'Rashmi J.', role: 'Character Actress', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop' },
        { name: 'Sandun M.', role: 'Guest Actor', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop' }
    ],
    writers: [
        { name: 'R. Silva', role: 'Head Writer', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop' },
        { name: 'Anusha P.', role: 'Screenwriter', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' },
        { name: 'K. Fernando', role: 'Director', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop' },
        { name: 'M. Perera', role: 'Assistant Director', image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=400&auto=format&fit=crop' },
        { name: 'D. Jayasuriya', role: 'Dialogue Writer', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&auto=format&fit=crop' },
        { name: 'S. Weerasinghe', role: 'Creative Producer', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&auto=format&fit=crop' },
        { name: 'L. Rajapaksha', role: 'Story Writer', image: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=400&auto=format&fit=crop' },
        { name: 'I. Senanayake', role: 'Director', image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=400&auto=format&fit=crop' },
        { name: 'H. Kumari', role: 'Script Editor', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop' },
        { name: 'V. Dissanayake', role: 'Showrunner', image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=400&auto=format&fit=crop' }
    ],
    dubbing: [
        { name: 'Sajith M.', role: 'Lead Voice Artist', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop' },
        { name: 'Iresha P.', role: 'Female Lead Voice', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop' },
        { name: 'Nuwan K.', role: 'Character Voice', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=400&auto=format&fit=crop' },
        { name: 'Shalini R.', role: 'Supporting Voice', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop' },
        { name: 'Dilan T.', role: 'Comedy Voice', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop' },
        { name: 'Kavindi L.', role: 'Kids Voice Specialist', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop' },
        { name: 'Ruwan H.', role: 'Villain Voice', image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=400&auto=format&fit=crop' },
        { name: 'Nethmi A.', role: 'Dialogue Dub Artist', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' },
        { name: 'Tharindu J.', role: 'Narration Voice', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop' },
        { name: 'Samadhi W.', role: 'Voice Director', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&auto=format&fit=crop' }
    ]
};

const talentCarousel = (items, sectionTitle, sectionEyebrow, sectionCopy, trackId, interactive = false) => {
    const cards = items.map(item => `
        <article class="td-talent-card ${interactive ? 'td-talent-card-clickable' : ''}" ${interactive ? `role="button" tabindex="0" data-name="${item.name}" data-role="${item.role}" data-image="${item.image}"` : ''}>
            <div class="td-talent-poster">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <h4 class="td-talent-name">${item.name}</h4>
            <p class="td-talent-role">${item.role}</p>
        </article>
    `).join('');

    return `
    <section class="td-talent-section">
        <div class="container">
            <div class="td-talent-head sr">
                <div class="eyebrow">${sectionEyebrow}</div>
                <h2>${sectionTitle}</h2>
                <p>${sectionCopy}</p>
            </div>

            <div class="td-talent-carousel sr">
                <button class="td-talent-nav" data-dir="prev" data-track="${trackId}" aria-label="Previous">
                    <i class="ph ph-caret-left"></i>
                </button>
                <div class="td-talent-track" id="${trackId}">
                    ${cards}
                </div>
                <button class="td-talent-nav" data-dir="next" data-track="${trackId}" aria-label="Next">
                    <i class="ph ph-caret-right"></i>
                </button>
            </div>
        </div>
    </section>
    `;
};

window.TeledramaView = function () {
    const cards = teledramaItems.map(item => `
        <article class="td-card sr" data-cat="${item.category}" data-title="${item.title}" data-genre="${item.genre}" data-episodes="${item.episodes}" data-image="${item.image}" data-summary="${item.summary}">
            <img src="${item.image}" alt="${item.title}">
            <div class="td-overlay">
                <span class="td-chip">${item.genre}</span>
                <h4>${item.title}</h4>
                <p>${item.episodes}</p>
            </div>
        </article>
    `).join('');

    const thumbStrip = teledramaItems.map((item, index) => `
        <button class="td-thumb ${index === 0 ? 'active' : ''}" data-slide="${index}" aria-label="Show ${item.title}">
            <img src="${item.image}" alt="${item.title}">
        </button>
    `).join('');

    return `
<section class="td-featured-section">
    <div class="container">
        <div class="td-featured-shell sr">
            <button class="td-slide-nav td-slide-prev" id="td-slide-prev" aria-label="Previous drama">
                <i class="ph ph-caret-left"></i>
            </button>
            <button class="td-slide-nav td-slide-next" id="td-slide-next" aria-label="Next drama">
                <i class="ph ph-caret-right"></i>
            </button>

            <div class="td-featured-media">
                <img id="td-featured-image" src="${teledramaItems[0].image}" alt="${teledramaItems[0].title}">
            </div>

            <div class="td-featured-copy">
                <div class="td-featured-kicker" id="td-featured-kicker">${teledramaItems[0].category.toUpperCase()}</div>
                <h2 id="td-featured-title">${teledramaItems[0].title}</h2>
                <div class="td-featured-meta" id="td-featured-meta">${teledramaItems[0].genre} • ${teledramaItems[0].episodes}</div>
                <p id="td-featured-summary">${teledramaItems[0].summary}</p>
            </div>

            <div class="td-featured-thumbs">
                ${thumbStrip}
            </div>
        </div>
    </div>
</section>

${talentCarousel(
    teledramaTalent.actors,
    'ACTORS &amp; ACTRESSES',
    'Our Stars',
    'Faces that carry the emotion, tension, and energy of Ransilu teledramas.',
    'td-actors-track',
    true
)}

<div id="td-star-modal" class="td-star-modal" aria-hidden="true">
    <div class="td-star-modal-backdrop" data-star-close="true"></div>
    <div class="td-star-modal-dialog" role="dialog" aria-modal="true" aria-label="Actor spotlight">
        <button class="td-star-modal-close" id="td-star-modal-close" aria-label="Close"><i class="ph ph-x"></i></button>
        <button class="td-star-modal-nav td-star-modal-prev" id="td-star-modal-prev" aria-label="Previous actor"><i class="ph ph-caret-left"></i></button>
        <button class="td-star-modal-nav td-star-modal-next" id="td-star-modal-next" aria-label="Next actor"><i class="ph ph-caret-right"></i></button>

        <div class="td-star-modal-media">
            <img id="td-star-modal-image" src="" alt="Selected actor">
        </div>

        <div class="td-star-modal-copy">
            <div class="td-star-modal-kicker">PERFORMER SPOTLIGHT</div>
            <h3 id="td-star-modal-name"></h3>
            <div class="td-star-modal-role" id="td-star-modal-role"></div>
            <p id="td-star-modal-bio"></p>
            <div class="td-star-modal-actions">
                <button class="btn" style="background:var(--primary);border-color:var(--primary);color:#fff;">View Profile</button>
                <button class="btn" style="background:transparent;border-color:rgba(255,255,255,.2);color:#fff;">More Details</button>
            </div>
        </div>

        <div class="td-star-modal-thumbs" id="td-star-modal-thumbs"></div>
    </div>
</div>

${talentCarousel(
    teledramaTalent.writers,
    'WRITERS &amp; DIRECTORS',
    'Creative Team',
    'The storytellers and vision makers behind every Ransilu drama.',
    'td-writers-track',
    true
)}

${talentCarousel(
    teledramaTalent.dubbing,
    'DUBBING ARTISTS',
    'Voice Team',
    'The voices behind iconic scenes, bringing every character to life in every episode.',
    'td-dubbing-track',
    true
)}

<section class="section-pad td-catalog-wrap">
    <div class="container">
        <div class="td-toolbar sr">
            <div class="td-toolbar-title">
                <h2>ALL DRAMAS</h2>
                <p>Browse the full Ransilu teledrama library.</p>
            </div>
            <div id="filter-tabs" class="td-filters">
                <button class="filter-tab active" data-cat="all">All</button>
                <button class="filter-tab" data-cat="romance">Romance</button>
                <button class="filter-tab" data-cat="action">Action</button>
                <button class="filter-tab" data-cat="comedy">Comedy</button>
                <button class="filter-tab" data-cat="thriller">Thriller</button>
            </div>
        </div>

        <div id="drama-grid" class="td-grid">
            ${cards}
            <article class="td-card td-more-card sr" data-cat="all">
                <div class="td-more-inner">
                    <i class="ph ph-plus"></i>
                    <h4>40+ More</h4>
                </div>
            </article>
        </div>
    </div>
</section>

<div id="drama-modal" class="td-modal" aria-hidden="true">
    <div class="td-modal-backdrop" data-close="true"></div>
    <div class="td-modal-dialog" role="dialog" aria-modal="true" aria-label="Drama details">
        <button class="td-modal-close" id="td-modal-close" aria-label="Close">
            <i class="ph ph-x"></i>
        </button>
        <div class="td-modal-media">
            <img id="td-modal-image" src="" alt="Selected drama">
        </div>
        <div class="td-modal-body">
            <div class="td-modal-meta" id="td-modal-genre"></div>
            <h3 id="td-modal-title"></h3>
            <p class="td-modal-episode" id="td-modal-episodes"></p>
            <p class="td-modal-summary" id="td-modal-summary"></p>
            <button class="btn" style="background:var(--primary);border-color:var(--primary);color:#fff;">Watch Trailer</button>
        </div>
    </div>
</div>

<style>
.td-hero{position:relative;padding:calc(var(--nav-h) + 4rem) 0 5rem;overflow:hidden;}
.td-hero-bg{position:absolute;inset:0;background:
linear-gradient(180deg,rgba(255,255,255,.78) 0%,rgba(255,255,255,.96) 60%,#fff 100%),
url('https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1800&auto=format&fit=crop') center/cover no-repeat;filter:saturate(0.95);}
.td-hero-content{position:relative;z-index:1;}

.td-catalog-wrap{background:linear-gradient(180deg,var(--bg) 0%,var(--bg-2) 100%);border-top:1px solid var(--border);}
.td-featured-section{padding:calc(var(--nav-h) + 2.5rem) 0 2rem;background:linear-gradient(180deg,#f3f6fb 0%,#eef2f8 100%);}
.td-featured-shell{position:relative;z-index:1;width:min(1240px,100%);min-height:min(760px,calc(100vh - 4rem));margin:0 auto;border-radius:22px;overflow:hidden;border:1px solid rgba(255,255,255,.08);box-shadow:0 36px 90px rgba(2,6,23,.5);background:#070b17;display:grid;grid-template-columns:minmax(0,1fr);grid-template-rows:1fr auto;}
.td-featured-media{position:absolute;inset:0;min-height:inherit;}
.td-featured-media::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(6,10,22,.96) 0%,rgba(6,10,22,.78) 35%,rgba(6,10,22,.24) 74%,rgba(6,10,22,.72) 100%),linear-gradient(180deg,rgba(6,10,22,.12),rgba(6,10,22,.44));}
.td-featured-media img{width:100%;height:100%;object-fit:cover;display:block;filter:brightness(.72);}
.td-featured-copy{position:relative;z-index:1;max-width:560px;padding:5rem 2.8rem 2rem 3.4rem;display:flex;flex-direction:column;justify-content:flex-start;min-height:inherit;color:#fff;}
.td-featured-kicker{font-size:.72rem;letter-spacing:3px;text-transform:uppercase;color:#ef4444;font-weight:700;margin-bottom:.8rem;}
.td-featured-copy h2{font-family:var(--font-display);font-size:clamp(2.9rem,8vw,6.4rem);line-height:.88;letter-spacing:2px;color:#fff;max-width:10ch;}
.td-featured-meta{margin:.7rem 0 1rem;color:#fca5a5;font-size:.95rem;letter-spacing:1.6px;text-transform:uppercase;}
.td-featured-copy p{font-size:1.02rem;line-height:1.8;color:#dbe4f0;max-width:38rem;margin-bottom:1.4rem;}
.td-featured-thumbs{position:relative;z-index:1;display:flex;gap:.75rem;overflow-x:auto;padding:0 2.8rem 2rem;align-items:center;margin-top:auto;}
.td-thumb{width:92px;height:122px;border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,.16);background:#101828;opacity:.52;flex:0 0 auto;box-shadow:0 8px 18px rgba(2,6,23,.22);transition:transform .25s var(--ease),opacity .25s var(--ease),border-color .25s var(--ease);}
.td-thumb.active,.td-thumb:hover{opacity:1;transform:translateY(-4px);border-color:#ef4444;}
.td-thumb img{width:100%;height:100%;object-fit:cover;display:block;}
.td-slide-nav{position:absolute;top:50%;transform:translateY(-50%);z-index:3;width:44px;height:44px;border-radius:999px;border:1px solid rgba(255,255,255,.16);background:rgba(10,15,28,.7);color:#ef4444;display:grid;place-items:center;box-shadow:0 10px 24px rgba(2,6,23,.28);}
.td-slide-nav i{font-size:1.25rem;}
.td-slide-prev{left:.8rem;}
.td-slide-next{right:.8rem;}
.td-toolbar{display:flex;justify-content:space-between;gap:1.5rem;align-items:end;flex-wrap:wrap;margin-bottom:2rem;}
.td-toolbar-title h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.2rem,4.6vw,4rem);letter-spacing:2px;color:var(--text);line-height:.95;}
.td-toolbar-title p{color:var(--muted);margin-top:.35rem;}

.td-filters{display:flex;gap:.65rem;flex-wrap:wrap;}
.filter-tab{padding:.62rem 1.2rem;border-radius:999px;font-size:.75rem;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;border:1px solid var(--border);background:#fff;color:var(--muted);transition:all .25s var(--ease);}
.filter-tab.active,.filter-tab:hover{background:var(--primary);border-color:var(--primary);color:#fff;box-shadow:0 8px 18px var(--primary-dim);}

.td-grid{display:grid;grid-template-columns:repeat(5,minmax(120px,1fr));gap:1rem;}
.td-card{position:relative;aspect-ratio:3/4;border-radius:12px;overflow:hidden;cursor:pointer;border:1px solid rgba(255,255,255,.2);box-shadow:0 12px 24px rgba(2,6,23,.12);transform:translateY(0);transition:transform .28s var(--ease),box-shadow .28s var(--ease),opacity .35s var(--ease);}
.td-card img{width:100%;height:100%;object-fit:cover;transition:transform .45s var(--ease);}
.td-card:hover{transform:translateY(-6px);box-shadow:0 20px 28px rgba(2,6,23,.22);}
.td-card:hover img{transform:scale(1.06);}
.td-overlay{position:absolute;inset:auto 0 0 0;padding:1rem .85rem;background:linear-gradient(to top,rgba(2,6,23,.92) 0%,rgba(2,6,23,.15) 75%,transparent 100%);color:#fff;}
.td-chip{display:inline-block;font-size:.56rem;letter-spacing:1.5px;text-transform:uppercase;padding:.2rem .5rem;border-radius:999px;background:rgba(255,255,255,.2);margin-bottom:.5rem;}
.td-overlay h4{font-family:'Bebas Neue',sans-serif;letter-spacing:1px;font-size:1.25rem;line-height:.95;margin-bottom:.3rem;}
.td-overlay p{font-size:.72rem;color:rgba(255,255,255,.78);}

.td-more-card{background:linear-gradient(145deg,#2d66eb,#1d4ed8);display:flex;align-items:center;justify-content:center;}
.td-more-inner{text-align:center;color:#fff;}
.td-more-inner i{font-size:2.7rem;}
.td-more-inner h4{margin-top:.5rem;font-family:'Bebas Neue',sans-serif;font-size:1.5rem;letter-spacing:2px;}

.td-card.hide{opacity:0;transform:scale(.95);pointer-events:none;max-height:0;margin:0;}

.td-talent-section{padding:3.2rem 0;background:linear-gradient(180deg,#f1f5f9 0%,#eef2f7 100%);border-top:1px solid var(--border);}
.td-talent-head{text-align:center;max-width:760px;margin:0 auto 2rem;}
.td-talent-head .eyebrow{justify-content:center;margin-bottom:.65rem;}
.td-talent-head h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.2rem,4.2vw,4rem);letter-spacing:2px;line-height:.95;color:var(--text);}
.td-talent-head p{color:var(--muted);margin-top:.65rem;line-height:1.7;}
.td-talent-carousel{display:grid;grid-template-columns:44px 1fr 44px;gap:.75rem;align-items:center;}
.td-talent-nav{width:44px;height:44px;border-radius:999px;background:#fff;border:1px solid var(--border);color:#ef4444;display:grid;place-items:center;box-shadow:0 8px 18px rgba(15,23,42,.08);}
.td-talent-nav i{font-size:1.2rem;}
.td-talent-track{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(180px,1fr);gap:.8rem;overflow-x:auto;scroll-behavior:smooth;padding:.2rem .1rem .5rem;}
.td-talent-track::-webkit-scrollbar{height:6px;}
.td-talent-track::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:999px;}
.td-talent-card{background:#0b1220;border-radius:10px;overflow:hidden;border:1px solid rgba(255,255,255,.08);box-shadow:0 10px 24px rgba(2,6,23,.2);min-height:276px;}
.td-talent-card-clickable{cursor:pointer;transition:transform .28s var(--ease),box-shadow .28s var(--ease),border-color .28s var(--ease);}
.td-talent-card-clickable:hover{transform:translateY(-6px);border-color:rgba(59,130,246,.55);box-shadow:0 16px 30px rgba(2,6,23,.28);}
.td-talent-poster{height:220px;overflow:hidden;background:#0f172a;}
.td-talent-poster img{width:100%;height:100%;object-fit:cover;display:block;}
.td-talent-name{font-family:'Bebas Neue',sans-serif;color:#fff;font-size:1.12rem;letter-spacing:1px;padding:.75rem .72rem 0;line-height:1;}
.td-talent-role{color:#93c5fd;font-size:.67rem;letter-spacing:1.1px;text-transform:uppercase;padding:.3rem .72rem .9rem;}

.td-star-modal{position:fixed;inset:0;z-index:2147483646;display:none;}
.td-star-modal.open{display:block;}
.td-star-modal-backdrop{position:absolute;inset:0;background:rgba(3,7,18,.88);backdrop-filter:blur(12px);}
.td-star-modal-dialog{position:relative;z-index:1;width:min(1240px,calc(100% - 2rem));min-height:min(760px,calc(100vh - 4rem));margin:2rem auto;border-radius:22px;overflow:hidden;border:1px solid rgba(255,255,255,.08);box-shadow:0 36px 90px rgba(2,6,23,.62);background:#070b17;display:grid;grid-template-columns:minmax(0,1fr);}
.td-star-modal-media{position:absolute;inset:0;}
.td-star-modal-media::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(6,10,22,.96) 0%,rgba(6,10,22,.78) 35%,rgba(6,10,22,.24) 74%,rgba(6,10,22,.72) 100%),linear-gradient(180deg,rgba(6,10,22,.12),rgba(6,10,22,.44));}
.td-star-modal-media img{width:100%;height:100%;object-fit:cover;display:block;filter:brightness(.72);}
.td-star-modal-copy{position:relative;z-index:1;max-width:560px;padding:5rem 2.8rem 2rem;display:flex;flex-direction:column;justify-content:flex-start;min-height:inherit;color:#fff;}
.td-star-modal-kicker{font-size:.72rem;letter-spacing:3px;text-transform:uppercase;color:#ef4444;font-weight:700;margin-bottom:.8rem;}
.td-star-modal-copy h3{font-family:var(--font-display);font-size:clamp(2.9rem,8vw,6.4rem);letter-spacing:2px;line-height:.88;margin-bottom:.55rem;color:#fff;}
.td-star-modal-role{font-size:.95rem;letter-spacing:1.6px;text-transform:uppercase;color:#fca5a5;margin-bottom:1rem;}
.td-star-modal-copy p{font-size:1.02rem;line-height:1.8;color:#dbe4f0;max-width:38rem;margin-bottom:1.4rem;}
.td-star-modal-actions{display:flex;gap:.8rem;flex-wrap:wrap;margin-top:.6rem;}
.td-star-modal-close,.td-star-modal-nav{position:absolute;z-index:3;border-radius:999px;border:1px solid rgba(255,255,255,.16);background:rgba(10,15,28,.7);color:#fff;display:grid;place-items:center;box-shadow:0 10px 24px rgba(2,6,23,.28);}
.td-star-modal-close{top:1rem;right:1rem;width:42px;height:42px;}
.td-star-modal-nav{top:50%;transform:translateY(-50%);width:44px;height:44px;}
.td-star-modal-prev{left:1rem;}
.td-star-modal-next{right:1rem;}
.td-star-modal-thumbs{position:relative;z-index:1;display:flex;gap:.75rem;overflow-x:auto;padding:0 2.8rem 2rem;align-items:center;margin-top:auto;}
.td-star-modal-thumbs::-webkit-scrollbar{height:6px;}
.td-star-modal-thumbs::-webkit-scrollbar-thumb{background:rgba(148,163,184,.45);border-radius:999px;}
.td-star-thumb{width:92px;height:122px;border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,.16);background:#101828;flex:0 0 auto;opacity:.52;box-shadow:0 8px 18px rgba(2,6,23,.22);transition:transform .25s var(--ease),opacity .25s var(--ease),border-color .25s var(--ease);}
.td-star-thumb.active,.td-star-thumb:hover{opacity:1;transform:translateY(-4px);border-color:#ef4444;}
.td-star-thumb img{width:100%;height:100%;object-fit:cover;display:block;}

.td-modal{position:fixed;inset:0;z-index:1100;display:none;}
.td-modal.open{display:block;}
.td-modal-backdrop{position:absolute;inset:0;background:rgba(2,6,23,.84);backdrop-filter:blur(6px);}
.td-modal-dialog{position:relative;z-index:1;width:min(1120px,calc(100% - 2rem));margin:1.9rem auto;min-height:min(690px,calc(100vh - 3.8rem));border-radius:18px;border:1px solid rgba(148,163,184,.22);overflow:hidden;background:#020611;box-shadow:0 36px 70px rgba(2,6,23,.52);display:grid;grid-template-rows:1fr auto;}
.td-modal-media{position:absolute;inset:0;}
.td-modal-media img{width:100%;height:100%;min-height:100%;object-fit:cover;filter:brightness(.82);}
.td-modal-media::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(3,9,24,.94) 0%,rgba(3,9,24,.74) 44%,rgba(3,9,24,.28) 78%,rgba(3,9,24,.82) 100%),linear-gradient(180deg,rgba(3,9,24,.08),rgba(3,9,24,.42));}
.td-modal-body{position:relative;z-index:1;max-width:540px;padding:5rem 2.8rem 1.8rem;display:flex;flex-direction:column;justify-content:flex-start;min-height:inherit;grid-row:1;}
.td-modal-meta{font-size:.72rem;letter-spacing:2.5px;text-transform:uppercase;color:#f43f5e;font-weight:700;margin-bottom:.65rem;}
.td-modal-body h3{font-family:var(--font-display);font-size:clamp(2.8rem,8vw,6.2rem);letter-spacing:2px;line-height:.88;margin-bottom:.55rem;color:#fff;}
.td-modal-episode{font-size:.84rem;color:#fca5a5;text-transform:uppercase;letter-spacing:1.4px;margin-bottom:1rem;}
.td-modal-summary{color:#cbd5e1;opacity:1;line-height:1.75;margin-bottom:1.4rem;}
.td-modal-body .btn{align-self:flex-start;}
.td-modal-close{position:absolute;top:.9rem;right:1rem;width:38px;height:38px;border-radius:999px;border:1px solid rgba(255,255,255,.24);background:rgba(2,6,23,.62);color:#fff;display:grid;place-items:center;z-index:3;}

@media (max-width:900px){
    .td-modal-dialog{width:calc(100% - 1rem);margin:0.5rem auto;min-height:calc(100vh - 1rem);}
    .td-modal-body{padding:4.5rem 1.3rem 1rem;max-width:none;}
    .td-star-modal-dialog{width:calc(100% - 1rem);min-height:calc(100vh - 1rem);margin:0.5rem auto;}
    .td-star-modal-copy{padding:4.5rem 1.3rem 1.2rem;max-width:none;}
    .td-star-modal-thumbs{padding:0 1.3rem 1.2rem;}
}
@media (max-width:640px){
    .td-modal-dialog{width:calc(100% - 1rem);margin:0.5rem auto;}
    .td-modal-body{padding:4.2rem 1rem 0.9rem;}
    .td-modal-body h3{font-size:clamp(2.3rem,11vw,3.7rem);}
    .td-star-modal-copy{padding:4.2rem 1rem 1rem;}
    .td-star-modal-copy h3{font-size:clamp(2.5rem,12vw,4rem);}
    .td-star-modal-actions .btn{flex:1 1 130px;}
    .td-star-modal-thumbs{padding:0 1rem 1rem;}
    .td-star-thumb{width:78px;height:106px;}
}

@media (max-width:1100px){
    .td-featured-shell{min-height:min(690px,calc(100vh - 3.8rem));}
    .td-featured-copy{max-width:none;padding:4.5rem 1.3rem 1.2rem 1.9rem;}
    .td-featured-copy h2{max-width:none;}
    .td-featured-thumbs{padding:0 1.3rem 1.2rem;}
    .td-grid{grid-template-columns:repeat(4,minmax(130px,1fr));}
    .td-talent-track{grid-auto-columns:minmax(170px,1fr);}
}
@media (max-width:900px){
    .td-featured-shell{width:calc(100% - 1rem);min-height:calc(100vh - 1rem);}
    .td-featured-copy{padding:4.2rem 1rem 1rem 1.7rem;}
    .td-featured-copy h2{font-size:clamp(2.5rem,12vw,4rem);}
    .td-featured-thumbs{padding:0 1rem 1rem;}
    .td-thumb{width:78px;height:106px;}
    .td-grid{grid-template-columns:repeat(3,minmax(120px,1fr));}
    .td-talent-carousel{grid-template-columns:36px 1fr 36px;}
    .td-talent-nav{width:36px;height:36px;}
}
@media (max-width:640px){
    .td-featured-section{padding-top:calc(var(--nav-h) + 1.5rem);}
    .td-featured-shell{width:calc(100% - 1rem);margin:0.5rem auto;min-height:calc(100vh - 1rem);}
    .td-slide-nav{width:36px;height:36px;top:auto;bottom:8rem;}
    .td-slide-prev{left:0.65rem;}
    .td-slide-next{right:0.65rem;}
    .td-featured-copy{padding:3.8rem 1rem 1rem 1.5rem;}
    .td-featured-copy h2{font-size:clamp(2.3rem,11vw,3.7rem);}
    .td-featured-copy p{font-size:.95rem;line-height:1.7;}
    .td-grid{grid-template-columns:repeat(2,minmax(120px,1fr));}
    .td-toolbar-title h2{font-size:2.2rem;}
    .td-talent-track{grid-auto-columns:minmax(145px,1fr);}
    .td-talent-poster{height:182px;}
}
</style>
`;
};

window.initTeledramaView = function () {
    const featuredItems = teledramaItems;
    const actorItems = teledramaTalent.actors;
    const writerItems = teledramaTalent.writers;
    const dubbingItems = teledramaTalent.dubbing;
    let activeIndex = 0;
    let autoPlayId = null;
    const autoPlayDelay = 4500;

    const featuredShell = document.querySelector('.td-featured-shell');
    const featuredImage = document.getElementById('td-featured-image');
    const featuredKicker = document.getElementById('td-featured-kicker');
    const featuredTitle = document.getElementById('td-featured-title');
    const featuredMeta = document.getElementById('td-featured-meta');
    const featuredSummary = document.getElementById('td-featured-summary');
    const thumbButtons = document.querySelectorAll('.td-thumb');
    const prevButton = document.getElementById('td-slide-prev');
    const nextButton = document.getElementById('td-slide-next');

    const setSlide = (index) => {
        activeIndex = (index + featuredItems.length) % featuredItems.length;
        const item = featuredItems[activeIndex];
        featuredImage.src = item.image;
        featuredImage.alt = item.title;
        featuredKicker.textContent = item.category.toUpperCase();
        featuredTitle.textContent = item.title;
        featuredMeta.textContent = `${item.genre} • ${item.episodes}`;
        featuredSummary.textContent = item.summary;
        thumbButtons.forEach((button, buttonIndex) => button.classList.toggle('active', buttonIndex === activeIndex));
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

    const resetAutoPlay = () => {
        startAutoPlay();
    };

    thumbButtons.forEach(button => {
        button.addEventListener('click', () => {
            setSlide(parseInt(button.dataset.slide, 10));
            resetAutoPlay();
        });
    });
    prevButton.addEventListener('click', () => {
        setSlide(activeIndex - 1);
        resetAutoPlay();
    });
    nextButton.addEventListener('click', () => {
        setSlide(activeIndex + 1);
        resetAutoPlay();
    });

    if (featuredShell) {
        featuredShell.addEventListener('mouseenter', stopAutoPlay);
        featuredShell.addEventListener('mouseleave', startAutoPlay);
    }

    // Auto-play each talent track independently.
    document.querySelectorAll('.td-talent-track').forEach(track => {
        let talentAutoId = null;

        const getJump = () => {
            const card = track.querySelector('.td-talent-card');
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

    document.querySelectorAll('.td-talent-nav').forEach(button => {
        button.addEventListener('click', () => {
            const track = document.getElementById(button.dataset.track);
            if (!track) return;
            const card = track.querySelector('.td-talent-card');
            const jump = card ? card.getBoundingClientRect().width + 12 : 220;
            const direction = button.dataset.dir === 'next' ? 1 : -1;
            track.scrollBy({ left: direction * jump * 2, behavior: 'smooth' });
        });
    });

    const tabs = document.querySelectorAll('.filter-tab');
    const cards = document.querySelectorAll('.td-card');

    tabs.forEach(tab => tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const cat = tab.dataset.cat;
        cards.forEach(card => {
            if (card.classList.contains('td-more-card')) {
                card.classList.remove('hide');
                return;
            }
            const show = cat === 'all' || card.dataset.cat === cat;
            card.classList.toggle('hide', !show);
        });
    }));

    const modal = document.getElementById('drama-modal');
    const modalTitle = document.getElementById('td-modal-title');
    const modalGenre = document.getElementById('td-modal-genre');
    const modalEpisodes = document.getElementById('td-modal-episodes');
    const modalSummary = document.getElementById('td-modal-summary');
    const modalImage = document.getElementById('td-modal-image');
    const closeBtn = document.getElementById('td-modal-close');
    const starModal = document.getElementById('td-star-modal');
    const starModalImage = document.getElementById('td-star-modal-image');
    const starModalName = document.getElementById('td-star-modal-name');
    const starModalRole = document.getElementById('td-star-modal-role');
    const starModalBio = document.getElementById('td-star-modal-bio');
    const starModalThumbs = document.getElementById('td-star-modal-thumbs');
    const starModalClose = document.getElementById('td-star-modal-close');
    const starModalPrev = document.getElementById('td-star-modal-prev');
    const starModalNext = document.getElementById('td-star-modal-next');
    const starModalKicker = document.querySelector('.td-star-modal-kicker');
    let starIndex = 0;
    let activeStarItems = actorItems;
    let activeStarGroup = 'actors';

    if (modal && modal.parentElement !== document.body) {
        document.body.appendChild(modal);
    }
    if (starModal && starModal.parentElement !== document.body) {
        document.body.appendChild(starModal);
    }

    const renderStarThumbs = () => {
        if (!starModalThumbs) return;
        starModalThumbs.innerHTML = activeStarItems.map((item, index) => `
            <button class="td-star-thumb ${index === starIndex ? 'active' : ''}" data-star-slide="${index}" aria-label="Show ${item.name}">
                <img src="${item.image}" alt="${item.name}">
            </button>
        `).join('');

        starModalThumbs.querySelectorAll('[data-star-slide]').forEach(button => {
            button.addEventListener('click', () => {
                openStarModal(parseInt(button.dataset.starSlide, 10));
            });
        });
    };

    const openStarModal = (index, items = activeStarItems, group = activeStarGroup) => {
        activeStarItems = items;
        activeStarGroup = group;
        starIndex = (index + activeStarItems.length) % activeStarItems.length;
        const item = activeStarItems[starIndex];
        starModalImage.src = item.image;
        starModalImage.alt = item.name;
        starModalName.textContent = item.name;
        starModalRole.textContent = item.role;
        if (activeStarGroup === 'writers') {
            if (starModalKicker) starModalKicker.textContent = 'CREATIVE SPOTLIGHT';
            starModalBio.textContent = `${item.name} shapes the storytelling direction of Ransilu teledramas with strong character arcs, emotional pacing, and memorable scene design.`;
        } else if (activeStarGroup === 'dubbing') {
            if (starModalKicker) starModalKicker.textContent = 'VOICE SPOTLIGHT';
            starModalBio.textContent = `${item.name} gives dramatic characters their emotional tone, clarity, and signature voice in Ransilu teledrama episodes.`;
        } else {
            if (starModalKicker) starModalKicker.textContent = 'PERFORMER SPOTLIGHT';
            starModalBio.textContent = `${item.name} is one of the standout performers in Ransilu teledramas, known for expressive screen presence and memorable character work.`;
        }
        renderStarThumbs();
        starModal.classList.add('open');
        starModal.setAttribute('aria-hidden', 'false');
        starModal.style.display = 'block';
        starModal.style.visibility = 'visible';
        starModal.style.pointerEvents = 'auto';
        document.body.style.overflow = 'hidden';
    };

    const closeStarModal = () => {
        starModal.classList.remove('open');
        starModal.setAttribute('aria-hidden', 'true');
        starModal.style.display = '';
        starModal.style.visibility = '';
        starModal.style.pointerEvents = '';
        document.body.style.overflow = '';
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
        modalImage.alt = card.dataset.title || 'Selected drama';
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        modal.style.display = 'block';
        modal.style.visibility = 'visible';
        modal.style.pointerEvents = 'auto';
        document.body.style.overflow = 'hidden';
    };

    document.querySelectorAll('.td-card:not(.td-more-card)').forEach(card => {
        card.addEventListener('click', () => openModal(card));
    });

    const actorsTrack = document.getElementById('td-actors-track');
    if (actorsTrack) {
        actorsTrack.addEventListener('click', (event) => {
            const card = event.target.closest('.td-talent-card[role="button"]');
            if (!card) return;
            const index = actorItems.findIndex(item => item.name === card.dataset.name);
            openStarModal(index >= 0 ? index : 0, actorItems, 'actors');
        });

        actorsTrack.addEventListener('keydown', (event) => {
            const card = event.target.closest('.td-talent-card[role="button"]');
            if (!card) return;
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                const index = actorItems.findIndex(item => item.name === card.dataset.name);
                openStarModal(index >= 0 ? index : 0, actorItems, 'actors');
            }
        });
    }

    const writersTrack = document.getElementById('td-writers-track');
    if (writersTrack) {
        writersTrack.addEventListener('click', (event) => {
            const card = event.target.closest('.td-talent-card[role="button"]');
            if (!card) return;
            const index = writerItems.findIndex(item => item.name === card.dataset.name);
            openStarModal(index >= 0 ? index : 0, writerItems, 'writers');
        });

        writersTrack.addEventListener('keydown', (event) => {
            const card = event.target.closest('.td-talent-card[role="button"]');
            if (!card) return;
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                const index = writerItems.findIndex(item => item.name === card.dataset.name);
                openStarModal(index >= 0 ? index : 0, writerItems, 'writers');
            }
        });
    }

    const dubbingTrack = document.getElementById('td-dubbing-track');
    if (dubbingTrack) {
        dubbingTrack.addEventListener('click', (event) => {
            const card = event.target.closest('.td-talent-card[role="button"]');
            if (!card) return;
            const index = dubbingItems.findIndex(item => item.name === card.dataset.name);
            openStarModal(index >= 0 ? index : 0, dubbingItems, 'dubbing');
        });

        dubbingTrack.addEventListener('keydown', (event) => {
            const card = event.target.closest('.td-talent-card[role="button"]');
            if (!card) return;
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                const index = dubbingItems.findIndex(item => item.name === card.dataset.name);
                openStarModal(index >= 0 ? index : 0, dubbingItems, 'dubbing');
            }
        });
    }

    document.querySelectorAll('[data-close="true"]').forEach(el => {
        el.addEventListener('click', closeModal);
    });
    closeBtn.addEventListener('click', closeModal);

    document.querySelectorAll('[data-star-close="true"]').forEach(el => {
        el.addEventListener('click', closeStarModal);
    });
    starModalClose.addEventListener('click', closeStarModal);
    starModalPrev.addEventListener('click', () => openStarModal(starIndex - 1));
    starModalNext.addEventListener('click', () => openStarModal(starIndex + 1));

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
        if (e.key === 'Escape' && starModal.classList.contains('open')) closeStarModal();
    });

    setSlide(0);
    startAutoPlay();
};
