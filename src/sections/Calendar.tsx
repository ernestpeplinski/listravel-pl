import React, { useMemo, useState } from "react";
import { trips as tripsData, type Trip } from "../data/trips";
import "../style/calendar.css";

type ModalState = { open: true; trip: Trip } | { open: false };

const formatDate = (d: Date) =>
  d.toLocaleDateString("pl-PL", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

const daysBetween = (start: Date, end: Date) => {
  const ms =
    Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  return ms;
};
const startOfDay = (d: Date) =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate());
const addDays = (d: Date, days: number) =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate() + days);

const Calendar: React.FC = () => {
  const [modal, setModal] = useState<ModalState>({ open: false });

  const today = startOfDay(new Date());

  const trips = useMemo(
    () =>
      [...tripsData]
        // show until the end date (inclusive); hide starting the next day
        .filter((t) => today < addDays(t.endDate, 1))
        .sort((a, b) => a.startDate.getTime() - b.startDate.getTime()),
    [today]
  );

  return (
    <section className="calendar">
      <h2 style={{ textAlign: "center" }}>Kalendarz</h2>

      <div className="calendar__grid">
        {trips.map((t, i) => {
          const days = daysBetween(t.startDate, t.endDate);
          return (
            <article className="trip-card" key={i}>
              <img
                className="trip-card__image"
                src={t.thumbnailUrl ?? t.imageUrl}
                alt={t.title}
                loading="lazy"
              />
              <div className="trip-card__body">
                <h3 className="trip-card__title">{t.title}</h3>
                {t.description && (
                  <p className="trip-card__description">{t.description}</p>
                )}
                <div className="trip-card__meta">
                  <svg
                    className="trip-card__meta-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  {formatDate(t.startDate)} – {formatDate(t.endDate)} ({days}{" "}
                  {days === 1 ? "dzień" : days < 5 ? "dni" : "dni"})
                </div>
                <div className="trip-card__price">
                  Cena: {t.price.toLocaleString("pl-PL")} zł
                </div>
                <button
                  className="trip-card__button"
                  onClick={() => setModal({ open: true as const, trip: t })}
                >
                  Zobacz szczegóły
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {modal.open && (
        <div
          className="calendar-modal__backdrop"
          onClick={() => setModal({ open: false })}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="calendar-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="calendar-modal__header">
              <strong>{modal.trip.title}</strong>
              <button
                className="calendar-modal__close"
                aria-label="Zamknij"
                onClick={() => setModal({ open: false })}
              >
                ×
              </button>
            </div>
            <img
              className="calendar-modal__img"
              src={modal.trip.imageUrl}
              alt={modal.trip.title}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Calendar;
