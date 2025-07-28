
import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        width: "100%",
        background: "linear-gradient(90deg, #f5f7fa 0%, #f59e42 100%)",
        boxShadow: "0 2px 24px 0 rgba(37,99,235,0.07)",
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        marginTop: 32,
        padding: "0.55rem 0.5rem 0.45rem 0.5rem",
        fontSize: "1.02rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 36,
        letterSpacing: "0.01em",
        fontWeight: 500,
        color: "#23272f",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ marginRight: 4 }} xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="11" fill="#f59e42"/>
          <text x="11" y="16" textAnchor="middle" fontSize="13" fill="#fff" fontFamily="Arial">©</text>
        </svg>
        {year} {" "}
        <a
          href="https://ernestpeplinski.pl/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#b45309",
            textDecoration: "none",
            fontWeight: 700,
            marginLeft: 4,
            borderBottom: "2px solid transparent",
            transition: "border-bottom 0.18s, color 0.18s"
          }}
          onMouseOver={e => {
            e.currentTarget.style.borderBottom = "2px solid #f59e42";
            e.currentTarget.style.color = "#f59e42";
          }}
          onMouseOut={e => {
            e.currentTarget.style.borderBottom = "2px solid transparent";
            e.currentTarget.style.color = "#b45309";
          }}
        >
          Ernest Pepliński
        </a>
      </span>
    </footer>
  );
};

export default Footer;
