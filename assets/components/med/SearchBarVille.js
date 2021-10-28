import React, {Component,useEffect, useState, useRef} from 'react';
import Select, { components } from "react-select";
import { countryOptions } from "./options";
import "./autofill.css";


const Input = (props) => {
    const { autoComplete, onAutoFill } = props.selectProps;
  
    const onAnimationStart = !onAutoFill
      ? undefined
      : (e) => {
          const animationNames = ["onAutoFillStart", "onAutoFillCancel"];
          if (e.animationName === "onAutoFillStart") {
            this.setAutofill();
          } else {
            this.clearAutofill();
            this.clearAutofilled();
          }
          animationNames.includes(e.animationName) && onAutoFill(e);
        };
  
    return (
      <components.Input
        {...props}
        onAnimationStart={onAnimationStart}
        autoComplete={autoComplete || props.autoComplete}
      />
    );
  };




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


        const onAutoFill = (e) => {
            if (e.animationName === "onAutoFillStart") {
              // do something
            }
            if (e.animationName === "onAutoFillCancel") {
              // do something
            }
          };
        
          const styles = {
            input: (css, state) => ({
              ...css,
              "input:-webkit-autofill": {
                animationName: "onAutoFillStart"
              },
              "input:not(:-webkit-autofill)": {
                animationName: "onAutoFillCancel"
              }
            })
          };


        return (
                <div>

                    {/* <form onSubmit={this.onSubmit}>
                        <div className="input-group mb-3 row mx-auto">
                            <input type="text" 
                                className="form-control col-sm-10 inputstyle" 
                                placeholder="Saisissez un nom de médecin" 
                                aria-label="Recipient's username" 
                                aria-describedby="basic-addon2"
                                value={this.state.termVille}
                                onChange={this.onChange}
                            />
                            <button type="submit" className="inputstyle text-dark">OK</button>
                        </div>
                    </form> */}

      <Select
        styles={styles}
        placeholder="Saisissez une Ville"
        //autoComplete="given-name"
        components={{ Input }}
        inputId="frmNameA"
        options={this.state.Villes.map(ville => ({label:ville.ville, value:ville.codePostal}))}
        onChange={this.props.onChangeVille.bind(this)}
        //onChange={()=>this.props.onChangeVille("Drancy")}
        
      />


                </div>

        )
    }
}

export default SearchBarVille;



