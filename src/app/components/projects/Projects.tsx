import spotifyTrackerImage from "img/spotify-tracker-top-artists.png";
import tunerExtentionImage from "img/guitar-tuner.jpg";
import portfolioImage from "img/portfolio.png";
import githubLogo from "img/github-icon-white.png";
import edgeLogo from "img/edge-logo.png";
import chromeLogo from "img/chrome-logo.png";
import { Carousel } from "react-responsive-carousel";
import { Link, Project } from "./Project";


export function Projects() {
    return (
        <div className="text-center">
            <Carousel showStatus={false} infiniteLoop showThumbs={false}>
                <Project
                    description={spotifyTrackerDescription}
                    image={spotifyTrackerImage}
                    name="Spotify Tracker"
                    tags={["Angular", "RxJS", "Bootstrap", "Node", "Express"]}
                    links={spotifyTrackerLinks}
                />

                <Project
                    description={tunerExtentionDescription}
                    image={tunerExtentionImage}
                    name="Tuner Extention"
                    tags={["JavaScript", "HTML", "ManifestV3"]}
                    links={tunerExtentionLinks}
                />

                <Project
                    description={portfolioDescription}
                    image={portfolioImage}
                    name="This Portfolio"
                    tags={["NextJS", "React", "TypeScript", "Tailwind"]}
                    links={portfolioLinks}
                />

            </Carousel>
        </div>
    );
}

const spotifyTrackerDescription =
    "Spotify Tracker is a project that lets spotify users interact with their personal data to see top songs/artists, recently played tracks, profile information, track/artist information, recommended tracks based on tracks or artists and more.";
const spotifyTrackerLinks: Link[] = [
    {
        href: "https://github.com/MVN-14/SpotifyTracker",
        logo: githubLogo,
        alt: "Github Logo",
        text: "GitHub"
    }
];


const tunerExtentionDescription =
    "This is a web extention for Chrome and Edge browsers thats plays the acoustic notes of E Standard tuning to tune a guitar to standard tuning";
const tunerExtentionLinks: Link[] = [
    {
        href: "https://chrome.google.com/webstore/detail/standard-guitar-tuner/cbjcfjfglkgbcjpahfpnmmokkmbjfedl",
        logo: chromeLogo,
        alt: "Chrome Logo",
        text: "Chrome"
    },
    {
        href: "https://microsoftedge.microsoft.com/addons/detail/standard-guitar-tuner/dbnlmanoohhnpdpmepdekafdmkkiacon",
        logo: edgeLogo,
        text: "Edge",
        alt: "Edge Logo"
    },
    {
        href: "https://github.com/MVN-14/TunerExtension",
        logo: githubLogo,
        text: "GitHub",
        alt: "Github Logo"
    }
];

const portfolioDescription =
    "This is a web portfolio built with NextJS 13 leveraging Tailwind CSS, Typescript, react-spring, and react-responsive-carousel libraries.";
const portfolioLinks = [
    {
        href: "https://github.com/MVN-14/portfolio",
        logo: githubLogo,
        alt: "GitHub Logo",
        text: "GitHub"
    }
]
