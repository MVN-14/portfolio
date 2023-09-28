import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import githubSvg from "img/github-icon-white.png";
import { Card } from ".";

export function Project({
  name,
  image,
  description,
  githubLink,
  tags,
}: PageProps) {
  return (
    <Card>
      <div className="flex justify-between px-5 py-2 border-background border-b-8">
        <h1 className="my-auto text-4xl">{name}</h1>
        <h1 className="flex flex-row gap-2">{createTags(tags)}</h1>
      </div>
      <div className="flex-col justify-between">
        <Image
          className="p-5 mx-auto"
          src={image}
          alt={`${name} image`}
          style={{
            width: "55%",
            height: "auto",
          }}
        ></Image>

        {githubLink && (
          <Link
            href={githubLink}
            className="mx-auto flex border-black bg-white text-black w-36 text-xl p-2 rounded lg justify-around"
            target="_blank"
          >
            <Image
              src={githubSvg}
              style={{
                width: "35px",
                height: "auto",
              }}
              alt="Github Logo"
            />
            <p className="my-auto">Source</p>
          </Link>
        )}
        <p className="py-5 text-2xl w-3/4 mx-auto">{description}</p>
      </div>
    </Card>
  );
}

type PageProps = {
  description: string;
  image: StaticImageData;
  githubLink?: string;
  name: string;
  tags: string[];
};

function createTags(tags: string[]) {
  return tags.map((tag) => (
    <span key={tag} className="border-2 rounded-lg p-2 text-xl">
      {tag}
    </span>
  ));
}
