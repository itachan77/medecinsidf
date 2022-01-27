import React from 'react';

class Navbar extends React.Component {

    state = {
        

    }


    render() {
        
        return (
            
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light shadow mb-5 rounded">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                
                  <div className="collapse navbar-collapse row" id="navbarTogglerDemo03">

                    <div className="col-sm-3 row">
                        <div className="col-10"><a className="navbar-brand" href="#"><img src="exo/images/logo.png"/></a></div>
                    </div>

                    <div className="col-sm-6 row mx-auto text-center">
                        <div className="row bg-warning col-sm-6 font-weight-bold etrepro p-2 mb-2 text-center mx-auto">
                            <div className="col-2"><i class="fas fa-user-tie"></i></div>
                            <div className="col-10">Vous êtes un professionnel ?</div>
                        
                        </div>
                        
                        <div className="input-group col-sm-12 row">
                          <div className="form-outline col-10 mx-auto text-center">
                            <input type="search" id="form1" className="form-control" placeholder="Je recherche mon coiffeur" />
                          </div>
                          
                          <button type="button col-2" className="btn btn-primary">
                            <i className="fas fa-search"></i>
                          </button>
                        </div>
                    </div>
                    

                    <div className="col-sm-3 row">
                            <div className="col-sm-6">
                                <a className="nav-link" href="#"><i className="faSize text-dark  far fa-heart"></i> <span className="sr-only"></span></a>
                                <div className="font-weight-bold">Mes favoris</div>
                            </div>
                            <div className="col-sm-6">
                                <a className="nav-link" href="#"><i className="faSize text-dark far fa-user"></i> <span className="sr-only"></span></a>
                                <div className="font-weight-bold">Me connecter</div>
                            </div>
                    </div>
                    
                  </div>
                </nav>
            </div>
        
        )
    
    }


}

export default Navbar;