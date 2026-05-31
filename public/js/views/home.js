window.HomeView = function () {
    return `
<!-- ══ HERO SECTION ══ -->
<section class="bento-hero">
    <div class="container hero-shell">
        <h1 class="hero-title sr">RANSILU</h1>
        <div class="hero-subtitle sr sr-d1">Sound, Pulse, Emotion.</div>
        <p class="hero-desc sr sr-d2">One universe. Endless content. Sri Lanka's most celebrated music label, award-winning teledramas, and live 24/7 web radio — all on Ransilu.</p>

        <div class="hero-cta-row sr sr-d2">
            <a href="https://music-one-gray.vercel.app/" class="hero-cta-btn cta-primary"><i class="ph-fill ph-music-notes"></i> Explore Music Label</a>
            <a href="./radio/" class="hero-cta-btn cta-outline"><i class="ph-fill ph-broadcast"></i> Start Live Radio</a>
        </div>

        <div class="hero-stats-grid">
            <div class="stat-box sr sr-d1">
                <div class="s-val count-up" data-to="10000" data-suffix="+">0</div>
                <div class="s-lbl">Songs</div>
            </div>
            <div class="stat-box sr sr-d2">
                <div class="s-val count-up" data-to="50" data-suffix="+">0</div>
                <div class="s-lbl">Teledramas</div>
            </div>
            <div class="stat-box sr sr-d3">
                <div class="s-val count-up" data-to="1.3" data-suffix="M" data-decimal="1">0</div>
                <div class="s-lbl">Listeners</div>
            </div>
            <div class="stat-box sr sr-d4">
                <div class="s-val count-up" data-to="28" data-suffix="">0</div>
                <div class="s-lbl">Years Active</div>
            </div>
        </div>
    </div>
</section>

<!-- ══ WEB RADIO SECTION ══ -->
<section class="bento-radio">
    <div class="container" style="padding-top: 4rem; padding-bottom: 4rem;">
        <h2 class="section-title sr">RANSILU WEB RADIO</h2>
        <p class="section-sub sr sr-d1">Music for Every Moment.<br>The pulse of Sri Lanka — Sinhala music, live talk shows, and concert streams, 24 hours a day.<br>Broadcasting live from our Colombo studio.</p>
        
        <div class="radio-player-center sr sr-d2">
            <div class="now-playing-sub">Now Playing — Ransilu Studio Mix</div>
            <div class="radio-wave-img">
                <div class="w-bars w-bars-animated">
                    <span></span><span></span><span></span><span></span><span></span>
                    <span></span><span></span><span></span><span></span><span></span>
                    <span></span><span></span><span></span><span></span><span></span>
                    <span></span><span></span><span></span><span></span><span></span>
                    <span></span><span></span><span></span><span></span>
                </div>
            </div>
            <a href="./radio/" class="bento-btn-listen">
                <i class="ph-fill ph-play" style="margin-right: 8px; font-size:1.1rem;"></i> Listen Now
            </a>
        </div>
    </div>
</section>

<!-- ══ BENTO SECTIONS ══ -->
<section class="bento-main-black">
    <div class="container">

    <!-- ═══ Teledramas & Films ═══ -->
        <div class="bento-section">
            <div class="bento-header sr">
                <div>
                    <h2>RANSILU TELEDRAMAS & FILMS</h2>
                    <p>Award-Winning Stories. Unforgettable Dramas.</p>
                </div>
                <div class="social-icons">
                    <i class="ph-fill ph-facebook-logo" style="color:#1877F2"></i>
                    <i class="ph-fill ph-youtube-logo" style="color:#FF0000"></i>
                </div>
            </div>
            
            <div class="bento-grid tele-grid">
                <div class="bento-card tc-left bento-anim" data-delay="0">
                    <img src="https://images.unsplash.com/photo-1485001254623-fc2477ba06ea?w=400&auto=format&fit=crop" alt="Sonduru Wasanthaya">
                    <div class="card-overlay"><h4>Sonduru Wasanthaya</h4></div>
                </div>
                <div class="bento-card tc-mid bento-anim" data-delay="1">
                    <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&auto=format&fit=crop" alt="Gini Avisi">
                    <div class="card-overlay"><h4>Gini Avisi</h4></div>
                </div>
                <div class="bento-card tc-r-top bento-anim" data-delay="2">
                    <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&auto=format&fit=crop" alt="Waligampitiya">
                    <div class="card-overlay"><h4>Waligampitiya</h4></div>
                </div>
                <div class="bento-card tc-r-b1 bento-anim" data-delay="3">
                    <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=300&auto=format&fit=crop" alt="Ran Asipatha">
                    <div class="card-overlay"><h4>Ran Asipatha</h4></div>
                </div>
                <div class="bento-card tc-r-b2 bento-anim" data-delay="3">
                    <img src="https://images.unsplash.com/photo-1533104816-cdd230239634?w=300&auto=format&fit=crop" alt="Ahas Maliga">
                    <div class="card-overlay"><h4>Ahas Maliga</h4></div>
                </div>
                <button class="bento-rect-btn tc-more bento-anim" data-delay="4" onclick="window.location.hash='#/teledrama'">More</button>
            </div>
        </div>
        
        <!-- ═══ Record Label Highlights ═══ -->
        <div class="bento-section">
            <div class="bento-header sr">
                <div>
                    <h2>RANSILU RECORD LABEL</h2>
                    <p>The Starting Point of Sri Lanka's Music Icons.</p>
                </div>
                <div class="social-icons">
                    <i class="ph-fill ph-spotify-logo" style="color:#1DB954"></i>
                    <i class="ph-fill ph-youtube-logo" style="color:#FF0000"></i>
                </div>
            </div>
            
            <div class="bento-grid tele-grid">
                <a href="https://music-one-gray.vercel.app/" class="bento-card tc-left bento-anim" data-delay="0">
                    <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&auto=format&fit=crop" alt="Ransilu Music">
                    <div class="card-overlay"><h4>Ransilu Music</h4></div>
                </a>
                <a href="https://music-one-gray.vercel.app/" class="bento-card tc-mid bento-anim" data-delay="1">
                    <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&auto=format&fit=crop" alt="Gini Avisi">
                    <div class="card-overlay"><h4>Ransilu Music</h4></div>
                </a>
                <a href="https://music-one-gray.vercel.app/" class="bento-card tc-r-top bento-anim" data-delay="2">
                    <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&auto=format&fit=crop" alt="Waligampitiya">
                    <div class="card-overlay"><h4>Ransilu Music</h4></div>
                </a>
                <a href="https://music-one-gray.vercel.app/" class="bento-card tc-r-b1 bento-anim" data-delay="3">
                    <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=300&auto=format&fit=crop" alt="Ran Asipatha">
                    <div class="card-overlay"><h4>Ransilu Music</h4></div>
                </a>
                <a href="https://music-one-gray.vercel.app/" class="bento-card tc-r-b2 bento-anim" data-delay="3">
                    <img src="https://images.unsplash.com/photo-1533104816-cdd230239634?w=300&auto=format&fit=crop" alt="Ahas Maliga">
                    <div class="card-overlay"><h4>Ransilu Music</h4></div>
                </a>
                <a href="https://music-one-gray.vercel.app/" class="bento-rect-btn tc-more bento-anim" data-delay="4">Visit Store</a>
            </div>
        </div>

        <!-- ═══ Cartoons ═══ -->
        <div class="bento-section">
            <div class="bento-header sr">
                <div>
                    <h2>RANSILU CARTOONS</h2>
                    <p>Cartoon Magic for Kids.</p>
                </div>
                <div class="social-icons">
                    <i class="ph-fill ph-facebook-logo" style="color:#1877F2"></i>
                    <i class="ph-fill ph-youtube-logo" style="color:#FF0000"></i>
                </div>
            </div>
            
            <div class="bento-grid tele-grid">
                <div class="bento-card tc-left bento-anim" data-delay="0">
                    <img src="https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400&auto=format&fit=crop" alt="Ransilu Toons">
                    <div class="card-overlay"><h4>Ransilu Toons</h4></div>
                </div>
                <div class="bento-card tc-mid bento-anim" data-delay="1">
                    <img src="https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?w=400&auto=format&fit=crop" alt="Seetha Devi">
                    <div class="card-overlay"><h4>Seetha Devi</h4></div>
                </div>
                <div class="bento-card tc-r-top bento-anim" data-delay="2">
                    <img src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&auto=format&fit=crop" alt="Lama Lokaya">
                    <div class="card-overlay"><h4>Lama Lokaya</h4></div>
                </div>
                <div class="bento-card tc-r-b1 bento-anim" data-delay="3">
                    <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&auto=format&fit=crop" alt="Punchi Hamu">
                    <div class="card-overlay"><h4>Punchi Hamu</h4></div>
                </div>
                <div class="bento-card tc-r-b2 bento-anim" data-delay="3">
                    <img src="https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=300&auto=format&fit=crop" alt="Podi Api">
                    <div class="card-overlay"><h4>Podi Api</h4></div>
                </div>
                <button class="bento-rect-btn tc-more bento-anim" data-delay="4" onclick="window.location.hash='#/cartoon'">More</button>
            </div>
        </div>

    </div>

    <!-- ══ PARTNERS INFINITE MARQUEE ══ -->
    <div class="partners-strip bento-partners">
        <p class="partners-title sr">Trusted Partners Across Sri Lanka</p>
        <div class="partners-track">
            <span class="partner-logo">RUPAVAHINI</span>
            <span class="partner-logo">RUPAVAHINI</span>
            <span class="partner-logo">RUPAVAHINI</span>
            <span class="partner-logo">RUPAVAHINI</span>
            <span class="partner-logo">RUPAVAHINI</span>
            <span class="partner-logo">RUPAVAHINI</span>
            <span class="partner-logo">RUPAVAHINI</span>
            <span class="partner-logo">RUPAVAHINI</span>
            <span class="partner-logo">RUPAVAHINI</span>
            <span class="partner-logo">RUPAVAHINI</span>
            <span class="partner-logo">RUPAVAHINI</span>
            <span class="partner-logo">RUPAVAHINI</span>
            <span class="partner-logo">RUPAVAHINI</span>
            <span class="partner-logo">RUPAVAHINI</span>
        </div>
    </div>
</section>
`;
};

window.initHomeView = function () {

    /* ── Count-up animation ── */
    const counters = document.querySelectorAll('.count-up');

    // Force all counters to show "0" immediately
    counters.forEach(c => { c.textContent = '0'; });

    const startCounting = () => {
        const countObs = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                if (el.dataset.counted) return;
                el.dataset.counted = 'true';

                const to = parseFloat(el.dataset.to);
                const suffix = el.dataset.suffix || '';
                const decimal = parseInt(el.dataset.decimal) || 0;
                const duration = 2500;

                // Reset to 0 before starting
                el.textContent = '0';

                const start = performance.now();
                const tick = (now) => {
                    const elapsed = now - start;
                    const progress = Math.min(elapsed / duration, 1);
                    // Ease out cubic for smooth deceleration
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const current = eased * to;

                    if (decimal > 0) {
                        el.textContent = current.toFixed(decimal) + suffix;
                    } else {
                        const formatted = Math.floor(current).toLocaleString().replace(/,/g, ' ');
                        el.textContent = formatted + suffix;
                    }

                    if (progress < 1) {
                        requestAnimationFrame(tick);
                    }
                };
                requestAnimationFrame(tick);
                countObs.unobserve(el);
            });
        }, { threshold: 0.3 });
        counters.forEach(c => countObs.observe(c));
    };

    // Wait for preloader to finish before starting counters
    setTimeout(startCounting, 3500);

    /* ── Staggered bento card reveal ── */
    const bentoCards = document.querySelectorAll('.bento-anim');
    const cardObs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const delay = parseInt(el.dataset.delay || '0') * 100;
            setTimeout(() => {
                el.classList.add('bento-visible');
            }, delay);
            cardObs.unobserve(el);
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    bentoCards.forEach(c => cardObs.observe(c));

    /* ── Waveform animation ── */
    const waveBars = document.querySelectorAll('.w-bars-animated span');
    waveBars.forEach((bar, i) => {
        const baseHeight = parseInt(getComputedStyle(bar).height);
        const animate = () => {
            const h = baseHeight + Math.sin(Date.now() / 300 + i * 0.8) * (baseHeight * 0.5);
            bar.style.height = Math.max(4, h) + 'px';
            requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    });

    /* ── Image parallax on hover ── */
    document.querySelectorAll('.bento-card').forEach(card => {
        const img = card.querySelector('img');
        if (!img) return;
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            img.style.transform = 'scale(1.08) translate(' + (x * -10) + 'px, ' + (y * -10) + 'px)';
        });
        card.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1) translate(0, 0)';
        });
    });
};
