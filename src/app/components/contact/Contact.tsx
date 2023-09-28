import { Card, LinkLabel } from "..";
import Image from "next/image";
import gitHubIcon from "/img/github-icon-white.png";
import emailIcon from "/img/email.png";
import linkedinIcon from "/img/linkedin.png";

export function Contact() {
  return (
    <Card>
      <div className="md:grid md:grid-cols-3 p-10 text-sm md:text-3xl pt-24">
        <LinkLabel
          label="Email"
          icon={emailIcon}
          link="mailto:mvn_14@outlook.com"
        />

        <LinkLabel
          label="LinkedIn"
          icon={linkedinIcon}
          link="www.linkedin.com/in/michael-nogueira-543a99219"
        />

        <LinkLabel
          label="GitHub"
          icon={gitHubIcon}
          link="https://github.com/MVN-14"
        />
      </div>
    </Card>
  );
}
