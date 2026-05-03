/* GridLogica Library — UI kit components.
   Source-of-truth: the canonical gridlogica.com markup.

   Type rules:
     - Headings (h1, h2, h3, focus titles, publication titles) = Inter (sans), bold, tight tracking
     - Body prose = Source Serif 4 (serif)
     - Italic editorial accent (hero strap) = Source Serif 4 italic
     - UI labels (nav, buttons, focus-area inline links, dates, tags) = Inter
     - Wordmark dot = bright green-400 (#4ade80)
     - "PDF Available" link = green-700 (#15803d)
     - "Standard S-XXX" pill = green-100 bg / green-800 text
*/
const { useState } = React;

/* ---------- Wordmark — sans bold + bright-green dot, italic-serif tagline ---------- */
function Wordmark({ size = 30, dark = false, tagline = false }) {
  return (
    <div style={{ display: "inline-flex", flexDirection: "column" }}>
      <span style={{
        fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: size,
        letterSpacing: "-0.025em", lineHeight: 1, whiteSpace: "nowrap",
        color: dark ? "#fff" : "var(--gl-ink)"
      }}>
        GridLogica<span style={{ color: "var(--gl-accent-bright)" }}>.</span>
      </span>
      {tagline && (
        <span style={{
          fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400,
          fontSize: 13, marginTop: 6, opacity: 0.9, whiteSpace: "nowrap",
          color: dark ? "var(--gl-ink-4)" : "var(--gl-ink-3)"
        }}>Independent Research</span>
      )}
    </div>
  );
}

/* ---------- Buttons — sans, the canonical "Access Framework" split-button ---------- */
function ButtonPrimary({ children, onClick }) {
  return <button onClick={onClick} style={{
    background: "var(--gl-ink)", color: "#fff", border: "none",
    padding: "10px 20px", fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 500,
    borderRadius: 6, cursor: "pointer", letterSpacing: 0, whiteSpace: "nowrap"
  }}>{children}</button>;
}
function SplitButton({ label, onClick }) {
  return (
    <div style={{ display: "inline-flex" }}>
      <button onClick={onClick} style={{
        background: "var(--gl-ink)", color: "#fff", border: "none",
        padding: "10px 20px", fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 500,
        borderTopLeftRadius: 6, borderBottomLeftRadius: 6, cursor: "pointer", whiteSpace: "nowrap"
      }}>{label}</button>
      <button style={{
        background: "var(--gl-ink)", color: "#fff",
        border: "none", borderLeft: "1px solid #404040",
        padding: "10px 12px", borderTopRightRadius: 6, borderBottomRightRadius: 6,
        cursor: "pointer", display: "inline-flex", alignItems: "center"
      }} aria-label="Framework menu">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
      </button>
    </div>
  );
}

/* ---------- Top nav ---------- */
function TopNav({ active, onNav }) {
  const items = ["Inquiry", "Library", "Standards", "About", "Contact"];
  return (
    <nav style={{
      padding: "16px 0", display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: 24
    }}>
      <Wordmark size={26} tagline />
      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        {items.map(it => (
          <a key={it} onClick={() => onNav && onNav(it)} style={{
            fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 500,
            color: "var(--gl-ink)", textDecoration: "none", cursor: "pointer",
            opacity: active === it ? 1 : 0.9
          }}>{it}</a>
        ))}
        <SplitButton label="Access Framework" />
      </div>
    </nav>
  );
}

/* ---------- Focus block — sans bold title + serif body ---------- */
function FocusBlock({ title, body }) {
  return (
    <div>
      <h3 style={{
        fontFamily: "var(--font-sans)", fontSize: 22, fontWeight: 700,
        letterSpacing: "-0.015em", color: "var(--gl-ink)", margin: 0, marginBottom: 16
      }}>{title}</h3>
      <p style={{
        fontFamily: "var(--font-serif)", fontSize: 16, fontWeight: 400,
        lineHeight: 1.65, color: "var(--gl-ink-2)", margin: 0
      }}>{body}</p>
    </div>
  );
}

/* ---------- Publication row — 2/7/3 grid (date | content | tag) ---------- */
function PublicationRow({ pub, onOpen }) {
  return (
    <a onClick={() => onOpen && onOpen(pub)} style={{
      display: "grid", gridTemplateColumns: "120px 1fr 180px",
      gap: 32, padding: "32px 0", borderBottom: "1px solid var(--gl-rule)",
      cursor: "pointer", alignItems: "start", textDecoration: "none"
    }}>
      <div style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--gl-ink-3)", paddingTop: 8 }}>
        <time>{pub.date}</time>
      </div>
      <div>
        <h3 style={{
          fontFamily: "var(--font-sans)", fontSize: 28, fontWeight: 700,
          letterSpacing: "-0.02em", color: "var(--gl-ink)", margin: 0, marginBottom: 12,
          textDecoration: "underline", textDecorationThickness: 1, textUnderlineOffset: 4
        }}>{pub.title}</h3>
        <p style={{
          fontFamily: "var(--font-serif)", fontSize: 17, lineHeight: 1.65,
          color: "var(--gl-ink-2)", margin: 0, maxWidth: 540
        }}>{pub.desc}</p>
        {pub.pdf && (
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 6, marginTop: 14,
            fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600,
            color: "var(--gl-accent)", whiteSpace: "nowrap"
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            PDF Available
          </span>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: 8 }}>
        <span style={{
          padding: "3px 10px", borderRadius: 4,
          background: "var(--gl-accent-light)", color: "var(--gl-accent-mid)",
          fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, whiteSpace: "nowrap"
        }}>Standard {pub.code}</span>
      </div>
    </a>
  );
}

/* ---------- Search input — bordered, with magnifier + Esc-to-clear hint ---------- */
function SearchInput({ value, onChange }) {
  return (
    <div style={{ position: "relative", width: 320 }}>
      <svg style={{ position: "absolute", left: 12, top: 12, color: "var(--gl-ink-4)" }}
        width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
      </svg>
      <input
        value={value} onChange={e => onChange && onChange(e.target.value)}
        placeholder="Search publications…"
        style={{
          width: "100%", boxSizing: "border-box",
          background: "var(--gl-warm-alt)", border: "1px solid var(--gl-rule)",
          borderRadius: 6, padding: "10px 86px 10px 38px",
          fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--gl-ink)",
          outline: "none"
        }} />
      <span style={{
        position: "absolute", right: 12, top: 12,
        fontFamily: "var(--font-sans)", fontSize: 11, color: "var(--gl-ink-4)", whiteSpace: "nowrap"
      }}>Esc to clear</span>
    </div>
  );
}

/* ---------- Footer — dark ink-900, 4-col grid (2/1/1) ---------- */
function Footer() {
  const linkStyle = { fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--gl-ink-4)", textDecoration: "none", cursor: "pointer" };
  const headStyle = { fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600, color: "var(--gl-warm)", marginBottom: 12 };
  return (
    <footer style={{ background: "var(--gl-ink)", color: "var(--gl-warm)", padding: "80px 80px 64px", marginTop: 64 }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 32, maxWidth: 1280, margin: "0 auto" }}>
        <div>
          <Wordmark size={36} dark tagline />
          <p style={{
            fontFamily: "var(--font-serif)", fontSize: 17, lineHeight: 1.6,
            color: "var(--gl-ink-4)", maxWidth: 380, marginTop: 24, marginBottom: 24
          }}>
            Independent research bridging 15 years of technical direction and design psychology with formal pedagogical theory.
          </p>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "#7a7a72", lineHeight: 1.6 }}>
            © 2026 GridLogica.<br/>CC BY-SA 4.0 Open Access.
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={headStyle}>About</div>
          <a style={linkStyle}>The Author</a>
          <a style={linkStyle}>Methodology</a>
          <a style={linkStyle}>Contact</a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={headStyle}>Resources</div>
          <a style={linkStyle}>Library</a>
          <a style={linkStyle}>Standards Registry</a>
          <a style={linkStyle}>Access Framework</a>
          <a style={linkStyle}>Admin</a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Wordmark, ButtonPrimary, SplitButton, TopNav, FocusBlock, PublicationRow, SearchInput, Footer });
