/**
 * Ransilu.com — App Core
 * GSAP Router + Aurora Canvas + Ripple + Scroll Reveal + Audio
 */

/* ─────────────── GSAP REGISTER ─────────── */
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

document.addEventListener('DOMContentLoaded', () => {

    /* ── DOM ── */
    const appContent = document.getElementById('app-content');
    const navbar = document.getElementById('navbar');
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const globalPlayer = document.getElementById('global-player');
    const globalPlayBtn = document.getElementById('global-play-btn');
    const gpIcon = document.getElementById('gp-icon');
    const gpWaves = document.getElementById('gp-waves');
    const audioEl = document.getElementById('radio-audio');
    const transition = document.getElementById('page-transition');

    let isPlaying = false;
    let currentView = '';

    /* ───────────────────────────────────────
       PRELOADER
    ─────────────────────────────────────── */
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        gsap.to(preloader, {
            opacity: 0, duration: 0.8, ease: 'power2.inOut',
            onComplete: () => {
                preloader.classList.add('done');
                // Only then reveal navbar
                navbar.classList.add('visible');
            }
        });
    }, 3000);

    /* ───────────────────────────────────────
       AURORA CANVAS BACKGROUND
    ─────────────────────────────────────── */
    (() => {
        const cv = document.getElementById('ambient-canvas');
        if (!cv) return;
        const ctx = cv.getContext('2d');
        let W, H, mx = 0, my = 0, tx = 0, ty = 0, time = 0;
        const particles = [];

        const resize = () => {
            W = cv.width = window.innerWidth;
            H = cv.height = window.innerHeight;
            tx = W / 2; ty = H / 2;
        };
        window.addEventListener('resize', resize);
        resize();
        window.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });

        class P {
            constructor() { this.init(); }
            init() {
                this.x = Math.random() * W;
                this.y = Math.random() * H;
                this.r = Math.random() * 1.5 + 0.3;
                this.vx = (Math.random() - .5) * .5;
                this.vy = (Math.random() - .5) * .5;
                this.a = Math.random() * .4 + .05;
                this.life = Math.random() * 300 + 100;
                this.maxLife = this.life;
            }
            update() {
                const dx = mx - this.x, dy = my - this.y;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < 350) { this.vx += dx * .00006; this.vy += dy * .00006; }
                this.vx *= .99; this.vy *= .99;
                this.x += this.vx + (Math.random() - .5) * .3;
                this.y += this.vy + (Math.random() - .5) * .3;
                this.life--;
                if (this.life < 0 || this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.init();
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(37,99,235,${this.a * (this.life / this.maxLife)})`;
                ctx.fill();
            }
        }
        for (let i = 0; i < 90; i++) particles.push(new P());

        const orbs = [
            { rx: .2, ry: .3, size: 600, c: 'rgba(37,99,235,0.06)' },
            { rx: .8, ry: .7, size: 500, c: 'rgba(37,99,235,0.05)' },
            { rx: .5, ry: .5, size: 400, c: 'rgba(37,99,235,0.03)' },
        ];

        (function animate() {
            ctx.clearRect(0, 0, W, H);
            time += .003;
            mx += (tx - mx) * .04;
            my += (ty - my) * .04;

            orbs.forEach((o, i) => {
                const ox = W * o.rx + Math.sin(time + i) * 130;
                const oy = H * o.ry + Math.cos(time + i * 1.3) * 80;
                const g = ctx.createRadialGradient(ox, oy, 0, ox, oy, o.size);
                g.addColorStop(0, o.c); g.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
            });

            // mouse glow
            const mg = ctx.createRadialGradient(mx, my, 0, mx, my, 550);
            mg.addColorStop(0, 'rgba(37,99,235,0.07)'); mg.addColorStop(1, 'rgba(255,255,255,0)');
            ctx.fillStyle = mg; ctx.fillRect(0, 0, W, H);

            particles.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(animate);
        })();
    })();

    /* ───────────────────────────────────────
       RIPPLE EFFECT
    ─────────────────────────────────────── */
    document.addEventListener('click', e => {
        const btn = e.target.closest('.btn');
        if (!btn) return;
        const r = document.createElement('span');
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        r.className = 'ripple';
        Object.assign(r.style, {
            width: size + 'px', height: size + 'px',
            left: (e.clientX - rect.left - size / 2) + 'px',
            top: (e.clientY - rect.top - size / 2) + 'px',
        });
        btn.appendChild(r);
        setTimeout(() => r.remove(), 600);
    });

    /* ───────────────────────────────────────
       SCROLL REVEAL (IntersectionObserver)
    ─────────────────────────────────────── */
    const initReveal = () => {
        const els = document.querySelectorAll('.sr');
        if (!els.length) return;
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('in');
                    obs.unobserve(e.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
        els.forEach(el => obs.observe(el));
    };

    /* ───────────────────────────────────────
       GSAP SCROLL-TRIGGERED ANIMATIONS
    ─────────────────────────────────────── */
    const initGSAP = () => {
        ScrollTrigger.refresh();

        // Parallax for any .parallax-bg
        document.querySelectorAll('.parallax-bg').forEach(el => {
            gsap.to(el, {
                backgroundPositionY: '30%',
                ease: 'none',
                scrollTrigger: { trigger: el, scrub: 1 }
            });
        });

        // GSAP hero text stagger
        const heroChars = document.querySelectorAll('.gsap-char');
        if (heroChars.length) {
            gsap.fromTo(heroChars,
                { opacity: 0, y: 80, rotateX: -90 },
                { opacity: 1, y: 0, rotateX: 0, stagger: 0.04, duration: 0.8, ease: 'back.out(1.5)', delay: 3.2 }
            );
        }

        // Hero CTA stagger
        const ctaBtns = document.querySelectorAll('.hero-cta .btn');
        if (ctaBtns.length) {
            gsap.fromTo(ctaBtns,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, stagger: 0.15, duration: 0.7, ease: 'power3.out', delay: 3.8 }
            );
        }

        // Hero sub stagger
        const heroSub = document.querySelectorAll('.hero-sub');
        if (heroSub.length) {
            gsap.fromTo(heroSub,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 3.5 }
            );
        }

        // Horizontal scroll for label section
        const htrack = document.getElementById('hscroll-track');
        if (htrack) {
            const trackW = htrack.scrollWidth - htrack.parentElement.clientWidth;
            gsap.to(htrack, {
                x: -trackW,
                ease: 'none',
                scrollTrigger: {
                    trigger: htrack.parentElement,
                    start: 'top top',
                    end: () => `+=${trackW}`,
                    scrub: 0.8,
                    pin: true,
                    anticipatePin: 1,
                }
            });
        }
    };

    /* ───────────────────────────────────────
       NAVBAR SCROLL EFFECTS
    ─────────────────────────────────────── */
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    });

    /* ───────────────────────────────────────
       MOBILE MENU
    ─────────────────────────────────────── */
    mobileBtn.addEventListener('click', () => {
        const open = navLinks.classList.toggle('open');
        mobileBtn.classList.toggle('open', open);
    });
    navLinks.querySelectorAll('a').forEach(l => l.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileBtn.classList.remove('open');
    }));

    /* ───────────────────────────────────────
       AUDIO PLAYER
    ─────────────────────────────────────── */
    const syncPlayerUI = () => {
        const icon = globalPlayBtn.querySelector('i');
        icon.className = isPlaying ? 'ph ph-pause' : 'ph ph-play';
        gpIcon.className = 'gp-icon' + (isPlaying ? ' live' : '');
        gpIcon.innerHTML = isPlaying ? '<i class="ph ph-waveform"></i>' : '<i class="ph ph-music-notes"></i>';
        gpWaves.classList.toggle('active', isPlaying);

        // Sync page radio button if on radio page
        const ppb = document.getElementById('page-play-btn');
        if (ppb) ppb.querySelector('i').className = isPlaying ? 'ph ph-pause' : 'ph-fill ph-play';
        const disk = document.getElementById('radio-disk');
        if (disk) disk.style.animationPlayState = isPlaying ? 'running' : 'paused';
    };

    const toggleAudio = () => {
        if (isPlaying) {
            audioEl.pause(); isPlaying = false; syncPlayerUI();
        } else {
            audioEl.play()
                .then(() => {
                    isPlaying = true;
                    syncPlayerUI();
                    globalPlayer.classList.remove('hidden');
                })
                .catch(() => {
                    isPlaying = true; syncPlayerUI();
                    globalPlayer.classList.remove('hidden');
                });
        }
    };

    globalPlayBtn.addEventListener('click', toggleAudio);

    window.appState = {
        isPlaying: () => isPlaying,
        toggleAudio,
        showPlayer: () => globalPlayer.classList.remove('hidden'),
        hidePlayer: () => { if (!isPlaying) globalPlayer.classList.add('hidden'); }
    };

    /* ───────────────────────────────────────
       HASH ROUTER with GSAP Transitions
    ─────────────────────────────────────── */
    const routes = {
        '': 'Home', '#/home': 'Home',
        '#/cartoon': 'Cartoon',
        '#/teledrama': 'Teledrama',
        '#/artists': 'Artists',
        '#/about': 'About', '#/contact': 'Contact'
    };

    // Legacy hash paths now point to dedicated standalone sites.
    const externalRedirects = {
        '#/label': 'https://music-one-gray.vercel.app/',
        '#/radio': './radio/'
    };

    const navigate = (hash, isFirst = false) => {
        const externalPath = externalRedirects[hash];
        if (externalPath) {
            window.location.href = externalPath;
            return;
        }

        const viewName = routes[hash] || 'Home';
        if (viewName === currentView && !isFirst) return;
        currentView = viewName;

        // Nav active class
        document.querySelectorAll('.nav-link').forEach(l => {
            l.classList.toggle('active', l.dataset.view === viewName.toLowerCase());
        });

        // Kill old ScrollTriggers so they don't pile up
        ScrollTrigger.getAll().forEach(st => st.kill());

        const doRender = () => {
            const fn = window[`${viewName}View`];
            appContent.innerHTML = fn ? fn() : '<div style="padding:8rem 2rem;text-align:center;"><h2>Coming Soon</h2></div>';
            const init = window[`init${viewName}View`];
            if (typeof init === 'function') init();
            initReveal();
            initGSAP();
            window.scrollTo(0, 0);
            if (viewName === 'Radio') window.appState.showPlayer();
            else window.appState.hidePlayer();
        };

        if (isFirst) {
            doRender();
        } else {
            // Page transition
            gsap.to(transition, {
                opacity: 1, duration: 0.3, ease: 'power2.in',
                onComplete: () => {
                    doRender();
                    gsap.to(transition, { opacity: 0, duration: 0.4, ease: 'power2.out', delay: 0.05 });
                }
            });
        }
    };

    window.addEventListener('hashchange', () => navigate(window.location.hash));
    navigate(window.location.hash, true);

});
