const artistProfiles = {
    artists: [
        { name: 'Jackson A.', role: 'Supporting Actor', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=700&auto=format&fit=crop' },
        { name: 'Yashoda W.', role: 'Supporting Actress', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=700&auto=format&fit=crop' },
        { name: 'Damith R.', role: 'Character Actor', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=700&auto=format&fit=crop' },
        { name: 'Nelum P.', role: 'Guest Star', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=700&auto=format&fit=crop' },
        { name: 'Nadeesha K.', role: 'Lead Actress', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=700&auto=format&fit=crop' },
        { name: 'Prabath D.', role: 'Supporting Actor', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=700&auto=format&fit=crop' },
        { name: 'Rashmi J.', role: 'Character Actress', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=700&auto=format&fit=crop' },
        { name: 'Sandun M.', role: 'Guest Actor', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=700&auto=format&fit=crop' }
    ],
    writers: [
        { name: 'R. Silva', role: 'Head Writer', image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=700&auto=format&fit=crop' },
        { name: 'Anusha P.', role: 'Screenwriter', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=700&auto=format&fit=crop' },
        { name: 'L. Rajapaksha', role: 'Story Writer', image: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=700&auto=format&fit=crop' },
        { name: 'H. Kumari', role: 'Script Editor', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=700&auto=format&fit=crop' },
        { name: 'I. Senanayake', role: 'Dialogue Writer', image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=700&auto=format&fit=crop' },
        { name: 'V. Dissanayake', role: 'Showrunner', image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=700&auto=format&fit=crop' },
        { name: 'K. Fernando', role: 'Creative Writer', image: 'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=700&auto=format&fit=crop' },
        { name: 'M. Perera', role: 'Screenplay Writer', image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=700&auto=format&fit=crop' }
    ],
    directors: [
        { name: 'K. Fernando', role: 'Director', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=700&auto=format&fit=crop' },
        { name: 'M. Perera', role: 'Assistant Director', image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=700&auto=format&fit=crop' },
        { name: 'D. Jayasuriya', role: 'Series Director', image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=700&auto=format&fit=crop' },
        { name: 'S. Weerasinghe', role: 'Creative Producer', image: 'https://images.unsplash.com/photo-1502764613149-7f1d229e230f?q=80&w=700&auto=format&fit=crop' },
        { name: 'Ruwan H.', role: 'Second Unit Director', image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=700&auto=format&fit=crop' },
        { name: 'Nethmi A.', role: 'Episode Director', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=700&auto=format&fit=crop' },
        { name: 'Tharindu J.', role: 'Action Director', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=700&auto=format&fit=crop' },
        { name: 'Samadhi W.', role: 'Drama Director', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=700&auto=format&fit=crop' }
    ]
};

const profileGroups = {
    artists: {
        title: 'ARTIST PROFILES',
        subtitle: 'Lead and supporting performers of Ransilu productions.',
        kicker: 'Performer Spotlight',
        items: artistProfiles.artists
    },
    writers: {
        title: 'SONG WRITERS PROFILES',
        subtitle: 'Writers crafting unforgettable melodies and lyrics.',
        kicker: 'Writer Spotlight',
        items: artistProfiles.writers
    },
    directors: {
        title: 'MUSIC DIRECTORS PROFILES',
        subtitle: 'Directors defining the sound and emotion of each production.',
        kicker: 'Director Spotlight',
        items: artistProfiles.directors
    }
};

const profileSummary = {
    artists: 'A standout performer in Ransilu productions, known for expressive screen presence and memorable character work.',
    writers: 'A key creative voice shaping stories, lyrics, and dramatic structure behind the Ransilu entertainment universe.',
    directors: 'A visual storyteller guiding tone, rhythm, and emotional impact across high-profile Ransilu releases.'
};

const artistSection = (groupKey, trackId) => {
    const group = profileGroups[groupKey];
    const cards = group.items.map((item, index) => `
        <article class="artist-card" data-group="${groupKey}" data-index="${index}" tabindex="0" role="button" aria-label="Open ${item.name} profile">
            <div class="artist-card-image-wrap">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="artist-card-body">
                <h3>${item.name}</h3>
                <p>${item.role}</p>
            </div>
        </article>
    `).join('');

    return `
        <section class="artist-section sr">
            <div class="artist-head">
                <h2>${group.title}</h2>
                <p>${group.subtitle}</p>
            </div>
            <div class="artist-carousel-shell">
                <button class="artist-nav" data-dir="prev" data-track="${trackId}" aria-label="Previous ${group.title}">
                    <i class="ph ph-caret-left"></i>
                </button>
                <div class="artist-track" id="${trackId}">
                    ${cards}
                </div>
                <button class="artist-nav" data-dir="next" data-track="${trackId}" aria-label="Next ${group.title}">
                    <i class="ph ph-caret-right"></i>
                </button>
            </div>
        </section>
    `;
};

window.ArtistsView = function () {
    return `
<section class="artist-page">
    <div class="container artist-page-shell">
        <header class="artist-hero sr">
            <div class="eyebrow">Ransilu Talent Universe</div>
            <h1>ARTIST PROFILES</h1>
            <p>Discover the faces and minds shaping our storytelling world.</p>
        </header>

        ${artistSection('artists', 'artists-main-track')}
        ${artistSection('writers', 'artists-writers-track')}
        ${artistSection('directors', 'artists-directors-track')}
    </div>
</section>

<div class="artist-spotlight" id="artist-spotlight" aria-hidden="true">
    <div class="artist-spotlight-backdrop" data-close-spotlight="true"></div>
    <div class="artist-spotlight-shell" role="dialog" aria-modal="true" aria-label="Artist profile details">
        <button class="spotlight-close" id="spotlight-close" aria-label="Close profile">
            <i class="ph ph-x"></i>
        </button>
        <button class="spotlight-side-nav spotlight-prev" id="spotlight-prev" aria-label="Previous profile">
            <i class="ph ph-caret-left"></i>
        </button>
        <button class="spotlight-side-nav spotlight-next" id="spotlight-next" aria-label="Next profile">
            <i class="ph ph-caret-right"></i>
        </button>

        <div class="spotlight-bg" id="spotlight-bg"></div>

        <div class="spotlight-main">
            <div class="spotlight-copy">
                <div class="spotlight-kicker" id="spotlight-kicker"></div>
                <h2 id="spotlight-name"></h2>
                <div class="spotlight-meta" id="spotlight-role"></div>
                <p id="spotlight-summary"></p>
                <div class="spotlight-actions">
                    <button class="btn btn-primary"><i class="ph ph-play"></i> View Profile</button>
                    <button class="btn btn-outline"><i class="ph ph-book-open"></i> More Details</button>
                </div>
            </div>

            <div class="spotlight-thumbs" id="spotlight-thumbs"></div>
        </div>
    </div>
</div>

<style>
.artist-page {
    padding: calc(var(--nav-h) + 2.6rem) 0 4rem;
    background: linear-gradient(180deg, #e9edf3 0%, #f5f7fb 56%, #eef2f7 100%);
    min-height: calc(100vh - var(--nav-h));
}

.artist-page-shell {
    display: grid;
    gap: 1.75rem;
}

.artist-hero {
    text-align: center;
    max-width: 760px;
    margin: 0 auto 0.4rem;
}

.artist-hero h1 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(2.6rem, 6vw, 5rem);
    letter-spacing: 2.6px;
    color: #0f172a;
    line-height: 0.9;
    margin-top: 0.6rem;
}

.artist-hero p {
    color: #475569;
    margin-top: 0.8rem;
}

.artist-section {
    background: rgba(255, 255, 255, 0.56);
    border: 1px solid rgba(15, 23, 42, 0.08);
    border-radius: 18px;
    padding: 1.1rem 1.1rem 1.25rem;
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
}

.artist-head {
    margin: 0.35rem 0 1rem;
    text-align: center;
}

.artist-head h2 {
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 1.8px;
    font-size: clamp(1.85rem, 3.6vw, 2.8rem);
    color: #0b1324;
}

.artist-head p {
    color: #64748b;
    margin-top: 0.35rem;
    font-size: 0.96rem;
}

.artist-carousel-shell {
    display: grid;
    grid-template-columns: 52px 1fr 52px;
    gap: 0.85rem;
    align-items: center;
}

.artist-track {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(170px, 1fr);
    gap: 0.8rem;
    overflow-x: auto;
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: #94a3b8 #e2e8f0;
    padding: 0.2rem 0.15rem 0.3rem;
}

.artist-track::-webkit-scrollbar {
    height: 6px;
}

.artist-track::-webkit-scrollbar-thumb {
    background: #94a3b8;
    border-radius: 999px;
}

.artist-card {
    background: #071633;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid rgba(148, 163, 184, 0.35);
    box-shadow: 0 12px 24px rgba(2, 6, 23, 0.25);
    min-height: 330px;
    cursor: pointer;
    transition: transform 0.24s var(--ease), box-shadow 0.24s var(--ease);
}

.artist-card:hover,
.artist-card:focus-visible {
    transform: translateY(-4px);
    box-shadow: 0 18px 32px rgba(2, 6, 23, 0.32);
}

.artist-card-image-wrap {
    height: 250px;
    overflow: hidden;
    background: #0f172a;
}

.artist-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.45s var(--ease);
}

.artist-card:hover img {
    transform: scale(1.05);
}

.artist-card-body {
    padding: 0.95rem 0.9rem 0.85rem;
}

.artist-card h3 {
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 1.1px;
    font-size: 1.62rem;
    color: #ffffff;
    line-height: 0.95;
}

.artist-card p {
    margin-top: 0.48rem;
    color: #8ec5ff;
    letter-spacing: 1.3px;
    text-transform: uppercase;
    font-size: 0.74rem;
}

.artist-nav {
    width: 52px;
    height: 52px;
    border-radius: 999px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    background: rgba(255, 255, 255, 0.95);
    color: #ef4444;
    display: grid;
    place-items: center;
    box-shadow: 0 8px 18px rgba(15, 23, 42, 0.12);
    transition: transform 0.2s var(--ease), box-shadow 0.2s var(--ease);
}

.artist-nav:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 26px rgba(15, 23, 42, 0.16);
}

.artist-nav i {
    font-size: 1.35rem;
}

.artist-spotlight {
    position: fixed;
    inset: 0;
    z-index: 1100;
    display: none;
}

.artist-spotlight.open {
    display: block;
}

.artist-spotlight-backdrop {
    position: absolute;
    inset: 0;
    background: rgba(2, 6, 23, 0.82);
    backdrop-filter: blur(6px);
}

.artist-spotlight-shell {
    position: relative;
    z-index: 1;
    width: min(1120px, calc(100% - 2rem));
    margin: 2rem auto;
    min-height: min(700px, calc(100vh - 4rem));
    border: 1px solid rgba(148, 163, 184, 0.22);
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 40px 70px rgba(2, 6, 23, 0.5);
    background: #020611;
}

.spotlight-bg {
    position: absolute;
    inset: 0;
    background-position: center;
    background-size: cover;
    filter: saturate(0.95) brightness(0.8);
    transform: scale(1.02);
}

.spotlight-bg::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
        linear-gradient(90deg, rgba(3, 9, 24, 0.94) 0%, rgba(3, 9, 24, 0.75) 42%, rgba(3, 9, 24, 0.3) 76%, rgba(3, 9, 24, 0.8) 100%),
        linear-gradient(180deg, rgba(3, 9, 24, 0.05) 0%, rgba(3, 9, 24, 0.4) 100%);
}

.spotlight-main {
    position: relative;
    z-index: 1;
    min-height: inherit;
    display: grid;
    grid-template-rows: 1fr auto;
}

.spotlight-copy {
    padding: 5.2rem 3rem 2rem;
    max-width: 520px;
}

.spotlight-kicker {
    color: #f43f5e;
    font-size: 0.74rem;
    letter-spacing: 2.8px;
    text-transform: uppercase;
    font-weight: 700;
}

.spotlight-copy h2 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(2.6rem, 8vw, 6.2rem);
    letter-spacing: 2px;
    color: #f8fafc;
    margin-top: 0.75rem;
    line-height: 0.88;
}

.spotlight-meta {
    margin-top: 0.7rem;
    color: #fca5a5;
    font-size: 0.86rem;
    letter-spacing: 1.4px;
    text-transform: uppercase;
}

.spotlight-copy p {
    margin-top: 1rem;
    color: #cbd5e1;
    line-height: 1.75;
}

.spotlight-actions {
    display: flex;
    gap: 0.75rem;
    margin-top: 1.5rem;
    flex-wrap: wrap;
}

.spotlight-actions .btn {
    min-width: 150px;
}

.spotlight-actions .btn-outline {
    color: #e2e8f0;
    border-color: rgba(226, 232, 240, 0.45);
    background: rgba(15, 23, 42, 0.25);
}

.spotlight-actions .btn-outline:hover {
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.75);
    background: rgba(30, 41, 59, 0.55);
}

.spotlight-thumbs {
    display: flex;
    gap: 0.68rem;
    padding: 1rem 2.8rem 1.35rem;
    overflow-x: auto;
}

.spotlight-thumb {
    width: 88px;
    height: 116px;
    border-radius: 10px;
    overflow: hidden;
    border: 2px solid rgba(148, 163, 184, 0.5);
    background: #020617;
    opacity: 0.72;
    flex: 0 0 auto;
    transition: transform 0.22s var(--ease), border-color 0.22s var(--ease), opacity 0.22s var(--ease);
}

.spotlight-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.spotlight-thumb.active,
.spotlight-thumb:hover {
    opacity: 1;
    transform: translateY(-3px);
    border-color: #f43f5e;
}

.spotlight-close {
    position: absolute;
    top: 0.9rem;
    right: 1rem;
    z-index: 3;
    width: 38px;
    height: 38px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    background: rgba(2, 6, 23, 0.62);
    display: grid;
    place-items: center;
}

.spotlight-side-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
    width: 46px;
    height: 46px;
    border-radius: 999px;
    display: grid;
    place-items: center;
    background: rgba(2, 6, 23, 0.65);
    border: 1px solid rgba(255, 255, 255, 0.22);
    color: #f43f5e;
}

.spotlight-prev {
    left: 1rem;
}

.spotlight-next {
    right: 1rem;
}

@media (max-width: 980px) {
    .artist-carousel-shell {
        grid-template-columns: 44px 1fr 44px;
        gap: 0.6rem;
    }

    .artist-nav {
        width: 44px;
        height: 44px;
    }

    .artist-track {
        grid-auto-columns: minmax(158px, 1fr);
    }

    .artist-card-image-wrap {
        height: 220px;
    }

    .spotlight-copy {
        padding: 4.6rem 1.5rem 1.25rem;
    }

    .spotlight-thumbs {
        padding: 0.8rem 1.4rem 1rem;
    }

    .spotlight-thumb {
        width: 78px;
        height: 104px;
    }
}

@media (max-width: 640px) {
    .artist-page {
        padding-top: calc(var(--nav-h) + 1.7rem);
    }

    .artist-section {
        padding: 0.85rem 0.75rem 1rem;
    }

    .artist-track {
        grid-auto-columns: minmax(150px, 1fr);
    }

    .artist-card {
        min-height: 292px;
    }

    .artist-card-image-wrap {
        height: 195px;
    }

    .artist-card h3 {
        font-size: 1.38rem;
    }

    .artist-card p {
        font-size: 0.66rem;
    }

    .artist-spotlight-shell {
        width: calc(100% - 1rem);
        margin: 0.5rem auto;
        min-height: calc(100vh - 1rem);
    }

    .spotlight-side-nav {
        width: 38px;
        height: 38px;
        top: auto;
        bottom: 8.2rem;
    }

    .spotlight-prev {
        left: 0.7rem;
    }

    .spotlight-next {
        right: 0.7rem;
    }

    .spotlight-copy {
        padding: 4.3rem 1rem 1rem;
    }

    .spotlight-copy h2 {
        font-size: clamp(2.2rem, 11vw, 3.6rem);
    }

    .spotlight-actions .btn {
        min-width: 0;
        flex: 1 1 120px;
    }

    .spotlight-thumbs {
        gap: 0.5rem;
        padding: 0.65rem 0.8rem 0.8rem;
    }

    .spotlight-thumb {
        width: 66px;
        height: 86px;
    }
}
</style>
`;
};

window.initArtistsView = function () {
    document.querySelectorAll('.artist-nav').forEach(button => {
        button.addEventListener('click', () => {
            const track = document.getElementById(button.dataset.track);
            if (!track) return;

            const firstCard = track.querySelector('.artist-card');
            const cardJump = firstCard ? firstCard.getBoundingClientRect().width + 13 : 190;
            const direction = button.dataset.dir === 'next' ? 1 : -1;

            track.scrollBy({
                left: direction * cardJump * 2,
                behavior: 'smooth'
            });
        });
    });

    const spotlight = document.getElementById('artist-spotlight');
    const spotlightBg = document.getElementById('spotlight-bg');
    const spotlightName = document.getElementById('spotlight-name');
    const spotlightRole = document.getElementById('spotlight-role');
    const spotlightKicker = document.getElementById('spotlight-kicker');
    const spotlightSummary = document.getElementById('spotlight-summary');
    const thumbsWrap = document.getElementById('spotlight-thumbs');
    const closeBtn = document.getElementById('spotlight-close');
    const prevBtn = document.getElementById('spotlight-prev');
    const nextBtn = document.getElementById('spotlight-next');

    const state = {
        group: 'artists',
        index: 0
    };

    const getGroupItems = () => profileGroups[state.group].items;

    const renderThumbs = () => {
        const items = getGroupItems();
        thumbsWrap.innerHTML = items.map((item, index) => `
            <button class="spotlight-thumb ${index === state.index ? 'active' : ''}" data-thumb-index="${index}" aria-label="Show ${item.name}">
                <img src="${item.image}" alt="${item.name}">
            </button>
        `).join('');

        thumbsWrap.querySelectorAll('.spotlight-thumb').forEach(button => {
            button.addEventListener('click', () => {
                state.index = parseInt(button.dataset.thumbIndex, 10);
                updateSpotlight();
            });
        });
    };

    const updateSpotlight = () => {
        const groupData = profileGroups[state.group];
        const items = groupData.items;
        const item = items[state.index];

        spotlightBg.style.backgroundImage = `url('${item.image}')`;
        spotlightName.textContent = item.name.toUpperCase();
        spotlightRole.textContent = item.role;
        spotlightKicker.textContent = groupData.kicker;
        spotlightSummary.textContent = profileSummary[state.group];

        renderThumbs();
    };

    const openSpotlight = (group, index) => {
        state.group = group;
        state.index = index;
        updateSpotlight();

        spotlight.classList.add('open');
        spotlight.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    const closeSpotlight = () => {
        spotlight.classList.remove('open');
        spotlight.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    document.querySelectorAll('.artist-card').forEach(card => {
        const openCardProfile = () => {
            const group = card.dataset.group;
            const index = parseInt(card.dataset.index, 10);
            if (!profileGroups[group] || Number.isNaN(index)) return;
            openSpotlight(group, index);
        };

        card.addEventListener('click', openCardProfile);
        card.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openCardProfile();
            }
        });
    });

    prevBtn.addEventListener('click', () => {
        const items = getGroupItems();
        state.index = (state.index - 1 + items.length) % items.length;
        updateSpotlight();
    });

    nextBtn.addEventListener('click', () => {
        const items = getGroupItems();
        state.index = (state.index + 1) % items.length;
        updateSpotlight();
    });

    closeBtn.addEventListener('click', closeSpotlight);
    spotlight.querySelectorAll('[data-close-spotlight="true"]').forEach(el => {
        el.addEventListener('click', closeSpotlight);
    });

    document.addEventListener('keydown', (event) => {
        if (!spotlight.classList.contains('open')) return;
        if (event.key === 'Escape') closeSpotlight();
        if (event.key === 'ArrowLeft') prevBtn.click();
        if (event.key === 'ArrowRight') nextBtn.click();
    });
};
