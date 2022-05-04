import { SpacerProperties } from "./Spacer.properties";

export const Spacer: React.FC<SpacerProperties> = ({ size }) => {
  return <div className={`${size}`}></div>;
};
