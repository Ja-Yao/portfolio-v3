'use client';

import React, { FC, useContext } from "react";
import Link from "next/link";
import { Drawer, Fab, IconButton, List, ListItem, ListItemButton, ListItemIcon, Slide, Stack, Typography } from "@mui/material";
import { CreateOutlined, DarkModeOutlined, GitHub, HouseRounded, InfoOutlined, LightModeOutlined, LinkedIn, WorkOutlineRounded } from "@mui/icons-material";

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
  const containerRef = React.useRef(null);
  const [clicked, setClicked] = React.useState(false);

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
          <Fab
            size="medium"
            sx={{
              borderRadius: "16px",
              backgroundColor: theme.palette.primary.primaryContainer,
              boxShadow: 0,
              marginTop: 2,
              ':hover': { backgroundColor: theme.palette.mode === "dark" ? theme.palette.primary.onPrimary : "#98D481" }
            }}
          >
            <CreateOutlined sx={{ color: theme.palette.primary.onPrimaryContainer }} />
          </Fab>
        </Link>
      </DrawerHeader>
      <Stack direction="column" justifyContent="space-between" sx={{ height: "inherit", width: "auto", overflow: "hidden" }}>
        <List>
          <ListItem sx={{ display: 'block' }}>
            <Stack direction="column">
              <Link href="/">
                <ListItemButton
                  selected={router.asPath === "/"}
                  sx={{
                    justifyContent: 'center',
                    // px: 2.5,
                    borderRadius: "20px"
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 'auto',
                      justifyContent: 'center',
                      ":hover": {
                        transition: "all 75ms ease-in-out",
                        transform: "scale(1.05)"
                      }
                    }}
                  >
                    <HouseRounded sx={{ color: router.asPath === "/" ? theme.palette.secondary.onPrimaryContainer : theme.palette.primary.onSurfaceVariant }} />
                  </ListItemIcon>
                </ListItemButton>
              </Link>
              <Typography variant="caption" align="center" sx={{ color: router.asPath === "/" ? theme.palette.primary.onSurface : theme.palette.primary.onSurfaceVariant }} >Home</Typography>
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
                      ":hover": {
                        transition: "all 75ms ease-in-out",
                        transform: "scale(1.05)"
                      }
                    }}
                  >
                    <InfoOutlined sx={{ color: router.asPath === "/about" ? theme.palette.secondary.onPrimaryContainer : theme.palette.primary.onSurfaceVariant }} />
                  </ListItemIcon>
                </ListItemButton>
              </Link>
              <Typography variant="caption" align="center" sx={{ color: router.asPath === "/" ? theme.palette.primary.onSurface : theme.palette.primary.onSurfaceVariant }} >About</Typography>
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
                      ":hover": {
                        transition: "all 75ms ease-in-out",
                        transform: "scale(1.05)"
                      }
                    }}
                  >
                    <WorkOutlineRounded sx={{ color: router.asPath === "/work" ? theme.palette.secondary.onPrimaryContainer : theme.palette.primary.onSurfaceVariant }} />
                  </ListItemIcon>
                </ListItemButton>
              </Link>
              <Typography variant="caption" align="center" sx={{ color: router.asPath === "/" ? theme.palette.primary.onSurface : theme.palette.primary.onSurfaceVariant }} >Work</Typography>
            </Stack>
          </ListItem>
        </List>
        <List>
          <ListItem sx={{ display: "block" }}>
            <IconButton aria-label="toggle-theme-button" sx={{ width: '48px', height: '48px', border: `1px solid ${theme.palette.primary.outline}`, placeItems: "center", overflow: "hidden" }} onClick={e => window.open('https://www.linkedin.com/in/yao-j/')}>
              <LinkedIn sx={{color: theme.palette.primary.onSurfaceVariant}} />
            </IconButton>
          </ListItem>
          <ListItem sx={{ display: "block" }}>
            <IconButton aria-label="toggle-theme-button" sx={{ width: '48px', height: '48px', border: `1px solid ${theme.palette.primary.outline}`, placeItems: "center", overflow: "hidden" }} onClick={e => window.open('https://github.com/Ja-Yao')}>
              <GitHub sx={{color: theme.palette.primary.onSurfaceVariant}} />
            </IconButton>
          </ListItem>
          <ListItem sx={{ display: "block" }}>
            <IconButton aria-label="toggle-theme-button" ref={containerRef} sx={{ width: '48px', height: '48px', border: `1px solid ${theme.palette.primary.outline}`, placeItems: "center", overflow: "hidden" }} onClick={e => { setClicked(!clicked); colorMode.toggleColorMode(); }} color="inherit">
              <div>
                <Slide direction="up" appear={false} in={clicked} timeout={{ enter: theme.transitions.duration.enteringScreen, exit: 25}} container={containerRef.current} mountOnEnter unmountOnExit >
                  <div style={{ width: "48px", height: "48px", borderRadius: "100px" }}>
                    <LightModeOutlined sx={{ color: theme.palette.primary.onSurfaceVariant, marginTop: "11px" }} />
                  </div>
                </Slide>
                <Slide direction="down" appear={false} in={!clicked} timeout={{ enter: theme.transitions.duration.enteringScreen, exit: 25}} container={containerRef.current} mountOnEnter unmountOnExit >
                  <div style={{ width: "48px", height: "48px", borderRadius: "100px" }}>
                    <DarkModeOutlined sx={{ color: theme.palette.primary.onSurfaceVariant, marginTop: "11px" }} />
                  </div>
                </Slide>
              </div>
            </IconButton>
          </ListItem>
        </List>
      </Stack>
    </Drawer>
  )
}

export default Navbar;