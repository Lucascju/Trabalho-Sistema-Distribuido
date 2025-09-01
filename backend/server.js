const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Usuário e senha estáticos
const USER = "admin";
const PASS = "1234";

// Rota de login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Usuário e senha são obrigatórios." });
  }

  if (username === USER && password === PASS) {
    return res.status(200).json({ message: "Login realizado com sucesso!" });
  }

  return res.status(401).json({ message: "Credenciais inválidas." });
});

// Inicia servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
});
