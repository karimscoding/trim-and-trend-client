import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">Appointment</a>
        <a className="link link-hover">Reviews</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Login</a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a>
            <AiFillTwitterCircle size={30} />
          </a>
          <a>
            <AiFillLinkedin size={30} />
          </a>
          <a>
            <AiFillGithub size={30} />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved</p>
        <p>Made with love 🧡 by @karimscoding</p>
      </div>
    </footer>
  );
}
