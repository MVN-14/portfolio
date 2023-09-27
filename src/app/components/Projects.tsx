import spotifyTrackerImage from "img/spotify-tracker-top-artists.png";
import guitarTuner from "img/guitar-tuner.jpg";
import { Carousel } from "react-responsive-carousel";
import { Project } from ".";

export function Projects() {
  return (
    <div className="text-center">
      <Carousel showStatus={false} infiniteLoop showThumbs={false}>
        <Project
          description={spotifyTrackerDescription}
          image={spotifyTrackerImage}
          name="Spotify Tracker"
          tags={["Angular", "RxJS", "Bootstrap", "Node", "Express"]}
          githubLink="https://github.com/MVN-14/SpotifyTracker"
        />

        <Project
          description={tunerExtentionDescription}
          image={guitarTuner}
          name="Tuner Extention"
          tags={["JavaScript", "HTML", "ManifestV3"]}
          githubLink="https://github.com/MVN-14/TunerExtension"
        />
      </Carousel>
    </div>
  );
}

const spotifyTrackerDescription =
  "Spotify Tracker is a project that lets spotify users interact with their personal data to see top songs/artists, recently played tracks, profile information, track/artist information, recommended tracks based on tracks or artists and more!";

const tunerExtentionDescription =
  "This is a web extention for Chrome and Edge browsers thats plays the acoustic notes of E Standard tuning to tune a guitar to standard tuning";
