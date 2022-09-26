import { FC, useContext } from "react";
import { Box, Button, createSvgIcon, Grid, IconButton, Stack, Tooltip } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from "../pages/_app";
import styles from "../styles/Icons.module.css";

type Props = {}

const Navbar: FC<Props> = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const ToggleIcon = createSvgIcon(
    <g>
      <g id="circle" className={styles["toggle-circle"]}>
        <path fillOpacity="1" d=" M0,-4 C-2.2100000381469727,-4 -4,-2.2100000381469727 -4,0 C-4,2.2100000381469727 -2.2100000381469727,4 0,4 C2.2100000381469727,4 4,2.2100000381469727 4,0 C4,-2.2100000381469727 2.2100000381469727,-4 0,-4z">
        </path>
      </g>
      <g id="sun" opacity="1" className={styles["toggle-sun"]}>
        <path fillOpacity="1" d=" M0,6 C-3.309999942779541,6 -6,3.309999942779541 -6,0 C-6,-3.309999942779541 -3.309999942779541,-6 0,-6 C3.309999942779541,-6 6,-3.309999942779541 6,0 C6,3.309999942779541 3.309999942779541,6 0,6z M8,-3.309999942779541 C8,-3.309999942779541 8,-8 8,-8 C8,-8 3.309999942779541,-8 3.309999942779541,-8 C3.309999942779541,-8 0,-11.3100004196167 0,-11.3100004196167 C0,-11.3100004196167 -3.309999942779541,-8 -3.309999942779541,-8 C-3.309999942779541,-8 -8,-8 -8,-8 C-8,-8 -8,-3.309999942779541 -8,-3.309999942779541 C-8,-3.309999942779541 -11.3100004196167,0 -11.3100004196167,0 C-11.3100004196167,0 -8,3.309999942779541 -8,3.309999942779541 C-8,3.309999942779541 -8,8 -8,8 C-8,8 -3.309999942779541,8 -3.309999942779541,8 C-3.309999942779541,8 0,11.3100004196167 0,11.3100004196167 C0,11.3100004196167 3.309999942779541,8 3.309999942779541,8 C3.309999942779541,8 8,8 8,8 C8,8 8,3.309999942779541 8,3.309999942779541 C8,3.309999942779541 11.3100004196167,0 11.3100004196167,0 C11.3100004196167,0 8,-3.309999942779541 8,-3.309999942779541z">
        </path>
      </g>
    </g>,
    'Theme'
  );

  return (
    <Grid container justifyContent='center' alignItems='center' sx={{ marginTop: 1, marginBottom: 1 }}>
      <Grid container item maxWidth={1500}>
        <Stack direction="row" width="100%" justifyContent='space-between'>
          <Box width={48} height={48} sx={{ backgroundColor: theme.palette.primary.main, borderRadius: "16px" }} />

          <Stack direction="row" spacing={3} alignItems="center">
            <Tooltip title={theme.palette.mode === "dark" ? "Switch to the light theme" : "Switch to the dark theme"} placement="bottom" sx={{ fontSize: "16pt" }}>
              <IconButton aria-label="toggle theme button" sx={{ width: 'auto', height: 'auto' }} onClick={colorMode.toggleColorMode} color="inherit">
                <ToggleIcon
                  className={theme.palette.mode === "dark" ? "" : styles["light-theme"]}
                  sx={{
                    viewBox: "0 0 24 24",
                    width: 24,
                    height: 24,
                    preserveAspectRatio: "xMidYMid meet",
                    color: theme.palette.mode === "dark" ? theme.palette.grey[400] : theme.palette.grey[600],
                    ":hover": {
                      color: theme.palette.primary.onSurface,
                    },
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Button variant="text" href="/about" sx={{ borderRadius: "16px" }}>
              About
            </Button>

            <Button variant="text" href="/work" sx={{ borderRadius: "16px" }}>
              Work
            </Button>

            <Button variant="contained" href="/contact" sx={{ borderRadius: "16px" }}>
              Contact
            </Button>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Navbar;