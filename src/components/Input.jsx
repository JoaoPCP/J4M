function CustomInput(props) {
  const { placeholder, rounded = "medium", height = "md", width = "full" } = props;

  const borderRadiusMap = {
    full: "rounded-4xl",
    none: "",
    medium: "rounded-xl",
  };

  const heightMap = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
  };

  const widthMap = {
    full: "w-full",
    sm: "w-32",
    md: "w-48",
    lg: "w-64",
  };

  const borderRadius = borderRadiusMap[rounded] || borderRadiusMap.medium;
  const heightClass = heightMap[height] || heightMap.md;
  const widthClass = widthMap[width] || widthMap.full;

  return (
    <input
      className={`
        bg-black placeholder:text-gray-400 border-gray-400 border-2
        focus:outline-pink focus:outline-1 focus:border-pink text-white font-russoOne pl-6
        ${borderRadius} ${heightClass} ${widthClass}
      `}
      placeholder={placeholder}
    />
  );
}

export default CustomInput;
