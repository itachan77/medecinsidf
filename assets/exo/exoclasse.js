import React from 'react';

class Exo extends React.Component {

    state = {
        page:"corps",

    }


    render() {
        
        return (
            
            <div>
                <div className="container-fluid policehome">
                
                    <div className="row">
                    
                        <div className="col-sm-12 shadow p-3 mb-5 bg-white rounded">
                            <div className="row col-sm-6">
                                <div className="col-sm-3">Offre</div>
                                <div className="col-sm-3">Demande</div>
                            </div>
                            
                            <div className="row col-sm-12">
                                <div className="col-sm-4 bg-danger"></div>
                                <div className="col-sm-4 bg-warning"></div>
                                <div className="col-sm-4 bg-info"></div>
                            </div>
                            
                            <div className="col-sm-12">
                                <div>Prix</div>
                            </div>
                            
                            <div className="col-sm-12">
                                <div>toggle</div>
                            </div>
                        </div>
                    
                    </div>

                    
                </div>
                
            </div>
        
        )
    
    }


}
    