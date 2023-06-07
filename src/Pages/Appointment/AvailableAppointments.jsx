import { format } from "date-fns";
import React from "react";

export default function AvailableAppointments({ selectedDate }) {
  return (
    <section>
      <p className="text-md md:text-2xl text-center font-bold text-primary">
        Available Appointments On {format(selectedDate, "PP")}
      </p>
    </section>
  );
}
