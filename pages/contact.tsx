import { useEffect, useState } from "react";
import type { NextPage } from "next";

import { Alert, Box, Button, CircularProgress, Snackbar, Stack, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import axios from 'axios';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";


const Contact: NextPage = () => {
  const theme = useTheme();

  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [body, setBody] = useState<string>("");

  useEffect(() => {
    const fieldsFilled = () => {
      if ((firstName && lastName) && email && body) setIsComplete(true);
      else setIsComplete(false);
    };
    fieldsFilled();
  }, [firstName, lastName, email, body]);

  const handleSubmit = async () => {
    const data = {
      who: {
        first_name: firstName,
        last_name: lastName,
        email: email
      },
      subject: "New Contact Form Submission",
      body: body
    };

    setIsLoading(true);
    setIsSent(false);

    await axios.post("https://eoajcc1ncqafa82.m.pipedream.net", data)
      .then((res) => {
        setIsLoading(false);
        setIsSent(true);
      })
      .catch(e => {
        alert(e.message);
        setIsLoading(false);
        setIsSent(false);
      });

    setFirstName("");
    setLastName("");
    setEmail("");
    setBody("");
  };

  const handleClose = () => {
    setIsSent(false);
  };

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
        overflowX: "hidden",
        overflowY: "hidden",
      }}>
        <Snackbar
          open={isSent}
          onClose={handleClose}
          autoHideDuration={5000}
        >
          <Alert onClose={handleClose} severity='success'>
            Your message has been sent!
          </Alert>
        </Snackbar>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.67, delay: 0.33, ease: "easeInOut" }}
          style={{ width: "100vw", maxWidth: "1500px", marginTop: "7.5vh" }}
        >
          <Stack direction='column' spacing={1}>
            <Typography variant="h2" textAlign='center' sx={{ color: theme.palette.primary.onSurface }}>
              Contact Me
            </Typography>
            <Typography variant="subtitle1" textAlign='center' sx={{ paddingLeft: 1.5, color: theme.palette.primary.onSurface }}>
              If you'd prefer to use your own mail app, <a href="mailto:yao.ja@northeastern.edu" style={{color: theme.palette.primary.main}}>click here.</a>
            </Typography>
          </Stack>
        </motion.div>

        <motion.div
          id="form-names"
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.67, delay: 0.33, ease: "easeInOut" }}
          style={{ width: "100vw", maxWidth: "1500px", marginTop: "7.5vh" }}>
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={4} sx={{ maxWidth: "800px", marginInline: "auto" }}>
            {/* First Name */}
            <Stack direction="column" alignItems="flex-start" sx={{ width: "40%" }}>
              <Typography variant="body1" fontWeight={700} sx={{ color: theme.palette.primary.contrastText }}>
                FIRST NAME
              </Typography>
              <TextField
                inputProps={{ style: { textTransform: 'capitalize', fontFamily: "PT Sans" } }}
                variant='outlined'
                required
                fullWidth
                value={firstName}
                placeholder='John'
                onChange={e => setFirstName(e.target.value)}
              />
            </Stack>

            {/* Last Name */}
            <Stack direction="column" alignItems="flex-start" sx={{ width: "40%" }}>
              <Typography variant="body1" fontWeight={700} sx={{ color: theme.palette.primary.contrastText }}>
                LAST NAME
              </Typography>
              <TextField
                inputProps={{ style: { textTransform: 'capitalize', fontFamily: "PT Sans" } }}
                variant='outlined'
                required
                fullWidth
                value={lastName}
                placeholder='Doe'
                onChange={e => setLastName(e.target.value)}
              />
            </Stack>
          </Stack>
        </motion.div>

        <motion.div
          id="form-details"
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.67, delay: 0.33, ease: "easeInOut" }}
          style={{ width: "100%", maxWidth: "1500px", marginTop: "3vh" }}>
          {/* Email */}
          <Stack direction="column" alignItems="flex-start" sx={{ maxWidth: "675px", marginInline: "auto" }}>
            <Typography variant="body1" fontWeight={700} sx={{ color: theme.palette.primary.contrastText }}>
              E-MAIL ADDRESS
            </Typography>
            <TextField
              variant='outlined'
              required
              inputProps={{ style: { fontFamily: "PT Sans" } }}
              fullWidth
              value={email}
              placeholder='john.doe@gmail.com'
              onChange={e => setEmail(e.target.value)}
            />
          </Stack>
        </motion.div>

        <motion.div
          id="form-details"
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.67, delay: 0.33, ease: "easeInOut" }}
          style={{ width: "100%", maxWidth: "1500px", marginTop: "3vh" }}>
          <Stack direction="column" alignItems="flex-start" sx={{ maxWidth: "675px", marginInline: "auto" }}>
            <Typography variant="body1" fontWeight={700} sx={{ color: theme.palette.primary.contrastText }}>
              MESSAGE
            </Typography>
            <TextField
              variant='outlined'
              required
              inputProps={{ style: { fontFamily: "PT Sans" } }}
              fullWidth
              value={body}
              placeholder="Tell me a bit about yourself & why you're reaching out. I'll get back to you as soon as possible!"
              multiline={true}
              minRows={12}
              onChange={e => setBody(e.target.value)}
            />
            {
              isComplete ? (
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{ mt: 6, backgroundColor: theme.palette.primary.main, color: theme.palette.primary.onPrimary, borderRadius: "16px", ":hover": { backgroundColor: "#3a7e55" } }}
                >
                  SEND
                </Button>
              ) : isLoading ? (
                <CircularProgress sx={{ color: theme.palette.primary.main }} />
              ) : (
                <Button
                  variant="contained"
                  disabled
                  sx={{ mt: 6, backgroundColor: theme.palette.primary.main, color: theme.palette.primary.onPrimary, borderRadius: "16px", ":hover": { backgroundColor: "#3a7e55" } }}
                >
                  SEND
                </Button>
              )
            }
          </Stack>
        </motion.div>
      </Box>

      <Footer />
    </Box >
  )
};

export default Contact;