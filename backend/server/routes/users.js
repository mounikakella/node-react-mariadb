import express from "express";
import { getUsers, authenticate } from "../services/users";

const router = express.Router();

router.get("/", (_req, res, _next) => {
  getUsers(null).then((response) => {
    res.json(response);
  });
});

router.get("/:id", (req, res, _next) => {
  getUsers(req.params.id || null).then((response) => {
    if (response.length >= 1) {
      res.json(response);
    } else {
      res.status(404);
      res.end();
    }
  });
});

router.post("/login", (req, res, _next) => {
  console.log("req", req);
  const email = req.body.email;
  const password = req.body.password;
  authenticate(email, password).then((response) => {
    console.log("login response", response);
    if (response.length == 1) {
      res.json(response);
    } else {
      res.status(403);
      res.end();
    }
  });
});

export default router;
