import useInputDimensions from "./hooks/useInputDimensions";

function SelectInput(props) {
  const { options = [], placeholder, label } = props;
  const { borderRadius, heightClass, widthClass } = useInputDimensions(props);
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className=" text-sm font-russoOne uppercase">{label}</label>
      )}
      <select
        className={`
           bg-black placeholder:text-gray-400 border-gray-400 border-2
        focus:outline-none focus:border-pink focus:ring-pink focus:ring-1 text-white font-orbitron pl-4
          ${borderRadius} ${heightClass} ${widthClass}
        `}
        defaultValue={""}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
        <option hidden value="">
          {placeholder || "Selecione uma opção"}
        </option>
      </select>
    </div>
  );
}
export default SelectInput;
