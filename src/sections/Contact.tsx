import "../style/contact.css";

const Contact: React.FC = () => (
  <section className="contact-section">
    <h2>Kontakt</h2>
    <div className="contact-box">
      <div className="contact-row">
        <svg
          className="contact-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="6" fill="#0072C6" />
          <path
            d="M6 8.5V16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8.5l-6 4.5-6-4.5Z"
            fill="#fff"
          />
          <path d="M19 7a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1l7 5 7-5Z" fill="#fff" />
        </svg>
        <a href="mailto:listravel@wp.pl" className="contact-link email">
          listravel@wp.pl
        </a>
      </div>
      <div className="contact-row">
        <svg
          className="contact-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="6" fill="#34A853" />
          <path
            d="M17.7 15.29l-2.1-.6a1 1 0 0 0-1 .26l-.45.46a7.72 7.72 0 0 1-3.6-3.6l.46-.45a1 1 0 0 0 .26-1l-.6-2.1A1 1 0 0 0 9.4 8H7.5A1.5 1.5 0 0 0 6 9.5c0 5.25 4.25 9.5 9.5 9.5A1.5 1.5 0 0 0 17 17.5v-1.9a1 1 0 0 0-.7-.31Z"
            fill="#fff"
          />
        </svg>
        <span className="contact-label">Seweryn:</span>&nbsp;
        <a href="tel:+48609389924" className="contact-link phone">
          609 389 924
        </a>
      </div>
      <div className="contact-row">
        <svg
          className="contact-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="6" fill="#34A853" />
          <path
            d="M17.7 15.29l-2.1-.6a1 1 0 0 0-1 .26l-.45.46a7.72 7.72 0 0 1-3.6-3.6l.46-.45a1 1 0 0 0 .26-1l-.6-2.1A1 1 0 0 0 9.4 8H7.5A1.5 1.5 0 0 0 6 9.5c0 5.25 4.25 9.5 9.5 9.5A1.5 1.5 0 0 0 17 17.5v-1.9a1 1 0 0 0-.7-.31Z"
            fill="#fff"
          />
        </svg>
        <span className="contact-label">Piotr:</span>&nbsp;
        <a href="tel:+48534263279" className="contact-link phone">
          534 263 279
        </a>
      </div>
      <div className="contact-row">
        <svg
          className="contact-icon"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="32" height="32" rx="8" fill="#25D366" />
          <path
            d="M16 7.5c-4.7 0-8.5 3.7-8.5 8.3 0 1.5.4 2.9 1.1 4.1l-1.2 4.4 4.5-1.2c1.1.6 2.4.9 3.8.9 4.7 0 8.5-3.7 8.5-8.3S20.7 7.5 16 7.5Zm0 15.1c-1.2 0-2.3-.3-3.3-.8l-.2-.1-2.7.7.7-2.6-.1-.2c-.7-1.1-1.1-2.3-1.1-3.6 0-3.8 3.2-6.9 7.1-6.9s7.1 3.1 7.1 6.9-3.2 6.9-7.1 6.9Zm4-5.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1-.1.1-.5.7-.6.8-.1.1-.2.2-.4.1-.2-.1-.8-.3-1.5-.9-.5-.4-.9-.9-1-1-.1-.1 0-.2.1-.3.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3.1-.1.1-.2 0-.3-.1-.1-.5-1.2-.7-1.6-.2-.4-.3-.3-.5-.3h-.4c-.2 0-.3.1-.4.2-.1.1-.5.5-.5 1.2s.5 1.4.6 1.5c.1.2 1.1 1.7 2.7 2.3.4.2.7.3.9.4.4.1.7.1 1 .1.3 0 .9-.4 1-.8.1-.4.1-.7.1-.8 0-.1-.1-.1-.2-.2Z"
            fill="#fff"
          />
        </svg>
        <a
          href="https://wa.me/48609389924"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link whatsapp"
        >
          WhatsApp +48 609 389 924
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
