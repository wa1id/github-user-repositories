import { TextFieldProperties } from "./TextField.namespace";

export const TextField: React.FC<TextFieldProperties> = ({
  placeholder,
  value,
  onChange,
  className = "",
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={`${className} border rounded-full p-2`}
      placeholder={placeholder}
    />
  );
};
