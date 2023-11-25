export function grupoEstudo() {
    return(
        <div>
            <div>
            <br />
            <br />
            <br />
            </div>
  <div className="container marketing">
    <div className="row">
    <br />
    <br />
      <div className="col-lg-4">
          <select className="form-select" id="inputGroupSelect01">
            <option selected>Todos os centros</option>
            <option value="1">CCT</option>
            <option value="2">CCS</option>
            <option value="3">CCG</option>
            <option value="4">CCJ</option>
          </select>
      </div>
      <div className="col-lg-4">
          <select className="form-select" id="inputGroupSelect01">
            <option selected>Todos os cursos</option>
            <option value="1">Medicina</option>
            <option value="2">Engenharia Civil</option>
            <option value="3">Direito</option>
            <option value="4">Ciência da Computação</option>
          </select>
      </div>
      <div className="col-lg-4">
        <select className="form-select" id="inputGroupSelect01">
          <option selected>Todas as cadeiras</option>
          <option value="1">J026 - Recuperação judicial</option>
          <option value="2">J028 - Direito civil V - das famílias</option>
          <option value="3">J029 - Relações de trabalho I</option>
          <option value="4">J030 - Direito processual civil III</option>
        </select>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-6">
        <div className="card">
          <img src="https://www.jdv.com.br/wp-content/uploads/2023/02/visao-superior-sobre-itens-de-orientacao-de-carreira-para-juizes-e1676656790562.jpg" className="card-img-top" alt="..." />
       
          <div className="card-body">
            <h5 className="card-title">J026 | Recuperação Judicial</h5>
            <p className="card-text">3 PARTICIPANTES</p>
            <a href="#" className="btn btn-primary">Entrar no Grupo de Estudo</a>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card">
          <img src="https://www.jdv.com.br/wp-content/uploads/2023/02/visao-superior-sobre-itens-de-orientacao-de-carreira-para-juizes-e1676656790562.jpg" className="card-img-top" alt="..." />
       
          <div className="card-body">
            <h5 className="card-title">J026 | Recuperação Judicial</h5>
            <p className="card-text">6 PARTICIPANTES</p>
            <a href="#" className="btn btn-primary">Entrar no Grupo de Estudo</a>
          </div>
        </div>
      </div>
    </div>
    <br />    
  </div>
  <hr />
  </div>
  

    )
};

export default grupoEstudo;