import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 200) {
        setMessage("✅ Login realizado com sucesso!");
      } else if (response.status === 401) {
        setMessage("❌ Usuário ou senha incorretos.");
      } else {
        setMessage("⚠️ Erro na requisição.");
      }
    } catch (err) {
      setMessage("⚠️ Não foi possível conectar ao servidor.");
    }
  };

  return (
    <div className="container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Tela de Login</h2>
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}

export default App;
