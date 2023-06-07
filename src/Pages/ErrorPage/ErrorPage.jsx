import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Page Not Found</h1>
          <p className="py-6">The page you are looking for is no yet exist</p>
          <Link to="/" className="btn btn-error">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
