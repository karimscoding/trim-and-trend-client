import React from "react";

export default function BookingModal({ services }) {
  const { name } = services;
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
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </form>
      </dialog>
    </>
  );
}
