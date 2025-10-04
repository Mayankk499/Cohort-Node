import express from "express";
import User from "../models/user.model.js";
import { randomBytes, createHmac } from "crypto";
import jwt from 'jsonwebtoken';
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({
    email,
  });

  if (existingUser) {
    return res.status(400).json({ error: `email already taken` });
  }

  const salt = randomBytes(256).toString("hex");
  const hashedPassword = createHmac("sha256", salt)
    .update(password)
    .digest("hex");

  const user = await User.insertOne({
    name,
    email,
    password: hashedPassword,
    salt,
  });

  return res.status(201).json({ status: "success", data: { id: user._id } });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({
    email,
  });

  if (!existingUser) {
    return res.status(404).json({ error: `User Not found` });
  }

  const salt = existingUser.salt;
  const hashed = existingUser.password;

  const newHash = createHmac("sha256", salt).update(password).digest("hex");

  if (hashed !== newHash) {
    return res.status(400).json({ error: `Incorrect password` });
  }

  const payload = {
      _id: existingUser._id,
    name: existingUser.name,
    email: existingUser.email,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return res.json({status: 'success', token});
});

export default router;
