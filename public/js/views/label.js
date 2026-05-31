/**
 * Ransilu — Label Page View
 * Animated intro, parallel image-text grids, hover zoom + red overlay cards
 */
window.LabelView = function () {
    return `

<!-- Cinematic Header -->
<header style="padding:calc(var(--nav-h) + 5rem) 2rem 6rem;position:relative;overflow:hidden;text-align:center;">
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,rgba(37,99,235,.08),transparent 65%);"></div>
    <div class="container" style="position:relative;z-index:1;">
        <div class="eyebrow sr" style="justify-content:center;">Exclusive Productions</div>
        <h1 class="sr sr-d1" style="font-family:'Bebas Neue',sans-serif;font-size:clamp(4rem,10vw,8.5rem);line-height:.88;letter-spacing:4px;color:var(--text);">
            RANSILU<br><span style="color:var(--primary);">MUSIC LABEL</span>
        </h1>
        <div class="neon-line sr sr-d2" style="margin:1.5rem auto;"></div>
        <p class="sr sr-d3" style="color:var(--muted);max-width:580px;margin:0 auto;font-size:1.05rem;line-height:1.85;">
            Preserving the heritage of Sri Lankan music while giving voice to a new generation of artists.
        </p>
    </div>
</header>

<!-- ── Kawibana Section ── -->
<section class="section-pad">
    <div class="container">
        <div style="display:grid;grid-template-columns:1fr 1.3fr;gap:5rem;align-items:center;margin-bottom:7rem;" class="label-duo">
            <div class="sr from-l">
                <div style="position:relative;overflow:hidden;border-radius:var(--radius-lg);height:460px;" class="img-hover-zoom">
                    <img src="https://images.unsplash.com/photo-1601614725350-ab19b4cfb268?q=80&w=800&auto=format&fit=crop" style="width:100%;height:100%;object-fit:cover;transition:transform .8s var(--ease);" class="zoom-img">
                    <div class="primary-overlay">
                        <span style="font-family:'Bebas Neue',sans-serif;font-size:2rem;letter-spacing:3px;">KAWIBANA</span>
                        <div style="width:40px;height:2px;background:white;margin:.8rem auto;"></div>
                        <span style="font-size:.8rem;letter-spacing:2px;opacity:.9;">EXPLORE COLLECTION</span>
                    </div>
                    <!-- Corner accent decorations -->
                    <div style="position:absolute;top:0;left:0;width:40px;height:40px;border-top:3px solid var(--primary);border-left:3px solid var(--primary);border-radius:var(--radius-lg) 0 0 0;"></div>
                    <div style="position:absolute;bottom:0;right:0;width:40px;height:40px;border-bottom:3px solid var(--primary);border-right:3px solid var(--primary);border-radius:0 0 var(--radius-lg) 0;"></div>
                </div>
            </div>
            <div class="sr from-r">
                <div class="eyebrow">Cultural Heritage</div>
                <h2 style="font-family:'Bebas Neue',sans-serif;font-size:clamp(2.5rem,5vw,4rem);letter-spacing:2px;margin:.5rem 0 1rem;color:var(--text);">RANSILU<br><span style="color:var(--primary);">KAWIBANA</span></h2>
                <div class="neon-line" style="margin:0 0 2rem;"></div>
                <p style="color:var(--muted);font-size:1.05rem;line-height:1.9;margin-bottom:1.5rem;">Experience the deep spiritual roots of Sri Lanka through our exclusive Kawibana collection — authentic recitals recorded in high-fidelity audio, preserving an ancient art form for eternity.</p>
                <p style="color:var(--muted);font-size:1rem;line-height:1.9;margin-bottom:2.5rem;">Each recital features revered cultural masters, ensuring that future generations can connect with Heritage beyond language barriers.</p>
                <div style="display:flex;gap:1.5rem;margin-bottom:2.5rem;flex-wrap:wrap;">
                    <div class="stat-pill"><div class="stat-n">200+</div><div class="stat-l">Recitals</div></div>
                    <div class="stat-pill"><div class="stat-n">3</div><div class="stat-l">Series</div></div>
                    <div class="stat-pill"><div class="stat-n">HD</div><div class="stat-l">Audio</div></div>
                </div>
                <a href="./radio/" class="btn btn-red"><i class="ph ph-headphones"></i> Listen Samples</a>
            </div>
        </div>

        <!-- ── Mage Podu Yalu ── -->
        <div style="display:grid;grid-template-columns:1.3fr 1fr;gap:5rem;align-items:center;margin-bottom:7rem;" class="label-duo">
            <div class="sr from-l">
                <div class="eyebrow">Youth Anthem</div>
                <h2 style="font-family:'Bebas Neue',sans-serif;font-size:clamp(2.5rem,5vw,4rem);letter-spacing:2px;margin:.5rem 0 1rem;color:var(--text);">MAGE PODU<br><span style="color:var(--primary);">YALU</span></h2>
                <div class="neon-line" style="margin:0 0 2rem;"></div>
                <p style="color:var(--muted);font-size:1.05rem;line-height:1.9;margin-bottom:1.5rem;">A powerful series capturing the spirit of modern Sri Lankan youth. Contemporary themes, authentic voices, and musical scores that unite generations across the island.</p>
                <div style="display:flex;gap:1.5rem;margin-bottom:2.5rem;flex-wrap:wrap;">
                    <div class="stat-pill"><div class="stat-n">50+</div><div class="stat-l">Tracks</div></div>
                    <div class="stat-pill"><div class="stat-n">2M+</div><div class="stat-l">Streams</div></div>
                    <div class="stat-pill"><div class="stat-n">Top 10</div><div class="stat-l">This Week</div></div>
                </div>
                <a href="./radio/" class="btn btn-red"><i class="ph ph-music-note"></i> Explore Tracks</a>
            </div>
            <div class="sr from-r">
                <div style="position:relative;overflow:hidden;border-radius:var(--radius-lg);height:460px;" class="img-hover-zoom">
                    <img src="https://images.unsplash.com/photo-1516280440502-65f536c646ae?q=80&w=800&auto=format&fit=crop" style="width:100%;height:100%;object-fit:cover;transition:transform .8s var(--ease);" class="zoom-img">
                    <div class="primary-overlay">
                        <span style="font-family:'Bebas Neue',sans-serif;font-size:2rem;letter-spacing:3px;">MAGE PODU YALU</span>
                        <div style="width:40px;height:2px;background:white;margin:.8rem auto;"></div>
                        <span style="font-size:.8rem;letter-spacing:2px;opacity:.9;">EXPLORE COLLECTION</span>
                    </div>
                    <div style="position:absolute;top:0;right:0;width:40px;height:40px;border-top:3px solid var(--primary);border-right:3px solid var(--primary);border-radius:0 var(--radius-lg) 0 0;"></div>
                    <div style="position:absolute;bottom:0;left:0;width:40px;height:40px;border-bottom:3px solid var(--primary);border-left:3px solid var(--primary);border-radius:0 0 0 var(--radius-lg);"></div>
                </div>
            </div>
        </div>

        <!-- ── Cartoon Content ── -->
        <div class="eyebrow sr" style="justify-content:center;">Kids & Families</div>
        <h2 class="sr sr-d1" style="font-family:'Bebas Neue',sans-serif;font-size:clamp(2.5rem,5vw,4rem);letter-spacing:2px;text-align:center;margin:.5rem 0 .5rem;color:var(--text);">CARTOON <span style="color:var(--primary);">CONTENT</span></h2>
        <div class="neon-line sr sr-d2" style="margin:0 auto 3rem;"></div>

        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1.5rem;">
            <div class="ncard sr sr-d1 img-hover-zoom" style="overflow:hidden;cursor:pointer;">
                <img src="https://images.unsplash.com/photo-1580477659169-2f22b70f2f4c?q=80&w=600&auto=format&fit=crop" style="height:220px;width:100%;object-fit:cover;transition:transform .6s var(--ease);" class="zoom-img">
                <div class="primary-overlay" style="border-radius:0;height:220px;top:0;bottom:auto;">
                    <span style="font-family:'Bebas Neue',sans-serif;font-size:1.5rem;letter-spacing:2px;">KIDS CLASSICS</span>
                </div>
                <div style="padding:1.5rem;"><h4 style="font-family:'Bebas Neue',sans-serif;font-size:1.3rem;letter-spacing:1px;margin-bottom:.4rem;">KIDS CLASSICS</h4><p style="color:var(--muted);font-size:.85rem;line-height:1.7;">Remastered Sinhala dubbed classics from the golden era of animation.</p></div>
            </div>
            <div class="ncard sr sr-d2 img-hover-zoom" style="overflow:hidden;cursor:pointer;">
                <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=600&auto=format&fit=crop" style="height:220px;width:100%;object-fit:cover;transition:transform .6s var(--ease);" class="zoom-img">
                <div class="primary-overlay" style="border-radius:0;height:220px;top:0;bottom:auto;"><span style="font-family:'Bebas Neue',sans-serif;font-size:1.5rem;letter-spacing:2px;">EDUCATIONAL</span></div>
                <div style="padding:1.5rem;"><h4 style="font-family:'Bebas Neue',sans-serif;font-size:1.3rem;letter-spacing:1px;margin-bottom:.4rem;">EDUCATIONAL SERIES</h4><p style="color:var(--muted);font-size:.85rem;line-height:1.7;">Animated stories teaching values, history, and culture through fun narratives.</p></div>
            </div>
            <div class="ncard sr sr-d3" style="background:linear-gradient(135deg,var(--primary),#1d4ed8);display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:2rem;min-height:300px;cursor:pointer;box-shadow:0 4px 20px rgba(0,0,0,0.05);">
                <i class="ph-fill ph-play-circle" style="font-size:4rem;margin-bottom:1rem;"></i>
                <h4 style="font-family:'Bebas Neue',sans-serif;font-size:1.5rem;letter-spacing:1px;">FULL CATALOG</h4>
                <p style="font-size:.85rem;opacity:.8;margin-top:.4rem;">CD · DVD · Digital Download</p>
            </div>
        </div>
    </div>
</section>

<style>
.label-duo { }
@media(max-width:900px){ .label-duo{grid-template-columns:1fr!important;gap:3rem!important;} }
.img-hover-zoom { position:relative; }
.img-hover-zoom:hover .zoom-img { transform:scale(1.07); }
.primary-overlay { position:absolute; inset:0; background:rgba(37,99,235,0.85); display:flex; flex-direction:column; align-items:center; justify-content:center; opacity:0; transition:opacity .4s var(--ease); color:white; text-align:center; padding:2rem; }
.img-hover-zoom:hover .primary-overlay { opacity:1; }
.stat-pill { background:var(--primary-subtle); border:1px solid var(--border); border-radius:8px; padding:.8rem 1.2rem; text-align:center; }
.stat-n { font-family:'Bebas Neue',sans-serif; font-size:2rem; color:var(--primary); line-height:1; }
.stat-l { font-size:.65rem; letter-spacing:2px; color:var(--muted); text-transform:uppercase; margin-top:.2rem; }
</style>
`;
};
