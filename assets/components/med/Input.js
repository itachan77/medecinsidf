import React from 'react';
import OptionRegion from './OptionRegion.js'
import OptionDpt from './OptionDpt.js'





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
        value:"", 
        regionSelect:"aucune selection",

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

    onChange = (e) => {
    
        var select = e.target;
        var index = select.options[select.selectedIndex].getAttribute("value");
        
        if (e != undefined) {
    
            var dataObjetRegion = this.state.Regions;
            
            dataObjetRegion.map(region => {
            
                if (region.code == index) {
                    this.setState({
                        regionSelect: region.code
                    });
                    console.log(region.code);
                }    
            })
        }
    
        else {
            this.setState({
                regionSelect: "aucune selection"
            });
        }
    }


    render() {


        return (
            <div className="row w-75 mx-auto">
                
                    <div className="form-group text-warning h4 col-sm-12 mx-auto ">
                      <label htmlFor="inputRegion">Choisissez une région</label>
                      <select onChange={this.onChange.bind(this)} value={this.state.value} id="inputRegion" name="region" className="form-control">
                        <option value="initial">Choisissez une région...</option>
                        {this.state.Regions.map(region => (<OptionRegion key={region.id} region={region}/>))}
                      </select>
                    </div>
                

                {this.state.regionSelect == "aucune selection" ? 

                    <div className="form-group h4 text-danger col-sm-12 mx-auto">
                        <label htmlFor="inputDpt">Choisissez un département</label>
                            <select id="inputDpt" name="departement" className="btnDpt form-control">
                                <option>Rien dpt</option>
                            </select>
                    </div> 
                
                    : 
                    <OptionDpt codeRegion={this.state.regionSelect} />
                    
    
                }

                
                {/* <OptionVille codeDpt={this.state.departementSelect}/> */}
                
                
                
            </div>
        );
    }
}

export default Input;

