export default function SkillContainer({
  imgPath = "",
  skill = "skill",
  yearProficiency = 0,
}) {
  return (
    <div className="flex flex-col items-center w-20">
      <img src={imgPath} alt={skill} className="max-h-9 mb-2" />
      <p className="text-lg font-medium">{skill}</p>
      <p className="text-sm text-gray-500">{yearProficiency} years</p>
    </div>
  );
}
