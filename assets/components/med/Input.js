import React from 'react';
import OptionRegion from './OptionRegion.js';
import ApiHref from './ApiHref.js';
import ServiceItem from './ServiceItem1.js';
import Header from './Header.js';
import SearchBar from './SearchBar.js';
import { isEmptyObject } from 'jquery';
// import ExempleSelect from './ExempleSelect.js';
// import InputRegion from './InputRegion.js';
// import axios from 'axios';
// import { Hint } from 'react-autocomplete-hint';





class Input extends React.Component {
    state = {
        nextId:2,
        Regions : [
            {
                id : 1,
                code : '',
                name : '',
                slug : '',
            },
        ],
        Dpts : [
            {
                id : "",
                code : '',
                name : '',
                regionCode : '',
                slug : '',
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
        Specialites : [
            {
                id:"",
                libelleProfession:'',
                codeProfession:'',
            }
        ],
        ApiHref:[],
        value:"", 
        nomRegion:"",
        nomDpt:"",
        nomVille:"",
        regionSelect:"aucune selection",
        departementSelect:"aucune selection",
        villeSelect:"aucune selection",
        specialiteSelect:"",
        specialiteSelectCode:"aucune selection",
        visibility:"block", 
        term:null,

    }

    

    componentDidMount() {
        fetch('/specialite')
        .then(res => res.json())
        .then(Specialites => {
            this.setState({
                Specialites: Specialites.map(specialite => ({
                id: specialite.id,
                libelleProfession:specialite.libelleProfession,
                codeProfession:specialite.codeProfession,
                })),
                nextId: Math.max(...Specialites.map(specialite => specialite.id)) + 1
                
        })
        })

        fetch('/regions')
        .then(res => res.json())
        .then(Regions => {
            this.setState({
                Regions: Regions.map(region => ({
                id: region.id,
                code:region.code,
                slug:region.slug,
                name:region.name,
                })),
                nextId: Math.max(...Regions.map(region => region.id)) + 1
                
        })
        })



        fetch('/departements/' + this.state.regionSelect)
        .then(res => res.json())
        .then(Dpts => {
            this.setState({
                Dpts: Dpts.map(departement => ({
                id: departement.id,
                code:departement.code,
                slug:departement.slug,
                name:departement.name,
                regionCode:departement.regionCode,
                })),
                nextId: Math.max(...Dpts.map(departement => departement.id)) + 1 
            })
        })

    }

    

    
    componentWillReceiveProps() {
        this.setState({
            value: ""
        });
    }

    specialTerm = (mysearch) => {
        this.setState({
            term: mysearch
        });
        console.log("resultat de term :" + this.state.term)
    }
    
    
    onChangeSpec = (e) => {
    
        var select = e.target;
        var index = select.options[select.selectedIndex].getAttribute("value");
        console.log(index);
        
        if (e != undefined) {
    
            var dataObjetSpecialite = this.state.Specialites;
            
            dataObjetSpecialite.map(specialite => {
            
                if (specialite.codeProfession == index) {
                    this.setState({
                        specialiteSelectCode: specialite.codeProfession,
                        specialiteSelect: specialite.libelleProfession,
                    });
                    
                    console.log("pour spécialite " + this.state.nomRegion == "" ? null : this.state.nomRegion, this.state.nomDpt == "" ? null:this.state.nomDpt, this.state.villeSelect == "aucune selection" ? null : this.state.villeSelect, specialite.codeProfession);

                    this.onTermSubmit(this.state.term, this.state.nomRegion == "" ? null : this.state.nomRegion.toUpperCase(), this.state.nomDpt == "" ? null:this.state.nomDpt.toUpperCase(), this.state.villeSelect == "aucune selection" ? null : this.state.villeSelect, specialite.codeProfession);

                }    
            })
        }
    
        else {
            this.setState({
                villeSelect: "aucune selection"
            });
        }
    }

    onChangeRegion = (e) => {
    
        var select = e.target;
        var index = select.options[select.selectedIndex].getAttribute("value");
        
        if (e != undefined) {
    
            var dataObjetRegion = this.state.Regions;
            
            dataObjetRegion.map(region => {
            
                if (region.code == index) {
                    this.setState({
                        regionSelect: region.code,
                        nomRegion:region.slug, 
                        nomDpt:"",
                        villeSelect :"aucune selection",
                    });
                    
                    this.onTermSubmit(this.state.term,region.slug.toUpperCase(), null, null, this.state.specialiteSelectCode == "aucune selection" ? null : this.state.specialiteSelectCode);
                    console.log("pour région " + region.slug.toUpperCase(), this.state.nomDpt == "" ? null:this.state.nomDpt.toUpperCase(), this.state.villeSelect == "aucune selection" ? null : this.state.villeSelect, this.state.specialiteSelectCode == "aucune selection" ? null : this.state.specialiteSelectCode);

                    
                    fetch('/villes/' + "aucune selection")
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
                            nextId: Math.max(...Dpts.map(departement => departement.id)) + 1,     
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
                        departementSelect: departement.code, 
                        nomDpt:departement.name,
                        villeSelect :"aucune selection",
                    });
                    console.log(departement.code);


                    this.onTermSubmit(this.state.term,this.state.nomRegion == "" ? null : this.state.nomRegion.toUpperCase(), departement.name.toUpperCase(), null, this.state.specialiteSelectCode == "aucune selection" ? null : this.state.specialiteSelectCode);


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
                        villeSelect: ville.codePostal,
                        nomVille:ville.ville,
                        
                    });
                    
            
                    this.onTermSubmit(this.state.term,this.state.nomRegion == "" ? null : this.state.nomRegion.toUpperCase(), this.state.nomDpt == "" ? null:this.state.nomDpt.toUpperCase(), ville.codePostal, this.state.specialiteSelectCode == "aucune selection" ? null : this.state.specialiteSelectCode);
                    console.log(this.state.ApiHref.length + this.state.villeSelect + this.state.nomDpt + this.state.nomRegion);
                    console.log(this.state.nomVille.substr(0,2));
                    
                }    
                
            })
            
        }
    
        else {
            this.setState({
                villeSelect: "aucune selection"
            });
        }
    }




    onTermSubmit = async (term,reg,dpt,cp,profession) => {
        const reponse = await ApiHref
        
        .get('/search', {
            params: {
                "q" : term,
                "refine.code_profession" : profession,
                "refine.nom_reg" : reg,
                "refine.nom_dep" : dpt,
                "refine.code_postal" : cp,
                "rows" : 9999, 
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
        
        .catch(()=>{
            this.setState({
                hasError:true,
            })

        })


        this.setState({
            ApiHref : reponse.data.records,
        })
        
        console.log("quantite de response:" + reponse.data.records.length + "erreur quantité :" + this.state.hasError);
        console.log("response :"); 
        console.log(reponse); 
        
        console.log("response data records :");
        console.log(reponse.data.records);
        
        console.log("erreur :");
        
        
        console.log(reponse.data.records.length == 0 ? "vrai" : "faux");       
      
        console.log("reponse.data.records[0].fields :");


        
        //console.log(reponse); pour voir les infos récupérées par l'api youtube
        //: on voit que reponse est un tableau


    }

    
    render() {



        return (





            <div>

                <Header/>

                <div className="shadow-lg p-3 bg-white rounded mt-3 mx-auto styleForm">
                    <div className="row w-75 mx-auto">
                        
                            <div className="mx-auto form-group cadre text-center text-light h4 col-sm-5">
                                <div>Choisissez une spécialité</div>
                                <div>-</div>
                                <select autoComplete="on" onChange={this.onChangeSpec.bind(this)} id="inputSpecialite" name="specialite" className="mb-4 form-control inputstyle text-center">
                                    <option className="text-center form-group h4 text-info"> Choisissez une spécialité</option>
                                    {this.state.Specialites.map(specialite => (<option className="text-center" key={specialite.id} value={specialite.codeProfession}>{specialite.libelleProfession}</option>))}
                                </select>
                            </div> 
                            <div className="mx-auto form-group cadre text-center text-light h4 col-sm-5">
                                <div>Rechercher par nom de médecin</div>
                                <div>-</div>
                                <SearchBar onFormSubmit={this.onTermSubmit} specialTermProps={this.specialTerm}/> 
                            </div> 
                        
                            <div className="row col-sm-12 mx-auto">

                                <div className="mx-auto form-group cadre text-center text-warning h4 col-sm-4">
                                <div>Choisissez une région</div>
                                <div>-</div>
                                <select onChange={this.onChangeRegion.bind(this)} id="inputRegion" name="region" className="form-control inputstyle text-center mt-4 mb-2">
                                <option className="text-center form-group h4 text-danger"> Choisissez une région</option>
                                        {this.state.Regions.map(region => (<option key={region.id} className="text-center" value={region.code}>{region.name}</option>))}
                                    </select>
                                </div>
            
                                <div className="mx-auto form-group text-center h4 cadre text-danger col-sm-4">
                                    <div>{this.state.nomRegion != "" ? "Choisissez un département de la région " + this.state.nomRegion.toUpperCase() : (<div>Choisissez un département<div>-</div></div>) }</div>
                                        <select className="btnDpt text-center form-group h4 text-danger w-100" onChange={this.onChangeDpt.bind(this)} id="inputDpt" name="departement" className="btnDpt form-control inputstyle mt-4 mb-2">
            
                                        <option className="btnDpt text-center form-group h4 text-danger">Choisissez un département</option>
                                        
                                        {this.state.Dpts.map(departement => (<option className="text-center" key={departement.id} className="btnDpt" value={departement.code}>{departement.name}</option>))}
                                        </select>
                                </div>
                            
                                <div id="inputvillegp" className="mx-auto form-group text-center cadre h4 text-danger col-sm-4" style={{display:"block"}}>
                                    <div className="text-dark">{this.state.nomDpt != "" ? "Choisissez une VILLE du département " + this.state.nomDpt : (<div>Choisissez une ville<div>-</div></div>) }</div>

                                    <select style={{display:this.state.visibility}} autoComplete="on" onChange={this.onChangeVille.bind(this)} id="inputVille" name="ville" className="btnVille form-control inputstyle text-center mt-4 mb-2">
                                    <option className="btnVille text-center form-group h4 text-success">Choisissez une ville</option>
                                            {this.state.Villes.map(ville => (<option key={ville.id} className="btnVille text-center" value={ville.codePostal}>{ville.ville} {ville.codePostal}</option>))}
                                    </select>
                                </div> 

                            </div>

                            <div className="text-center h1 mt-5 mx-auto bord"> 
                                {this.state.ApiHref.length > 1 && this.state.villeSelect == "aucune selection" && this.state.nomDpt == "" && this.state.term == null && this.state.nomRegion == "" ? (<div>{this.state.ApiHref.length} <div className="h4">médecins exercent la profession de</div> {this.state.specialiteSelect.toLowerCase()} <div className="h4 text-danger">en France.</div> </div>) : ""} 
                                {this.state.ApiHref.length > 1 && this.state.villeSelect == "aucune selection" && this.state.nomDpt == "" && this.state.term == null && this.state.nomRegion != "" ? (<div>{this.state.ApiHref.length} <div className="h4">médecins exercent la profession de</div> {this.state.specialiteSelect.toLowerCase()} <div className="h4 text-danger">dans la région {this.state.nomRegion.toUpperCase()}</div></div>) : ""}
                                {this.state.ApiHref.length > 1 && this.state.villeSelect == "aucune selection" && this.state.nomDpt != "" && this.state.term == null && this.state.nomRegion != "" ? (<div>{this.state.ApiHref.length} <div className="h4">médecins exercent la profession de</div> {this.state.specialiteSelect.toLowerCase()} <div className="h4 text-danger">dans le département {this.state.nomDpt}</div></div>) : ""}
                                {this.state.ApiHref.length > 1 && this.state.villeSelect != "aucune selection" && this.state.nomDpt != "" && this.state.term == null && this.state.nomRegion != "" ? (<div>{this.state.ApiHref.length} <div className="h4">médecins exercent la profession de</div> {this.state.specialiteSelect.toLowerCase()} <div className="h4 text-danger">dans la ville de {this.state.nomVille}</div></div>) : ""}

                                {this.state.ApiHref.length <=1 && this.state.villeSelect == "aucune selection" && this.state.nomDpt == "" && this.state.term == null && this.state.nomRegion != "" ? (<div>{this.state.ApiHref.length} <div className="h4">médecin exerce la profession de</div> {this.state.specialiteSelect.toLowerCase()} <div className="h4 text-danger">dans la région {this.state.nomRegion.toUpperCase()}</div></div>) : ""}
                                {this.state.ApiHref.length <=1 && this.state.villeSelect == "aucune selection" && this.state.nomDpt != "" && this.state.term == null && this.state.nomRegion != "" ? (<div>{this.state.ApiHref.length} <div className="h4">médecin exerce la profession de</div> {this.state.specialiteSelect.toLowerCase()} <div className="h4 text-danger">dans le département {this.state.nomDpt}</div></div>) : ""}
                                {this.state.ApiHref.length <=1 && this.state.villeSelect != "aucune selection" && this.state.nomDpt != "" && this.state.term == null && this.state.nomRegion != "" ? (<div>{this.state.ApiHref.length} <div className="h4">médecin exerce la profession de</div> {this.state.specialiteSelect.toLowerCase()} <div className="h4 text-danger">dans la ville de {this.state.nomVille}</div></div>) : ""}

                            </div> 

                            {this.state.nomRegion != "" && this.state.nomDpt == "" && this.state.ApiHref.length > 90 ? 
                            <div className="form-group h4 text-danger col-sm-12 mx-auto text-center bord">
                                Merci d'affiner votre recherche en précisant un département
                            </div> : ""}

                            {this.state.nomDpt != "" && this.state.ApiHref.length >= 90 ? 
                            <div className="form-group h4 text-danger col-sm-12 mx-auto text-center bord">
                                Merci d'affiner votre recherche en précisant la ville
                            </div> : ""}


                    </div>
                </div>

                <div className="uni-services mx-auto">
                    {/* Affichage par Région */}
                    <div className="uni-our-services-2 uni-background-4">
                        <div className="container">
                            {this.state.nomRegion != "" && this.state.nomDpt == "" && this.state.ApiHref.length != 0 && this.state.ApiHref.length < 90 ? this.state.ApiHref.map(item => (<ServiceItem key={item.recordid} item={item}/>)) : ""}


                            
                            
                            {/* Affichage par Departement */}

                        
                            {this.state.nomDpt != "" && this.state.ApiHref.length <= 90 && this.state.ApiHref.length != 0 ? this.state.ApiHref.map(item => (<ServiceItem key={item.recordid} item={item}/>)) : ""}
                            

                        </div>
                    </div>
                </div>

            </div>    
        );
    }
}

export default Input;



