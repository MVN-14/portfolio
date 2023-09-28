import { Card, ImagePanel } from ".";
import fanshaweImage from "img/fanshawe.png";
import atlasLogo from "img/atlas-apex-logo.jpg";
import stepLogo from "img/step-software-logo.png";
import novaLogo from "img/nova-chemicals-logo.png";

export function Experience() {
  return (
    <Card>
      <div className="p-10">
        <h1 className="text-4xl pb-2">Education</h1>

        <ImagePanel
          image={fanshaweImage}
          alt="Fanshawe College Logo"
          imageStyle={{ transform: "translateX(20px)" }}
        >
          <div className="ps-5 text-2xl">
            <p>Fanshawe College, London, Ontario</p>
            <p>September 2019 - April 2023</p>
            <p>Computer Programmer/Analyst - CPA2</p>
            <p>GPA: 3.9</p>
          </div>
        </ImagePanel>

        <h1 className="text-4xl pb-8 pt-10">Paid CO-OP Placements</h1>

        <div className="ps-5">
          <div className="flex-col">
            <ImagePanel image={atlasLogo} alt="Atlas-Apex Roofing Logo">
              <div className="text-3xl">
                <a href="https://www.atlas-apex.com/">Atlas-Apex Roofing</a>
                <p className="text-2xl pt-2">Application Developer</p>
                <p className="text-xl pt-2">May 2022 - August 2022</p>
                <div className="flex gap-2">
                  {createTags([
                    "Angular",
                    ".NET",
                    "Bootstrap",
                    "MSSQL",
                    "WebForms",
                  ])}
                </div>
              </div>
            </ImagePanel>
            <div className="h-12"></div>
            <ImagePanel image={stepLogo} alt="Step-Software Logo">
              <div className="text-3xl">
                <a href="https://www.stepsoftware.com/">STEP Software</a>
                <p className="text-2xl pt-2">Software Developer</p>
                <p className="text-xl pt-2">January 2023 - April 2023</p>
                <div className="flex gap-2">
                  {createTags(["C++", "SQLite", "wxWidgets"])}
                </div>
              </div>
            </ImagePanel>
            <div className="h-12"></div>

            <ImagePanel image={novaLogo} alt="Nova Chemicals Logo">
              <div className="text-3xl">
                <a href="https://www.novachem.com/">Nova Chemicals</a>
                <p className="text-2xl pt-2">
                  Cloud Automation Platform Developer
                </p>
                <p className="text-xl pt-2">January 2023 - April 2023</p>
                <div className="flex gap-2">
                  {createTags([
                    "Powershell",
                    "Cloud Automation",
                    "Azure DevOps",
                    "C#",
                  ])}
                </div>
              </div>
            </ImagePanel>
          </div>
        </div>
      </div>
    </Card>
  );
}

function createTags(tags: string[]) {
  return tags.map((tag) => (
    <span key={tag} className="border rounded-lg p-1 font-bold text-lg w-auto">
      {tag}
    </span>
  ));
}
