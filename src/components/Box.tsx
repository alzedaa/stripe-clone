import { FunctionComponent, ReactNode } from "React";
import styles from "./Style.module.css";

const Box: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

export default Box;
