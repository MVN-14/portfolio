import { Card, ImagePanel, JobPanel } from ".";
import fanshaweImage from "img/fanshawe-cropped.png";
import atlasLogo from "img/atlas-apex-logo.jpg";
import stepLogo from "img/step-software-logo.png";
import novaLogo from "img/nova-chemicals-logo.png";

export function Experience() {
  return (
    <Card>
      <div className="p-5 lg:p-10">
        <h1 className="text-3xl lg:text-5xl pb-16">Education</h1>

        <ImagePanel
          image={fanshaweImage}
          alt="Fanshawe College Logo"
          imageStyle={{ transform: "translateX(20px)" }}
        >
          <div className="ps-5 text-xl lg:text-2xl">
            <p className="text-2xl lg:text-3xl">
              Fanshawe College, London, Ontario
            </p>
            <p>Computer Programmer/Analyst - CPA2</p>
            <p className="text-lg">September 2019 - April 2023</p>
            <p className="text-base lg:text-xl">GPA: 3.9</p>
          </div>
        </ImagePanel>

        <h1 className="text-3xl lg:text-5xl py-16">Paid CO-OP Placements</h1>

        <div className="ps-5">
          <JobPanel
            image={atlasLogo}
            href="https://www.atlas-apex.com"
            position="Application Developer"
            date="May 2022 - August 2022"
            companyName="Atlas-Apex Roofing"
            tags={["Angular", ".NET", "Bootstrap", "MSSQL", "WebForms"]}
          />
          <div className="h-12"></div>

          <JobPanel
            image={stepLogo}
            href="https://www.stepsoftware.com"
            position="Software Developer"
            date="January 2023 - April 2023"
            companyName="STEP Software"
            tags={["C++", "SQLite", "wxWidgets"]}
          />
          <div className="h-12"></div>

          <JobPanel
            image={novaLogo}
            href="https://www.novachem.com/"
            companyName="Nova Chemicals"
            position="Cloud Automation Platform Developer"
            date="January 2023 - April 2023"
            tags={["Powershell", "CloudAutomation", "AzureDevOps", "C#"]}
          />
        </div>
      </div>
    </Card>
  );
}
