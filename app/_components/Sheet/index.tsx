import { ReactNode } from "react";
import styles from "./index.module.css";

type Props = {
  children: ReactNode;
};

export default function Sheet({ children }: Props) {
  return <div className={styles.container}> {children}</div>;
}
