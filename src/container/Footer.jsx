import React from "react";
import { PiFacebookLogo, PiEnvelope, PiPhone } from "react-icons/pi";

function Footer() {
  //-> Function to get current year for copiright:
  function GetCurrentYear() {
    let currentYear = new Date().getFullYear();
    return <p>copyright@{currentYear}</p>;
  }

  return (
    <footer className="flex flex-col items-center justify-center bg-[#348DB3] text-white py-6 mt-auto">
      <strong>Adress:</strong>
      <p className="text-center">Hotellvägen 9, 133 35 Saltsjöbaden</p>
      <nav>
        <ul className="flex gap-3 mt-4 mb-4">
          <li>
            <a
              href="https://www.facebook.com/KSSS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiFacebookLogo size="1.15em" />
            </a>
          </li>
          <li>
            <a
              href="mailto:ksss@ksss.se"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiEnvelope size="1.15em" />
            </a>
          </li>
          <li>
            <a
              href="tel:+46855616680"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiPhone size="1.15em" />
            </a>
          </li>
        </ul>
      </nav>
      <GetCurrentYear />
    </footer>
  );
}

export default Footer;
