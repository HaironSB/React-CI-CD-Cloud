import { useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./App.css";

const SECTION_CONTENT = {
  home: {
    id: "home",
    eyebrow: "Site demonstrativo feito com React e Vite, hospedado na AWS",
    title: "Aplicação React",
    description: "Exemplo de site usando React e Vite.",
    highlights: [
      {
        title: "Stack principal",
        description:
          "React + Vite no front, GitHub Actions para CI e AWS S3/CloudFront no deploy.",
      },
      {
        title: "Pipelines",
        description:
          "Build, testes e upload automatizados a cada push na branch principal.",
      },
      {
        title: "Confiabilidade",
        description:
          "Ambiente versionado, com artefatos rastreáveis e rollback simples.",
      },
    ],
  },
  sobre: {
    id: "sobre",
    eyebrow: "Bastidores do projeto",
    title: "Por que esse projeto importa?",
    description:
      "Projeto criado para demonstrar boas práticas de CI/CD e deploy na AWS utilizando tecnologias modernas.",
    highlights: [
      {
        title: "Aprendizados técnicos",
        description:
          "Integração contínua, versionamento de infraestrutura e monitoramento básico.",
      },
      {
        title: "Entregas rápidas",
        description:
          "Pull requests acionam builds isolados e só então liberam deploy para produção.",
      },
      {
        title: "Escalabilidade",
        description:
          "Arquitetura pensada para adaptar-se a novas features sem reconfigurar o pipeline.",
      },
    ],
  },
  contato: {
    id: "contato",
    eyebrow: "Vamos conversar",
    title: "Entre em contato:",
    description: "Descrição exemplo",
    highlights: [
      {
        title: "E-mail",
        description: "contato@exemplo.mail",
      },
      {
        title: "LinkedIn",
        description: "linkedin.com/in/exemplo.perfil",
      },
      {
        title: "Disponibilidade",
        description: "Segunda a sexta, 09h às 18h (horário de Brasília).",
      },
    ],
  },
};

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const currentSection = SECTION_CONTENT[activeSection];

  return (
    <div className="app-shell">
      <div className="glass-card">
        <NavBar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        <main className="main-area">
          {activeSection === "home" && <Hero />}

          <section
            className={`info-card ${activeSection}-accent`}
            aria-live="polite"
          >
            <p className="eyebrow">{currentSection.eyebrow}</p>
            <h2>{currentSection.title}</h2>
            <p className="description">{currentSection.description}</p>

            <ul className="highlight-list">
              {currentSection.highlights.map((item) => (
                <li key={item.title} className="highlight-item">
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </li>
              ))}
            </ul>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
