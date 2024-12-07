import { useState } from "react";
import NavigationBar from "./NavigationBar.jsx";
import Footer from "./Footer.jsx";
import LoremIpsum from "./LoremIpsum.jsx";
import Card from "./Card.jsx";
import "./myStyle.css";
import ButtonContact from "./ButtonContact.jsx";
import SkillContainer from "./SkillContainer.jsx";
import { DisplayGrid, GridItem } from "./DisplayGrid";
import "./index.css";
import { Tabs, Tab } from "./Tabs";
import { Timeline } from "./Timeline";
import data from "./experience_timeline.json";

export default function App() {
  

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-initial ">
        <NavigationBar />
      </div>
      <div className="flex-1 p-4">
        <div className="snap-y snap-proximity">
          <section className="snap-center p-10">
            <DisplayGrid classname={"gap-4"}>
              <GridItem default_={7} small={1} medium={3} large={7}>
                {/* Greet Card */}
                <Card classname="content-center">
                  <h1 className="min-w-96 text-7xl font-bold mb-2">&lt;Hi! I'm Jake/&gt;</h1>
                  <div className="flex ">
                    <div className="text-start w-6/12">
                      <ul>
                        <li>Fresh Graduate</li>
                        <li>Seeking Entry Level Position</li>
                      </ul>
                    </div>

                    <div>
                      <h1 className="text-3xl text-start text-wrap ">
                        Full-stack Software Developer with background of Data
                        Analytics
                      </h1>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex p-1">
                      <h1 className="">Philippines</h1>
                      <img
                        src="logo"
                        alt=""
                        srcSet="assets\icon\philippines-flag-round-circle-icon.png"
                        className="max-h-7 mx-4"
                      />
                    </div>
                  </div>
                </Card>
              </GridItem>
              <GridItem default_={5} small={1} medium={2} large={5}>
                {/* Contact Card  */}
                <Card title="Contact Me" subtitle="Reach me through these links">

                  <ButtonContact
                    link="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzBxqGCDnkpMsqLLBVkxzqFThBXXFpwBzLtXGLGvDVpfqVbxLfHkDhdkqFMKSdsHJzcBVSB"
                    displayLink={"jforbes557@gmail.com"}
                    linkTips={"Google mail link"}
                    imgPath={
                      "assets/icon/gmail.png"
                    }
                    actionIconPath={"assets/icon/external-link-16159386.png"}
                 
                  ></ButtonContact>

                  <ButtonContact
                    link="https://github.com/js-forbes"
                    displayLink={"github.com/js-forbes "}
                    linkTips={"Github link"}
                    imgPath={
                      "assets/icon/github.png"
                    }
                    actionIconPath={"assets/icon/external-link-16159386.png"}
                    
                  ></ButtonContact>

                  <ButtonContact
                    link="asdadsas"
                    displayLink={"linkedin.com/in/js-forbes"}
                    linkTips={"LinkedIn link"}
                    imgPath={
                      "assets/icon/linkedIn.png"
                    }
                    actionIconPath={"assets/icon/external-link-16159386.png"}

                  ></ButtonContact>

                  <ButtonContact
                    link="asdadsas"
                    displayLink={"Figma"}
                    linkTips={"LinkedIn link"}
                    imgPath={
                      "assets/icon/figma-light.png"
                    }
                    actionIconPath={"assets/icon/external-link-16159386.png"}

                  ></ButtonContact>

                  <ButtonContact
                    link="asdadsas"
                    displayLink={"View my resume"}
                    linkTips={"View my resume"}
                    imgPath={
                      "assets/icon/resume-light.png"
                    }
                    actionIconPath={"assets/icon/vision-15361809.png"}

                  ></ButtonContact>
                </Card>
              </GridItem>
              <GridItem default_={5} small={1} medium={3} large={5}>
                {/* Skills */}
                <Card title = "Skills">
                  <DisplayGrid columns={4} classname={"justify-items-center gap-3 *:p-2"}  >
                    <GridItem>
                      <SkillContainer
                        skill={"HTML"}
                        yearProficiency={3}
                        imgPath="assets\icon\html-5-732212.png"
                      ></SkillContainer>
                    </GridItem>
                    <GridItem>
                      <SkillContainer
                        skill={"CSS"}
                        yearProficiency={3}
                        imgPath="assets\icon\css-3-732190.png"
                      ></SkillContainer>
                    </GridItem>
                    <GridItem>
                      <SkillContainer
                        skill={"JavaScript"}
                        yearProficiency={3}
                        imgPath="assets\icon\js-5968292.png"
                      ></SkillContainer>
                    </GridItem>{" "}
                    <GridItem>
                      <SkillContainer
                        skill={"PHP"}
                        yearProficiency={3}
                        imgPath="assets\icon\php-5968332.png"
                      ></SkillContainer>
                    </GridItem>
                    <GridItem>
                      <SkillContainer
                        skill={"Python"}
                        yearProficiency={3}
                        imgPath="assets\icon\python-5968350.png"
                      ></SkillContainer>
                    </GridItem>
                    <GridItem>
                      <SkillContainer
                        skill={"Relational Database"}
                        yearProficiency={3}
                        imgPath="assets\icon\r-database-10988149.png"
                      ></SkillContainer>
                    </GridItem>
                    <GridItem>
                      <SkillContainer
                        skill={"Non-Relational Database"}
                        yearProficiency={3}
                        imgPath="assets\icon\nr-derivative-10988154.png"
                      ></SkillContainer>
                    </GridItem>
                    <GridItem>
                      <SkillContainer
                        skill={"Excel"}
                        yearProficiency={3}
                        imgPath="assets\icon\excel-732220.png"
                      ></SkillContainer>
                    </GridItem>
                  </DisplayGrid>
                </Card>
              </GridItem>
              <GridItem default_={7} small={1} medium={2} large={7}>
                <Card title={"History"}>
                  <Tabs>
                    <Tab
                      id={0}
                      label="Experience"
                      icon="assets\icon\work-4526598.png"
                    >
                      {/* <h1>Experience</h1> */}
                      <div className="max-w-2xl mx-auto">
                        <Timeline events={data.work_experience} />
                      </div>
                    </Tab>

                    <Tab
                      id={1}
                      label="Education"
                      icon="assets\icon\graduation-cap-3074078.png"
                    >
                      <Timeline events={data.education} />
                    </Tab>

                    <Tab
                      id={2}
                      label="Certification"
                      icon="assets\icon\certificate-4526608.png"
                    >
                      <Timeline events={data.certificates} />
                    </Tab>
                  </Tabs>
                </Card>
              </GridItem>
            </DisplayGrid>
          </section>
        </div>
      </div>
      <div className="flex-initial">
        <Footer />
      </div>
    </div>
  );
}
