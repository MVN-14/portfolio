"use client";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import backgroundImg from "../../img/background.jpg";
import { useState } from "react";
import { Projects, Header, Nav, Experience, Contact } from "./components";
import { NavItem } from "./components/Nav";

export default function Home() {
  const [navItem, setNavItem] = useState<NavItem>("Projects");

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

        <ParallaxLayer speed={3} factor={0.5}>
          <Header />
        </ParallaxLayer>

        <ParallaxLayer
          speed={3}
          factor={0.2}
          offset={1}
          sticky={{ start: 1, end: 2 }}
        >
          <Nav
            onChange={(e) => {
              const button = e.target as HTMLButtonElement;
              setNavItem(button.innerText as NavItem);
            }}
            selectedItem={navItem}
          />
          <div className=" px-24">
            {navItem === "Projects" && <Projects />}
            {navItem === "Experience" && <Experience />}
            {navItem === "Contact" && <Contact />}
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
