function Hero() {
  return (
    <section id="home" className="hero">
      <p className="hero-eyebrow">Pipeline impecável</p>
      <h1>Site demonstrativo - React + AWS</h1>
      <p className="hero-description">
        Código versionado, buildado e publicado usando GitHub Actions. Ideal
        para testar automações e mostrar o fluxo completo de entrega contínua.
      </p>

      <div className="hero-stats">
        <article>
          <span className="stat-label">CI</span>
          <strong className="stat-value">GitHub Actions</strong>
          <p>Pipeline com lint, testes e build.</p>
        </article>
        <article>
          <span className="stat-label">Deploy</span>
          <strong className="stat-value">AWS S3 + CloudFront</strong>
          <p>Entrega global com cache e HTTPS.</p>
        </article>
        <article>
          <span className="stat-label">Status</span>
          <strong className="stat-value">Pronto para produção</strong>
          <p>Infraestrutura como código e rollback simples.</p>
        </article>
      </div>
    </section>
  );
}

export default Hero;
