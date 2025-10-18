import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo_1000x1000.png";
import "../App.css";
import "../style/header.scss";

// Reusable phone chip component
function PhoneChip({
  label,
  number,
  color,
  boxShadow,
}: {
  label: string;
  number: string;
  color: string;
  boxShadow: string;
  hoverColor: string;
}) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      className="phone-chip"
      href={`tel:${number.replace(/\s/g, "")}`}
      style={{
        fontWeight: 600,
        display: "inline-flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        background: `linear-gradient(90deg, #f5f7fa 60%, ${color}22 100%)`,
        borderRadius: 16,
        padding: "0.22em 1.25em 0.22em 0.7em",
        boxShadow:
          boxShadow +
          ", 0 4px 16px 0 rgba(37,99,235,0.10)" +
          (hovered ? ", 0 6px 24px 0 #f59e4288" : ""),
        minHeight: 38,
        fontSize: "1.13rem",
        letterSpacing: "0.01em",
        color,
        textDecoration: "none",
        transform: hovered ? "translateY(-2px) scale(1.04)" : "none",
        transition: "box-shadow 0.22s, transform 0.18s, color 0.2s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        style={{ marginRight: 6 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="13" cy="13" r="13" fill="#22c55e" />
        <path
          d="M8.5 10.5C9.5 13 13 16.5 15.5 17.5L17.5 15.5C17.7 15.3 18 15.3 18.3 15.5C19.5 16.2 20.7 16.9 21.5 17.5C21.7 17.7 21.7 18 21.5 18.3L20.1 20.1C19.9 20.4 19.4 20.7 19 20.7C13.5 20.7 8.8 16 8.8 10.5C8.8 10.1 9.1 9.6 9.4 9.4L11.2 8C11.5 7.8 11.8 7.8 12 8C12.7 9 13.5 10.5 14 11.3C14.2 11.6 14.2 11.9 14 12.1L12.5 13.5C12.3 13.7 12 13.7 11.7 13.5L10.5 12.5C10.3 12.3 10.3 12 10.5 11.7L11.5 10.5C11.7 10.3 12 10.3 12.3 10.5L13.5 11.5C13.8 11.7 13.8 12 13.5 12.3L12.5 13.5C12.3 13.7 12 13.7 11.7 13.5L10.5 12.5C10.3 12.3 10.3 12 10.5 11.7L11.5 10.5Z"
          fill="#fff"
        />
      </svg>
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 2,
        }}
      >
        <span style={{ fontSize: "0.98em", fontWeight: 700, marginBottom: 1 }}>
          {label}
        </span>
        <span style={{ fontWeight: 800 }}>{number}</span>
      </span>
    </a>
  );
}

const NAV_LINKS = [
  { href: "/", label: "Strona główna" },
  { href: "/kalendarz", label: "Kalendarz" },
  { href: "/o-nas", label: "O nas" },
  { href: "/kontakt", label: "Kontakt" },
];

const Header: React.FC = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const isActive = (href: string) => location.pathname === href;

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__brand">
          <Link to="/" aria-label="Strona główna">
            <img src={logo} alt="Logo" className="header__logo" />
          </Link>
        </div>

        <nav className="header__nav" aria-label="Główna nawigacja">
          <ul className="header__links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`header__link${
                    isActive(link.href) ? " is-active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <div className="header__phones">
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

          <div className="header__socials">
            <a
              href="https://www.facebook.com/p/LiS-Travel-Events-100092683475305/"
              target="_blank"
              rel="noopener noreferrer"
              className="social social--facebook"
              aria-label="Facebook"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                alt="Facebook"
              />
            </a>
            <a
              href="https://www.instagram.com/listravelevents?igsh=cjFrYTg0eHdtZDRw"
              target="_blank"
              rel="noopener noreferrer"
              className="social social--instagram"
              aria-label="Instagram"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
              />
            </a>
          </div>

          <button
            className={`header__burger${mobileOpen ? " is-open" : ""}`}
            aria-label="Otwórz menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu${mobileOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="mobile-menu__content">
          <ul className="mobile-menu__links" onClick={closeMobile}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`mobile-menu__link${
                    isActive(link.href) ? " is-active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mobile-menu__phones" onClick={closeMobile}>
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

          <div className="mobile-menu__socials" onClick={closeMobile}>
            <a
              href="https://www.facebook.com/p/LiS-Travel-Events-100092683475305/"
              target="_blank"
              rel="noopener noreferrer"
              className="social social--facebook"
              aria-label="Facebook"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                alt="Facebook"
              />
            </a>
            <a
              href="https://www.instagram.com/listravelevents?igsh=cjFrYTg0eHdtZDRw"
              target="_blank"
              rel="noopener noreferrer"
              className="social social--instagram"
              aria-label="Instagram"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
              />
            </a>
          </div>

          <button
            className="mobile-menu__close"
            onClick={closeMobile}
            aria-label="Zamknij menu"
          >
            Zamknij
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
