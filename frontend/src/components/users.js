import React, { useEffect, useState } from "react";
import { Container, Typography, Grid, Button } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";
import config from "../config";

const Users = (props) => {
  const [rows, setRows] = useState([]);
  const [role, setRole] = useState("");

  const StyledTableCell = withStyles((_theme) => ({
    head: {
      backgroundColor: "#a7c942",
      color: "white",
      border: "1px solid #a7c942",
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((_theme) => ({
    root: {
      "&:nth-of-type(even)": {
        backgroundColor: "#eaf2d3",
      },
    },
  }))(TableRow);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      if (foundUser.role === "ADMIN") {
        fetchData();
        setRole(foundUser.role);
      } else {
        setRows([]);
      }
    }
    async function fetchData() {
      const response = await fetch(`${config.BACKEND_BASE_URL}/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("data", data);
      setRows(data);
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
        All Users
      </Typography>
      <Grid
        item
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <TableContainer>
          <Table>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Role</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="left">{row.name}</StyledTableCell>
                  <StyledTableCell align="left">{row.email}</StyledTableCell>
                  <StyledTableCell align="left">{row.role}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid
        item
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justify="center"
      >
        <p>{role !== "ADMIN" ? "Not an Admin" : ""}</p>
        <Button onClick={() => props.history.push("/profile")}>profile</Button>
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

export default Users;
