import React, { useState } from "react";
import {
  Button,
  Container,
  Typography,
  Grid,
  TextField,
  Box,
} from "@material-ui/core";
import config from "../config";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submit, setSubmit] = useState(false);
  async function handleSubmit() {
    setSubmit(true);
    if (email && password) {
      const res = await fetch(`${config.BACKEND_BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (res.status === 403) {
        setError("Authentication Failed");
      } else if (res.status !== 200) {
        setError("Something is wrong");
      } else {
        const body = await res.json();
        props.history.push("/profile");
        localStorage.setItem("user", JSON.stringify(body[0]));
      }
    }
  }

  return (
    <Container>
      <Typography
        color="textSecondary"
        gutterBottom
        variant="h2"
        align="center"
      >
        Login
      </Typography>
      <Grid
        item
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <form
          noValidate
          autoComplete="off"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box m={1}>
            <TextField
              error={submit && email === "" ? true : false}
              id="email"
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box m={1}>
            <TextField
              error={submit && password === "" ? true : false}
              type="password"
              id="password"
              label="Password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box m={1}>
            <Button onClick={handleSubmit.bind(this)}>Login</Button>
          </Box>
        </form>
        <p>{error !== "" ? error : ""}</p>
      </Grid>
    </Container>
  );
};

export default Login;
