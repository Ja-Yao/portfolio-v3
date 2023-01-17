import { Box, Button, Stack, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Custom404() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Box id="404-container" className={styles.container} sx={{ backgroundColor: theme.palette.primary.surface, overflow: "hidden" }}>
      <Navbar />
      <Box component={"main"} id="404-content" sx={{ height: "100vh", width: "min(100% - 2rem, 1500px)", marginInline: "auto", placeContent: "center" }} >
        <Stack direction="column" spacing={1} sx={{ height: "inherit", justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h6" textAlign="center" sx={{ color: theme.palette.primary.main }} >
            404
          </Typography>
          <Typography variant="h3" textAlign="center" sx={{ color: theme.palette.primary.onSurface }}>
            Page Not Found
          </Typography>
          <Typography textAlign="center" sx={{ color: theme.palette.grey[500] }}>
            Sorry, we couldn't find the page you're looking for.
          </Typography>
          <Button variant='outlined' onClick={() => router.back()}>
            Go Back
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}