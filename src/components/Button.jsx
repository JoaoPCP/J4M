import useInputDimensions from "./inputs/hooks/useInputDimensions";

function CustomButton(props) {
  const {
    onClick,
    children,
    rounded = "medium",
    height = "md",
    width = "full",
    className
  } = props;

  const { borderRadius, heightClass, widthClass } = useInputDimensions({
    rounded,
    height,
    width,
  });

  return (
    <button
      onClick={onClick}
      className={`bg-pink text-white font-russoOne px-3 hover:bg-fuchsia-600 transition
        ${borderRadius} ${heightClass} ${widthClass} ${className || ""}
        `}
    >
      {children}
    </button>
  );
}
export default CustomButton;
