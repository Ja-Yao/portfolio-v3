import styles from '../styles/Home.module.css';
import { motion, Variants } from 'framer-motion';

import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Image from 'next/image';
import banner from '../public/banner.png';


export default function About() {
  const theme = useTheme();
  const works: Variants = {
    offscreen: {
      y: 300,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.8,
        delay: 0.4
      }
    }
  }

  return (
    <Box className={styles.container} sx={{ backgroundColor: theme.palette.primary.surface }}>
      <Navbar />
      <Box component="main" className={styles.main}>
        {/* Landing */}
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          style={{
            marginTop: "5vh",
            display: "grid",
            gridTemplateColumns: "100%",
            gridTemplateRows: "1fr",
            placeItems: "center"
          }}
        >
          <Image quality={90} src={banner} placeholder="blur" alt="banner-image" sizes='(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 1500px' style={{ borderRadius: "28px", gridColumn: 1, gridRow: 1 }} />
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
            About Me
          </Typography>
        </motion.div>

        {/* About */}
        <motion.div
          id="landing-section"
          variants={works}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ marginTop: "7.5vh" }}
        >
          <Stack direction="row" alignItems="flex-start" justifyContent="space-evenly" >
            <Stack direction="column" spacing={2} sx={{ width: "25%" }}>
              <motion.h1
                style={{ color: theme.palette.primary.contrastText }}
              >
                My Background
              </motion.h1>
            </Stack>
            <Stack direction="column" spacing={1} sx={{ maxWidth: "40%" }}>
              <Typography
                sx={{
                  color: theme.palette.primary.contrastText,
                  fontFamily: "PT Sans"
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.primary.contrastText,
                  fontFamily: "PT Sans"
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Stack>
          </Stack>
        </motion.div>

        {/* Process */}
        <motion.div
          id="landing-section"
          variants={works}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ marginTop: "7.5vh" }}
        >
          <Stack direction="row" alignItems="flex-start" justifyContent="space-evenly" >
            <Stack direction="column" spacing={2} sx={{ maxWidth: "40%" }}>
              <Typography
                sx={{ color: theme.palette.primary.contrastText }}
              >
                My Skillset
              </Typography>
              <motion.h1
                style={{ color: theme.palette.primary.contrastText }}
              >
                Frontend <span style={{ color: theme.palette.primary.main }}>Development</span> & <br />
                User <span style={{ color: theme.palette.primary.main }}>Experience</span>
              </motion.h1>
            </Stack>
            <Stack direction="column" spacing={1} sx={{ maxWidth: "40%" }}>
              <Typography
                sx={{ 
                  color: theme.palette.primary.contrastText,
                  fontFamily: "PT Sans"
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Typography
                sx={{ 
                  color: theme.palette.primary.contrastText,
                  fontFamily: "PT Sans"
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Stack>
          </Stack>
        </motion.div>
      </Box>
      <Footer />
    </Box>
  )
};
