import React from 'react';
import ApiHref from './ApiHref.js'


class Service extends React.Component {
    state = {
        nextId:2,

        ApiHref : [
            {
            dataset: ["annuaire-et-localisation-des-professionnels-de-sante"], 
            timezone : "UTC", 
            rows: 9999, 
            start: 0, 
            format: "json", 
            facet: ["civilite", "exercice_particulier", "nature_exercice", "convention", "sesam_vitale", "types_actes", "codes_ccam", "nom_epci", "nom_dep", "nom_reg", "nom_com", "libelle_profession"]
            }, "records": [{"datasetid": "annuaire-et-localisation-des-professionnels-de-sante", "recordid": "e4943f3a8a7af6135e93a8ccf4457be4320be180", "fields": {"nom": "CHANTAL LAUBREAUX FAVRAUD", "nom_reg": "ILE-DE-FRANCE", "codes_ccam": 
        ],
        
        
        
        villeSelect:"aucune selection",

    }

    componentDidMount() {
        fetch(ApiHref)
        .then(res => res.json())
        .then(Villes => {
            this.setState({
                Villes: Villes.map(ville => ({
                id: ville.id,
                ville:ville.ville,
                codePostal:ville.codePostal,
                departmentCode:ville.departmentCode,
                })),
                nextId: Math.max(...Villes.map(ville => ville.id)) + 1 
        })
        })
    }
    
    
    onChange = (e) => {
    
        var select = e.target;
        var index = select.options[select.selectedIndex].getAttribute("value");
        
        if (e != undefined) {
    
            var dataObjetVille = this.state.Villes;
            
            dataObjetVille.map(ville => {
            
                if (ville.codePostal == index) {
                    this.setState({
                        villeSelect: ville.codePostal
                    });
                    console.log(ville.codePostal);
                }    
            })
        }
    
        else {
            this.setState({
                villeSelect: "aucune selection"
            });
        }
    }
    
    

    render() {
        return (
        <div class="uni-services">
            <div id="wrapper-container" class="site-wrapper-container">
        
        
                <div id="main-content" class="site-main-content">
                    <section class="site-content-area">
        
                        <div class="uni-services-body">
        
                            <!--OUR SERVICES 2-->
                            <div class="uni-our-services-2 uni-background-1">
                                <div class="container">
        
                                    {% if codePostal != "" or codeDep != "" %}
                                    {% for key, item in tabMed.records %}
        
                                    
                                    {% if item.fields.code_postal == codePostal or item.fields.code_postal|striptags|slice(0, 2)|raw  == codeDep %}
                                    
                                    {% if item.fields.record_timestamp is defined %}<div class="text-right">Dernière mise à jour : {{item.fields.record_timestamp}}</div>{% endif %}
                                    <div class="mb-2" style="box-shadow:5px 5px 5px black;border-radius:15px;background-color:beige;">
                                        <p class="card-text h1 p-2" style=""><span class="text-danger h5">Nom et spécialité du médecin :<br></span>{{item.fields.nom|upper}}, {% if item.fields.libelle_profession is defined %}{{item.fields.libelle_profession}}{% endif %}</p>
                                        <div class="ml-2 pb-3 text-center"> Convention : {{item.fields.convention}}</div>
                                    </div>
        
                                    <div class="uni-our-service-2-body" style="box-shadow:5px 5px 5px black;border-radius:5px;">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="tab-nav">
                                                    <ul class="nav-pills nav-stacked">
                                                        <li class="active"><a href="#tab_a{{key}}" data-toggle="pill">Carte et Adresse</a></li>
                                                        <li><a href="#tab_b{{key}}" data-toggle="pill">Actes pratiqués</a></li>
                                                        <li><a href="#tab_d{{key}}" data-toggle="pill">Renseignements divers</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-md-9">
                                                <div class="tab-content">
                                                    <div class="tab-pane active" id="tab_a{{key}}">
                                                        <div class="uni-our-service-2-content-default">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                        <div class="mapouter"><div class="gmap_canvas"><iframe width="400" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q={{item.fields.adresse}}&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="1" scrolling="no" marginheight="0" marginwidth="0"></iframe><br></div></div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="item-caption">
                                                                        <div class="item-caption-title">
                                                                            <h3>ADRESSE</h3>
                                                                            <div class="uni-line"></div>
                                                                        </div>
                                                                        <div>{{item.fields.adresse}}</div>
                                                                        
                                                                        <hr class="text-black">
        
                                                                        {% if item.fields.telephone is defined %}
                                                                        <div class="item-caption-title mt-2">
                                                                            <h3>TEL.</h3>
                                                                            <div class="uni-line"></div>
                                                                            
                                                                        </div>
                                                                        <div><i class="fas fa-phone-square-alt"></i> {{item.fields.telephone}}</div>
                                                                        {% endif %}
                                                                        
                                                                        <hr>
                                                                        
                                                                        <div class="mx-auto"><button class="btn btn-primary mx-auto"><a class="text-white" href="https://www.doctolib.fr/doctors/{{item.fields.nom}}">VOIR LE MEDECIN SUR DOCTOLIB</a></button></div>
                                                                        
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
        
                                                    <div class="tab-pane" id="tab_b{{key}}">
                                                        <div class="uni-our-service-2-content-default">
                                                            <div class="row">
          
                                                                <div class="col-md-12">
                                                                    <div class="item-caption">
                                                                        <div class="item-caption-title mt-3">
                                                                            <h3>ACTES PRATIQUES</h3>
                                                                            <div class="uni-line"></div>
                                                                        </div>
        
                                                                        {% if item.fields.actes is defined or item.fields.types_actes is defined %}
                                                                        
                                                                        {% if item.fields.actes is defined %} <span class="text-primary h4">Actes</span> <div class="mb-4" style="height:100px;overflow:auto">{{item.fields.actes}}</div>{% endif %}
                                                                        {% if item.fields.types_actes is defined %} <span class="text-primary h4">Type</span> <div style="height:100px;overflow:auto">{{item.fields.types_actes}}</div>{% endif %}
                                                                        {% else %}
                                                                        <span class="text-primary h4">Aucun acte renseigné.</span> 
                                                                        
                                                                        {% endif %}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
        
                                                    
                                                    <div class="tab-pane" id="tab_d{{key}}">
                                                        <div class="uni-our-service-2-content-default">
                                                            <div class="row">
                                                                <div class="col-md-12">
                                                                    <div class="item-caption">
                                                                        <div class="item-caption-title mt-3">
                                                                            <h3>INFORMATIONS DIVERSES</h3>
                                                                            <div class="uni-line"></div>
                                                                        </div>
                                                                            <li class="list-group-item">
                                                                            <div class="text-white mb-2 p-1" style="background-color:blue; border-radius:5px;">Informations diverses </div>
                                                                            <div>{{item.fields.sesam_vitale}}</div>
                                                                            <div>Code profession : {{item.fields.code_profession}}</div>
                                                                            </li>
        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-5"><hr></div>
                                    {% endif %}
                                    {% endfor %}
                                    {% endif %}
                                    
                                    
                                </div>
                            </div>
        
                        </div>
                    </section>
                </div>
        
                <footer class="site-footer footer-default" style="margin-top:-100px;">
                    <div class="footer-main-content">
                        <div class="container">
                            <div class="row">
                                <div class="footer-main-content-elements">
                                    <div class="footer-main-content-element col-md-3 col-sm-6">
                                        <aside class="widget">
                                        <h3 class="widget-title uni-uppercase text-center">Médecins <span>d'Ile-de-France</span></h3>
                                            <div class="widget-title uni-uppercase"><a href="#" class="row text-white h1"><hr><i class="fas fa-hand-holding-medical"></i><hr></a></div>
                                            <div class="widget-content">
        
        
                                            </div>
                                        </aside>
                                    </div>
                                    <div class="footer-main-content-element col-md-6 col-sm-12">
        
        
                                        <aside class="widget">
                                            <h3 class="widget-title uni-uppercase text-center">D'OU PROVIENNENT<span> LES DONNEES ?</span></h3>
                                            
                                            <div class="text-white text-center">L’ensemble des données est disponible en open data sur ce lien : 
                                            <a href="https://www.data.gouv.fr/fr/datasets/annuaire-et-localisation-des-professionnels-de-sante-en-ile-de-france/"> https://www.data.gouv.fr/fr/datasets/annuaire-et-localisation-des-professionnels-de-sante-en-ile-de-france/</a>
                                            
                                            </div>
                                        </aside>
                                    </div>
                                    <div class="footer-main-content-element col-md-3 col-sm-6">
                                        <aside class="widget">
                                            <div class="widget-title uni-uppercase"><a href="#"><img src="images/logowhite.png" alt="" class="img-responsive"></a></div>
                                            <div class="widget-content">
                                                <p>
                                                    Application développée par Chantal M., développeuse web - web mobile
                                                </p>
                                                <div class="uni-info-contact">
                                                    <ul>
                                                        <li><i class="fa fa-envelope-o" aria-hidden="true"></i><a href="mailto:chantal@netteweb.fr"> chantal@netteweb.fr</a></li>
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
            </div>
        </div>
        )
    }
    
}

export default Service;