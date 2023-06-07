import React from "react";

export default function HeroBanner() {
  return (
    <div className="hero  bg-base-200">
      <div className="hero-content flex justify-between items-center">
        <div>
          <h1 className="text-5xl font-bold">
            Trim and trend style meets precision.
          </h1>
          <p className="py-6">
            Book your next grooming experience with our talented barbers and
            step into a world of effortless sophistication.
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-accent to-success">
            Book Your seat
          </button>
        </div>

        <div>
          <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFyYmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
        </div>
      </div>
    </div>
  );
}
