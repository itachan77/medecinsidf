import React, {Component} from 'react';
import MuiAutocomplete from 'mui-autocomplete';



class SearchBarVille extends Component {

  state = {
    Villes : [
        {
            id : "",
            ville : '',
            codePostal : '',
            departmentCode : '',
        },
    ],


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
}




    render() {
      return (
        <div>
          <MuiAutocomplete
            placeholder="Countries"
            name="countries"
            setvalue={1}
            setdata={this.state.Villes}
            variant="outlined"
            onChange={this.props.onChangeVille.bind(this)}
            template={{
              title: 'ville'
            }}
            />



        </div>
      );
    }
}


export default SearchBarVille;


