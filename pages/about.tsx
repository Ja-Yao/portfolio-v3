import styles from '../styles/Home.module.css';
import { Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function About() {
  const theme = useTheme();

  return (
    <Box className={styles.container} sx={{ backgroundColor: theme.palette.primary.surface }}>
      <Navbar />
      <Box component="main" sx={{
        minHeight: "100vh",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "min(100% - 2rem, 1500px)",
        marginInline: "auto",
        overflow: "hidden",
      }}>
        
      </Box>
      <Footer />
    </Box>
  )
};
