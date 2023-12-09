import SkillItem from "./SkillItem";

export type SkillInfo = {
  name: string;
  description: string;
};

const skillsInfo: Array<SkillInfo> = [
  {
    name: "Experienced",
    description:
      "I have more than 10 years of experience in the industry, and have worked with many artists such as Beyonce. ",
  },
  {
    name: "Creative",
    description:
      "I can always find a solution to your problem, even when others couldnt. Having problems finishing a passage, or making a solo sound unique, then I am your man.",
  },
  {
    name: "Professional",
    description:
      "I am proud to always finish my jobs in the agreed amount of time, and even exceeding expectations .",
  },
];

export default function SkillsList() {
  return (
    <div className="gap-32 mt-16 md:flex md:justify-between">
      {skillsInfo.map((skillInfo, index) => (
        <SkillItem key={index} skillInfo={skillInfo} index={index} />
      ))}
    </div>
  );
}
