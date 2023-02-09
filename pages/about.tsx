import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';


import { Box, Button, Card, CardContent, CardHeader, CardMedia, Divider, Stack, Typography } from "@mui/material";
import { useTheme, withStyles } from '@mui/material/styles';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import banner from '../public/banner.png';
import { images } from '../constants/constants';
import { LocationOnRounded } from '@mui/icons-material';
import { styled } from '@mui/system';


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
                <Image src="/nextjs.png" alt="Next.js logo" width={64} height={64} style={{ filter: theme.palette.mode === "dark" ? "invert(100%)" : "invert(0%)" }} />
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
                I began my deep dive into UI/UX in January 2022, where I first learned about core design principles and how to implement them. Over the summer and fall of that year, I participated in a few of the Google UX Design classes. While in these classes, I learned how to research and identify user needs, create user personas, journey maps and storyboards, generate low-fidelity prototypes, and conduct usability studies. With the tools I've gained, I've been able to improve & create high-fidelity prototypes in Figma, leading to full design implementation in products I've worked on.
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
                    <Typography variant='caption' fontFamily='PT Sans' sx={{ fontStyle: 'italic', color: theme.palette.grey[500] }}>
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
                    <Typography variant='caption' fontFamily='PT Sans' sx={{ fontStyle: 'italic', color: theme.palette.grey[500] }}>
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
                    <Typography variant='caption' fontFamily='PT Sans' sx={{ fontStyle: 'italic', color: theme.palette.grey[500] }}>
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
                    <Typography variant='caption' fontFamily='PT Sans' sx={{ fontStyle: 'italic', color: theme.palette.grey[500] }}>
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
                In my spare time, I enjoy snapping photos as an amateur photographer, playing my ukulele and singing with friends, exprimenting with new recipes, and crafting handmade items while woodworking at home.
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.primary.contrastText,
                  fontFamily: "PT Sans"
                }}
              >
                My photography focused on landscapes and architecture in the beginning, but I'm trying to expand the
                types of photographs I take. As such, I've been pushing myself to take more portrait/slice-of-life photos. Take a look at some of the photos I'm most proud of below!
              </Typography>
            </Stack>
          </Box>
        </Box>

        <Box className={styles.grid} sx={{ mt: 4, backgroundColor: theme.palette.primary.surfaceVariant, borderRadius: "28px" }}>
          {
            images.map((img, indx) => (
              <Card key={indx} className={styles.card} sx={{ position: "relative", height: 600, width: 400 }}>
                <div>
                  <CardMedia sx={{ height: "30vh", width: "20vh", pt: 1 }}>
                    <Image src={img.src} alt={img.alt} fill />
                  </CardMedia>
                  <div style={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-45%)", width: "100%" }}>
                    <Typography sx={{ color: "#fdfdf6", zIndex: 1 }}>
                      {img.location}
                    </Typography>
                    <Typography variant="subtitle1" fontFamily="PT Sans" sx={{ color: "#fdfdf6", zIndex: 1 }}>
                      <LocationOnRounded sx={{ width: theme.typography.subtitle1.fontSize, height: theme.typography.subtitle1.fontSize }} /> {img.country}
                    </Typography>
                  </div>
                </div>
              </Card>
            ))
          }
        </Box>
      </Box>
      <Footer />
    </Box>
  )
};
