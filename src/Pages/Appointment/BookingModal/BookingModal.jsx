import { format } from "date-fns";
import React from "react";

export default function BookingModal({ services, selectedDate }) {
  const { name, slots } = services;

  // selected date
  const date = format(selectedDate, "PP");

  return (
    <>
      <dialog id="booking" className="modal">
        <form method="dialog" className="modal-box">
          <button
            htmlFor="booking"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">{name}</h3>
          <input
            type="text"
            value={date}
            disabled
            className="input input-bordered w-full mt-5"
          />
          <select className="select select-bordered w-full mt-5">
            {slots.map((slot, i) => (
              <option key={i}>{slot}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full mt-5"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full mt-5"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full mt-5"
          />
          <br />
          <input
            className="w-full btn btn-primary mt-5"
            type="submit"
            value="submit"
          />
        </form>
      </dialog>
    </>
  );
}
