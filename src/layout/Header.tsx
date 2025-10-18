import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo_1000x1000.png";
import PhoneChip from "../components/PhoneChip";
import "../App.css";
import "../style/header.scss";

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
            />
            <PhoneChip
              label="Piotr"
              number="534 263 279"
              color="#f59e42"
              boxShadow="0 1px 4px 0 rgba(251,191,36,0.06)"
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
            />
            <PhoneChip
              label="Piotr"
              number="534 263 279"
              color="#f59e42"
              boxShadow="0 1px 4px 0 rgba(251,191,36,0.06)"
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
