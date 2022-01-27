import React from 'react';
import Navbar from './components/Navbar.js';
import BoxMain from './components/BoxMain.js';

class Exo extends React.Component {

    state = {
        page:"corps",

    }


    render() {
        
        return (
            
            <div>


                <Navbar/>
                
                <div className="mx-auto text-center">
                    <h1>Découvrez les coiffeurs près de chez vous !</h1>
                </div>
                <BoxMain/>
                
            </div>
        
        )
    
    }


}

export default Exo;