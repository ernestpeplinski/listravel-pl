

import React, { useState } from "react";
import chairPhoto from "../assets/sewerynipiotr.jpg";
import chairPhoto2 from "../assets/sewerynipiotr2.jpg";
import wycieczka2 from "../assets/wycieczka2.jpg";
import wycieczka3 from "../assets/wycieczka3.jpg";
import wycieczka4 from "../assets/wycieczka4.jpg";
import wycieczka5 from "../assets/wycieczka5.jpg";

const About: React.FC = () => {
  const [modalImg, setModalImg] = useState<string | null>(null);
  const galleryImages = [
    { src: wycieczka2, alt: "Wycieczka 2" },
    { src: wycieczka3, alt: "Wycieczka 3" },
    { src: wycieczka4, alt: "Wycieczka 4" },
    { src: wycieczka5, alt: "Wycieczka 5" },
  ];

  return (
    <section className="about-section styled-about">
      <div className="about-row">
        <div className="about-row-mobile-top">
          <div className="about-side-image">
            <img src={chairPhoto} alt="Założyciele firmy na dużym krześle" />
          </div>
        </div>
        <div className="about-content">
          <h2>O nas</h2>
          <p>
            <strong>Lis Travel & Events</strong> to firma specjalizująca się w organizacji wycieczek autokarowych, imprez turystycznych oraz imprez integracyjnych. Działamy od maja 2023 roku, a założycielami firmy są Seweryn Lemke i Piotr Słomiński. Naszą misją jest tworzenie niezapomnianych przeżyć i integracja ludzi poprzez wspólne podróże i wydarzenia.
          </p>
        </div>
        <div className="about-row-mobile-top">
          <div className="about-side-image">
            <img src={chairPhoto2} alt="Założyciele firmy przy pomniku" />
          </div>
        </div>
      </div>
      <div className="about-gallery">
        {galleryImages.map((img, idx) => (
          <div className="about-gallery__item" key={idx}>
            <img
              src={img.src}
              alt={img.alt}
              onClick={() => setModalImg(img.src)}
              style={{ cursor: "pointer" }}
            />
          </div>
        ))}
      </div>

      {modalImg && (
        <div
          className="about-modal"
          onClick={() => setModalImg(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(30,40,60,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            cursor: "zoom-out",
          }}
        >
          <img
            src={modalImg}
            alt="Podgląd zdjęcia"
            style={{
              maxWidth: "96vw",
              maxHeight: "92vh",
              borderRadius: "18px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              background: "#fff",
            }}
            onClick={e => { e.stopPropagation(); setModalImg(null); }}
          />
        </div>
      )}
    </section>
  );
};

export default About;
