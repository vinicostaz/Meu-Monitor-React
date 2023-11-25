export function Header() {
    return(
        <header>
  <nav className="navbar navbar-expand-md navbar-primary fixed-top bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand" href="../../loginAdmin.html" >Admin</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="../../criarMonitoria.html" >Criar Monitoria</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../../criarGrupoEstudo.html" >Criar Grupo de Estudo</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../../catalogoVideosAdmin.html" >Cadastrar Video Aula  </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
    )
};

export default Header;