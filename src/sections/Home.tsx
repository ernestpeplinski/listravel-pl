import React from "react";
import AboutContent from "../components/AboutContent";
import Calendar from "./Calendar";
import Contact from "./Contact";

const Home: React.FC = () => (
  <main>
    <section style={{ padding: "2rem 0", textAlign: "center" }}>
      <AboutContent />
    </section>
    <Calendar />
    <Contact />
  </main>
);

export default Home;
