import { ButtonProperties } from "./Button.properties";

export const Button: React.FC<ButtonProperties> = ({ text, submit }) => {
  return (
    <button
      type={submit ? "submit" : "button"}
      className="bg-primary px-4 py-1 text-white text-lg rounded-full border-2 border-transparent transition-colors
       hover:bg-white hover:text-primary hover:border-2 hover:border-primary"
    >
      {text}
    </button>
  );
};
