import React from 'react';



class OptionVille extends React.Component {
    state = {
        nextId:2,

        Villes : [
            {
                id : "",
                ville : '',
                codePostal : '',
                departmentCode : '',
            },
        ],
        villeSelect:"aucune selection",

    }

    componentDidMount() {
        fetch('/villes/' + this.props.Dpt)
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
            

            <span>
                <label className="text-success mt-4" htmlfor="inputVille">Choisissez une ville</label>
                    <select onChange={this.onChange.bind(this)} id="inputVille" name="ville" className="btnVille form-control">
                        
                        {this.state.Villes.map(ville => (<option key={ville.id} className="btnVille" value={ville.codePostal}>{ville.ville}</option>))}
                    </select>
            </span>
            

        );
    }
    
    
}

export default OptionVille;