import { TextFieldProperties } from "./TextField.properties";

export const TextField: React.FC<TextFieldProperties> = ({
  placeholder,
  className = "",
}) => {
  return (
    <input
      type="text"
      className={`${className} border rounded-full p-2`}
      placeholder={placeholder}
    />
  );
};
