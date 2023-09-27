// import Image, { StaticImageData } from "next/image";
// import Link from "next/link";

// export default function Project() {
//   return (
//     <div className="bg-black border-background border-8 bg-opacity-40 rounded-3xl mx-auto pb-5">
//       <div className="flex w-full justify-between px-5 py-2 border-background border-b-8">
//         <h1 className="my-auto text-4xl text-center">Spotify Tracker</h1>
//         <h1 className="flex flex-row gap-2 justify-center align-middle">
//           {createTags(["Angular", "RxJS", "Bootstrap", "Node", "Express"])}
//         </h1>
//       </div>
//       <Image
//         className="p-5 mx-auto"
//         src={spotifyTracker}
//         alt="Spotify Tracker Screenshot"
//         style={{
//           width: "50%",
//           height: "auto",
//         }}
//       ></Image>

//       <p className="py-5 text-2xl w-3/4 mx-auto">
//         Spotify Tracker is a project that lets spotify users interact with their
//         personal data to see top songs/artists, recently played tracks, profile
//         information, track/artist information, recommended tracks based on
//         tracks or artists and more!
//       </p>

//       <div className="mx-auto flex border-black bg-white text-black w-36 text-xl p-2 ">
//         <Image
//           src={githubSvg}
//           style={{
//             width: "30px",
//             height: "auto",
//           }}
//           alt="Github Logo"
//         />
//         <Link href="https://github.com/MVN-14/" className="m-auto">
//           Github
//         </Link>
//       </div>
//     </div>
//   );
// }

// type PageProps = {
//   description: string;
//   image: StaticImageData;
//   githubLink?: string;
//   name: string;
//   tags: string[];
// };

// function createTags(tags: string[]) {
//   return tags.map((tag) => (
//     <span key={tag} className="tag">
//       {tag}
//     </span>
//   ));
// }
