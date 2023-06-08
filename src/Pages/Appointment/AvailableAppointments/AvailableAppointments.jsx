import { format } from "date-fns";
import { useEffect, useState } from "react";
import AppointmentOptions from "./AppointmentOptions";

export default function AvailableAppointments({ selectedDate }) {
  const [appointmentOptions, setAppointmentOptions] = useState([]);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);

  console.log(appointmentOptions);

  return (
    <section>
      <p className="text-md md:text-2xl text-center font-bold text-primary">
        Available Appointments{" "}
        <span className="text-error">{format(selectedDate, "PP")}</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-24">
        {appointmentOptions.map((option) => (
          <AppointmentOptions key={option.id} appointmentOption={option} />
        ))}
      </div>
    </section>
  );
}
