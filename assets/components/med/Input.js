import React from 'react';
import OptionRegion from './OptionRegion.js';
import ApiHref from './ApiHref.js';
import ServiceItem from './ServiceItem.js';




class Input extends React.Component {
    state = {
        nextId:2,
        Regions : [
            {
                id : 1,
                code : '',
                name : '',
            },
        ],
        Dpts : [
            {
                id : "",
                code : '',
                name : '',
                regionCode : '',
            },
        ],
        Villes : [
            {
                id : "",
                ville : '',
                codePostal : '',
                departmentCode : '',
            },
        ],
        ApiHref:[],
        value:"", 
        regionSelect:"aucune selection",
        departementSelect:"aucune selection",
        villeSelect:"aucune selection",

    }

    componentDidMount() {
        fetch('/regions')
        .then(res => res.json())
        .then(Regions => {
            this.setState({
                Regions: Regions.map(region => ({
                id: region.id,
                code:region.code,
                name:region.name,
                })),
                nextId: Math.max(...Regions.map(region => region.id)) + 1
                
        })
        })
    }
    
    componentWillReceiveProps() {
        this.setState({
            value: ""
        });
    }

    onChangeRegion = (e) => {
    
        var select = e.target;
        var index = select.options[select.selectedIndex].getAttribute("value");
        
        if (e != undefined) {
    
            var dataObjetRegion = this.state.Regions;
            
            dataObjetRegion.map(region => {
            
                if (region.code == index) {
                    this.setState({
                        regionSelect: region.code
                    });
                    fetch('/departements/' + region.code)
                    .then(res => res.json())
                    .then(Dpts => {
                        this.setState({
                            Dpts: Dpts.map(departement => ({
                            id: departement.id,
                            code:departement.code,
                            name:departement.name,
                            regionCode:departement.regionCode,
                            })),
                            nextId: Math.max(...Dpts.map(departement => departement.id)) + 1 
                    })
                    })
                }    
            })
        }
    
        else {
            this.setState({
                regionSelect: "aucune selection"
            });
        }
    }


    onChangeDpt = (e) => {
    
        var select = e.target;
        var index = select.options[select.selectedIndex].getAttribute("value");
        
        if (e != undefined) {
    
            var dataObjetDpt = this.state.Dpts;
            
            dataObjetDpt.map(departement => {
            
                if (departement.code == index) {
                    this.setState({
                        departementSelect: departement.code
                    });
                    console.log(departement.code);

                    fetch('/villes/' + departement.code)
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
            })
        }
    
        else {
            this.setState({
                departementSelect: "aucune selection"
            });
        }
    }


    onChangeVille = (e) => {
    
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

                    this.onTermSubmit(ville.codePostal);
                }    
            })
        }
    
        else {
            this.setState({
                villeSelect: "aucune selection"
            });
        }
    }

    onTermSubmit = async term => {
        const reponse = await ApiHref.get('/search', {
            params: {
                q : term,
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
            <div className="row w-75 mx-auto">
                
                    <div className="form-group text-warning h4 col-sm-12 mx-auto ">
                      <label htmlFor="inputRegion">Choisissez une région</label>
                      <select onChange={this.onChangeRegion.bind(this)} value={this.state.value} id="inputRegion" name="region" className="form-control">
                        <option value="initial">Choisissez une région...</option>
                        {this.state.Regions.map(region => (<OptionRegion key={region.id} region={region}/>))}
                      </select>
                    </div>
                


                    <div className="form-group h4 text-danger col-sm-12 mx-auto">
                        <label htmlFor="inputDpt">Choisissez un département</label>
                            <select onChange={this.onChangeDpt.bind(this)} id="inputDpt" name="departement" className="btnDpt form-control">
                            {this.state.Dpts.map(departement => (<option key={departement.id} className="btnDpt" value={departement.code}>{departement.name}</option>))}
                            </select>
                    </div> 

                    <div className="form-group h4 text-danger col-sm-12 mx-auto">
                        <label className="text-success mt-4" htmlFor="inputVille">Choisissez une ville</label>
                        <select onChange={this.onChangeVille.bind(this)} id="inputVille" name="ville" className="btnVille form-control">
                            
                            {this.state.Villes.map(ville => (<option key={ville.id} className="btnVille" value={ville.codePostal}>{ville.ville}</option>))}
                        </select>
                    </div> 

                    <div className="uni-services">

                        <div>{this.props.codepostal}</div>

                        {this.state.ApiHref.map(item => (
                            <ServiceItem 
                                codepostal={this.props.codepostal == item.fields.code_postal ? this.props.codepostal : ""}
                                key={item.recordid} 
                                item={item}
                            
                            />)
                        )}

                    </div>
                
                
            </div>
        );
    }
}

export default Input;

