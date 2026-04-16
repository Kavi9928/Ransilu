/**
 * Ransilu — Radio Page View
 * Premium minimal layout with spinning vinyl, animated waveform, typewriter text
 */
window.RadioView = function () {
    return `
<section style="min-height:100vh;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;padding:var(--nav-h) 2rem 4rem;">

    <!-- Spinning orbit rings -->
    <div style="position:absolute;top:50%;left:50%;width:700px;height:700px;border:1px solid rgba(37,99,235,0.06);border-radius:50%;transform:translate(-50%,-50%);animation:spinSlow 35s linear infinite;"></div>
    <div style="position:absolute;top:50%;left:50%;width:500px;height:500px;border:1px solid rgba(37,99,235,0.09);border-radius:50%;transform:translate(-50%,-50%);animation:spinSlow 25s linear infinite reverse;"></div>
    <div style="position:absolute;top:50%;left:50%;width:350px;height:350px;border:1px solid rgba(37,99,235,0.14);border-radius:50%;transform:translate(-50%,-50%);animation:spinSlow 18s linear infinite;"></div>
    <!-- Radial glow center -->
    <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:500px;height:500px;background:radial-gradient(circle,rgba(37,99,235,0.05),transparent 60%);pointer-events:none;"></div>

    <div style="position:relative;z-index:2;text-align:center;width:100%;max-width:580px;">

        <!-- Title -->
        <div class="sr"><span style="font-size:.7rem;letter-spacing:5px;text-transform:uppercase;color:var(--primary);">Broadcasting Live</span></div>
        <h1 class="sr sr-d1" style="font-family:'Bebas Neue',sans-serif;font-size:clamp(4rem,10vw,7rem);letter-spacing:4px;line-height:.9;margin:.6rem 0 .4rem;color:var(--text);">
            RANSILU <span style="color:var(--primary);">RADIO</span>
        </h1>
        <p class="sr sr-d2" style="color:var(--muted);font-size:.8rem;letter-spacing:3px;text-transform:uppercase;margin-bottom:3.5rem;">24/7 From Colombo, Sri Lanka</p>

        <!-- Vinyl Disk -->
        <div style="position:relative;display:inline-block;margin-bottom:3rem;" class="sr zoom">
            <!-- Pulse rings -->
            <div style="position:absolute;top:50%;left:50%;width:280px;height:280px;border:1px solid var(--primary-dim);border-radius:50%;animation:pulseRing 3s ease-out infinite;"></div>
            <div style="position:absolute;top:50%;left:50%;width:280px;height:280px;border:1px solid var(--primary-dim);border-radius:50%;animation:pulseRing 3s ease-out infinite 1.5s;"></div>

            <!-- Disk -->
            <div id="radio-disk" style="width:220px;height:220px;border-radius:50%;background:conic-gradient(from 0deg,#1e1b4b,#312e81,#1e1b4b,#3730a3,#1e1b4b);border:3px solid var(--primary);display:flex;align-items:center;justify-content:center;position:relative;z-index:1;box-shadow:0 10px 40px rgba(0,0,0,0.1),inset 0 0 40px rgba(0,0,0,0.4);animation:spinRecord 8s linear infinite paused;">
                <!-- Grooves (SVG circles) -->
                <svg width="100%" height="100%" style="position:absolute;inset:0;opacity:.15;" viewBox="0 0 220 220">
                    <circle cx="110" cy="110" r="90" fill="none" stroke="var(--white)" stroke-width=".5"/>
                    <circle cx="110" cy="110" r="75" fill="none" stroke="var(--white)" stroke-width=".5"/>
                    <circle cx="110" cy="110" r="60" fill="none" stroke="var(--white)" stroke-width=".5"/>
                    <circle cx="110" cy="110" r="45" fill="none" stroke="var(--white)" stroke-width=".5"/>
                </svg>
                <!-- Center hole -->
                <div style="width:44px;height:44px;background:var(--bg);border-radius:50%;border:2px solid var(--primary-dim);z-index:2;"></div>
            </div>

            <!-- Tonearm -->
            <div id="tonearm" style="position:absolute;top:-10px;right:-30px;width:80px;height:4px;background:linear-gradient(to right,var(--muted),var(--primary));border-radius:2px;transform-origin:right center;transform:rotate(-15deg);transition:transform 1s ease;box-shadow:0 4px 8px rgba(0,0,0,0.1);">
                <div style="position:absolute;right:0;top:50%;transform:translateY(-50%);width:12px;height:12px;background:var(--primary);border-radius:50%;"></div>
            </div>
        </div>

        <!-- Now Playing (typewriter) -->
        <div style="background:var(--primary-subtle);border:1px solid var(--primary-dim);border-radius:12px;padding:1.4rem 2rem;margin-bottom:2.5rem;" class="sr sr-d3">
            <div style="font-size:.65rem;letter-spacing:4px;text-transform:uppercase;color:var(--primary);margin-bottom:.4rem;">Now Playing</div>
            <div id="now-playing" style="font-family:'Bebas Neue',sans-serif;font-size:1.5rem;letter-spacing:2px;overflow:hidden;white-space:nowrap;border-right:2px solid var(--primary);animation:blink .7s step-end infinite;color:var(--text);"></div>
            <!-- Waveform bars -->
            <div style="display:flex;justify-content:center;align-items:flex-end;gap:4px;height:30px;margin-top:1rem;" id="radio-wave-bars">
                <div class="wb" id="rwb1"></div><div class="wb" id="rwb2"></div><div class="wb" id="rwb3"></div>
                <div class="wb" id="rwb4"></div><div class="wb" id="rwb5"></div><div class="wb" id="rwb6"></div>
                <div class="wb" id="rwb7"></div><div class="wb" id="rwb8"></div>
            </div>
        </div>

        <!-- Play Button with ripple -->
        <button id="page-play-btn" class="btn btn-red" style="width:100px;height:100px;border-radius:50%;font-size:2.2rem;display:flex;align-items:center;justify-content:center;margin:0 auto;background:var(--primary);color:white;">
            <i class="ph-fill ph-play"></i>
        </button>
    </div>
</section>

<style>
    @keyframes blink { 0%,100%{border-color:var(--primary);} 50%{border-color:transparent;} }
</style>
`;
};

window.initRadioView = function () {
    const btn = document.getElementById('page-play-btn');
    const disk = document.getElementById('radio-disk');
    const arm = document.getElementById('tonearm');
    const npEl = document.getElementById('now-playing');
    const wbEls = document.querySelectorAll('#radio-wave-bars .wb');

    const syncUI = () => {
        const p = window.appState.isPlaying();
        btn.querySelector('i').className = p ? 'ph ph-pause' : 'ph-fill ph-play';
        disk.style.animationPlayState = p ? 'running' : 'paused';
        arm.style.transform = p ? 'rotate(-5deg)' : 'rotate(-15deg)';
        wbEls.forEach(el => el.classList.toggle('play', p));
    };

    btn.addEventListener('click', () => { window.appState.toggleAudio(); setTimeout(syncUI, 120); });
    syncUI();

    // Typewriter now playing
    const text = 'Ransilu Live Studio Mix';
    let i = 0;
    const type = () => {
        if (i <= text.length) { npEl.textContent = text.slice(0, i++); setTimeout(type, 75); }
    };
    type();
};
