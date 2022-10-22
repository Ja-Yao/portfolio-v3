import { ArrowForwardRounded } from "@mui/icons-material";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Custom404() {
    const theme = useTheme();
    return (
        <Box id="404-container" className={styles.container} sx={{ width: "100vw", height: "100vh", backgroundColor: theme.palette.primary.surface, overflow: "hidden" }}>
            <Box component={"main"} id="404-content" sx={{ height: "100vh", width: "min(100% - 2rem, 1500px)", marginInline: "auto", placeContent: "center" }} >
                <Stack direction="column" spacing={1} sx={{ height: "inherit", placeContent: "center" }}>
                    <Typography variant="h6" textAlign="center" sx={{ color: "#4ca771"}} >
                        404
                    </Typography>
                    <Typography variant="h3" textAlign="center">
                        Page Not Found
                    </Typography>
                    <Typography textAlign="center" sx={{ color: theme.palette.grey[600] }}>
                        Sorry, we couldn't find the page you're looking for.
                    </Typography>
                    <Link href="/">
                        <Button sx={{pt: 4}}>
                            Go back home
                            <ArrowForwardRounded />
                        </Button>
                    </Link>
                </Stack>
            </Box>
        </Box>
    )
}