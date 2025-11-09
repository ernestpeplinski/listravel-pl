import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import type { Trip } from "../types/trip";

export const useTrips = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch all trips
  const fetchTrips = async () => {
    try {
      setLoading(true);
      const tripsQuery = query(
        collection(db, "trips"),
        orderBy("startDate", "desc")
      );
      const querySnapshot = await getDocs(tripsQuery);

      const tripsData: Trip[] = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          startDate: data.startDate.toDate(),
          endDate: data.endDate.toDate(),
        } as Trip;
      });

      setTrips(tripsData);
      setError(null);
    } catch (err) {
      console.error("Error fetching trips:", err);
      setError("Nie udało się pobrać wycieczek");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  return {
    trips,
    loading,
    error,
    refreshTrips: fetchTrips,
  };
};
