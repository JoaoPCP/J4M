import { useState } from "react";
import CustomButton from "./Button";

function TagChoice({ options }) {
  console.log(options);
  const [selectedOption, setSelectedOption] = useState("participando");
  const tagsComponents = options.map((option, i) => {
    return (
      <CustomButton
        key={i}
        width="md"
        OnClick={() => setSelectedOption(option.value)}
        className={`
          hover:text-white 
          border
          hover:bg-pink 
          ${
            selectedOption == option.value
              ? "bg-blue text-white"
              : "bg-transparent text-gray"
          }`}
      >
        {option.text}
      </CustomButton>
    );
  });
  return <div className="flex flex-wrap gap-2">{tagsComponents}</div>;
}
export default TagChoice;
