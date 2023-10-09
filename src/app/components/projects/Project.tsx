import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Card } from "..";

export function Project({
    name,
    image,
    description,
    links,
    tags,
}: PageProps) {
    return (
        <Card>
            <div className="lg:flex lg:justify-between px-5 py-2 border-background border-b-8">
                <h1 className="my-auto text-2xl lg:text-4xl w-full lg:text-left">
                    {name}
                </h1>
                <h1 className="flex flex-row gap-2 justify-center">
                    {createTags(tags)}
                </h1>
            </div>
            <div className="flex-col justify-between">
                <Image
                    className="p-5 mx-auto"
                    src={image}
                    alt={`${name} image`}
                    style={{
                        width: "50%",
                        height: "auto",
                        minWidth: "350px",
                    }}
                ></Image>
                <div className="flex justify-center gap-5">
                    {links?.map(({ href, alt, text, logo }) =>
                        <Link
                            href={href}
                            className="flex border-black bg-white text-black  w-28 md:w-36 text-xl md:p-2 rounded lg justify-around"
                            target="_blank"
                        >
                            <Image
                                src={logo}
                                style={{
                                    width: "35px",
                                    height: "auto",
                                }}
                                alt={alt}
                            />
                            <p className="my-auto">{text}</p>
                        </Link>
                    )}
                </div>

                <p className="py-5 sm:text-xl lg:text-2xl w-3/4 mx-auto text-sm">
                    {description}
                </p>
            </div>
        </Card>
    );
}

type PageProps = {
    description: string;
    image: StaticImageData;
    links?: Link[];
    name: string;
    tags: string[];
}

export type Link = { href: string, logo: StaticImageData, text: string, alt: string };

function createTags(tags: string[]) {
    return tags.map((tag) => (
        <span
            key={tag}
            className="border lg:border-2 rounded-lg p-1 lg:p-2 text-sm lg:text-xl"
        >
            {tag}
        </span>
    ));
}
