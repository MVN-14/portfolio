import { StaticImageData } from "next/image";
import { ImagePanel } from "./ImagePanel";

export function JobPanel({
  image,
  href,
  position,
  date,
  companyName,
  tags,
}: PageProps) {
  return (
    <ImagePanel image={image} alt={`${companyName}'s Logo`}>
      <div className="pt-2">
        <a className="text-2xl lg:text-3xl" href={href}>
          {companyName}
        </a>
        <p className="text-xl lg:text-2xl lg:pt-2">{position}</p>
        <p className="text-lg lg:text-xl lg:pt-2">{date}</p>
        <div className="lg:flex lg:flex-row gap-2 pt-4">{createTags(tags)}</div>
      </div>
    </ImagePanel>
  );
}

type PageProps = {
  image: StaticImageData;
  href: string;
  position: string;
  date: string;
  companyName: string;
  tags: string[];
};

function createTags(tags: string[]) {
  return tags.map((tag) => (
    <div
      key={tag}
      className="border rounded-lg p-1 font-bold text-md lg:text-lg my-auto w-fit"
    >
      {tag}
    </div>
  ));
}
