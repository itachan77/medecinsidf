import React from 'react';
import ApiHref from './ApiHref.js';
import ServiceItem from './ServiceItem1.js';



class Service extends React.Component {
    state = {
        nextId:2,

        // ApiHref : [
        //     {
        //         records : {
        //             datasetid : "annuaire-et-localisation-des-professionnels-de-sante",
        //             recordid : "e4943f3a8a7af6135e93a8ccf4457be4320be180",
        //             fields : {
        //                  nom : "MARION LAVRIL ROBEY",
        //                  nom_reg : "ILE-DE-FRANCE",
        //                  codes_ccam : "DEQP003",
        //                  code_postal : "92100",
        //                  nature_exercice : "Libéral intégral",
        //                  nom_epci : "Métropole du Grand Paris",
        //                  types_actes : "Actes techniques médicaux (hors imagerie)",
        //                  sesam_vitale : "Lecteur de carte Sesam Vitale",
        //                  civilite : "Femme",
        //                  adresse : "93 BOULEVARD DE LA REPUBLIQUE  92100 BOULOGNE BILLANCOURT",
        //                  telephone : "07.61.21.64.18",
        //                  nom_dep : "HAUTS-DE-SEINE",
        //                  libelle_profession : "Médecin généraliste",
        //                  code_insee : "92012",
        //                  convention : "Secteur 1 ou conventionné",
        //                  nom_com : "Boulogne-Billancourt",
        //                  ccam_phase : "DEQP0030",
        //                  code_profession : 45,
        //                  coordonnees : {
        //                     0 : 48.83345,
        //                     1 : 2.243953
        //                  },
        //                  actes : "Électrocardiographie sur au moins 12 dérivations",
        //             },
        //             geometry : {
        //                 type : "Point",
        //                 coordinates : {
        //                     0 : 2.243953,
        //                     1 : 48.83345,
        //                 },
        //             },
        //             record_timestamp : "2019-04-04T12:51:27.129000+00:00",
        //         },
        //     },


        // ],
        
        
        ApiHref : [],
        selectedApiHref : "selection par défaut",
        villeSelect:"aucune selection",

    }
    
    componentDidMount() {
        // this.onTermSubmit("marecherche");
        this.onTermSubmit('');
    }
    
    onTermSubmit = async term => {
        const reponse = await ApiHref.get('/search', {
            params: {
                q : this.props.codepostal,
                rows : 90, 
                // facet : "HAUTS-DE-SEINE",
                // facet : "nom_dep",
        
                //  facet: "exercice_particulier"
                //  facet: "nature_exercice"
                //  facet: "convention"
                //  facet: "sesam_vitale"
                //  facet: "types_actes"
                //  facet: "codes_ccam"
                //  facet: "nom_epci"
                //  facet: "nom_dep"
                //  facet: "nom_reg"
                //  facet: "nom_com"
                //  facet: "libelle_profession;"
            }
        })

        console.log(reponse); 
        console.log(reponse.data.records);
        console.log(reponse.data.records[0].fields);
        console.log(reponse.data.records[0].fields.adresse);
        //console.log(reponse); pour voir les infos récupérées par l'api youtube
        //: on voit que reponse est un tableau

        this.setState({
            ApiHref : reponse.data.records, //tableau de tous les records
            selectedApiHref : reponse.data.records[0].fields //un tableau spécifique
        })
    }
    
    onApiHrefSelect = (apiHref) => {
        // this.state.selectedVideo
        console.log('depuis notre app', apiHref);
        this.setState({
            selectedApiHref : apiHref
        })
    }


    

    

    render() {
        return (
        <div className="uni-services">
            {/* <button onClick={this.onTermSubmit}>Tableau de l'API</button> */}
            {/* <div>{this.state.selectedApiHref.adresse}</div> */}
            
        <div>{this.props.codepostal}</div>

            
        
            {this.state.ApiHref.map(item => (


                <ServiceItem 
                    codepostal={this.props.codepostal == item.fields.code_postal ? this.props.codepostal : ""}
                    key={item.recordid} 
                    item={item}
                
                />)
            )}


        </div>
        )
    }
    
}

export default Service;