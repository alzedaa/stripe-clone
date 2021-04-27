import { FunctionComponent, ReactNode } from "React";
import styles from "./Style.module.css";

const Grid: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return <div className={styles.Grid}>{children}</div>;
};

export default Grid;
