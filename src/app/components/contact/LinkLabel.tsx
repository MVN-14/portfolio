import Image, { StaticImageData } from "next/image";

export function LinkLabel({ label, icon, link }: PageProps) {
  return (
    <>
      <div className="flex md:justify-end align-middle pt-3 md:py-2 pe-5">
        <label className="font-bold md:text-right pe-2 my-auto">{label}</label>

        <Image
          src={icon}
          alt={`${label} Logo`}
          style={{
            maxWidth: "45px",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        ></Image>
      </div>
      <a className="col-span-2 my-auto" href={link} target="_blank">
        {link}
      </a>
    </>
  );
}

type PageProps = {
  label: string;
  icon: StaticImageData;
  link: string;
};
