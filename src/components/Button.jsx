import useInputDimensions from "./inputs/hooks/useInputDimensions";

function CustomButton(props) {
  const {
    onClick,
    children,
    rounded = "medium",
    height = "md",
    width = "full",
    color = "purple",
    className
  } = props;

  const { borderRadius, heightClass, widthClass } = useInputDimensions({
    rounded,
    height,
    width,
  });

  var colorcode;
    switch(color){
        
        case "pink":
            colorcode = "from-[#CF0C94] to-[#FF007F]";
            break;
        case "purple":
        default:
            colorcode = "from-[#6017C6] to-[#8E2DE2]";
            break;
    }

  return (
    <button
      onClick={onClick}
      className={`cursor-pointer hover:outline-3 uppercase
        drop-shadow-sm drop-shadow-white text-white
        font-russoOne px-3 bg-linear-to-t ${colorcode}
        ${borderRadius} ${heightClass} ${widthClass} ${className || ""}
        `}
    >
      {children}
    </button>
  );
}
export default CustomButton;
