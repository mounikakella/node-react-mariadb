import React, { useEffect, useState } from "react";
import { Container, Typography, Grid, Button } from "@material-ui/core";

const Profile = (props) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <Container>
      <Typography
        color="textSecondary"
        gutterBottom
        variant="h2"
        align="center"
      >
        Profile
      </Typography>
      <Grid
        item
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
      </Grid>
      <Grid
        item
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justify="center"
      >
        <Button onClick={() => props.history.push("/users")}>All Users</Button>
        <Button
          onClick={() => {
            localStorage.removeItem("user");
            props.history.push("/");
          }}
        >
          Logout
        </Button>
      </Grid>
    </Container>
  );
};

export default Profile;
