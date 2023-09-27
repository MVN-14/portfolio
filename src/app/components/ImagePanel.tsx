import Image from "next/image";
import { StaticImageData } from "next/image";

export function ImagePanel({ image, alt, children }: PageProps) {
  return (
    <div className="flex gap-10 ">
      <Image
        src={image}
        alt={alt}
        style={{
          height: "auto",
          width: "clamp(150px, 170px, 200px)",
        }}
      ></Image>
      {children}
    </div>
  );
}

type PageProps = {
  image: StaticImageData;
  alt: string;
  children: React.ReactNode;
};
