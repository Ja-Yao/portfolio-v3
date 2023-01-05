import { FC, useContext } from "react";
import Link from "next/link";
import { Button, Drawer, Fab, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, Stack, Tooltip, Typography } from "@mui/material";
import { CreateOutlined, DarkModeOutlined, HouseRounded, InfoOutlined, LightModeOutlined, MenuRounded, WorkOutlineRounded } from "@mui/icons-material";

import { styled, useTheme } from '@mui/material/styles';
import { ColorModeContext } from "../pages/_app";
import { useRouter } from "next/router";


type Props = {}
const drawerWidth: number = 80;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: "16px",
  paddingBottom: "32px",
  // adds padding to top of sidebar
  ...theme.mixins.toolbar,
}));

const Navbar: FC<Props> = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const router = useRouter();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
        border: "none"
      }}
    >
      <DrawerHeader>
        <Link href="/contact">
          <Fab size="medium" sx={{ borderRadius: "16px", backgroundColor: theme.palette.primary.primaryContainer, boxShadow: 0, marginTop: 2,  }}>
            <CreateOutlined sx={{ color: theme.palette.primary.onPrimaryContainer }} />
          </Fab>
        </Link>
      </DrawerHeader>
      <Stack direction="column" justifyContent="space-between" sx={{ height: "inherit", width: "auto" }}>
        <List>
          <ListItem sx={{ display: 'block' }}>
            <Stack direction="column">
              <Link href="/">
                <ListItemButton
                  selected={router.asPath === "/"}
                  sx={{
                    justifyContent: 'center',
                    px: 2.5,
                    borderRadius: "20px"
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <HouseRounded />
                  </ListItemIcon>
                </ListItemButton>
              </Link>
              <Typography variant="caption" align="center" >Home</Typography>
            </Stack>
          </ListItem>

          <ListItem sx={{ display: 'block' }}>
            <Stack direction="column">
              <Link href="/about">
                <ListItemButton
                  selected={router.asPath === "/about"}
                  sx={{
                    justifyContent: 'center',
                    px: 2.5,
                    borderRadius: "20px"
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <InfoOutlined />
                  </ListItemIcon>
                </ListItemButton>
              </Link>
              <Typography variant="caption" align="center">About</Typography>
            </Stack>
          </ListItem>

          <ListItem sx={{ display: 'block' }}>
            <Stack direction="column">
              <Link href="/work">
                <ListItemButton
                  selected={router.asPath === "/work"}
                  sx={{
                    justifyContent: 'center',
                    px: 2.5,
                    borderRadius: "20px"
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <WorkOutlineRounded />
                  </ListItemIcon>
                </ListItemButton>
              </Link>
              <Typography variant="caption" align="center">Work</Typography>
            </Stack>
          </ListItem>
        </List>
        <List>
          <ListItem sx={{ display: "block" }}>
            <Tooltip title={theme.palette.mode === "dark" ? "Switch to the light theme" : "Switch to the dark theme"} placement="right" sx={{ fontSize: "16pt" }}>
              <IconButton aria-label="toggle theme button" sx={{ width: '48px', height: '48px', border: `1px solid ${theme.palette.primary.outline}` }} onClick={colorMode.toggleColorMode} color="inherit">
                {
                  theme.palette.mode === "dark"
                    ? <LightModeOutlined sx={{
                      color: theme.palette.mode === "dark" ? theme.palette.grey[400] : theme.palette.grey[600],
                      ":hover": { color: theme.palette.primary.onSurface },
                    }}
                    />
                    : <DarkModeOutlined sx={{
                      color: theme.palette.mode === "light" ? theme.palette.grey[600] : theme.palette.grey[400],
                      ":hover": { color: theme.palette.primary.onSurface },
                    }}
                    />
                }
              </IconButton>
            </Tooltip>
          </ListItem>
        </List>
      </Stack>
    </Drawer>
  )
}

export default Navbar;