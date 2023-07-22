import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import HomeModule from "./Components/Modules/home";
import ProjectsModule from "./Components/Modules/projects";
import SkillsModule from "./Components/Modules/skills";
import ContactModule from "./Components/Modules/contact";
import FooterModule from "./Components/Modules/footer";
import MainProject from "./Components/Modules/mainProject";
import SecondProject from "./Components/Modules/secondProject"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <HomeModule />
    <MainProject />
    <SecondProject />
    <ProjectsModule />
    <SkillsModule />
    <ContactModule />
    <FooterModule />
    </div>
);

