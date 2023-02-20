import React, { useState } from "react";
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image";
import axios from "axios";
import styles from "../styles/Home.module.css"

import { Alert, Box, Button, Dialog, DialogActions, DialogContent, Fab, FormControl, FormControlLabel, Radio, RadioGroup, Snackbar, Stack, TextField, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BubbleChartOutlined, CallOutlined, CreateOutlined, EmailOutlined, InfoOutlined, LanguageOutlined, PersonOutlineRounded, WorkOutlineRounded } from "@mui/icons-material";
import Link from "next/link";
import { nanoid, testimonials } from "../constants/constants";

const Home: NextPage = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [openContactDialog, setOpenContactDialog] = useState(false);
  const [fullWidth, setFullWidth] = useState<boolean>(false);
  const [radio, setRadio] = useState<string>("email");
  const [disp, setDisp] = useState<string>("start");
  const [sent, setSent] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("success");
  const [pn, setPn] = useState<string>("");
  const [contactInfo, setContactInfo] = useState({ firstName: "", lastName: "", link: "" });

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      }
    }
  }
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }
  const greeting = "Hello,";

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

  const handleDialogNav = () => {
    if (disp === "start" && radio === "email") {
      setDisp("email");
      setFullWidth(true);
    } else if (disp === "start" && radio === "phone") {
      setDisp("phone");
      setFullWidth(true);
    } else if (disp === "start" && radio === "other") {
      setDisp("other");
      setFullWidth(true);
    } else {
      setDisp("start");
      setFullWidth(false);
    }
  }

  const handleBack = () => {
    setDisp("start");
    setFullWidth(false);
  }

  const handleSend = async () => {
    setDisp("start");
    setFullWidth(false);
    setOpenContactDialog(false);

    const data = {
      who: {
        first_name: contactInfo.firstName,
        last_name: contactInfo.lastName,
        email: contactInfo.link
      },
      subject: "New Contact Info Submission",
      body: "Someone sent their contact information and would like to hear from you."
    };

    await axios.post("https://eoajcc1ncqafa82.m.pipedream.net", data)
      .then((res) => {
        setSent(true);
        setStatus("success");
      })
      .catch(e => {
        alert(e.message);
        setSent(true);
        setStatus("error");
      });
  }

  const phoneNumberFormatter = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPn(formatted);
    setContactInfo({ ...contactInfo, link: formatted });
  }

  const formatPhoneNumber = (n: string) => {
    // if input value is falsy eg if the user deletes the input, then just return
    if (!n) return n;

    // clean the input for any non-digit values.
    const phoneNumber = n.replace(/[^\d]/g, '');

    // phoneNumberLength is used to know when to apply our formatting for the phone number
    const phoneNumberLength = phoneNumber.length;

    // we need to return the value with no formatting if its less than four digits
    // this is to avoid weird behavior that occurs if you  format the area code too early
    if (phoneNumberLength < 4) return phoneNumber;

    // if phoneNumberLength is greater than 4 and less the 7 we start to return
    // the formatted number
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

    // finally, if the phoneNumberLength is greater then seven, we add the last
    // bit of formatting and return it.
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  }

  return (
    <Box className={styles.container} sx={{ backgroundColor: theme.palette.primary.surface }}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Box component={"main"} className={styles.main} >
        {/* Landing section */}
        <motion.div id="landing-section" viewport={{ once: true }} style={{ marginTop: "7.5vh" }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" >
            <Stack direction="column" spacing={1} maxWidth="40%">
              <motion.h1
                variants={sentence}
                initial="hidden"
                animate="visible"
                style={{ color: theme.palette.primary.contrastText }}
              >
                {
                  greeting.split("").map((char, index: number) => {
                    return (
                      <motion.span key={nanoid()} variants={letter}>
                        {char}
                      </motion.span>
                    )
                  })
                }
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.67, delay: 0.75, ease: "easeInOut" }}
                style={{ color: theme.palette.primary.contrastText }}
              >
                <Typography variant="h1">
                  I'm
                  <span lang="en" style={{ color: theme.palette.primary.main }}> Jacob</span>
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.67, delay: 0.75, ease: "easeInOut" }}
                style={{ color: theme.palette.primary.contrastText, paddingTop: "16px" }}
              >
                <Typography>
                  I'm a senior at Northeastern University studying Computer Engineering and a minor in Computer Science,
                  with over 2 years industry experience in front-end design and development.
                </Typography>
              </motion.div>
            </Stack>
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.67, delay: 0.75, ease: "easeInOut" }}
            >
              <Image quality={90} src={"/portrait.jpg"} alt="Portrait image" placeholder="blur" blurDataURL="/1x1-d9d9d97f.png" width={750} height={660} style={{ borderRadius: "32px" }} />
            </motion.div>
          </Stack>
        </motion.div>

        { /* Work section */}
        {/* <motion.div
          id="work-section"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          style={{ width: "100%", maxWidth: "1500px", marginTop: "30vh" }}
        >
          <motion.div variants={works}>
            <Stack direction="row" alignItems="center" justifyContent="space-evenly" >
              <Image quality={95} src={"/portrait.jpg"} alt="Portrait image" placeholder="blur" blurDataURL="/1x1-d9d9d97f.png" width={500} height={440} style={{ borderRadius: "32px" }} />
              <Stack direction="column" spacing={2} maxWidth="40%">
                <motion.div
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.67, delay: 0.33, ease: "easeInOut" }}
                  style={{ color: theme.palette.primary.contrastText }}
                >
                  <Typography variant="h4">
                    This is test text for blurb about a project
                  </Typography>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.67, delay: 0.33, ease: "easeInOut" }}
                  style={{ color: theme.palette.primary.contrastText, paddingTop: "16px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </motion.p>
                <motion.div>
                  <Link href="/work">
                    <Fab
                      variant="extended"
                      sx={{
                        boxShadow: 0,
                        backgroundColor: theme.palette.secondary.primaryContainer,
                        color: theme.palette.secondary.onPrimaryContainer,
                        maxWidth: "212px",
                        borderRadius: "16px",
                        marginTop: "16px",
                        ":hover": {
                          backgroundColor: theme.palette.primary.surfaceAt4,
                        }
                      }}
                    >
                      <WorkOutlineRounded sx={{ color: theme.palette.secondary.onPrimaryContainer, mr: 1 }} />
                      Learn about my work
                    </Fab>
                  </Link>
                </motion.div>
              </Stack>
            </Stack>
          </motion.div>
        </motion.div> */}

        { /* Testimonials section */}
        <motion.div
          id="testimonial-section"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          style={{ width: "100%", maxWidth: "1500px", marginTop: "25vh" }}
        >
          <motion.div variants={works} style={{ backgroundColor: theme.palette.primary.surfaceAt1, borderRadius: "28px", padding: 2 }} >
            <Stack direction="row" alignItems="center" justifyContent="space-evenly" >
              {
                testimonials.map((t, indx) => (
                  <React.Fragment key={nanoid()}>
                    <Stack direction="column" spacing={2} maxWidth="40%">
                      <AnimatePresence>
                        <motion.div
                          initial={{ opacity: 0, scale: 1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.67, delay: 0.33, ease: "easeInOut" }}
                          style={{ color: theme.palette.primary.contrastText }}
                        >
                          <Typography variant="h4">
                            "{t.impactful}"
                          </Typography>
                        </motion.div>
                        <motion.p
                          key={nanoid()}
                          initial={{ opacity: 0, scale: 1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.67, delay: 0.33, ease: "easeInOut" }}
                          style={{ color: theme.palette.primary.contrastText, paddingTop: "16px" }}
                        >
                          "{t.major}"
                        </motion.p>
                        <motion.p
                          key={nanoid()}
                          initial={{ opacity: 0, scale: 1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.67, delay: 0.33, ease: "easeInOut" }}
                          style={{ color: theme.palette.primary.contrastText, paddingTop: "16px" }}
                        >
                          {t.author} <br />
                          {t.position}, {t.company}
                        </motion.p>
                      </AnimatePresence>
                      <motion.div>
                        <Link href="/work/stire">
                          <Fab
                            variant="extended"
                            sx={{
                              boxShadow: 0,
                              backgroundColor: theme.palette.secondary.primaryContainer,
                              color: theme.palette.secondary.onPrimaryContainer,
                              maxWidth: "212px",
                              borderRadius: "16px",
                              marginTop: "16px",
                              ":hover": {
                                backgroundColor: theme.palette.primary.surfaceAt4,
                              }
                            }}
                          >
                            <WorkOutlineRounded sx={{ color: theme.palette.secondary.onPrimaryContainer, mr: 1 }} />
                            Learn more
                          </Fab>
                        </Link>
                      </motion.div>
                    </Stack>
                    <Image quality={95} src={t.image} alt="Portrait image" placeholder="blur" blurDataURL="/1x1-d9d9d97f.png" width={450} height={450} style={{ borderRadius: "32px" }} />
                  </React.Fragment>
                ))
              }
            </Stack>
          </motion.div>
        </motion.div>

        {/* Contact section */}
        <motion.div
          id="testimonial-section"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          style={{ width: "100%", maxWidth: "1500px", marginTop: "25vh" }}
        >
          <motion.div variants={works}>
            <Stack direction='column' spacing={4} sx={{ placeItems: "center" }}>
              <div
                style={{
                  width: 'min(100% - 2rem, 900px)',
                  backgroundColor: theme.palette.primary.surfaceAt1,
                  borderRadius: '28px',
                  display: 'flex',
                  justifyContent: "center"
                }}
              >
                <Image quality={90} src={"/undraw_experience_design.svg"} alt="unDraw image from https://undraw.co/illustrations" placeholder="blur" blurDataURL="/1x1-d9d9d97f.png" width={625} height={550} />
              </div>
              <motion.div>
                <Typography variant="h3" sx={{ color: theme.palette.primary.contrastText }}>
                  Interested in learning more about me?
                </Typography>
              </motion.div>
              <motion.div>
                <Stack direction='row' spacing={2} sx={{ placeItems: "center" }}>
                  <Link href="/contact">
                    <Button
                      variant="contained"
                      sx={{
                        boxShadow: 0,
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.onPrimary,
                        maxWidth: "212px",
                        height: "56px",
                        borderRadius: "16px",
                        ":hover": {
                          backgroundColor: theme.palette.primary.dark,
                          color: "white"
                        }
                      }}
                    >
                      <CreateOutlined sx={{ color: theme.palette.primary.onPrimary, mr: 1 }} />
                      Send me a message
                    </Button>
                  </Link>
                  <Button variant="outlined" onClick={(e) => setOpenContactDialog(true)} sx={{ maxWidth: "212px", height: "56px", borderRadius: "16px", borderColor: theme.palette.primary.outline }}>
                    <PersonOutlineRounded sx={{ mr: 1 }} />
                    Provide contact info
                  </Button>
                </Stack>
              </motion.div>
            </Stack>
          </motion.div>
        </motion.div>

        <Dialog fullScreen={fullScreen} fullWidth={fullWidth} maxWidth="sm" open={openContactDialog} onClose={(e) => setOpenContactDialog(false)} PaperProps={{ style: { borderRadius: "28px" } }}>
          <DialogContent dividers sx={{ backgroundColor: theme.palette.primary.surfaceAt1 }}>
            {
              disp === "start" &&
              <Stack direction="column" spacing={2}>
                <Stack direction="column" sx={{ placeItems: "center" }}>
                  <EmailOutlined sx={{ color: theme.palette.primary.main }} />
                  <Typography>
                    Choose your mode of contact
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.grey[600] }}>
                    Select the option that works best for you
                  </Typography>
                </Stack>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={radio}
                    onChange={(e) => setRadio((e.target as HTMLInputElement).value)}
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="email" control={<Radio />} label="Email" />
                    <FormControlLabel value="phone" control={<Radio />} label="Phone" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </Stack>
            }
            {
              disp === "email" &&
              <Stack direction="column" spacing={2}>
                <Stack direction="column" sx={{ placeItems: "center" }}>
                  <EmailOutlined sx={{ color: theme.palette.primary.main }} />
                  <Typography>
                    Email
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.grey[600] }}>
                    Please provide your information below
                  </Typography>
                </Stack>
                <TextField
                  label="First Name"
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ style: { textTransform: 'capitalize', fontFamily: "PT Sans" } }}
                  placeholder="John"
                  onChange={e => setContactInfo({ ...contactInfo, link: e.target.value })}
                />
                <TextField
                  label="Last Name"
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ style: { textTransform: 'capitalize', fontFamily: "PT Sans" } }}
                  placeholder="Doe"
                  onChange={e => setContactInfo({ ...contactInfo, link: e.target.value })}
                />
                <TextField
                  label="Email Address"
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ style: { fontFamily: "PT Sans" } }}
                  placeholder="john.doe@gmail.com"
                  onChange={e => setContactInfo({ ...contactInfo, link: e.target.value })}
                />
              </Stack>
            }
            {
              disp === "phone" &&
              <Stack direction="column" spacing={2}>
                <Stack direction="column" sx={{ placeItems: "center" }}>
                  <CallOutlined sx={{ color: theme.palette.primary.main }} />
                  <Typography>
                    Phone
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.grey[600] }}>
                    Please provide your information below
                  </Typography>
                </Stack>
                <TextField
                  label="First Name"
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ style: { textTransform: 'capitalize', fontFamily: "PT Sans" } }}
                  placeholder="John"
                  onChange={e => setContactInfo({ ...contactInfo, link: e.target.value })}
                />
                <TextField
                  label="Last Name"
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ style: { textTransform: 'capitalize', fontFamily: "PT Sans" } }}
                  placeholder="Doe"
                  onChange={e => setContactInfo({ ...contactInfo, link: e.target.value })}
                />
                <TextField
                  label="Phone Number"
                  InputLabelProps={{ shrink: true }}
                  type="tel"
                  inputProps={{ style: { fontFamily: "PT Sans" }, pattern: "([0-9]{3})-[0-9]{3}-[0-9]{4}" }}
                  placeholder="(555) 555-1234"
                  value={pn}
                  onChange={e => phoneNumberFormatter(e)}
                />
              </Stack>
            }
            {
              disp === "other" &&
              <Stack direction="column" spacing={2}>
                <Stack direction="column" sx={{ placeItems: "center" }}>
                  <LanguageOutlined sx={{ color: theme.palette.primary.main }} />
                  <Typography>
                    Other
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.grey[600] }}>
                    Please provide your information below
                  </Typography>
                </Stack>
                <TextField
                  label="First Name"
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ style: { textTransform: 'capitalize', fontFamily: "PT Sans" } }}
                  placeholder="John"
                  onChange={e => setContactInfo({ ...contactInfo, link: e.target.value })}
                />
                <TextField
                  label="Last Name"
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ style: { textTransform: 'capitalize', fontFamily: "PT Sans" } }}
                  placeholder="Doe"
                  onChange={e => setContactInfo({ ...contactInfo, link: e.target.value })}
                />
                <TextField
                  label="Place to reach you"
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ style: { fontFamily: "PT Sans" } }}
                  placeholder="john.doe@gmail.com"
                  onChange={e => setContactInfo({ ...contactInfo, link: e.target.value })}
                />
              </Stack>
            }
          </DialogContent>
          <DialogActions sx={{ backgroundColor: theme.palette.primary.surfaceAt1 }}>
            <Button onClick={e => disp === "start" ? setOpenContactDialog(false) : handleBack()} sx={{ color: theme.palette.primary.main }}>
              {disp === "start" ? "Cancel" : "Back"}
            </Button>
            <Button onClick={disp === "start" ? handleDialogNav : handleSend} sx={{ color: theme.palette.primary.main }}>
              {disp === "start" ? "Continue" : "Send"}
            </Button>
          </DialogActions>
        </Dialog>

        <Snackbar
          open={sent}
          onClose={() => setSent(false)}
          autoHideDuration={6000}
        >
          {
            status === "success" ?
              <Alert
                onClose={() => setSent(false)}
                severity="success"
              >
                Your info has been sent!
              </Alert>
              :
              <Alert
                onClose={() => setSent(false)}
                severity="error"
              >
                Something went wrong.
              </Alert>
          }
        </Snackbar>
      </Box>

      <Footer />
    </Box>
  )
}

export default Home
