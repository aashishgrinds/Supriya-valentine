import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

export default function TextFooter() {
  return (
    <>
      {/* Mobile Text */}
      <h1
        className={`block md:hidden absolute inset-x-4 bottom-4 text-center text-white text-lg font-semibold leading-snug ${playfairDisplay.className}`}
      >
        <span className="text-gray-400">Match</span> the photo pairs{" "}
        <br />
        to reveal <span className="text-gray-400">the surprise</span>
      </h1>

      {/* Left Text */}
      <h1
        className={`hidden md:block absolute left-6 md:left-10 bottom-4 md:bottom-5 transform -translate-y-1/2 text-white text-2xl lg:text-5xl font-bold leading-tight ${playfairDisplay.className}`}
      >
        <span className="text-gray-400">Match</span> <br /> the photo pairs
      </h1>

      {/* Right Text */}
      <h1
        className={`hidden md:block absolute right-6 md:right-10 bottom-4 md:bottom-5 transform -translate-y-1/2 text-white text-2xl lg:text-5xl font-bold leading-tight text-right ${playfairDisplay.className}`}
      >
        to reveal <br /> <span className="text-gray-400">the surprise</span>
      </h1>

      {/* Copyright (removed external branding) */}
    </>
  );
}
