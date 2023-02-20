import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import styles from '../../styles/Home.module.css';
import Image from "next/image";

import mockup1 from '../../public/mockup1.png';


export default function Enbaker() {
  const theme = useTheme();

  return (
    <Box className={styles.container} sx={{ backgroundColor: theme.palette.primary.surface }}>
      <Navbar />

      <Box className={`${styles.main} ${styles.grid}`} sx={{ color: theme.palette.primary.contrastText, justifyItems: "center" }}>
        <Typography variant="h1" sx={{ mt: 2, gridColumn: "1 / -1" }}>
          EnBaker
        </Typography>

        <Typography fontFamily="PT Sans" gutterBottom sx={{ mt: 1 }}>
          EnBaker is a prototype mobile application designed as an all-in-one inventory management service for French patisseries and bakeries. Whether they need to restock ingredients or manage their store's product inventory, pastry chefs can manage it all at the tip of their fingers.
        </Typography>

        <Image quality={90} src={mockup1} placeholder="blur" blurDataURL="/1x1-d9d9d97f.png" alt="banner-image" height={0} width={0} style={{ width: "auto", height: "33vh", borderRadius: "12px" }} />

        <Typography variant="h2" sx={{ gridColumn: "1 / -1" }}>
          Process
        </Typography>

        <Typography fontFamily={"PT Sans"} sx={{gridColumn: "1 / -1"}}>
          I started off by creating two personas for EnBaker users: a 57 year old patissier from Paris and a 33 year old pastry chef in San Francisco. Both personas shared a desire for some automation, leading to the ability to order ingredients from suppliers. They also wanted to have a breakdown of their expenditures and revenue, which will be added to the inventory tab. Next, I created a user journey map to begin mapping out user flows, and a storyboard to illustrate that user journey. With these assets, I created a wireframe to construct a loose hierarchy, and a low-fidelity prototype to further hone element sizes and placement. 
        </Typography>
        {
          useMediaQuery("(min-width:1200px)") ?
            <iframe
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)", gridColumn: "1 / -1" }}
              width="1200"
              height="700"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FuSPTFzkYcp764TE1ju3Cj5%2FGoogle-portfolio-project-1%3Fnode-id%3D101%253A758%26t%3DQwtYJhstVoFHA1mR-1"
              allow="fullscreen"
            >
            </iframe>
            : null
        }
      </Box>

      <Footer />
    </Box>
  )
}