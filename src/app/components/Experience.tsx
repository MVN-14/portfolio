import Image from "next/image";
import Link from "next/link";
import spotifyTracker from "../../../img/spotify-tracker-top-artists.png";

export default function Experience() {
  return (
    <div className="text-center">
      <h1 className="text-6xl pt-16 pb-5">My Work Experience</h1>

      <div className="bg-black bg-opacity-25 border rounded-2xl mx-auto py-4">
        <div className="flex w-full border-b justify-between px-5 py-2">
          <h1 className="pb-2 text-4xl text-center">Spotify Tracker</h1>
          <h1 className="">
            {createTags(["Angular", "RxJS", "Bootstrap", "Node", "Express"])}
          </h1>
        </div>
        <Image
          className="p-5 mx-auto"
          src={spotifyTracker}
          alt="Spotify Tracker Screenshot"
          style={{
            width: "50%",
            height: "auto",
          }}
        ></Image>

        <p className="py-5 text-2xl w-3/4 mx-auto">
          Spotify Tracker is a project that lets spotify users interact with
          their personal data to see top songs/artists, recently played tracks,
          profile information, track/artist information, recommended tracks
          based on tracks or artists and more!
        </p>

        <a href="#" title="">
          Github
        </a>
      </div>
    </div>
  );
}

function createTags(tags: string[]) {
  return tags.map((tag) => (
    <span key={tag} className="tag">
      {tag}
    </span>
  ));
}
