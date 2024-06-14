import React from "react";
import ExperienceItem from "./ExperienceItem";
import ExperienceData from "../data/ExperienceData";
import Title from "./Title";

function Experiences() {
  const firstHalf = ExperienceData.slice(
    0,
    Math.ceil(ExperienceData.length / 2)
  );
  const secondHalf = ExperienceData.slice(Math.ceil(ExperienceData.length / 2));
  return (
    <div className="flex flex-col mb-10 mx-auto mt-[100px] p-8">
      <Title>Experiences</Title>
      <div className="flex flex-col md:flex-row justify-center ">
        <div className="w-full md:w-7/12 mt-12">
          {/* <ExperienceItem json1={firstHalf} json2={secondHalf} /> */}
        </div>
      </div>
    </div>
  );
}

export default Experiences;
