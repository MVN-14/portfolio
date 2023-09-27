import { Card } from ".";
import Image from "next/image";
import gitHubIcon from "/img/github-mark.svg";
import emailIcon from "/img/email.png";
import linkedinIcon from "/img/linkedin.png";

export function Contact() {
  return (
    <Card>
      <div className="grid grid-cols-3 p-10 text-3xl gap-4 gap-x-5">
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
        <p className="col-span-2">mvn_14@outlook.com</p>
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
        >
          www.linkedin.com/in/michael-nogueira-543a99219
        </a>

        <div className="flex justify-end">
          <label className="font-bold text-right pe-2">Github</label>
          <Image
            src={gitHubIcon}
            alt="GitHub Logo"
            style={{ width: "35px", height: "30" }}
          ></Image>
        </div>
        <a className="col-span-2" href="https://github.com/MVN-14">
          https://github.com/MVN-14
        </a>
      </div>
    </Card>
  );
}
