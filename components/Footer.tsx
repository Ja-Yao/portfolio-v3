import { useTheme } from "@mui/material/styles";
import { FC } from "react";
import Image from "next/image";
import styles from '../styles/Home.module.css'

interface Props {

}

const Footer: FC<Props> = () => {
  const theme = useTheme();
  return (
    <footer className={styles.footer} style={{ borderTop: theme.palette.mode === "dark" ? "1px solid #222" : "1px solid #eaeaea" }}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: theme.palette.primary.onSurface, fontWeight: 700, fontFamily: "Nunito" }}
      >
        Powered by{' '}
        <span className={styles.logo} style={{ filter: theme.palette.mode === "dark" ? "invert(1)" : "invert(0)" }}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>);
}

export default Footer;