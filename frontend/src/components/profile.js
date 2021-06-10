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
        <div
          style={{
            minWidth: "300px",
            border: "1px solid black",
            padding: "15px",
          }}
        >
          <div style={{ alignItems: "left", width: "100px", float: "left" }}>
            <p style={{ textAlign: "right" }}>Name:</p>
            <p style={{ textAlign: "right" }}>Email:</p>
            <p style={{ textAlign: "right" }}>Role: </p>
          </div>
          <div style={{ alignItems: "right", width: "200px", float: "left" }}>
            <p style={{ textAlign: "right" }}>{user.name}</p>
            <p style={{ textAlign: "right" }}>{user.email}</p>
            <p style={{ textAlign: "right" }}>{user.role}</p>
          </div>
        </div>
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
