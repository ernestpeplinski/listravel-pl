
import React from "react";
import groupPhoto from "../assets/wycieczka1.jpg";
import chairPhoto from "../assets/sewerynipiotr.jpg";

const About: React.FC = () => {
  return (
    <section className="about-section styled-about">
      <div className="about-image about-image--left">
        <img src={groupPhoto} alt="Grupa na wycieczce w lesie" />
      </div>
      <div className="about-content">
        <h2>O nas</h2>
        <p>
          <strong>Lis Travel & Events</strong> to firma specjalizująca się w organizacji wycieczek autokarowych, imprez turystycznych oraz imprez integracyjnych. Działamy od maja 2023 roku, a założycielami firmy są Seweryn Lemke i Piotr Słomiński. Naszą misją jest tworzenie niezapomnianych przeżyć i integracja ludzi poprzez wspólne podróże i wydarzenia.
        </p>
      </div>
      <div className="about-image about-image--right">
        <img src={chairPhoto} alt="Założyciele firmy na dużym krześle" />
      </div>
    </section>
  );
};

export default About;
