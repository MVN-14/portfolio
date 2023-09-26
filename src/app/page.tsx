"use client";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import backgroundImg from "../../img/background.jpg";
import Header from "./components/Header";
import Nav from "./components/Nav";

export default function Home() {
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
        <ParallaxLayer speed={1}>
          <Header />
        </ParallaxLayer>

        <ParallaxLayer offset={1} sticky={{ start: 1, end: 3 }}>
          <Nav />
        </ParallaxLayer>

        <ParallaxLayer offset={2}>
          <h1>This is the main content</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
