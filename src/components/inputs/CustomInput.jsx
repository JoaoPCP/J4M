import FileInput from "./FileInput";
function CustomInput(props) {
  const {
    placeholder,
    rounded = "medium",
    height = "md",
    width = "full",
    label,
    type,
  } = props;

  const borderRadiusMap = {
    full: "rounded-4xl",
    none: "",
    medium: "rounded-xl",
  };

  const heightMap = {
    text: {
      sm: "h-8",
      md: "h-10",
      lg: "h-12",
    },
    textarea: {
      sm: "h-12",
      md: "h-24",
      lg: "h-32",
      xl: "h-60",
    },
  };

  const widthMap = {
    full: "w-full",
    sm: "w-32",
    md: "w-48",
    lg: "w-64",
  };

  const borderRadius = borderRadiusMap[rounded] || borderRadiusMap.medium;
  const heightClass =
    heightMap[type == "textarea" ? "textarea" : "text"][height] ||
    heightMap.text.md;
  const widthClass = widthMap[width] || widthMap.full;

  return (
    <div className={`flex flex-col gap-2 ${widthClass}`}>
      {label && (
        <label className=" text-sm font-russoOne uppercase">{label}</label>
      )}
      {type == "textarea" ? (
        <textarea
          className={`
        bg-black placeholder:text-gray-400 border-gray-400 border-2
        focus:outline-none focus:border-pink focus:ring-pink focus:ring-1
        text-white font-orbitron 
        pl-4 pt-2 resize-none
        ${borderRadius} ${heightClass}
      `}
          placeholder={placeholder}
        />
      ) : (
        <input
        type={type || "text"}
          className={`
        bg-black placeholder:text-gray-400 border-gray-400 border-2
        focus:outline-none focus:border-pink focus:ring-pink focus:ring-1 text-white font-orbitron pl-4
        ${borderRadius} ${heightClass} ${widthClass}
      `}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

export default CustomInput;
