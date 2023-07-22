import data from "../Json/skills.json";
import Components from "../SubComponents/Skills/Components";

export default function SkillsModule() {
  return (
    <div className=" mb-96">
      <div className="bg-background-color mt-96 flex items-start gap-12  flex-wrap justify-center ">
        <div className=" w-4/5 lg:w-[22rem] m-4">
          <p className="text-center mb-6">
            <span className="text-xl sm:text-2xl lg:text-3xl text-accent-color font-bold ">
              Natural{" "}
            </span>
            <span className="text-xl sm:text-2xl lg:text-3xl text-white">
              Languages
            </span>
          </p>
          {data.languageSkill.map((block) => Components(block))}
        </div>
        <div className=" w-4/5 lg:w-[22rem] m-4 mt-36">
          <p className="text-center mb-6">
            <span className="text-xl sm:text-2xl lg:text-3xl text-accent-color font-bold ">
              Programming{" "}
            </span>
            <span className="text-xl sm:text-2xl lg:text-3xl text-white">
              Languages
            </span>
          </p>
          {data.computerLanguageSkill.map((block) => Components(block))}
        </div>
        <div className=" w-4/5 lg:w-[22rem] m-4 mt-64">
          <p className="text-center mb-6">
            <span className="text-xl sm:text-2xl lg:text-3xl text-accent-color font-bold ">
              Software{" "}
            </span>
            <span className="text-xl sm:text-2xl lg:text-3xl text-white">
              Experience
            </span>
          </p>
          {data.miscSkill.map((block) => Components(block))}
        </div>
      </div>

      <div className="w-44 ml-auto mr-auto group text-center mt-36 ease-in duration-200 ">
        <p className=" ease-in duration-200 text-2xl text-neutral-500 underline underline-offset-3 group-hover:text-accent-color">
          Skill Levels
        </p>

        <div className="text-transparent duration-300 group-hover:text-white">
          <br />
          <p>5 - Expert</p>
          <p>4 - Proficient</p>
          <p>3 - Competent</p>
          <p>2 - Advanced Beginner</p>
          <p>1 - Novice</p>
        </div>
      </div>
    </div>
  );
}