import { useLocation, useNavigate } from "react-router-dom";
import "./dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const fromLoginTransition = Boolean(location.state?.fromLoginTransition);
  const transitionStyle = location.state?.transitionStyle ?? "";

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div
      className={`layout ${fromLoginTransition ? "dashboard-enter" : ""} ${
        transitionStyle === "atlas-pass" ? "dashboard-atlas-pass" : ""
      }`}
    >
      <aside className="sidebar">
        <h2>ATLAS</h2>
        <nav>
          <p>Dashboard</p>
          <p>Projetos</p>
          <p>Configurações</p>
        </nav>
      </aside>

      <main className="main">
        <div className="topbar">
          <div>
            <p className="eyebrow">Painel Atlas</p>
            <h2>Dashboard</h2>
          </div>
          <button onClick={handleLogout}>Sair</button>
        </div>

        <section className="hero-panel">
          <div className="hero-copy">
            <p className="hero-kicker">Sistema online</p>
            <h1>Seus dados entram em cena com mais clareza.</h1>
            <p className="hero-text">
              Acompanhe os indicadores principais, revise atividade recente e
              mantenha o fluxo do produto sob controle.
            </p>
          </div>

          <div className="hero-orb">
            <div className="hero-orb-core">A</div>
            <span className="hero-line hero-line-1"></span>
            <span className="hero-line hero-line-2"></span>
            <span className="hero-line hero-line-3"></span>
          </div>
        </section>

        <div className="cards">
          <div className="card-box">
            <p>Usuários</p>
            <h2>10</h2>
            <span className="card-trend">+12% este mês</span>
          </div>

          <div className="card-box">
            <p>Receita</p>
            <h2>R$ 2.250</h2>
            <span className="card-trend">Meta em 84%</span>
          </div>

          <div className="card-box">
            <p>Atividades</p>
            <h2>20</h2>
            <span className="card-trend">7 novas hoje</span>
          </div>
        </div>

        <section className="content-grid">
          <div className="content-box">
            <h3>Atividade recente</h3>
            <p>Você fez login hoje.</p>
          </div>

          <div className="content-box spotlight-box">
            <p className="spotlight-label">Status</p>
            <h3>Ambiente estável</h3>
            <p>Sincronização concluída e serviços respondendo normalmente.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
