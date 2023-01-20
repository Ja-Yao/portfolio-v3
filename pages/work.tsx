import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useRouter } from "next/router";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Work() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Box id="404-container" className={styles.container} sx={{ backgroundColor: theme.palette.primary.surface, overflow: "hidden" }}>
      <Navbar />
      <Box component={"main"} id="404-content" sx={{ height: "100vh", width: "min(100% - 2rem, 1500px)", marginInline: "auto", placeContent: "center" }} >
        <Stack direction="column" spacing={1} sx={{ height: "inherit", justifyContent: 'center', alignItems: 'center' }}>
          <Box
            display='flex'
            justifyContent='center'
            sx={{
              width: 'min(100% - 2rem, 900px)',
            }}
          >
            <Image quality={90} src={"/undraw_lost.svg"} alt="unDraw image from https://undraw.co/illustrations" placeholder="blur" blurDataURL="/1x1-d9d9d97f.png" width={400} height={400} />
          </Box>
          <Typography variant="h3" textAlign="center" sx={{ color: theme.palette.primary.onSurface }}>
            Sorry, but this page isn't available yet.
          </Typography>
        </Stack>
      </Box>
    </Box>
  )
};