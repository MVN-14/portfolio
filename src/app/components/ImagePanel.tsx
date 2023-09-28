import Image from "next/image";
import { StaticImageData } from "next/image";

export function ImagePanel({ image, alt, children, imageStyle }: PageProps) {
  return (
    <div className="lg:flex gap-10">
      <Image
        src={image}
        alt={alt}
        style={{
          width: "20%",
          height: "auto",
          minWidth: "200px",
          ...imageStyle,
        }}
      ></Image>
      <div className="my-auto">{children}</div>
    </div>
  );
}

type PageProps = {
  image: StaticImageData;
  alt: string;
  children: React.ReactNode;
  imageStyle?: object;
};
