import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useRouter } from "next/router";
import Image from "next/image";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "../../styles/Home.module.css";
import banner from '../../public/banner.png';
import Link from "next/link";


export default function Work() {
  const theme = useTheme();

  return (
    <Box className={styles.container} sx={{ backgroundColor: theme.palette.primary.surface }}>
      <Navbar />

      <Box component='main' className={styles.main}>
        {/* Landing */}
        <div
          style={{
            width: "inherit",
            marginTop: "5vh",
            display: "grid",
            gridTemplateColumns: "1fr",
            gridTemplateRows: "1fr",
            placeItems: "center"
          }}
        >
          <Image quality={90} src={banner} placeholder="blur" blurDataURL="/1x1-d9d9d97f.png" alt="banner-image" sizes='(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 1500px' style={{ borderRadius: "28px", gridColumn: 1, gridRow: 1 }} />
          <Typography
            variant="h1"
            textAlign="center"
            sx={{
              gridColumn: 1,
              gridRow: 1,
              zIndex: 1,
              color: theme.palette.primary.contrastText,
            }}
          >
            Projects
          </Typography>
        </div>

        <Box className={styles.grid}>
          <Box className={styles.card}>
            <Card elevation={0} sx={{ backgroundColor: theme.palette.primary.surfaceVariant, borderRadius: "12px", border: `1px solid ${theme.palette.primary.outline}` }}>
              <CardMedia
                component="img"
                height="200"
                image="/mockup1.png"
                alt=""
                sx={{ objectFit: "contain", borderRadius: "inherit", backgroundColor: theme.palette.primary.surface, padding: 1 }}
              />
              <CardContent>
                <h2 style={{ color: theme.palette.primary.contrastText }}>
                  Enbaker
                </h2>
                <Typography fontFamily="PT Sans" sx={{ color: theme.palette.primary.contrastText }}>
                  An inventory management app targeting French patisseries.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "end" }}>
                <Link href="/work/enbaker">
                  <Button variant="contained" disableElevation>
                    Go
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Box>

          <Box className={styles.card}>
            <Card elevation={0} sx={{ backgroundColor: theme.palette.primary.surfaceVariant, borderRadius: "12px", border: `1px solid ${theme.palette.primary.outline}` }}>
              <CardMedia
                component="img"
                height="200"
                image="/stire_generic.jpg"
                alt=""
                sx={{ objectFit: "cover", borderRadius: "inherit", backgroundColor: theme.palette.primary.surface }}
              />
              <CardContent>
                <h2>
                  STIRE
                </h2>
                <Typography fontFamily="PT Sans" sx={{ color: theme.palette.primary.contrastText }}>
                  Black Cape's Space-Time Itelligence & Reasoning Engine.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "end" }}>
                <Link href="/work/stire">
                  <Button variant="contained" disableElevation>
                    Go
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  )
};