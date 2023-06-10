import React from "react";

export default function AppointmentOptions({ appointmentOption, setServices }) {
  const { slots, name } = appointmentOption;
  return (
    <div className="card bg-base-100 shadow-xl text-center">
      <div className="card-body">
        <h2 className="text-sm md:text-xl text-primary font-bold text-center">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
        </p>
        <div className="card-actions justify-center">
          <button
            className="btn btn-primary text-white"
            onClick={() => {
              setServices(appointmentOption);
              window.booking.showModal();
            }}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
