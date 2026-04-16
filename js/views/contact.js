/**
 * Ransilu — Contact View with validation
 */
window.ContactView = function () {
    return `
<section class="section-pad" style="padding-top:calc(var(--nav-h)+5rem);">
<div class="container" style="max-width:1100px;">
    <div style="margin-bottom:4rem;">
        <div class="eyebrow sr">We're Here</div>
        <h1 class="sr sr-d1" style="font-family:'Bebas Neue',sans-serif;font-size:clamp(4rem,8vw,7rem);letter-spacing:4px;line-height:.9;max-width:700px;color:var(--text);;">
            GET IN<br><span style="color:var(--primary);">TOUCH</span>
        </h1>
        <div class="neon-line sr sr-d2"></div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1.5fr;gap:5rem;align-items:start;" class="contact-g">
        <!-- Info -->
        <div class="sr from-l">
            <div class="contact-info-row"><div class="cir"><i class="ph-fill ph-map-pin"></i></div><div><strong>Ransilu HQ</strong><p>123 Independence Ave, Colombo 07, Sri Lanka</p></div></div>
            <div class="contact-info-row"><div class="cir"><i class="ph-fill ph-envelope"></i></div><div><strong>Email</strong><p>info@ransilu.com</p></div></div>
            <div class="contact-info-row"><div class="cir"><i class="ph-fill ph-phone"></i></div><div><strong>Phone</strong><p>+94 11 234 5678</p></div></div>
            <div style="display:flex;gap:.8rem;margin-top:2.5rem;">
                <a href="#" class="soc-btn"><i class="ph-fill ph-facebook-logo"></i></a>
                <a href="#" class="soc-btn"><i class="ph-fill ph-instagram-logo"></i></a>
                <a href="#" class="soc-btn"><i class="ph-fill ph-youtube-logo"></i></a>
            </div>
        </div>

        <!-- Form -->
        <div class="glass-card sr from-r" style="padding:2.5rem;">
            <div id="form-ok" style="display:none;background:rgba(74,222,128,.08);border:1px solid #4ade80;border-radius:8px;padding:1.2rem;text-align:center;color:#4ade80;margin-bottom:1.5rem;">
                <i class="ph-fill ph-check-circle" style="font-size:1.5rem;display:block;margin-bottom:.3rem;"></i>
                Message sent! We'll be in touch soon.
            </div>
            <form id="cForm">
                <div class="fg"><label>Full Name</label><input type="text" id="f-name" class="fi" placeholder="e.g. Kasun Perera"><span class="fe" id="e-name"></span></div>
                <div class="fg"><label>Email</label><input type="email" id="f-email" class="fi" placeholder="you@example.com"><span class="fe" id="e-email"></span></div>
                <div class="fg"><label>Subject</label>
                    <select id="f-sub" class="fi">
                        <option value="">Select a topic</option>
                        <option>Record Label Inquiry</option>
                        <option>Teledrama / Advertising</option>
                        <option>Radio Request / Shoutout</option>
                        <option>Partnership Opportunity</option>
                        <option>General Inquiry</option>
                    </select>
                    <span class="fe" id="e-sub"></span>
                </div>
                <div class="fg"><label>Message</label><textarea id="f-msg" class="fi" rows="5" placeholder="How can we help?"></textarea><span class="fe" id="e-msg"></span></div>
                <div class="fg" style="margin-bottom:1.8rem;">
                    <label style="display:flex;gap:.7rem;align-items:flex-start;cursor:pointer;">
                        <input type="checkbox" id="f-priv" style="margin-top:3px;accent-color:var(--primary);width:15px;height:15px;flex-shrink:0;">
                        <span style="font-size:.82rem;color:var(--muted);line-height:1.5;">I consent to Ransilu storing my data to process this inquiry and agree to the <a href="#" style="color:var(--primary);">Privacy Policy</a>.</span>
                    </label>
                    <span class="fe" id="e-priv"></span>
                </div>
                <button type="submit" class="btn btn-red" style="width:100%;justify-content:center;padding:1rem;background:var(--primary);color:white;;">
                    Send Message <i class="ph ph-paper-plane-right"></i>
                </button>
            </form>
        </div>
    </div>
</div>
</section>

<style>
.contact-info-row{display:flex;gap:1rem;align-items:flex-start;margin-bottom:1.8rem;}
.cir{width:44px;height:44px;background:var(--primary-subtle);border:1px solid var(--border);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1.2rem;color:var(--primary);}
.contact-info-row p{color:var(--muted);font-size:.9rem;margin-top:.2rem;}
.contact-info-row strong{color:var(--text);}
.fg{margin-bottom:1.3rem;}
.fg label{display:block;font-size:.78rem;font-weight:700;letter-spacing:1px;color:var(--muted);text-transform:uppercase;margin-bottom:.5rem;}
.fi{width:100%;padding:.85rem 1rem;background:rgba(0,0,0,.02);border:1px solid var(--border);border-radius:8px;color:var(--text);font-family:var(--font-body);font-size:.9rem;transition:border-color .3s,box-shadow .3s;}
.fi:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 3px var(--primary-subtle);}
.fi.error{border-color:var(--hover)!important;}
.fi option{background:white;color:var(--text);}
.fe{display:block;min-height:1rem;color:var(--hover);font-size:.75rem;margin-top:.25rem;}
@media(max-width:900px){.contact-g{grid-template-columns:1fr!important;gap:3rem!important;}}
</style>
`;
};

window.initContactView = function () {
    const form = document.getElementById('cForm');
    const ok = document.getElementById('form-ok');
    const erx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener('submit', e => {
        e.preventDefault();
        ok.style.display = 'none';
        let valid = true;

        const v = (id, errId, msg, check) => {
            const el = document.getElementById(id);
            const er = document.getElementById(errId);
            if (!check(el.value)) { el.classList.add('error'); er.textContent = msg; valid = false; }
            else { el.classList.remove('error'); er.textContent = ''; }
        };

        v('f-name', 'e-name', 'Enter your full name (min 2 chars).', val => val.trim().length >= 2);
        v('f-email', 'e-email', 'Enter a valid email address.', val => erx.test(val.trim()));
        v('f-sub', 'e-sub', 'Please select a subject.', val => val.length > 0);
        v('f-msg', 'e-msg', 'Message must be at least 10 characters.', val => val.trim().length >= 10);

        const priv = document.getElementById('f-priv');
        const pe = document.getElementById('e-priv');
        if (!priv.checked) { pe.textContent = 'You must agree to the Privacy Policy.'; valid = false; }
        else { pe.textContent = ''; }

        if (!valid) return;

        const btn = form.querySelector('.btn');
        const old = btn.innerHTML;
        btn.innerHTML = '⏳ &nbsp;Sending...'; btn.disabled = true;
        setTimeout(() => {
            form.reset(); btn.innerHTML = old; btn.disabled = false;
            ok.style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => { ok.style.display = 'none'; }, 7000);
        }, 1500);
    });
};
