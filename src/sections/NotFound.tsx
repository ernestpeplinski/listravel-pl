import React from "react";


const NotFound: React.FC = () => (
  <section style={{ padding: "2rem 0", textAlign: "center" }}>
    <div style={{ fontSize: "4rem", marginBottom: "1rem" }} role="img" aria-label="Zaskoczona buźka">😕</div>
    <h2>404 - Nie znaleziono strony</h2>
    <p>Przepraszamy, taka strona nie istnieje.</p>
  </section>
);

export default NotFound;
