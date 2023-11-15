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


<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Criar grupo de estudo
  </button>
 

  <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Criação de grupo de estudo</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <h5>Selecione o curso:</h5>
          <hr />
          <div className="row">
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
          <hr />
          <h5>Horários:</h5>
          <hr />
          <div className="row">
            <div className="col-lg-4">
              <h5>Manhã:</h5>
            </div>
            <div className="col-lg-4">
              <h5>Tarde:</h5>
            </div>
            <div className="col-lg-4">
              <h5>Noite:</h5>
              </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked />
                <label className="btn btn-outline-primary" htmlFor="btnradio1">AB</label>
             
                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btnradio2">CD</label>
             
                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btnradio3">EF</label>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off" checked />
                <label className="btn btn-outline-primary" htmlFor="btnradio4">AB</label>
             
                <input type="radio" className="btn-check" name="btnradio" id="btnradio5" autoComplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btnradio5">CD</label>
             
                <input type="radio" className="btn-check" name="btnradio" id="btnradio6" autoComplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btnradio6">EF</label>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio7" autoComplete="off" checked />
                <label className="btn btn-outline-primary" htmlFor="btnradio7">AB</label>
             
                <input type="radio" className="btn-check" name="btnradio" id="btnradio8" autoComplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btnradio8">CD</label>
              </div>
          </div>
        </div>
        <form />
          <div className="mb-3">
            <hr />
            <h5>Local:</h5>
            <hr />
            <input type="radio" className="btn-check" name="btnradio" id="btnradio9" autoComplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btnradio9">Sala virtual</label>
                <br />
            <textarea className="form-control" id="message-text" placeholder="Informe o link de acesso para os encontros"></textarea>
            <br />
            <input type="radio" className="btn-check" name="btnradio" id="btnradio10"/>
                <label className="btn btn-outline-primary" htmlFor="btnradio10">Sala Presencial</label>
                <br />
            <textarea className="form-control" id="message-text" placeholder="Informe a sala onde irá acontecer os encontros"></textarea>
          </div>
        <form />
          <form />
            <div className="mb-6">
              <hr />
              <h5>Descrição:</h5>
              <hr />
              <textarea className="form-control" id="message-text"></textarea>
            </div>
          <form />

       

       
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
          <button type="button" className="btn btn-primary">Criar</button>
        </div>
      </div>
    </div>
  </div>
  
   


  </div>
  </div>
  <hr />
  </div>
  

    )
};

export default grupoEstudo;