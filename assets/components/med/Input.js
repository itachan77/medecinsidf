import React from 'react';
import ApiHref from './ApiHref.js';
import ServiceItem from './ServiceItem1.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Load from './Load.js';
import SearchBar from './SearchBar.js';

// import { isEmptyObject } from 'jquery';
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
        isFetching: true,
        LenghtFetching : true,
        SpecialiteFetching : true,
        RegionFetching : true,
        DepartementFetching : true,
        VilleFetching : true,
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
        termVille:null,
        termNom:null,
        termSpec:null,
        medecinNom:[],
        toggleSpec:false,
        searchSaisie:false,

    }



    componentDidMount() {

        fetch('/villes/' + "toutesVilles")
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


        fetch('/specialite')
        .then(res => res.json())
        .then(Specialites => {
            this.setState({
                Specialites: Specialites.map(specialite => ({
                id: specialite.id,
                libelleProfession:specialite.libelleProfession,
                codeProfession:specialite.codeProfession,
                })),
                isFetching: false,
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

    initialize(){

        console.log("marche ?");
        this.setState({
            termNom: null,
            termVille:null,
            nomRegion:"",
            nomDpt:"",
            villeSelect:"aucune selection",
            specialiteSelectCode:"aucune selection",
            ApiHref : [],
        });



    }

    
    componentWillReceiveProps() {
        this.setState({
            value: ""
        });
    }

    specialTermNom = (mysearchNom) => {
        this.setState({
            termNom: mysearchNom
        });
        console.log("resultat de termNom :" + this.state.termNom)
    }
    
    specialTermSpec = (mysearchSpec) => {
        this.setState({
            termSpec: mysearchSpec
        });
        console.log("resultat de termNom :" + this.state.termNom)
    }
    
    specialTermVille = (mysearchVille) => {
        this.setState({
            termVille: mysearchVille
        });
        console.log("resultat de termVille state :" + this.state.termVille + "resultat de termVille pur :" + mysearchVille)
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
                        SpecialiteFetching : false,
                    });
                    
                    console.log("pour spécialite " + this.state.nomRegion == "" ? null : this.state.nomRegion, this.state.nomDpt == "" ? null:this.state.nomDpt, this.state.villeSelect == "aucune selection" ? null : this.state.villeSelect, specialite.codeProfession);

                    this.onTermSubmit(this.state.nomRegion == "" ? null : this.state.nomRegion.toUpperCase(), this.state.nomDpt == "" ? null:this.state.nomDpt.toUpperCase(), this.state.villeSelect == "aucune selection" ? null : this.state.villeSelect, specialite.codeProfession);

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
                        RegionFetching : false,
                    });
                    
                    this.onTermSubmit(region.slug.toUpperCase(), null, null, this.state.specialiteSelectCode == "aucune selection" ? null : this.state.specialiteSelectCode);
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
                        DepartementFetching : false,
                    });
                    console.log(departement.code);


                    this.onTermSubmit(this.state.nomRegion == "" ? null : this.state.nomRegion.toUpperCase(), departement.name.toUpperCase(), null, this.state.specialiteSelectCode == "aucune selection" ? null : this.state.specialiteSelectCode);


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
            
                if (ville.ville + " " +ville.codePostal == index) { //la valeur récupérée est la ville et le code postal au format "Drancy 93700"
                    this.setState({
                        villeSelect: ville.codePostal,
                        nomVille:ville.ville,
                        VilleFetching : false,
                    });
                    
            
                    this.onTermSubmit(this.state.nomRegion == "" ? null : this.state.nomRegion.toUpperCase(), this.state.nomDpt == "" ? null:this.state.nomDpt.toUpperCase(), index, this.state.specialiteSelectCode == "aucune selection" ? null : this.state.specialiteSelectCode);
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




    onListeMed = async (termSpec, termNom, termVille) => {
    
        console.log("dans Input.js fonction onlisteMed : " + termSpec +" - "+ termNom +" - "+ termVille);
        const reponseSaisie = await ApiHref
        
        .get('/search', {
            params: {
                "q" : termNom,
                "rows" : 10000, 
                "refine.nom_com" : termVille,
                "refine.code_profession" : termSpec,
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



        this.setState({
            medecinNom : reponseSaisie.data.records.sort((a, b)=> (a.fields.nom.split(" ")[1] > b.fields.nom.split(" ")[1]) ? 1 : -1),
            searchSaisie : false,
        })
     
        console.log("reponseSaisie :"); 
        console.log("reponseSaisie.data.records :");
        console.log(reponseSaisie.data.records);



    }


    onTermSubmit = async (reg,dpt,cp,profession) => {
        const reponse = await ApiHref
        
        .get('/search', {
            params: {
                "q" : cp,
                "refine.code_profession" : profession,
                "refine.nom_reg" : reg,
                "refine.nom_dep" : dpt,
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
            ApiHref : reponse.data.records.sort((a, b)=> (a.fields.nom.split(" ")[1] > b.fields.nom.split(" ")[1]) ? 1 : -1),
            LenghtFetching : false,
        })
        

        console.log("response :"); 
        console.log(reponse); 
        
        console.log("response data records :");
        console.log(reponse.data.records);

        console.log("AFFICHAGE HAUT");
        console.log(" this.state.ApiHref.length : " + this.state.ApiHref.length + "this.state.villeSelect : " + this.state.villeSelect + "this.state.nomDpt : " + this.state.nomDpt + "this.state.termNom : " + this.state.termNom + "this.state.nomRegion : " + this.state.nomRegion); 

        
        //console.log(reponse); pour voir les infos récupérées par l'api youtube
        //: on voit que reponse est un tableau


    }
   
    onSpecialiteClick = () => {
        
        console.log("onSpecialiteClick effectué");
        
        this.setState({
            toggleSpec:!this.state.toggleSpec,
        })
    }
    
    // Mise en majuscule de la première lettre

    
    
    render() {



        // const brands = ['cca', 'ccb', 'ccc', 'bba', 'bbb', 'bbc', 'aaa', 'aab', 'aac'];
        
        // const groups = brands.reduce((groups, brand) => {
        //     const letterKey = brand.name.charAt(0).toLowerCase();
        //     (groups[letterKey] || (groups[letterKey] = [])).push(brand);
        //     return groups;
        //   }, {});
        //   Mappez les entrées de [clé, marques] à votre liste non ordonnée
          
        //   Object.entries(groups).sort().map(([letterKey, brands]) => (
        //     <div key={letterKey}>
        //       <h4>{letterKey}</h4>
        //       <ul>
        //         { brands.map(brand => <li key={brand}>{brand}</li>) }
        //       </ul>
        //   </div> ));
        
        // Object.entries(groups).sort().map(([letterKey, brands]) => {
        //     console.log('KEY', letterKey);
        //     brands.map(brand => console.log('\tbrand', brand));
        //   });
          
        //     KEY a
        // brand aaa
        // brand aab
        // brand aac
        //     KEY b
        // brand bba
        // brand bbb

        return (

            <div>
            
                {this.state.isFetching == true ? <Load/> : ""}
                
                
                <Header/>

                <div className="shadow-lg p-3 bg-white rounded mt-3 mx-auto styleForm">

                            <div className="uni-shortcode-tab-1 mx-auto">
                                <div className="tabbable-panel">
                                    <div className="tabbable-line mx-auto text-center">
                                        <ul className="nav nav-tabs titleSearch">
                                            <li className="active text-center mx-auto">
                                                <a className="text-center mx-auto" href="#tab_1" data-toggle="tab" style={{pointer:"cursor"}} aria-expanded="false" onClick={()=>this.initialize()}>
                                                    RECHERCHER PAR TERRITOIRE </a>
                                            </li>
                                            <li className="text-center mx-auto">
                                                <a className="text-center mx-auto" href="#tab_2" data-toggle="tab" aria-expanded="true" onClick={()=>this.initialize()}>
                                                    RECHERCHER PAR SAISIE </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">

                                            <div className="tab-pane active" id="tab_1">
                                                <div className="row w-75 mx-auto">
                        
                                                    <div className="mx-auto form-group cadre text-center text-light h4 col-sm-6">
                                                        <div>Choisissez une spécialité</div>
                                                        <div>-</div>
                                                        <select autoComplete="on" onChange={this.onChangeSpec.bind(this)} id="inputSpecialite" name="specialite" className="mb-4 form-control inputstyle text-center">
                                                            <option className="text-center form-group h4 text-info"> Choisissez une spécialité</option>
                                                            {this.state.Specialites.map(specialite => (<option className="text-center" key={specialite.id} value={specialite.codeProfession}>{specialite.libelleProfession}</option>))}
                                                        </select>
                                                    </div> 

                                                
                                                    <div className="row col-sm-12 mx-auto container-fluid">

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
                                                                    {this.state.Villes.map(ville => (<option key={ville.id} className="btnVille text-center" value={ville.ville + " " + ville.codePostal}>{ville.ville} {ville.codePostal}</option>))}
                                                            </select>
                                                        </div> 

                                                    </div>

                                                    <div className="row text-center h1 mt-5 mx-auto bord"> 

                                                            {!this.state.SpecialiteFetching | !this.state.RegionFetching | !this.state.DepartementFetching | !this.state.VilleFetching && this.state.LenghtFetching ? (<div className="spinner-border text-center mx-auto text-primary" role="status"><span className="sr-only">Loading...</span></div>) : ""}

                                                            {this.state.nomRegion == "" && this.state.nomDpt == "" && this.state.ApiHref.length > 90 ? 
                                                            <div className="form-group h4 text-danger col-sm-7 mx-auto text-center bord">
                                                                Merci d'affiner votre recherche en précisant une région ou un département
                                                            </div> : ""}

                                                            {this.state.nomRegion != "" && this.state.nomDpt == "" && this.state.ApiHref.length > 90 ? 
                                                            <div className="form-group h4 text-danger col-sm-7 mx-auto text-center bord">
                                                                Merci d'affiner votre recherche en précisant un département
                                                            </div> : ""}

                                                            {this.state.nomDpt != "" && this.state.ApiHref.length >= 90 ? 
                                                            <div className="form-group h4 text-danger col-sm-7 mx-auto text-center bord">
                                                                Merci d'affiner votre recherche en précisant la ville
                                                            </div> : ""}
                                                            {/* <div className="spinner-border text-primary" role="status"><span className="sr-only">Loading...</span></div> */}
                                                            {/* {this.state.ApiHref.length} */}
                                                            
                                                        <div className="col-sm-12">
                                                            {this.state.ApiHref.length > 1 && this.state.ApiHref.length != 9999 && this.state.villeSelect == "aucune selection" && this.state.nomDpt == "" && this.state.termNom == null && this.state.nomRegion == "" ? 
                                                            (<div> {this.state.ApiHref.length} <div className="h4">résultats trouvés pour la profession de</div> {this.state.specialiteSelect.toLowerCase()} <div className="h4 text-danger">en France.</div> </div>) : ""} 
                                                            
                                                            
                                                            
                                                            {this.state.ApiHref.length == 9999 && this.state.villeSelect == "aucune selection" && this.state.nomDpt == "" && this.state.termNom == null && this.state.nomRegion == "" ? (<div>{"Plus de " + this.state.ApiHref.length} <div className="h4">résultats trouvés pour la profession de</div> {this.state.specialiteSelect.toLowerCase()} <div className="h4 text-danger">en France.</div> </div>) : ""} 
                                                            {this.state.ApiHref.length > 1 && this.state.villeSelect == "aucune selection" && this.state.nomDpt == "" && this.state.termNom == null && this.state.nomRegion != "" ? (<div>{this.state.ApiHref.length} <div className="h4">résultats trouvés pour la profession de</div> {this.state.specialiteSelect.toLowerCase()} <div className="h4 text-danger">dans la région {this.state.nomRegion.toUpperCase()}</div></div>) : ""}
                                                            {this.state.ApiHref.length > 1 && this.state.villeSelect == "aucune selection" && this.state.nomDpt != "" && this.state.termNom == null && this.state.nomRegion != "" ? (<div>{this.state.ApiHref.length} <div className="h4">résultats trouvés pour la profession de</div> {this.state.specialiteSelect.toLowerCase()} <div className="h4 text-danger">dans le département {this.state.nomDpt}</div></div>) : ""}
                                                            {this.state.ApiHref.length > 1 && this.state.villeSelect != "aucune selection" && this.state.nomDpt != "" && this.state.termNom == null && this.state.nomRegion != "" ? (<div>{this.state.ApiHref.length} <div className="h4">résultats trouvés pour la profession de</div> {this.state.specialiteSelect.toLowerCase()} <div className="h4 text-danger">dans la ville de {this.state.nomVille} ({this.state.villeSelect})</div></div>) : ""}

                                                            {this.state.ApiHref.length <=1 && this.state.villeSelect == "aucune selection" && this.state.nomDpt == "" && this.state.termNom == null && this.state.nomRegion != "" ? (<div>{this.state.ApiHref.length} <div className="h4">résultat trouvé pour la profession de</div> {this.state.specialiteSelect.toLowerCase()} <div className="h4 text-danger">dans la région {this.state.nomRegion.toUpperCase()}</div></div>) : ""}
                                                            {this.state.ApiHref.length <=1 && this.state.villeSelect == "aucune selection" && this.state.nomDpt != "" && this.state.termNom == null && this.state.nomRegion != "" ? (<div>{this.state.ApiHref.length} <div className="h4">résultat trouvé pour la profession de</div> {this.state.specialiteSelect.toLowerCase()} <div className="h4 text-danger">dans le département {this.state.nomDpt}</div></div>) : ""}
                                                            {this.state.ApiHref.length <=1 && this.state.villeSelect != "aucune selection" && this.state.nomDpt != "" && this.state.termNom == null && this.state.nomRegion != "" ? (<div>{this.state.ApiHref.length} <div className="h4">résultat trouvé pour la profession de</div> {this.state.specialiteSelect.toLowerCase()} <div className="h4 text-danger">dans la ville de {this.state.nomVille} ({this.state.villeSelect})</div></div>) : ""}
                                                            
                                                            

                                                        </div>
                                                    </div> 


                                                </div>
                                            </div>

                                            <div className="tab-pane" id="tab_2">

                                                    <SearchBar specialTermPropsSpec={this.specialTermSpec} onFormSubmit={this.onListeMed} specialTermPropsNom={this.specialTermNom} specialTermPropsVille={this.specialTermVille} apiVilles={this.state.Villes}/> 
                                                    
                                                    <div className="row text-center h1 mt-5 mx-auto bord"> 
                                                        <div className="col-sm-12">
                                                            {/* Affichage résultat par saisie */}
                                                            {this.state.medecinNom.length == 0 && this.state.searchSaisie ? 
                                                                (<div>{this.state.medecinNom.length} <div className="h4">Aucun résultat trouvé</div></div>) : 
                                                                this.state.medecinNom.length == 1 ? (<div>{this.state.medecinNom.length} <div className="h4">résultat trouvé</div></div>) : 
                                                                this.state.medecinNom.length > 1 ? (<div>{this.state.medecinNom.length}<div className="h4">résultats trouvés</div></div>):""
                                                            }
                                                        </div>
                                                    </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                </div>

                <div className="uni-services mx-auto">
                    <div className="uni-our-services-2 uni-background-4">
                        <div className="container mb-5">

                        {/* PAR SELECTION */}
                            {/* Affichage France */}                                                                              
                                                                                                                                                                                            {/* for menuItem in menuItemAll|sort((a, b) => a.orderNumber <=> b.orderNumber)
                                                                                                                                                                                            this.state.ApiHref.sort((a, b)=> (a.fields.nom > b.fields.nom) ? 1 : -1).map
                                                                                                                                                                                            
                                                                                                                                                                                            item.fields.nom.split(" ")[1]
                                                                                                                                                                                            */}
                                                                                                                                                                                            
                             {/* {this.state.ApiHref.length <= 90 && this.state.villeSelect == "aucune selection" && this.state.nomDpt == "" && this.state.termNom == null && this.state.nomRegion == "" ? this.state.ApiHref.sort((a, b)=> (a.fields.nom > b.fields.nom) ? 1 : -1).map(item => (<ServiceItem onSpecialiteClick={this.onSpecialiteClick} toggle={this.state.toggleSpec} key={item.recordid} item={item}/>)) : ""}  */}
                             {/* this.state.ApiHref.sort((a, b)=> (a.fields.nom.split(" ")[1] > b.fields.nom.split(" ")[1]) ? 1 : -1)                              */}
                               
                            {this.state.ApiHref.length <= 90 && this.state.termNom == null && this.state.nomRegion == "" && this.state.nomDpt == "" && this.state.ApiHref.length != 0 ? this.state.ApiHref.map(item => (<ServiceItem onSpecialiteClick={this.onSpecialiteClick} toggle={this.state.toggleSpec} key={item.recordid} item={item}/>)) : ""}
                            {/* Affichage par Région */}
                            {this.state.nomRegion != "" && this.state.nomDpt == "" && this.state.ApiHref.length != 0 && this.state.ApiHref.length < 90 ? this.state.ApiHref.map(item => (<ServiceItem onSpecialiteClick={this.onSpecialiteClick} toggle={this.state.toggleSpec} key={item.recordid} item={item}/>)) : ""}

                            {/* Affichage par Departement */}
                            {this.state.ApiHref.length <= 90 && this.state.nomDpt != "" && this.state.ApiHref.length != 0 ? this.state.ApiHref.map(item => (<ServiceItem onSpecialiteClick={this.onSpecialiteClick} toggle={this.state.toggleSpec} key={item.recordid} item={item}/>)) : ""}

                        {/* PAR SAISIE  */}
                            {this.state.medecinNom.length <= 90 ? this.state.medecinNom.map(item => (<ServiceItem onSpecialiteClick={this.onSpecialiteClick} toggle={this.state.toggleSpec} key={item.recordid} item={item}/>)) : ""}


                        
                        </div>

                            <div id="toTop" style={{display:"flex"}}><div className="btn btn-totop"><a href="#top"><i className="fa fa-angle-double-up" aria-hidden="true"></i></a></div></div>

                        

                    </div>
                    
                    
                <Footer/>
                </div>

            </div>    
        );
    }
}

export default Input;



