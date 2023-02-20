import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import styles from '../../styles/Home.module.css';
import Image from "next/image";
import Link from "next/link";

import stire_generic from '../../public/stire_generic.jpg';


export default function Stire() {
  const theme = useTheme();

  return (
    <Box className={styles.container} sx={{ backgroundColor: theme.palette.primary.surface }}>
      <Navbar />

      <Box className={`${styles.main} ${styles.grid}`} sx={{ color: theme.palette.primary.contrastText, justifyItems: "center" }}>
        <Typography variant="h1" sx={{ mt: 2, gridColumn: "1 / -1" }}>
          STIRE
        </Typography>

        <Image quality={90} src={stire_generic} placeholder="blur" blurDataURL="/1x1-d9d9d97f.png" alt="banner-image" height={0} width={0} style={{ width: "inherit", height: "auto", gridColumn: "1 / -1", borderRadius: "12px", boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.15)" }} />

        <Typography fontFamily="PT Sans" gutterBottom sx={{ mt: 1, gridColumn: "1 / -1" }}>
          Black Cape's Space-Time Intelligence & Reasoning Engine (STIRE) is an innovative geospatial analysis tool, allowing customers to interact with geospatial data in a unique & insightful way. Due to legal reasons I'm not at liberty to disclose any further information about the product, nor show any design prototypes. However, I am able to discuss some of the design choices made in the development process.
        </Typography>

        <Typography variant="h2" sx={{ gridColumn: "1 / -1" }}>
          Process
        </Typography>

        <Stack direction="column" spacing={1}>
          <Typography variant="h4" gutterBottom align="center">Main Function</Typography>
          <Typography fontFamily={"PT Sans"}>
            When I joined the team, I was tasked with updating the demo UI into a more fleshed-out, polished design. To do so, I first started by referencing similar products. I knew that the design had to be easy to navigate, so I went to products like Google Maps, Waze, and Apple Maps for design ideas.
            <br />
            According to a 2018 study by Statista, more than 90% of mapping app users in the United States go to these products for their needs, so I believed STIRE should take inspiration from them to feel natural and intuitive for end users. As a result of this research, key UI elements were placed such that they would not obstruct the user from the displayed information.
          </Typography>
        </Stack>
        <Stack direction="column" spacing={2}>
          <Typography variant="h4" align="center" gutterBottom sx={{mt: 2}}>Knowledge Graph</Typography>
          <Typography fontFamily={"PT Sans"}>
            With one of the major updates, I was asked to design and implement a knowledge graph as an extension of the core functionality. To do so, I employed Google's Material 3 design system to create navigation components, filters, and more.
            <br />
            One of the big challenges implementing the design and spec for this tool was handling the number of elements needing to be displayed. We started out using SVGs in conjunction with D3.js, a powerful data analysis library for JavaScript. We noticed significant performace losses as more data was added to the graph, so we swapped to using an HTML canvas. This change resulted in significant resource recovery, and allowed us to implement hardware acceleration and GPU compute power to assist with rendering the graph.
          </Typography>
        </Stack>
      </Box>

      <Footer />
    </Box>
  )
}