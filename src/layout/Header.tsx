
import React from "react";
import logo from "../assets/logo_1000x1000.png";
import "../App.css";


// Reusable phone chip component
function PhoneChip({ label, number, color, boxShadow, hoverColor }: {
  label: string;
  number: string;
  color: string;
  boxShadow: string;
  hoverColor: string;
}) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <span
      style={{
        fontWeight: 600,
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        background: `linear-gradient(90deg, #f5f7fa 60%, ${color}22 100%)`,
        borderRadius: 16,
        padding: "0.22em 1.25em 0.22em 0.7em",
        boxShadow: (boxShadow + ", 0 4px 16px 0 rgba(37,99,235,0.10)" + (hovered ? ", 0 6px 24px 0 #f59e4288" : "")),
        minHeight: 38,
        fontSize: "1.13rem",
        letterSpacing: "0.01em",
        transform: hovered ? "translateY(-2px) scale(1.04)" : "none",
        transition: "box-shadow 0.22s, transform 0.18s"
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" style={{ marginRight: 6 }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="phoneGradient" x1="0" y1="0" x2="26" y2="26" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2563eb"/>
            <stop offset="1" stopColor="#f59e42"/>
          </linearGradient>
        </defs>
        <circle cx="13" cy="13" r="13" fill="url(#phoneGradient)"/>
        <path d="M8.5 10.5C9.5 13 13 16.5 15.5 17.5L17.5 15.5C17.7 15.3 18 15.3 18.3 15.5C19.5 16.2 20.7 16.9 21.5 17.5C21.7 17.7 21.7 18 21.5 18.3L20.1 20.1C19.9 20.4 19.4 20.7 19 20.7C13.5 20.7 8.8 16 8.8 10.5C8.8 10.1 9.1 9.6 9.4 9.4L11.2 8C11.5 7.8 11.8 7.8 12 8C12.7 9 13.5 10.5 14 11.3C14.2 11.6 14.2 11.9 14 12.1L12.5 13.5C12.3 13.7 12 13.7 11.7 13.5L10.5 12.5C10.3 12.3 10.3 12 10.5 11.7L11.5 10.5C11.7 10.3 12 10.3 12.3 10.5L13.5 11.5C13.8 11.7 13.8 12 13.5 12.3L12.5 13.5C12.3 13.7 12 13.7 11.7 13.5L10.5 12.5C10.3 12.3 10.3 12 10.5 11.7L11.5 10.5Z" fill="#fff"/>
      </svg>
      {label}: <a
        href={`tel:${number.replace(/\s/g, "")}`}
        style={{
          color,
          textDecoration: "none",
          fontWeight: 800,
          letterSpacing: "0.01em",
          transition: "color 0.2s"
        }}
        onMouseOver={e => (e.currentTarget.style.color = hoverColor)}
        onMouseOut={e => (e.currentTarget.style.color = color)}
      >
        {number}
      </a>
    </span>
  );
}

const NAV_LINKS = [
  { href: "/", label: "Strona główna" },
  { href: "/kalendarz", label: "Kalendarz" },
  { href: "/o-nas", label: "O nas" },
  { href: "/kontakt", label: "Kontakt" },
];

const Header: React.FC = () => (
  <header
    style={{
      background: "none",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      minHeight: 90,
      padding: 0,
    }}
  >
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      alignItems: "center",
      padding: "1.2rem 3.5vw 0.5rem 3.5vw"
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "2.5rem" }}>
        <img
          src={logo}
          alt="Logo"
          style={{ height: 96, width: 96 }}
        />
      </div>
      <nav style={{ justifySelf: "center" }}>
        <ul
          style={{
            display: "flex",
            gap: "2.5rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
            fontSize: "1.18rem",
            fontWeight: 600,
            letterSpacing: "0.01em",
          }}
        >
          {NAV_LINKS.map(link => {
            const isActive = typeof window !== 'undefined' && window.location.pathname === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    textDecoration: "none",
                    color: "#1a2233",
                    padding: "0.3em 0.7em 0.15em 0.7em",
                    borderBottom: isActive ? "2.5px solid #f59e42" : "2.5px solid transparent",
                    transition: "border-bottom 0.2s, color 0.2s",
                    display: "inline-block"
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.borderBottom = "2.5px solid #f59e42";
                    e.currentTarget.style.background = "transparent";
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.borderBottom = isActive ? "2.5px solid #f59e42" : "2.5px solid transparent";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div style={{ display: "flex", alignItems: "center", gap: "2.2rem", justifyContent: "flex-end" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", fontSize: "1.08rem", color: "#1a2233", gap: "0.4em" }}>
          <PhoneChip
            label="Seweryn"
            number="609 389 924"
            color="#2563eb"
            boxShadow="0 1px 4px 0 rgba(37,99,235,0.06)"
            hoverColor="#f59e42"
          />
          <PhoneChip
            label="Piotr"
            number="534 263 279"
            color="#f59e42"
            boxShadow="0 1px 4px 0 rgba(251,191,36,0.06)"
            hoverColor="#2563eb"
          />
        </div>
        <a href="https://www.facebook.com/p/LiS-Travel-Events-100092683475305/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px 0 rgba(24,119,242,0.10)", padding: 4, transition: "box-shadow 0.2s" }} aria-label="Facebook"
          onMouseOver={e => (e.currentTarget.style.boxShadow = "0 4px 16px 0 rgba(24,119,242,0.18)")}
          onMouseOut={e => (e.currentTarget.style.boxShadow = "0 2px 8px 0 rgba(24,119,242,0.10)")}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
            alt="Facebook"
            style={{ height: 36, width: "auto", display: "block" }}
          />
        </a>
        <a href="https://www.instagram.com/listravelevents?igsh=cjFrYTg0eHdtZDRw" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px 0 rgba(225,48,108,0.10)", padding: 4, transition: "box-shadow 0.2s" }} aria-label="Instagram"
          onMouseOver={e => (e.currentTarget.style.boxShadow = "0 4px 16px 0 rgba(225,48,108,0.18)")}
          onMouseOut={e => (e.currentTarget.style.boxShadow = "0 2px 8px 0 rgba(225,48,108,0.10)")}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            style={{ height: 36, width: 36, display: "block", borderRadius: 8 }}
          />
        </a>
      </div>
    </div>
  </header>
);

export default Header;
