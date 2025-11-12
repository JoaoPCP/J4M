import { useRef } from "react";
import CustomButton from "../Button";
function FileInput(props) {
  const { placeholder } = props;
  const fileInputRef = useRef(null);
  const activateFileInput = () => {
    fileInputRef.current.click(); // Ativa o clique no input de arquivo
  };
  return (
    <div>
      <input type="file" ref={fileInputRef} className="hidden" />
      <CustomButton onClick={activateFileInput} {...props}>
        {placeholder || "Selecionar arquivo"}
      </CustomButton>
    </div>
  );
}

export default FileInput;
