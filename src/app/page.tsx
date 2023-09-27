"use client";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import backgroundImg from "../../img/background.jpg";
import { useState } from "react";
import { Education, Projects, Header, Nav, Experience } from "./components";
import { NavItem } from "./components/Nav";

export default function Home() {
  const [navItem, setNavItem] = useState<NavItem>("Projects");

  return (
    <div>
      <Parallax pages={2}>
        <ParallaxLayer
          speed={0.3}
          factor={2.6}
          style={{
            backgroundImage: `url(${backgroundImg.src})`,
            backgroundSize: "cover",
            opacity: 0.5,
          }}
        ></ParallaxLayer>

        <ParallaxLayer speed={3} factor={1}>
          <Header />
        </ParallaxLayer>

        <ParallaxLayer
          speed={3}
          factor={1}
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
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <div className=" px-24 pt-14">
            {navItem === "Projects" && <Projects />}
            {navItem === "Education" && <Education />}
            {navItem === "Experience" && <Experience />}
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
