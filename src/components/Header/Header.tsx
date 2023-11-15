export function Header() {
    return(
        <header>
  <nav className="navbar navbar-expand-md navbar-primary fixed-top bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand" href="../../login.html" >Meu Monitor</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="../../index.html" >Monitoria</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../../grupoEstudo.html" >Grupo de Estudo</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../../catalogoVideos.html" >Catálogo de Video Aulas</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
    )
};

export default Header;