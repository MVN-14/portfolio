import spotifyTrackerImage from "../../../img/spotify-tracker-top-artists.png";
import guitarTuner from "../../../img/guitar-tuner.jpg";
import { Carousel } from "react-responsive-carousel";
import { Project } from ".";

export default function Projects() {
  return (
    <div className="text-center pb-5">
      <h1 className="text-6xl pt-16 pb-5">My Projects</h1>

      <Carousel
        showStatus={false}
        infiniteLoop
        showThumbs={false}
        className="w-10/12 mx-auto"
      >
        <Project
          description={spotifyTrackerDescription}
          image={spotifyTrackerImage}
          name="Spotify Tracker"
          tags={["Angular", "RxJS", "Bootstrap", "Node", "Express"]}
          githubLink="https://github.com/MVN-14/"
        />
        <Project
          description={guitarTunerDescription}
          image={guitarTuner}
          name="Guitar Tuner Extention"
          tags={["JavaScript", "HTML", "ManifestV3"]}
          githubLink="https://github.com/MVN-14/"
        />
      </Carousel>
    </div>
  );
}

const spotifyTrackerDescription =
  "Spotify Tracker is a project that lets spotify users interact with their personal data to see top songs/artists, recently played tracks, profile information, track/artist information, recommended tracks based on tracks or artists and more!";

const guitarTunerDescription =
  "This is a web extention for Chrome and Edge browsers thats plays the acoustic notes of E Standard tuning to tune a guitar to standard tuning";
