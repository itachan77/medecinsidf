import React, {Component} from 'react';
import SearchBarSpec from './SearchBarSpec.js';
import AutoVille from './AutoComplete/2/AutoVille.js';

class SearchBar extends Component {

    state = {
        termNom: "",
        termVille:null,
        termSpec:null,
    }

    strUcFirst = (a) => {
        //  force la première lettre en majuscule et les autres lettres en minuscule
        //return (a+'').charAt(0).toUpperCase()+a.substr(1).toLowerCase();}
        //  force la première lettre en majuscule
        return (a+'').charAt(0).toUpperCase()+a.substr(1);
    }



    onChangeNom = e => {
        this.setState({termNom: e.target.value})

    }

    onChangeVille = e => {
        //var index = e.label; 
        var indexMef = e.target.value; 
        var index = this.strUcFirst(indexMef);
        console.log("mise en forme : " + index )
            if (e != undefined) {
                console.log("ville :" + index)
                this.setState({termVille: index})
            }
      }

      
    onChangeSpec = e => {
        var index = e.value;
            if (e != undefined) {
                console.log("specialite :" + index)
                this.setState({termSpec: index})
            }
    }


    onSubmit = e => {

        e.preventDefault();
        
        console.log("nomSaisi state:" + this.state.termNom);
        console.log("villeSaisie state:" + this.state.termVille);
        console.log("Specialite state:" + this.state.termSpec);

        //Pour le choix par VILLE on appelle specialTermPropsVille qui modifie le state termNom du composant Input
            //très important car recupère le  nom saisi
            //on appelle la fonction specialTermPropsVille qui modifie le state termVille du composant Input
            this.props.specialTermPropsVille(this.state.termVille)

        //Pour le choix par NOM on appelle specialTermPropsNom qui modifie le state termNom du composant Input
            this.props.specialTermPropsNom(this.state.termNom)
    
        //TOTAL 
        this.props.onFormSubmit(this.state.termSpec, this.state.termNom == "" ? null : this.state.termNom,this.state.termVille == "" ? null : this.state.termVille); //vers axios search (fonction onListeMed)
    }


    render() {
        return (


                    <form className="mx-auto text-center row w-75" onSubmit={this.onSubmit}>

                        <div style={{zIndex:3}} className="mx-auto form-group cadre text-center text-dark h4 col-sm-12 col-md-5">
                            <div>Saisissez une spécialité</div>
                            <div>-</div>
                            <SearchBarSpec onChangeSpec={this.onChangeSpec} specialTermPropsSpec={this.props.specialTermPropsSpec}/> 
                        </div> 


                        <div className="mx-auto form-group cadre text-center text-dark h4 col-sm-12 col-md-5">
                            <div>Saisissez un nom de médecin</div>
                            <div>-</div>

                                <div className="input-group mb-3 row mx-auto text-center">
                                    <input type="text" 
                                        className="form-control col-sm-12 inputstyle" 
                                        placeholder="Saisissez un nom de médecin" 
                                        aria-describedby="basic-addon2"
                                        value={this.state.termNom}
                                        onChange={this.onChangeNom}
                                    />
                                </div>
                            
                        </div>

                        <div className="mx-auto form-group cadre text-center text-dark h4 pl-3 pr-3 pb-3">
                            <div>Saisissez une ville</div>
                            <div>-</div>

                            <div className="text-center mx-auto">
                                <AutoVille onChangeVille={this.onChangeVille} mons="props OK"/>
                            </div>
                        </div> 

                        <div className="mx-auto form-group text-center text-dark h4 col-sm-12 col-md-12">
                            <button type="submit" className="inputstyle text-dark">RECHERCHER</button>
                        </div> 


                    </form>


        )
    }
}

export default SearchBar;