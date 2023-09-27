"use client";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import backgroundImg from "../../img/background.jpg";
import { useState } from "react";
import { Education, Projects, Header, Nav, Experience } from "./components";
import { NavItem } from "./components/Nav";

export default function Home() {
  const [navItem, setNavItem] = useState<NavItem>("Experience");

  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer
          speed={0.1}
          factor={4.5}
          style={{
            backgroundImage: `url(${backgroundImg.src})`,
            backgroundSize: "cover",
            opacity: 0.5,
          }}
        ></ParallaxLayer>
        <ParallaxLayer speed={1} factor={0.2}>
          <Header />
        </ParallaxLayer>

        <ParallaxLayer
          factor={1}
          offset={1}
          speed={4}
          sticky={{ start: 1, end: 3 }}
        >
          <Nav
            onChange={(e) => {
              const button = e.target as HTMLButtonElement;
              setNavItem(button.innerText as NavItem);
            }}
            selectedItem={navItem}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} style={{ padding: "100px" }}>
          <div>{navItem == "Projects" && <Projects />}</div>
          <div>{navItem == "Education" && <Education />}</div>
          <div>{navItem == "Experience" && <Experience />}</div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
