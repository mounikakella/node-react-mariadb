import React, { useEffect, useState } from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import config from "../config";

const Users = () => {
  const [user, setUser] = useState({});
  const [rows, setRows] = useState([
    {
      id: 4,
      name: "Fred",
      email: "Fred@123.com",
      password: "68651",
      role: "ADMIN",
    },
    {
      id: 1,
      name: "James",
      email: "James@123.com",
      password: "1!23#4",
      role: "EMPLOYEE",
    },
    {
      id: 3,
      name: "John",
      email: "John@123.com",
      password: "98!891",
      role: "ADMIN",
    },
    {
      id: 2,
      name: "Peter",
      email: "Peter@123.com",
      password: "8^23!3",
      role: "EMPLOYEE",
    },
  ]);
  const [columns, setColumns] = useState([
    { field: "name", headerName: "name" },
    { field: "email", headerName: "Email" },
    { field: "role", headerName: "Role" },
  ]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
    if (user.role === "Admin") {
      async function fetchData() {
        const response = await fetch(`${config.BACKEND_BASE_URL}/users`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        setColumns([
          { field: "name", headerName: "name" },
          { field: "email", headerName: "Email" },
          { field: "role", headerName: "Role" },
        ]);
        setRows(response.data);
      }
      fetchData();
    }
  }, [user.role]);

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
        <DataGrid rows={rows} columns={columns} />
      </Grid>
    </Container>
  );
};

export default Users;
