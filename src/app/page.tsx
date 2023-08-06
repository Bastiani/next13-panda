import styles from "./page.module.css";
import { css } from "../../styled-system/css";

const baseStyle = {
  p: "4!",
  lineHeight: "1.2",
  borderRadius: "xl",
  fontWeight: "medium",
  _focus: {
    boxShadow: "none",
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none",
    color: "gray.600",
    backgroundColor: "gray.400",
  },
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div
        className={css({
          fontSize: "2xl",
          fontWeight: "bold",
          bg: "blue.300",
          "@media (min-width: 768px)": {
            bg: "blue.100",
            color: "blue.500",
          },
        })}
      >
        Hello 🐼!
      </div>
      <button
        className={css({
          ...baseStyle,
          bg: "red.400",
          _hover: {
            bg: "orange.400",
          },
        })}
      >
        button
      </button>
    </main>
  );
}
