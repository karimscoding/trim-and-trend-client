/* eslint-disable react/prop-types */
import { format } from "date-fns";

export default function BookingModal({ services, selectedDate, setServices }) {
  const { name, slots } = services;

  // selected date
  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const username = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      serviceName: name,
      userName: username,
      slot,
      email,
      phone,
    };
    console.log(booking);
    setServices(null);
  };

  return (
    <>
      <dialog id="booking" className="modal">
        <form onSubmit={handleBooking} method="dialog" className="modal-box">
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
          <select name="slot" className="select select-bordered w-full mt-5">
            {slots.map((slot, i) => (
              <option key={i}>{slot}</option>
            ))}
          </select>
          <input
            type="name"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full mt-5"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full mt-5"
          />
          <input
            type="phone"
            name="phone"
            placeholder="Phone"
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
