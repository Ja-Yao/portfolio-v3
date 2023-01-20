import styles from '../styles/Home.module.css';
import { motion, Variants } from 'framer-motion';

import { Box, Button, Card, CardContent, CardHeader, Divider, Stack, Typography } from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2';
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

        <Box className={styles.grid} sx={{ mt: 4 }}>
          <Box className={styles.card} sx={{ maxWidth: '50%' }}>
            <Stack direction='column'>
              <Stack direction="column" spacing={1} >
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
              <Stack direction="row" spacing={8} sx={{ marginTop: '33%', justifyContent: 'flex-start' }}>
                <Image src="/typescript.png" alt="Figma logo" width={64} height={64} />
                <Image src="/nextjs.png" alt="Next.js logo" width={64} height={64} />
                <Image src="/figma.png" alt="Figma logo" width={64} height={64} />
              </Stack>
            </Stack>
          </Box>

          <Box className={styles.card} sx={{ maxWidth: '50%' }}>
            <Stack direction="column" spacing={2}>
              <Typography
                sx={{
                  color: theme.palette.primary.contrastText,
                  fontFamily: "PT Sans"
                }}
              >
                While I've created Android applications with Java and XML in the past, my skillset is centered around JavaScript, TypeScript, HTML, and CSS. Most of the work using these languages have been in React projects, as well as Remix and Next.js — including this website! Regarding UI libraries, I've had the most experience with Material UI, but I'd like to try out TailwindCSS, NextUI, and Material Web to name a few.
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.primary.contrastText,
                  fontFamily: "PT Sans"
                }}
              >
                I began my deep dive into UI/UX in January 2022, where I first learned about core design principles and how to implement them. Over the summer and fall of that year, I participated in a few of the Google UX Design classes. While in these classes, I learned how to research and identify user needs, create user personas, journey maps, and storyboards, generate low-fidelity prototypes, and conduct usability studies. With the tools I've gained, I've been able to improve & create high-fidelity prototypes in Figma, leading to full design implementation in products I've worked on.
              </Typography>
            </Stack>
          </Box>

          <Card elevation={0} sx={{ mt: 14, mb: 16, backgroundColor: theme.palette.primary.surfaceAt1, borderRadius: "28px", padding: 2 }}>
            <CardHeader
              title='My Journey'
              subheader="A brief overview of the experiences I've had"
              action={
                <Button variant='outlined' onClick={e => { e.preventDefault(); window.open('https://firebasestorage.googleapis.com/v0/b/portfolio-contact-form-47fb6.appspot.com/o/Jacob-Yao-Resume.pdf?alt=media&token=9514b507-3a4d-4910-bf48-58539cc12312', "_blank") }}>
                  View my Resume
                </Button>
              }
            />
            <CardContent sx={{ display: 'flex', flexWrap: 'wrap' }}>
              <Box sx={{ mr: 8 }}>
                <Stack direction='row' spacing={1}>
                  <Divider orientation='vertical' variant='middle' flexItem sx={{ color: theme.palette.primary.contrastText }} />
                  <Stack direction='column'>
                    <Typography variant='h6'>
                      Swinburne University of Technology
                    </Typography>
                    <Typography variant='subtitle1' sx={{ fontStyle: 'italic', color: theme.palette.grey[500] }}>
                      Melbourne, Victoria, Australia
                    </Typography>
                    <Typography variant='caption' sx={{ fontStyle: 'italic', color: theme.palette.grey[500] }}>
                      July 2019 – November 2019
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
              <Box sx={{ mr: 8 }}>
                <Stack direction='row' spacing={1}>
                  <Divider orientation='vertical' variant='middle' flexItem sx={{ color: theme.palette.primary.contrastText }} />
                  <Stack direction='column'>
                    <Typography variant='h6'>
                      Northeastern University
                    </Typography>
                    <Typography variant='subtitle1' sx={{ fontStyle: 'italic', color: theme.palette.grey[500] }}>
                      Boston, Massachusetts
                    </Typography>
                    <Typography variant='caption' sx={{ fontStyle: 'italic', color: theme.palette.grey[500] }}>
                      January 2020 – Present
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
              <Box sx={{ mr: 8 }}>
                <Stack direction='row' spacing={1}>
                  <Divider orientation='vertical' variant='middle' flexItem sx={{ color: theme.palette.primary.contrastText }} />
                  <Stack direction='column'>
                    <Typography variant='h6'>
                      Black Cape
                    </Typography>
                    <Typography variant='subtitle1' sx={{ fontStyle: 'italic', color: theme.palette.grey[500] }}>
                      Arlington, Virginia
                    </Typography>
                    <Typography variant='caption' sx={{ fontStyle: 'italic', color: theme.palette.grey[500] }}>
                      May 2021 – December 2021
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
              <Box sx={{ mr: 8 }}>
                <Stack direction='row' spacing={1}>
                  <Divider orientation='vertical' variant='middle' flexItem sx={{ color: theme.palette.primary.contrastText }} />
                  <Stack direction='column'>
                    <Typography variant='h6'>
                      Black Cape
                    </Typography>
                    <Typography variant='subtitle1' sx={{ fontStyle: 'italic', color: theme.palette.grey[500] }}>
                      Arlington, Virginia
                    </Typography>
                    <Typography variant='caption' sx={{ fontStyle: 'italic', color: theme.palette.grey[500] }}>
                      July 2022 – Present
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </CardContent>
          </Card>

          <Box className={styles.card} sx={{ maxWidth: '50%' }}>
            <Stack direction="column" spacing={1}>
              <Typography style={{ color: theme.palette.primary.contrastText }} >
                My Interests
              </Typography>
              <motion.h1 style={{ color: theme.palette.primary.contrastText }} >
                Capturing <span style={{ color: theme.palette.primary.main }}>Memories, </span> <span style={{ color: theme.palette.primary.surface }}>&&</span>
              </motion.h1>
              <motion.h1 style={{ color: theme.palette.primary.contrastText }} >
                Making <span style={{ color: theme.palette.primary.main }}>Music</span> &
              </motion.h1>
              <motion.h1 style={{ color: theme.palette.primary.contrastText }} >
                More...
              </motion.h1>
            </Stack>
          </Box>

          <Box className={styles.card} sx={{ maxWidth: '50%' }}>
            <Stack direction="column" spacing={1}>
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
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
};
