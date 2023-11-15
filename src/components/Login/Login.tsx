export function Login() {
    return(
        <div>
    <div className="container">
        <div className="row no-gutter">
            <div className="col-lg-5">
                <canvas id="qrcode"></canvas>  
               
            </div> 
             <div className="col-lg-7 px-5 pt-5">
                 <h1 className="font-weight-bold py-3" >Você possui conta?</h1>
                 
                <form/>
                    <div className="form-row">
                            <div className="col-lg-7">
                                <input type="email" placeholder="Matrícula" className="form-control my-3 p-4"/>
                            </div>
                    </div>
                    <div className="form-row">
                        <div className="col-lg-7">
                            <input type="password" placeholder="Senha" className="form-control my-3 p-4"/>
                        </div>
                        <input type="checkbox" />
                        <label>Lembrar matrícula</label> <br /> <br />
                       
                       

                    </div>
                    <div className="form-row">
                    <a href="../../index.html" className="btn btn-primary">Acessar</a>
                    <br/>
                    <br/>
                    
                    
                </div>
            <form />
        </div>
    </div>
    </div>
    </div>
    )
};

export default Login;