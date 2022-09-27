import { FC, useContext } from "react";
import Link from "next/link";
import { Box, Button, createSvgIcon, Grid, IconButton, Stack, Tooltip } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from "../pages/_app";


type Props = {}

const Navbar: FC<Props> = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Grid container justifyContent='center' alignItems='center' sx={{ marginTop: 1, marginBottom: 1 }}>
      <Grid container item maxWidth={1500}>
        <Stack direction="row" width="100%" justifyContent='space-between'>
          <Box width={48} height={48} sx={{ backgroundColor: theme.palette.primary.main, borderRadius: "16px" }} />

          <Stack direction="row" spacing={3} alignItems="center">
            <Tooltip title={theme.palette.mode === "dark" ? "Switch to the light theme" : "Switch to the dark theme"} placement="bottom" sx={{ fontSize: "16pt" }}>
              <IconButton aria-label="toggle theme button" sx={{ width: 'auto', height: 'auto' }} onClick={colorMode.toggleColorMode} color="inherit">
                {
                  theme.palette.mode === "dark"
                    ? <Brightness7 sx={{
                      color: theme.palette.mode === "dark" ? theme.palette.grey[400] : theme.palette.grey[600],
                      ":hover": { color: theme.palette.primary.onSurface },
                    }}
                    />
                    : <Brightness4 sx={{
                      color: theme.palette.mode === "light" ? theme.palette.grey[600] : theme.palette.grey[400],
                      ":hover": { color: theme.palette.primary.onSurface },
                    }}
                    />
                }
              </IconButton>
            </Tooltip>
            <Link href="/about">
              <Button variant="text" sx={{ borderRadius: "16px" }}>
                About
              </Button>
            </Link>

            <Link href="/work">
              <Button variant="text" sx={{ borderRadius: "16px" }}>
                Work
              </Button>
            </Link>

            <Link href="/contact">
              <Button variant="contained" sx={{ borderRadius: "16px" }}>
                Contact
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Navbar;