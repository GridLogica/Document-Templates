const { useState, useMemo } = React;

const PUBLICATIONS = [
  { code: "S-101-P", title: "Purpose", desc: "Primacy of learning over novelty in simulation experience.", date: "March 2026", pdf: true },
  { code: "S-102-F", title: "Efficient Fidelity", desc: "Cognitive thresholds for sensory richness in immersive learning environments.", date: "February 2026", pdf: true },
  { code: "S-103-A", title: "Gaze as Assessment", desc: "Treating gaze paths and gesture sequences as valid proof of mastery.", date: "January 2026", pdf: true }
];

const FOCUS = [
  { title: "Cognitive Load",      body: "Applying cognitive science to high-fidelity sensory inputs to establish \"Efficient Fidelity\" thresholds, ensuring immersion supports conceptual retention rather than overwhelming it." },
  { title: "Embodied Pedagogy",   body: "Mapping physical movement to conceptual understanding. Applying DET standards to ensure hand-tracking and locomotion serve explicit, measurable learning objectives." },
  { title: "Ethics & Identity",   body: "Utilising a background in theology to explore the ethical implications of identity embodiment and perspective-taking within virtual, high-stakes learning environments." },
  { title: "Spatial Assessment",  body: "Developing frameworks that move beyond traditional metrics, utilising gaze paths and gesture sequences as valid proof of mastery native to 3D space." }
];

function App() {
  const [active, setActive] = useState("Inquiry");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PUBLICATIONS;
    return PUBLICATIONS.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.code.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div style={{ background: "var(--gl-warm)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <TopNav active={active} onNav={setActive} />

        {/* Header / Abstract Split — 5/7 columns */}
        <header style={{
          display: "grid", gridTemplateColumns: "5fr 7fr",
          gap: 64, padding: "80px 0 48px", alignItems: "start"
        }}>
          <h1 style={{
            fontFamily: "var(--font-sans)", fontSize: 80, fontWeight: 700,
            lineHeight: 1.05, letterSpacing: "-0.025em", color: "var(--gl-ink)", margin: 0
          }}>
            Pedagogical Inquiry
          </h1>
          <div style={{ display: "flex", flexDirection: "column", paddingTop: 8 }}>
            <p style={{
              fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400,
              fontSize: 28, lineHeight: 1.35, color: "var(--gl-ink)",
              margin: 0, marginBottom: 28
            }}>
              Drawing on a 15-year foundation in technology direction and immersive design—grounded by a Level 5 DET in pedagogy—I investigate the formal frameworks required for effective immersive learning.
            </p>
            <p style={{
              fontFamily: "var(--font-serif)", fontSize: 17, lineHeight: 1.65,
              color: "var(--gl-ink-3)", margin: 0, marginBottom: 28, maxWidth: 600
            }}>
              GridLogica is an independent project dedicated to the formalization of immersive pedagogy. My work translates design psychology and educational theory into the standards necessary for the next wave of spatial computing.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 18px", alignItems: "baseline", marginTop: 8 }}>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: "var(--gl-ink)", whiteSpace: "nowrap" }}>Focus areas:</span>
              {FOCUS.map(f => (
                <a key={f.title} style={{
                  fontFamily: "var(--font-sans)", fontSize: 15,
                  color: "var(--gl-ink-3)", cursor: "pointer", whiteSpace: "nowrap",
                  textDecoration: "underline", textDecorationThickness: 1, textUnderlineOffset: 3
                }}>{f.title}</a>
              ))}
            </div>
          </div>
        </header>

        {/* 4-col Summary Grid — hairlines top + bottom */}
        <section>
          <hr style={{ border: "none", borderTop: "1px solid var(--gl-rule)", margin: 0 }} />
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 40, padding: "64px 0"
          }}>
            {FOCUS.map(f => <FocusBlock key={f.title} title={f.title} body={f.body} />)}
          </div>
          <hr style={{ border: "none", borderTop: "1px solid var(--gl-rule)", margin: 0 }} />
        </section>

        {/* Publication List */}
        <main style={{ padding: "64px 0 96px" }}>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "flex-end",
            gap: 24, marginBottom: 32
          }}>
            <h2 style={{
              fontFamily: "var(--font-sans)", fontSize: 30, fontWeight: 700,
              letterSpacing: "-0.02em", color: "var(--gl-ink)", margin: 0, whiteSpace: "nowrap"
            }}>Recent Publications</h2>
            <SearchInput value={query} onChange={setQuery} />
          </div>
          <div style={{ borderTop: "1px solid var(--gl-rule)" }}>
            {filtered.map(p => <PublicationRow key={p.code} pub={p} />)}
            {filtered.length === 0 && (
              <div style={{ padding: "80px 0", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: 18, color: "var(--gl-ink-4)" }}>
                  No publications matching that search were found.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
