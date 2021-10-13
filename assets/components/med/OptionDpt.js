import React from 'react';
import OptionVille from './OptionVille.js'


class OptionDpt extends React.Component {
    state = {
        nextId:2,
        Dpts : [
            {
                id : "",
                code : '',
                name : '',
                regionCode : '',
            },
        ],
        departementSelect:"aucune selection",



    }

    componentDidMount() {
        fetch('/departements/' + this.props.codeRegion)
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
    
    
    onChange = (e) => {
    
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
                }    
            })
        }
    
        else {
            this.setState({
                departementSelect: "aucune selection"
            });
        }

        
    }

    
    

    render() {
        return (
        
            <div className="form-group h4 text-danger col-sm-12 mx-auto">
            
            <span>
                <label htmlfor="inputDpt">Choisissez un département</label>    
                    <select onChange={this.onChange.bind(this)} id="inputDpt" name="departement" className="btnDpt form-control">
                        {this.state.Dpts.map(departement => (<option key={departement.id} className="btnDpt" value={departement.code}>{departement.name}</option>))}
                    </select>
            </span>
            
            
                {this.state.departementSelect == "aucune selection" ? 
    
                // <span>
                //     <label className="text-success mt-4" htmlfor="inputVille">Choisissez une ville</label>
                //         <select id="inputVille" name="ville" className="btnVille form-control">
                //             <option>aucune ville</option>
                //         </select>
                // </span>
                ""
                : <OptionVille Dpt={this.state.departementSelect}/>
                
                
                } 
            </div>
        
        );
    }
    
    
}

export default OptionDpt;