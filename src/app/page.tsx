"use client";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import backgroundImg from "img/background.jpg";
import { useState } from "react";
import { Projects, Header, Nav, Experience, Contact } from "./components";
import { NavItem } from "./components/Nav";

export default function Home() {
  const [selectedNavItem, setSelectedNavItem] = useState<NavItem>("Projects");

  return (
    <div>
      <Parallax pages={2}>
        <ParallaxLayer
          speed={0.3}
          factor={2.5}
          style={{
            backgroundImage: `url(${backgroundImg.src})`,
            backgroundSize: "100% 100%",
            opacity: 0.5,
          }}
        ></ParallaxLayer>

        <ParallaxLayer speed={1} factor={1}>
          <Header />
        </ParallaxLayer>

        <ParallaxLayer speed={2} factor={1} offset={1}>
          <Nav
            onChange={(e) => {
              const button = e.target as HTMLButtonElement;
              setSelectedNavItem(button.innerText as NavItem);
            }}
            selectedItem={selectedNavItem}
          />
          <div className="px-24 w-10/12 mx-auto pt-14">
            {selectedNavItem === "Projects" && <Projects />}
            {selectedNavItem === "Experience" && <Experience />}
            {selectedNavItem === "Contact" && <Contact />}
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
