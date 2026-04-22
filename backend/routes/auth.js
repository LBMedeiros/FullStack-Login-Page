import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

let users = []; // banco fake

// Cadastro
router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({ email, password: hashedPassword });

  res.json({ message: "Usuário criado" });
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);

  if (!user) return res.status(400).json({ error: "Usuário não encontrado" });

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) return res.status(400).json({ error: "Senha inválida" });

  const token = jwt.sign({ email }, "segredo", { expiresIn: "1h" });

  res.json({ token });
});

router.get("/dashboard", verifyToken, (req, res) => {
  res.json({ message: `Bem-vindo, ${req.user.email}` });
});

export default router;
