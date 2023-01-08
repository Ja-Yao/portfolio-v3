import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';

import { Box, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Image from 'next/image';
import banner from '../public/banner.png';


export default function About() {
  const theme = useTheme();

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
            marginTop: "7.5vh",
            display: "grid",
            gridTemplateColumns: "100%",
            gridTemplateRows: "1fr",
            placeItems: "center"
          }}
        >
          <Image quality={90} src={banner} placeholder="blur" alt="banner-image" style={{ borderRadius: "28px", gridColumn: 1, gridRow: 1 }} />
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


      </Box>
      <Footer />
    </Box>
  )
};
