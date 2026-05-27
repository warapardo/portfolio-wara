"use client"; // Precisa porque usaremos useState/useEffect

import { useState, useEffect } from "react";
import Image from "next/image";
import "./globals.css";
import PerfilAPI from "./components/PerfilAPI";
import DadosAPI from "./components/DadosApi";

export default function Home() {
  // Estado para tema dark/light
  const [isDark, setIsDark] = useState(false);
  const [dadosAPI, setDadosAPI] = useState(null); // Para API Spring Boot

  // Função para alternar tema
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Efeito para carregar tema salvo
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.body.classList.add("dark");
    }
  }, []);

  // Efeito para buscar dados da API
  useEffect(() => {
    fetch("http://localhost:8080/api/api/v1/perfil")
      .then((res) => {
        if (!res.ok) throw new Error("API não disponível");
        return res.json();
      })
      .then((data) => {
        console.log("✅ Dados da API carregados:", data);
        setDadosAPI(data);
      })
      .catch((err) => {
        console.log("ℹ️ Usando dados estáticos:", err.message);
      });
  }, []);

  return (
    <>
      {/* HEADER / MENU */}
      <header id="home">
        <nav>
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px 0",
              listStyle: "none",
            }}
          >
            {["Início", "Sobre Mim", "Habilidades", "Projetos", "Contato"].map(
              (item) => (
                <li key={item} style={{ margin: "0 15px" }}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    style={{ color: "inherit", fontWeight: "bold" }}
                  >
                    {item}
                  </a>
                </li>
              ),
            )}
          </ul>

          {/* Botão de Tema */}
          <button
            onClick={toggleTheme}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "none",
              border: "2px solid currentColor",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              cursor: "pointer",
              fontSize: "1.2em",
            }}
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </nav>

        <div
          className="hero-content"
          style={{ textAlign: "center", padding: "40px 20px" }}
        >
          <h1 style={{ fontSize: "2.5em", marginBottom: "20px" }}>
            Olá, eu sou Wara
          </h1>
          <p
            style={{
              fontSize: "1.2em",
              maxWidth: "800px",
              margin: "0 auto 30px",
            }}
          >
            Desenvolvedor Full Stack em formação pela UNICAMP, focado em criar
            soluções web eficientes e escaláveis.
          </p>
          <a href="#projetos" className="btn-cta">
            Ver Meus Projetos
          </a>
        </div>
      </header>

      {/* SEÇÃO SOBRE MIM */}
      <section id="sobre" className="section">
        <h2>Sobre Mim</h2>
        <div
          className="about-content"
          style={{
            maxWidth: "800px",
            margin: "auto",
            display: "flex",
            alignItems: "flex-start",
            gap: "30px",
          }}
        >
          <img
            src="/img/perfil.png"
            alt="Foto de Perfil"
            style={{
              width: "200px",
              borderRadius: "50%",
              flexShrink: "0",
            }}
          />
          <div>
            <p>
              Sou um entusiasta da tecnologia e do desenvolvimento web,
              atualmente focado em aprimorar minhas habilidades no front e
              back-end. Minha jornada no mundo da programação começou com a
              curiosidade de entender como as páginas que usamos diariamente são
              construídas, e rapidamente se transformou em uma paixão por
              resolver problemas e dar vida a ideias através do código.
            </p>
            <p style={{ marginTop: "15px" }}>
              Busco minha primeira oportunidade para aplicar meus conhecimentos
              em um ambiente colaborativo, contribuir para projetos
              significativos e continuar aprendendo e crescendo como
              desenvolvedor. Estou sempre em busca de novos desafios e adoro
              transformar conceitos em interfaces funcionais e intuitivas.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO HABILIDADES */}
      <section id="habilidades" className="section">
        <h2>Habilidades</h2>
        <div
          className="skills-grid"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "15px",
            maxWidth: "800px",
            margin: "auto",
          }}
        >
          {["Fullstack", "Python", "Java", "AWS", "Linux", "Git & GitHub"].map(
            (skill) => (
              <div
                key={skill}
                className="skill-item"
                style={{
                  backgroundColor: "#007bff",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "25px",
                }}
              >
                {skill}
              </div>
            ),
          )}
        </div>
      </section>

      {/* SEÇÃO PROJETOS */}
      <section id="projetos" className="section">
        <h2>Meus Projetos</h2>
        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          {/* Projeto 1 */}
          <div
            className="project-card"
            style={{
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
              overflow: "hidden",
              textAlign: "left",
            }}
          >
            <img
              src="https://via.placeholder.com/300x200"
              alt="Projeto 1"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "20px" }}>
              <h3>Nome do Projeto 1</h3>
              <p style={{ margin: "10px 0" }}>
                Uma breve descrição do que este projeto faz e quais problemas
                ele resolve.
              </p>
              <div style={{ margin: "15px 0" }}>
                {["HTML", "CSS", "JavaScript"].map((tech) => (
                  <span
                    key={tech}
                    style={{
                      backgroundColor: "#e0e0e0",
                      padding: "5px 10px",
                      borderRadius: "3px",
                      fontSize: "0.8em",
                      marginRight: "5px",
                      display: "inline-block",
                      marginBottom: "5px",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href="#"
                  target="_blank"
                  className="btn-link"
                  style={{ marginRight: "10px" }}
                >
                  Ver Projeto
                </a>
                <a href="#" target="_blank" className="btn-link">
                  Ver Código (GitHub)
                </a>
              </div>
            </div>
          </div>

          {/* Adicione mais projetos seguindo o mesmo padrão */}
        </div>
      </section>

      {/* SEÇÃO CONTATO */}
      <section id="contato" className="section">
        <h2>Entre em Contato</h2>
        <p style={{ maxWidth: "600px", margin: "0 auto 30px" }}>
          Estou em busca da minha primeira oportunidade e adoraria conversar
          sobre como posso contribuir para sua equipe.
        </p>

        <div
          className="contact-links"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=waarapardo@gmail.com"
            target="_blank"
            className="btn-link"
          >
            Enviar Email (via Gmail)
          </a>
          <a
            href="https://www.linkedin.com/in/wara-inti-pardo-51407111a/"
            target="_blank"
            className="btn-link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/warapardo"
            target="_blank"
            className="btn-link"
          >
            GitHub
          </a>
        </div>

        <p>
          Se preferir, meu e-mail é: <strong>waarapardo@gmail.com</strong>
        </p>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#333",
          color: "#fff",
        }}
      >
        <p>
          &copy; {new Date().getFullYear()} Wara Inti Pardo. Todos os direitos
          reservados.
        </p>

        {/* ↓↓↓ ADICIONE ESTE BLOCO DENTRO DO FOOTER ↓↓↓ */}
        {dadosAPI && (
          <div
            style={{
              marginTop: "10px",
              fontSize: "0.8em",
              opacity: 0.8,
            }}
          >
            <p>
              <strong>🎯 Backend Integrado:</strong> Dados servidos por API
              Spring Boot 4.0 + Java 25
            </p>
            <div style={{ marginTop: "5px" }}>
              <a
                href="http://localhost:8080/api/api/v1/perfil"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#4dabf7", margin: "0 10px" }}
              >
                🔗 Ver API (JSON)
              </a>
              <a
                href="http://localhost:8080/api/api/v1/health"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#4dabf7", margin: "0 10px" }}
              >
                📊 Status da API
              </a>
            </div>
          </div>
        )}
      </footer>

      {/* ↓↓↓ ADICIONE ESTAS LINHAS NO FINAL (antes do último </>) ↓↓↓ */}
      {dadosAPI && <PerfilAPI />}
      {dadosAPI && <DadosAPI />}
    </>
  );
}
