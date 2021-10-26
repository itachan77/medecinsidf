import React, {Component} from 'react';
import SearchBarVille from './SearchBarVille.js';
import SearchBarSpec from './SearchBarSpec.js';

class SearchBar extends Component {

    state = {
        termNom: "",
        termVille:null,
        termSpec:null,
    }

    onChangeNom = e => {
        this.setState({termNom: e.target.value})

    }

    onChangeVille = e => {
        var index = e.label;
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
        this.props.onFormSubmit(this.state.termSpec, this.state.termNom == "" ? null : this.state.termNom,this.state.termVille); //vers axios search (fonction onListeMed)
    }


    render() {
        return (


                    <form className="mx-auto text-center row w-75" onSubmit={this.onSubmit}>

                        <div style={{zIndex:3}} className="mx-auto form-group cadre text-center text-dark h4 col-sm-12 col-md-7">
                            <div>Saisissez une ville</div>
                            <div>-</div>
                            <SearchBarSpec onChangeSpec={this.onChangeSpec} specialTermPropsSpec={this.props.specialTermPropsSpec}/> 
                        </div> 

                        <div className="mx-auto form-group cadre text-center text-dark h4 col-sm-12 col-md-7">
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

                        <div className="mx-auto form-group cadre text-center text-dark h4 col-sm-12 col-md-7">
                            <div>Saisissez une ville</div>
                            <div>-</div>
                            <SearchBarVille onChangeVille={this.onChangeVille} specialTermPropsVille={this.props.specialTermPropsVille}/> 
                        </div> 

                        <div className="mx-auto form-group text-center text-dark h4 col-sm-12 col-md-7">
                            <button type="submit" className="inputstyle text-dark">RECHERCHER</button>

                        </div> 


                    </form>


        )
    }
}

export default SearchBar;