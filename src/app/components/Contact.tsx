import { Card } from ".";
import Image from "next/image";
import gitHubIcon from "/img/github-icon-white.png";
import emailIcon from "/img/email.png";
import linkedinIcon from "/img/linkedin.png";

export function Contact() {
  return (
    <Card>
      <div className="grid grid-cols-3 p-10 text-3xl gap-4 pt-24">
        <div className="flex justify-end align-middle">
          <label className="font-bold text-right pe-2">Email</label>

          <Image
            src={emailIcon}
            alt="GitHub Logo"
            style={{
              width: "35px",
              height: "25px",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          ></Image>
        </div>
        <a
          className="col-span-2"
          href="mailto:mvn_14@outlook.com"
          target="_blank"
        >
          - mvn_14@outlook.com
        </a>
        <div className="flex justify-end align-middle">
          <label className=" pe-2 font-bold text-right">LinkedIn</label>
          <Image
            src={linkedinIcon}
            alt="Linked In Logo"
            style={{
              width: "35px",
              height: "30px",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          ></Image>
        </div>
        <a
          className="col-span-2"
          href="www.linkedin.com/in/michael-nogueira-543a99219"
          target="_blank"
        >
          - www.linkedin.com/in/michael-nogueira-543a99219
        </a>

        <div className="flex justify-end">
          <label className="font-bold text-right pe-2">Github</label>
          <Image
            src={gitHubIcon}
            alt="GitHub Logo"
            style={{ width: "35px", height: "auto" }}
          ></Image>
        </div>
        <a
          className="col-span-2"
          href="https://github.com/MVN-14"
          target="_blank"
        >
          - https://github.com/MVN-14
        </a>
      </div>
    </Card>
  );
}
