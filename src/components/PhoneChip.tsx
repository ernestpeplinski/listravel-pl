import React from "react";

interface PhoneChipProps {
  label: string;
  number: string;
  color: string;
  boxShadow: string;
}

const PhoneChip: React.FC<PhoneChipProps> = ({
  label,
  number,
  color,
  boxShadow,
}) => {
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
        border: `1px solid ${hovered ? color + "55" : color + "33"}`,
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
};

export default PhoneChip;
