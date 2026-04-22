import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState("idle");

  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("token", data.token);

        setStage("closing");
        setTimeout(() => setStage("collapse"), 440);
        setTimeout(() => setStage("expand"), 1420);
        setTimeout(
          () =>
            navigate("/dashboard", {
              state: { fromLoginTransition: true, transitionStyle: "atlas-pass" },
            }),
          2480,
        );
      } else {
        setError("Email ou senha inválidos");
      }
    } catch {
      setError("Erro ao conectar com o servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`container stage-${stage}`}>
      <div className={`card ${stage !== "idle" ? "is-animating" : ""}`}>
        <h1 className="logo-static">ATLAS</h1>

        {error && <p className="error">{error}</p>}

        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin} disabled={loading || stage !== "idle"}>
          {loading ? <span className="spinner"></span> : "Login"}
        </button>
      </div>

      {stage !== "idle" && (
        <div className="atlas-overlay" aria-hidden="true">
          <h1 className="atlas-word">
            <span className="letter letter-a1">A</span>
            <span className="letter letter-t">T</span>
            <span className="letter letter-l">L</span>
            <span className="letter letter-a2">A</span>
            <span className="letter letter-s">S</span>
          </h1>
        </div>
      )}
    </div>
  );
}

export default Login;
