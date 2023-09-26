import Link from "next/link";
export default function Nav() {
  return (
    <div className="bg-background w-full mx-auto h-16 border-black rounded-xl flex align-items-middle justify-center text-xl md:text-2xl gap-5">
      <Link href="#">Projects</Link>
      <Link href="#">Education</Link>
      <Link href="#">Experience</Link>
    </div>
  );
}
