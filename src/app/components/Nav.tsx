"use client";

import { MouseEventHandler } from "react";

export type NavItem = "Projects" | "Education" | "Experience";

export default function Nav({
  onChange,
  selectedItem,
}: {
  onChange: MouseEventHandler<HTMLButtonElement>;
  selectedItem: NavItem;
}) {
  return (
    <div className="bg-background w-full mx-auto h-10 border-black rounded-xl flex text-xl md:text-2xl gap-5">
      <button
        className={`${selectedItem == "Projects" ? "active" : ""} w-1/3`}
        onClick={onChange}
      >
        Projects
      </button>
      <button
        className={`${selectedItem == "Education" ? "active" : ""} w-1/3`}
        onClick={onChange}
      >
        Education
      </button>
      <button
        className={`${selectedItem == "Experience" ? "active" : ""} w-1/3`}
        onClick={onChange}
      >
        Experience
      </button>
    </div>
  );
}
