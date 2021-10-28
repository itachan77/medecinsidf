import React from 'react';


class Header extends React.Component {

    render() {

        return (
            <header id="top" className="container-fluid uni-background-1 text-center pt-5">
                <div className="text-center">
                        <div className="mx-auto">
                            <h1 className="text-center styleHeader">MEDECINS LIBERAUX DE FRANCE</h1>
                            <div className="row text-white h1"><hr/><i className="fas fa-hand-holding-medical"></i><hr/></div>
                        </div>
                </div>
            </header>
        )
    }

}

export default Header;