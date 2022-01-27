import React from 'react';
import Categorie from './Categorie.js';
import Localisation from './Localisation.js';

class BoxMain extends React.Component {

    state = {
        viewCategorie:false,
        viewLocalisation:false,

    }
    
    afficheCategorie = () => {
      this.setState({
        viewCategorie:!this.state.viewCategorie
      })
    }
    afficheLocalisation = () => {
      this.setState({
        viewLocalisation:!this.state.viewLocalisation
      })
    }


    render() {
        
        return (
            
          <div className="container policehome boxMain">
                
            <div className="row">
            
                <div className="col-sm-12 shadow p-3 mb-5 bg-white rounded">
                    <div className="row col-sm-8">
                        <div className="col-sm-3">
                          <input id="offrebox" type="checkbox" name="choixoffre" />
                          <label htmlFor="offrebox"><button className="btn btn-success">Offre</button></label>
                          
                        </div>
                        
                        <div className="col-sm-3">
                          
                          <input id="demandebox" type="checkbox" name="choixdemande"/>
                          <label htmlFor="demandebox"><button className="btn btn-success">Demande</button></label>
                          
                        </div>
                    </div>
                    
                    <div className="row col-sm-12 mx-auto">
                    
                        <div className="col-sm-4 bg-info">
                            <div className="input-group input-group-lg row listbox">
                              <div className="col-10">
                                listbox
                              </div>
                              <div className="col-1">
                                <i className="fas fa-chevron-down fleche" onClick={this.afficheCategorie}></i>
                              </div>
                            </div>
                        </div>                  
                    
                        <div className="col-sm-4 bg-danger">
                            <div className="input-group input-group-lg">
                              <div className="input-group-prepend">
                                <span className="input-group-text searchgroup" id="inputGroup-sizing-lg"><i className="fas fa-search"></i></span>
                              </div>
                              <input id="searchgroup" type="search" placeholder="Que recherchez-vous ?" className="form-control searchgroup" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                              
                            </div>
                        </div>
                        

                        
                        <div className="col-sm-4 bg-info">
                            <div className="input-group input-group-lg listbox row">
                              <div className="col-10">
                                listbox
                              </div>
                              <div className="col-1">
                                <i className="fas fa-chevron-down fleche" onClick={this.afficheLocalisation}></i>
                              </div>
                            </div>
                            {this.state.viewLocalisation ? <Localisation /> : ""}
                        </div>

                        <div className="col-sm-12">
                          {this.state.viewCategorie ? <Categorie /> : ""}
                        </div>
                    </div>
                    
                    <div className="col-sm-12">
                        <span className="badge badge-pill badge-primary p-2">Prix</span>
                    </div>
                    

                </div>
            
            </div>

          
          </div>
        
        )
    
    }


}

export default BoxMain;