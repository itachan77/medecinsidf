import React, {Component} from 'react';
import SearchBarVille from './SearchBarVille.js';
import SearchBarSpec from './SearchBarSpec.js';

class SearchBar extends Component {

    state = {
        termNom: "",
        termVille:"",
        termSpec:"",
    }

    onChangeNom = e => {
        this.setState({termNom: e.target.value})

    }







    onSubmit = e => {


        e.preventDefault();
        //A compléter plus tard

        //Pour le choix par VILLE on appelle specialTermPropsVille qui modifie le state termNom du composant Input
            //très important car recupère le  nom saisi
            if (document.getElementsByClassName("css-qc6sy-singleValue")[0].textContent != undefined) {
                var villeChoisie = document.getElementsByClassName("css-qc6sy-singleValue")[0].textContent;
                this.setState({termVille: document.getElementsByClassName("css-qc6sy-singleValue")[0].textContent})


            }
            else {
                var villeChoisie = null;
            }

            console.log("nomSaisi state:" + this.state.termNom);
            console.log("villeSaisie state:" + this.state.termVille);
            console.log("Specialite state:" + this.state.termSpec);
            
            


            

            //on appelle la fonction specialTermPropsVille qui modifie le state termVille du composant Input
            this.props.specialTermPropsVille(villeChoisie)

        //Pour le choix par NOM on appelle specialTermPropsNom qui modifie le state termNom du composant Input
            this.props.specialTermPropsNom(this.state.termNom)

        //TOTAL 
        this.props.onFormSubmit(this.state.termNom == "" ? null : this.state.termNom,villeChoisie); //vers axios search (fonction onListeMed)
    }


    render() {
        return (


                    <form className="mx-auto text-center row w-75" onSubmit={this.onSubmit}>

                        <div style={{zIndex:3}} className="mx-auto form-group cadre text-center text-dark h4 col-sm-12 col-md-7">
                            <div>Saisissez une ville</div>
                            <div>-</div>
                            <SearchBarSpec specialTermPropsSpec={this.props.specialTermPropsSpec}/> 
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
                            <SearchBarVille specialTermPropsVille={this.props.specialTermPropsVille}/> 
                        </div> 

                        <div className="mx-auto form-group text-center text-dark h4 col-sm-12 col-md-7">
                            <button type="submit" className="inputstyle text-dark">RECHERCHER</button>

                        </div> 


                    </form>


        )
    }
}

export default SearchBar;