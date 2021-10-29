import React from 'react';


class Footer extends React.Component {

    render() {

        return (
<footer className="site-footer footer-default" style={{marginTop:'-100px'}}>
<div className="footer-main-content">
    <div className="container">
        <div className="row">
            <div className="footer-main-content-elements">
                <div className="footer-main-content-element col-md-3 col-sm-6">
                    <aside className="widget">
                    <h3 className="widget-title uni-uppercase text-center">Médecins libéraux de France</h3>
                        <div className="widget-title uni-uppercase"><a href="#" className="row text-white h1"><hr/><i className="fas fa-hand-holding-medical"></i><hr/></a></div>
                        <div className="widget-content">


                        </div>
                    </aside>
                </div>
                <div className="footer-main-content-element col-md-6 col-sm-12">


                    <aside className="widget">
                        <h3 className="widget-title uni-uppercase text-center">D'OU PROVIENNENT<span> LES DONNEES ?</span></h3>
                        
                        <div className="text-white text-center">L’ensemble des données est disponible en open data sur ce lien : </div>
                        <div className="text-center"><a href="https://data.opendatasoft.com/explore/dataset/medecins%40public/table/?flg=fr">Lien OpenDataSoft</a></div>
                        
                        
                    </aside>
                </div>
                <div className="footer-main-content-element col-md-3 col-sm-6">
                    <aside className="widget">
                        <div className="widget-content">
                            <p>
                                Application développée par Chantal M., développeuse web - web mobile
                            </p>
                            <div className="uni-info-contact">
                                <ul>
                                    <li><i className="fa fa-envelope-o" aria-hidden="true"></i><a href="mailto:chantal@netteweb.fr">chantal@netteweb.fr</a></li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </div>
</div>

</footer>
        )
    }

}

export default Footer;
