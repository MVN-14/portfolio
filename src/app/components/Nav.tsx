"use client";

import { MouseEventHandler } from "react";

export type NavItem = "Projects" | "Contact" | "Experience";

export function Nav({
  onChange,
  selectedItem,
}: {
  onChange: MouseEventHandler<HTMLButtonElement>;
  selectedItem: NavItem;
}) {
  const activeClass = "bg-white text-black flex-grow rounded-2xl";

  return (
    <div className="bg-background w-full mx-auto h-14 border-black rounded-xl flex text-xl md:text-2xl gap-5">
      <button
        className={`${selectedItem == "Projects" ? activeClass : ""} w-1/3`}
        onClick={onChange}
      >
        Projects
      </button>

      <button
        className={`${selectedItem == "Experience" ? activeClass : ""} w-1/3`}
        onClick={onChange}
      >
        Experience
      </button>

      <button
        className={`${selectedItem == "Contact" ? activeClass : ""} w-1/3`}
        onClick={onChange}
      >
        Contact
      </button>
    </div>
  );
}
