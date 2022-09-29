import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";

import { Alert, Box, Button, CircularProgress, Snackbar, Stack, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion, Variants } from "framer-motion";
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
        {
          isSent ? (
            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              open={isSent}
              onClose={handleClose}
              autoHideDuration={5000}
            >
              <Alert onClose={handleClose} severity='success'>
                Your message has been sent!
              </Alert>
            </Snackbar>
          ) : (
            <></>
          )
        }
        <motion.div id="form-names" viewport={{ once: true }} style={{ width: "100%", maxWidth: "1500px", marginTop: "7.5vh" }}>
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={4} sx={{ maxWidth: "800px", marginInline: "auto" }}>
            {/* First Name */}
            <Stack direction="column" alignItems="flex-start" sx={{ width: "40%" }}>
              <Typography variant="body1" fontWeight={700} sx={{color: theme.palette.mode === "dark" ? theme.palette.secondary.contrastText : theme.palette.primary.contrastText}}>
                FIRST NAME
              </Typography>
              <TextField
              inputProps={{style: {textTransform: 'capitalize'}}}
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
              <Typography variant="body1" fontWeight={700} sx={{color: theme.palette.mode === "dark" ? theme.palette.secondary.contrastText : theme.palette.primary.contrastText}}>
                LAST NAME
              </Typography>
              <TextField
              inputProps={{style: {textTransform: 'capitalize'}}}
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

        <motion.div id="form-details" viewport={{ once: true }} style={{ width: "100%", maxWidth: "1500px", marginTop: "5vh" }}>
          {/* Email */}
          <Stack direction="column" alignItems="flex-start" sx={{ maxWidth: "675px", marginInline: "auto" }}>
            <Typography variant="body1" fontWeight={700} sx={{color: theme.palette.mode === "dark" ? theme.palette.secondary.contrastText : theme.palette.primary.contrastText}}>
              E-MAIL
            </Typography>
            <TextField
              variant='outlined'
              required
              fullWidth
              value={email}
              placeholder='you@yourdomain.com'
              onChange={e => setEmail(e.target.value)}
            />
          </Stack>
        </motion.div>

        <motion.div id="form-details" viewport={{ once: true }} style={{ width: "100%", maxWidth: "1500px", marginTop: "5vh" }}>
          <Stack direction="column" alignItems="flex-start" sx={{ maxWidth: "675px", marginInline: "auto" }}>
            <Typography variant="body1" fontWeight={700} sx={{color: theme.palette.mode === "dark" ? theme.palette.secondary.contrastText : theme.palette.primary.contrastText}}>
              MESSAGE
            </Typography>
            <TextField
              variant='outlined'
              required
              fullWidth
              value={body}
              multiline={true}
              minRows={12}
              maxRows={20}
              onChange={e => setBody(e.target.value)}
            />
            {
              isComplete ? (
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{ mt: 6, backgroundColor: "#4ca771", color: "#fbfbfd", borderRadius: "16px", ":hover": { backgroundColor: "#3a7e55" } }}
                >
                  SEND
                </Button>
              ) : isLoading ? (
                <CircularProgress sx={{ color: "#4ca771" }} />
              ) : (
                <Button
                  variant="contained"
                  disabled
                  sx={{ mt: 6, backgroundColor: "#4ca771", color: "#fbfbfd", borderRadius: "16px", ":hover": { backgroundColor: "#3a7e55" } }}
                >
                  SEND
                </Button>
              )
            }
          </Stack>
        </motion.div>
      </Box>

      <Footer />
    </Box>
  )
};

export default Contact;