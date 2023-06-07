import React from "react";
import { Link } from "react-router-dom";

export default function HeroBanner() {
  return (
    <div className="hero min-h-screen">
      <div className=""></div>
      <div className="text-center">
        <div className="max-w-4xl">
          <h1 className="mb-5 text-5xl font-bold">Style Meets Precision.</h1>
          <p className="mb-5">
            Book your next grooming experience with our talented barbers <br />{" "}
            and step into a world of effortless sophistication.
          </p>
          <Link to="/appointment" className="btn btn-primary">
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
