function useInputDimensions(params) {
  const { rounded, height, width, type } = params;
  console.log(params);
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

  return { borderRadius, heightClass, widthClass };
}

export default useInputDimensions;
