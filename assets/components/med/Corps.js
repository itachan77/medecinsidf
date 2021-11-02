import React from 'react';
import ApiHref from './ApiHref.js';
import Miniature from './Miniature.js';
import SearchBar from './SearchBar.js';
import Load from './Load.js';



class Corps extends React.Component {

    state = {
        nextId:2,
        nextIdInitial:2,
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
        DptsInitial : [
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
        VillesInitial : [
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
        nomDptSlug:"",
        nomVille:"",
        regionSelect:"aucune selection",
        departementSelect:"aucune selection",
        villeSelect:"aucune selection",
        specialiteSelect:"",
        specialiteSelectCode:"aucune selection",
        termVille:null,
        termNom:null,
        termSpec:null,
        medecinNom:[],
        toggleSpec:false,
        searchSaisie:false,
        montreRegion:"none",
        montreDpt:"none",
        montreVille:"none",
        captureFiche:[],
        idEnreg:null,
        clignoteVille:true,
        clignoteDpt:true,
        clignoteRegion:true,

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
                VillesInitial: Villes.map(ville => ({
                    id: ville.id,
                    ville:ville.ville,
                    codePostal:ville.codePostal,
                    departmentCode:ville.departmentCode,
                })),
    
                nextId: Math.max(...Villes.map(ville => ville.id)) + 1, 
                nextIdInitial: Math.max(...Villes.map(ville => ville.id)) + 1, 
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
                DptsInitial: Dpts.map(departement => ({
                    id: departement.id,
                    code:departement.code,
                    slug:departement.slug,
                    name:departement.name,
                    regionCode:departement.regionCode,
                })),

                nextId: Math.max(...Dpts.map(departement => departement.id)) + 1,
                nextIdInitial: Math.max(...Dpts.map(departement => departement.id)) + 1, 
            })
        })




    }

    initialize(){

        console.log("marche ?");
        this.setState({
            medecinNom : [],
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
        console.log("Résultat de termNom :" + this.state.termNom)
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
                        captureFiche:[],
                        specialiteSelectCode: specialite.codeProfession,
                        specialiteSelect: specialite.libelleProfession,
                        SpecialiteFetching : false,
                    });
                    
                    console.log("pour spécialite " + this.state.nomRegion == "" ? null : this.state.nomRegion, this.state.nomDptSlug == "" ? null:this.state.nomDptSlug, this.state.villeSelect == "aucune selection" ? null : this.state.villeSelect, specialite.codeProfession);

                    this.onTermSubmit(this.state.nomRegion == "" ? null : this.state.nomRegion.toUpperCase(), this.state.nomDptSlug == "" ? null:this.state.nomDptSlug.toUpperCase(), this.state.villeSelect == "aucune selection" ? null : this.state.villeSelect, specialite.codeProfession);
                
                
                }    
            })
        }
    
        else {
            this.setState({
                villeSelect: "aucune selection"
            });
        }
        
        if(this.state.montreDpt == "none")  {
            this.montre("block", "none", "none");
            this.setState({
                villeSelect: "aucune selection",
                nomDpt:departement.name,
                nomDptSlug:departement.slug,
                
            });
            
        }
        
    }

    onChangeRegion = (e) => {
    
        
        var select = e.target;
        var index = select.options[select.selectedIndex].getAttribute("value");
        
        if (e != undefined) {
    
            var dataObjetRegion = this.state.Regions;
            var dataObjetDpts = this.state.DptsInitial;
            
            dataObjetRegion.map(region => {
            
                if (region.code == index) {
                    this.setState({
                        captureFiche:[],
                        regionSelect: region.code,
                        nomRegion:region.slug, 
                        nomDpt:"",
                        villeSelect :"aucune selection",
                        RegionFetching : false,
                    });
                    
                    this.onTermSubmit(region.slug.toUpperCase(), null, null, this.state.specialiteSelectCode == "aucune selection" ? null : this.state.specialiteSelectCode);
                    
                    console.log("pour région " + region.slug.toUpperCase(), this.state.nomDptSlug == "" ? null:this.state.nomDptSlug.toUpperCase(), this.state.villeSelect == "aucune selection" ? null : this.state.villeSelect, this.state.specialiteSelectCode == "aucune selection" ? null : this.state.specialiteSelectCode);
                    console.log("dans region");
                    console.log("this.state.captureFiche");
                    console.log(this.state.captureFiche);
                    console.log("this.state.ApiHref");
                    console.log(this.state.ApiHref);
                    console.log("dataObjetDpts");
                    console.log(dataObjetDpts);
                    console.log("index");
                    console.log(index);

                    let dptsTab = [];
                    for (let obj in dataObjetDpts) {
                
                        //inputRegion.value = la classe du select et value permettent d'avoir le résultat.
                        //cette ligne if est comme si je disais quand tu arrives par la boucle à 11, ...suite : affiche tous les départements d'ile de france
                        if(dataObjetDpts[obj].regionCode == index ) {
            
                            dptsTab.push(dataObjetDpts[obj]);
            
                        }
                        else console.log("pas dans le tableau")
                    }
                    console.log(dptsTab);
                    
                    this.setState({
                        Dpts: dptsTab.map(departement => ({
                        id: departement.id,
                        code:departement.code,
                        slug:departement.slug,
                        name:departement.name,
                        regionCode:departement.regionCode,
                        })),
                        nextId: Math.max(...dptsTab.map(departement => departement.id)) + 1,     
                    })


                }    
                
                
            })

        }
    
        else {
            this.setState({
                regionSelect: "aucune selection"
            });
        }


        this.montre("block", "block", "none");
    }


    onChangeDpt = (e) => {

        
        var select = e.target;
        var index = select.options[select.selectedIndex].getAttribute("value");
        
        if (e != undefined) {
    
            var dataObjetDpt = this.state.Dpts;
            var dataObjetVille= this.state.VillesInitial;
            
            dataObjetDpt.map(departement => {
            
                if (departement.code == index) {
                    this.setState({
                        captureFiche:[],
                        departementSelect: departement.code, 
                        nomDpt:departement.name,
                        nomDptSlug:departement.slug,
                        villeSelect :"aucune selection",
                        DepartementFetching : false,
                    });
                    console.log("departement code : " + departement.code);
                    console.log("departement nomDpt donné à onTermSubmit : " + departement.name);
                    console.log("departement departement.slug donné à onTermSubmit : " + departement.slug);


                    this.onTermSubmit(this.state.nomRegion == "" ? null : this.state.nomRegion.toUpperCase(), departement.slug.toUpperCase(), null, this.state.specialiteSelectCode == "aucune selection" ? null : this.state.specialiteSelectCode);


                    let villeTab = [];
                    for (let obj in dataObjetVille) {
                
                        //inputRegion.value = la classe du select et value permettent d'avoir le résultat.
                        //cette ligne if est comme si je disais quand tu arrives par la boucle à 11, ...suite : affiche tous les départements d'ile de france
                        if(dataObjetVille[obj].departmentCode == index ) {
            
                            villeTab.push(dataObjetVille[obj]);
            
                        }

                    }
                    console.log("villeTab");
                    console.log(villeTab);
                    
                    this.setState({
                        Villes: villeTab.map(ville => ({
                            id: ville.id,
                            ville:ville.ville,
                            codePostal:ville.codePostal,
                            departmentCode:ville.departmentCode,
                            })),
                            nextId: Math.max(...villeTab.map(ville => ville.id)) + 1     
                    })
                
                }    
            })
            
            
        }
    
        else {
            this.setState({
                departementSelect: "aucune selection"
            });
        }
        
        this.montre("block", "block", "block");
    }


    onChangeVille = (e) => {
        
        var select = e.target;
        var index = select.options[select.selectedIndex].getAttribute("value");
        
        if (e != undefined) {
    
            var dataObjetVille = this.state.Villes;
            
            dataObjetVille.map(ville => {
            
                if (ville.ville + " " +ville.codePostal == index) { //la valeur récupérée est la ville et le code postal au format "Drancy 93700"
                    this.setState({
                        captureFiche:[],
                        villeSelect: ville.codePostal,
                        nomVille:ville.ville,
                        VilleFetching : false,
                    });

                    this.onTermSubmit(this.state.nomRegion == "" ? null : this.state.nomRegion.toUpperCase(), this.state.nomDptSlug == "" ? null:this.state.nomDptSlug.toUpperCase(), index, this.state.specialiteSelectCode == "aucune selection" ? null : this.state.specialiteSelectCode);
                    
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
        });
        
        console.log("response :"); 
        console.log(reponse); 

        
        console.log("response data records :");
        console.log(reponse.data.records);

        console.log("AFFICHAGE HAUT");
        console.log(" this.state.ApiHref.length : " + this.state.ApiHref.length + "this.state.villeSelect : " + this.state.villeSelect + "this.state.nomDpt : " + this.state.nomDpt + "this.state.termNom : " + this.state.termNom + "this.state.nomRegion : " + this.state.nomRegion); 

        console.log("objet response :");
        
        //console.log(reponse); pour voir les infos récupérées par l'api youtube
        //: on voit que reponse est un tableau


    }
   
    onSpecialiteClick = (e, id, recordid, enregid) => {
        

        
        console.log("onSpecialiteClick effectué");
        console.log(e);
        console.log(id);

        
        // this.state.ApiHref.map(
        //     (toto)=>
        //     toto.recordid === id ? console.log("ici") : console.log(toto)
        // )
        
        
        //lenregistrement et lenregistrement2 récupèrent UN enregistrement correspondant à l'id (équivaut à find($id))
            // const lenregistrement = this.state.ApiHref.find((toto)=>toto.recordid === id);  
            // console.log("lenregistrement");
            // console.log(lenregistrement);
        
        
            // const lenregistrement2 = this.state.ApiHref.map((toto)=>toto.recordid === id ? 
            // this.setState({captureFiche:toto})
            // : this.setState({ApiHref:lesenregistrement}));
        
        
        //lesenregistrement reccueille tous les enregistrements SAUF l'id sélectionné SOUS FORME DE TABLEAU (idéal pour modifier une api tableau (this.setState({ApiHref:lesenregistrement,}))
        const lesenregistrement = this.state.ApiHref.filter((toto)=>toto.recordid != id);  
        const lenregistrement = this.state.ApiHref.filter((toto)=>toto.recordid === id);  
        
        
        this.setState({
            idEnreg:recordid,
            captureFiche:lenregistrement,
        })

        // if(this.state.toggleSpec) {
        //     this.setState({
        //         captureFiche:[],
        //     })
        // }


        
        this.setState({
            toggleSpec:!this.state.toggleSpec,
        })
        
        
        console.log("recordid");
        console.log(recordid);
        console.log("enregid");
        console.log(enregid);

    }
    

    
    montre = (block1, block2, block3) => {
    
        this.setState({
            montreRegion:block1,
            montreDpt:block2,
            montreVille:block3,
        })
    }

    fetching = () => {
        this.setState({
            SpecialiteFetching : true,
            RegionFetching : true,
            DepartementFetching : true,
            VilleFetching : true,  
            
        });
    }


    render() {


         //VALIDE : (appel de la fonction dans le return principal : mafonction())
        // function mafonction() {
        //     return "bonjouroui";
        // }
        
        //OU VALIDE : (appel de la fonction dans le return principal : mafonction())
        const mafonction = () => (
            <div>
                {!this.state.SpecialiteFetching | !this.state.RegionFetching | !this.state.DepartementFetching | !this.state.VilleFetching && this.state.LenghtFetching 
                ? (<div className="spinner-border text-center mx-auto text-primary" role="status"><span className="sr-only">Loading...</span></div>) : this.state.ApiHref.length == 9999 ? "Plus de " + this.state.ApiHref.length : this.state.ApiHref.length} 
            
                {this.fetching}
            </div>
            
        );
        

        return (
            <div>
            
            {this.state.isFetching == true ? <Load/> : ""}
            
            <div className="shadow-lg p-3 bg-white rounded mt-3 mx-auto styleForm overflow-auto">

                <div className="uni-shortcode-tab-1 mx-auto">
                    <div className="tabbable-panel">
                    

                        <div className="tabbable-line mx-auto text-center">
                        
                            <ul className="nav nav-tabs titleSearch" style={{position:"sticky", top:0,zIndex:99}}>
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
                                                {this.state.Specialites.map(specialite => (<option className="optionRemove text-center" key={specialite.id} value={specialite.codeProfession}>{specialite.libelleProfession}</option>))}
                                            </select>
                                        </div> 

                                        <div className="row text-center h1 mt-5 mx-auto bord"> 
                
                                                
                
                                                {this.state.nomRegion == "" && this.state.nomDpt == "" && this.state.ApiHref.length > 300 ? 
                                                <div className="form-group h4 text-danger col-sm-7 mx-auto text-center bord">
                                                    Merci d'affiner votre recherche en précisant une région ou un département
                                                </div> : ""}
                
                                                {this.state.nomRegion != "" && this.state.nomDpt == "" && this.state.ApiHref.length > 300 ? 
                                                <div className="form-group h4 text-danger col-sm-7 mx-auto text-center bord">
                                                    Merci d'affiner votre recherche en précisant un département
                                                </div> : ""}
                
                                                {this.state.nomDpt != "" && this.state.ApiHref.length >= 300 ? 
                                                <div className="form-group h4 text-danger col-sm-7 mx-auto text-center bord">
                                                    Merci d'affiner votre recherche en précisant la ville
                                                </div> : ""}
                                                {/* <div className="spinner-border text-primary" role="status"><span className="sr-only">Loading...</span></div> */}
                                                {/* {this.state.ApiHref.length} */}
                                                
                                            <div className="col-sm-12">
                                                
                                                
                                                {mafonction()}
                                                {this.state.ApiHref.length > 1 && this.state.ApiHref.length != 9999 && this.state.villeSelect == "aucune selection" && this.state.nomDpt == "" && this.state.termNom == null && this.state.nomRegion == "" ? 
                                                (<div><div className="h4">résultats trouvés pour la profession de</div> {this.state.specialiteSelect.toLowerCase()} <div className="h4 text-danger">en France.</div> </div>) : ""} 
                                                {this.state.ApiHref.length == 9999 && this.state.villeSelect == "aucune selection" && this.state.nomDpt == "" && this.state.termNom == null && this.state.nomRegion == "" ? (<div><div className="h4">résultats trouvés pour la profession de</div> {this.state.specialiteSelect.toLowerCase()} <div className="h4 text-danger">en France.</div> </div>) : ""} 
                                                {this.state.ApiHref.length > 1 && this.state.villeSelect == "aucune selection" && this.state.nomDpt == "" && this.state.termNom == null && this.state.nomRegion != "" ? (<div><div className="h4">résultats trouvés pour la profession de</div> {this.state.specialiteSelect.toLowerCase()} <div className="h4 text-danger">dans la région {this.state.nomRegion.toUpperCase()}</div></div>) : ""}
                                                {this.state.ApiHref.length > 1 && this.state.villeSelect == "aucune selection" && this.state.nomDpt != "" && this.state.termNom == null && this.state.nomRegion != "" ? (<div><div className="h4">résultats trouvés pour la profession de</div> {this.state.specialiteSelect.toLowerCase()} <div className="h4 text-danger">dans le département {this.state.nomDpt}</div></div>) : ""}
                                                {this.state.ApiHref.length > 1 && this.state.villeSelect != "aucune selection" && this.state.nomDpt != "" && this.state.termNom == null && this.state.nomRegion != "" ? (<div><div className="h4">résultats trouvés pour la profession de</div> {this.state.specialiteSelect.toLowerCase()} <div className="h4 text-danger">dans la ville de {this.state.nomVille} ({this.state.villeSelect})</div></div>) : ""}
                
                                                {this.state.ApiHref.length <=1 && this.state.villeSelect == "aucune selection" && this.state.nomDpt == "" && this.state.termNom == null && this.state.nomRegion != "" ? (<div><div className="h4">résultat trouvé pour la profession de</div> {this.state.specialiteSelect.toLowerCase()} <div className="h4 text-danger">dans la région {this.state.nomRegion.toUpperCase()}</div></div>) : ""}
                                                {this.state.ApiHref.length <=1 && this.state.villeSelect == "aucune selection" && this.state.nomDpt != "" && this.state.termNom == null && this.state.nomRegion != "" ? (<div><div className="h4">résultat trouvé pour la profession de</div> {this.state.specialiteSelect.toLowerCase()} <div className="h4 text-danger">dans le département {this.state.nomDpt}</div></div>) : ""}
                                                {this.state.ApiHref.length <=1 && this.state.villeSelect != "aucune selection" && this.state.nomDpt != "" && this.state.termNom == null && this.state.nomRegion != "" ? (<div><div className="h4">résultat trouvé pour la profession de</div> {this.state.specialiteSelect.toLowerCase()} <div className="h4 text-danger">dans la ville de {this.state.nomVille} ({this.state.villeSelect})</div></div>) : ""}
                                                
                                                
                
                                            </div>
                                        </div> 
                                        
                                        <div className="row col-sm-12 mx-auto container-fluid">
                
                                            <div style={{display:this.state.montreRegion}} onClick={(e)=>this.setState({clignoteRegion:false})} className={this.state.clignoteRegion ? "mx-auto form-group cadre text-center text-warning h4 col-sm-4 avertissement" : "mx-auto form-group cadre text-center text-warning h4 col-sm-4"}>
                                                <div>Choisissez une région</div>
                                                <div>-</div>
                                                <select onChange={this.onChangeRegion.bind(this)} id="inputRegion" name="region" className="form-control inputstyle text-center mt-4 mb-2">
                                                <option className="text-center form-group h4 text-danger"> Choisissez une région</option>
                                                    {this.state.Regions.map(region => (<option key={region.id} className="optionRemove text-center" value={region.code}>{region.name}</option>))}
                                                </select>
                                            </div>
                        
                                            <div style={{display:this.state.montreDpt}} onClick={(e)=>this.setState({clignoteDpt:false})} className={this.state.clignoteDpt ? "mx-auto form-group text-center h4 cadre text-danger col-sm-4 avertissement" : "mx-auto form-group text-center h4 cadre text-danger col-sm-4"}>
                                                <div>{this.state.nomRegion != "" ? "Choisissez un département de la région " + this.state.nomRegion.toUpperCase() : (<div>Choisissez un département<div>-</div></div>) }</div>
                                                
                                                <select className="btnDpt text-center form-group h4 text-danger w-100" onChange={this.onChangeDpt.bind(this)} id="inputDpt" name="departement" className="btnDpt form-control inputstyle mt-4 mb-2">
                                                    <option className="btnDpt text-center form-group h4 text-danger">Choisissez un département</option>
                                                    {this.state.Dpts.map(departement => (<option className="optionRemove text-center" key={departement.id} className="btnDpt" value={departement.code}>{departement.name}</option>))}
                                                </select>
                                            </div>
                                        
                                            <div style={{display:this.state.montreVille}} id="inputvillegp" onClick={(e)=>this.setState({clignoteVille:false})} className={this.state.clignoteVille ? "mx-auto form-group text-center cadre h4 text-danger col-sm-4 avertissement" : "mx-auto form-group text-center cadre h4 text-danger col-sm-4"}>
                                                <div className="text-dark">{this.state.nomDpt != "" ? "Choisissez une VILLE du département " + this.state.nomDpt : (<div>Choisissez une ville<div>-</div></div>) }</div>
                                                <select autoComplete="on" onChange={this.onChangeVille.bind(this)} id="inputVille" name="ville" className="btnVille form-control inputstyle text-center mt-4 mb-2">
                                                <option className="btnVille text-center form-group h4 text-success">Choisissez une ville</option>
                                                        {this.state.Villes.map(ville => (<option key={ville.id} className="optionRemove btnVille text-center" value={ville.ville + " " + ville.codePostal}>{ville.ville} {ville.codePostal}</option>))}
                                                </select>
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
                <div className="container mb-5 overflow-auto" style={{height:"1000px"}}>
                {/* {this.state.captureFiche.length == 0 ? "" : this.state.captureFiche.map(bigItem => <ServiceItem onSpecialiteClick={this.onSpecialiteClick} toggle={this.state.toggleSpec} key={bigItem.recordid} item={bigItem}/>)} */}
                {/* PAR SELECTION */}
                {/* Affichage France */}                                                                              
                                                                                                                                                                                {/* for menuItem in menuItemAll|sort((a, b) => a.orderNumber <=> b.orderNumber)
                                                                                                                                                                                this.state.ApiHref.sort((a, b)=> (a.fields.nom > b.fields.nom) ? 1 : -1).map
                                                                                                                                                                                
                                                                                                                                                                                item.fields.nom.split(" ")[1]
                                                                                                                                                                                */}
                                                                                                                                                                                
                 {/* {this.state.ApiHref.length <= 9998 && this.state.villeSelect == "aucune selection" && this.state.nomDpt == "" && this.state.termNom == null && this.state.nomRegion == "" ? this.state.ApiHref.sort((a, b)=> (a.fields.nom > b.fields.nom) ? 1 : -1).map(item => (<Miniature onSpecialiteClick={this.onSpecialiteClick} toggle={this.state.toggleSpec} key={item.recordid} item={item}/>)) : ""}  */}
                 {/* this.state.ApiHref.sort((a, b)=> (a.fields.nom.split(" ")[1] > b.fields.nom.split(" ")[1]) ? 1 : -1)                              */}
                   
                {this.state.ApiHref.length <= 9998 && this.state.termNom == null && this.state.nomRegion == "" && this.state.nomDpt == "" && this.state.ApiHref.length != 0 ? this.state.ApiHref.map(item => (<Miniature captureFiche={this.state.captureFiche} idEnreg={this.state.idEnreg} onSpecialiteClick={this.onSpecialiteClick} toggle={this.state.toggleSpec} key={item.recordid} item={item}/>)) : ""}
                {/* Affichage par Région */}
                {this.state.nomRegion != "" && this.state.nomDpt == "" && this.state.ApiHref.length != 0 && this.state.ApiHref.length < 9998 ? this.state.ApiHref.map(item => (<Miniature captureFiche={this.state.captureFiche} idEnreg={this.state.idEnreg} onSpecialiteClick={this.onSpecialiteClick} toggle={this.state.toggleSpec} key={item.recordid} item={item}/>)) : ""}
                
                {/* Affichage par Departement */}
                {this.state.ApiHref.length <= 9998 && this.state.nomDpt != "" && this.state.ApiHref.length != 0 ? this.state.ApiHref.map(item => (<Miniature captureFiche={this.state.captureFiche} idEnreg={this.state.idEnreg} onSpecialiteClick={this.onSpecialiteClick} toggle={this.state.toggleSpec} key={item.recordid} item={item}/>)) : ""}
                
                {/* PAR SAISIE  */}
                {this.state.medecinNom.length <= 9998 ? this.state.medecinNom.map(item => (<Miniature captureFiche={this.state.captureFiche} idEnreg={this.state.idEnreg} onSpecialiteClick={this.onSpecialiteClick} toggle={this.state.toggleSpec} key={item.recordid} item={item}/>)) : ""}
                

                </div>
                
                <div id="toTop" style={{display:"flex"}}><div className="btn btn-totop"><a href="#top"><i className="fa fa-angle-double-up" aria-hidden="true"></i></a></div></div>
                
                
                
                </div>

</div>
            
            
            
            </div>
        )
    }

}

export default Corps;
