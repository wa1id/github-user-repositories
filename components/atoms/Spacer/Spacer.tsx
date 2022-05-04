import { SpacerProperties } from "./Spacer.namespace";

export const Spacer: React.FC<SpacerProperties> = ({ size }) => {
  return <div className={`${size}`}></div>;
};
