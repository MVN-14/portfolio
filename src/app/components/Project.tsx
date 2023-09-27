import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import githubSvg from "../../../img/github-mark.svg";

export function Project({
  name,
  image,
  description,
  githubLink,
  tags,
}: PageProps) {
  return (
    <div className="bg-black border-background border-8 bg-opacity-40 rounded-3xl mx-auto pb-16 h-full">
      <div className="flex justify-between px-5 py-2 border-background border-b-8">
        <h1 className="my-auto text-4xl text-center">{name}</h1>
        <h1 className="flex flex-row gap-2 justify-center align-middle">
          {createTags(tags)}
        </h1>
      </div>
      <Image
        className="p-5 mx-auto"
        src={image}
        alt={`${name} image`}
        style={{
          width: "40%",
          height: "auto",
        }}
      ></Image>

      {githubLink && (
        <Link
          href={githubLink}
          className="mx-auto flex border-black bg-white text-black w-36 text-xl p-2 rounded lg justify-around"
        >
          <Image
            src={githubSvg}
            style={{
              width: "30px",
              height: "auto",
            }}
            alt="Github Logo"
          />
          <p className="my-auto">Github</p>
        </Link>
      )}
      <p className="py-5 text-2xl w-3/4 mx-auto">{description}</p>
    </div>
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
