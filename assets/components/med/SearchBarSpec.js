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




class SearchBarSpec extends Component {

  state = {
    Specialites : [
        {
            id : "",
            libelleProfession : '',
            codeProfession : '',
        },
    ],
    termSpec:"",

}

onChangeSpec = e => {
  console.log(e.target.value)
  this.setState({termSpec: e.target.value})
}


componentDidMount() {

  fetch('/specialite')
  .then(res => res.json())
  .then(Specialites => {
      this.setState({
          Specialites: Specialites.map(specialite => ({
          id: specialite.id,
          libelleProfession:specialite.libelleProfession,
          codeProfession:specialite.codeProfession,
          })),
          nextId: Math.max(...Specialites.map(specialite => specialite.id)) + 1
          
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
        placeholder="Saisissez une Specialité"
        //autoComplete="given-name"
        components={{ Input }}
        inputId="frmNameA"
        options={this.state.Specialites.map(specialite => ({label:specialite.libelleProfession, value:specialite.codeProfession}))}

        onChange={this.onChangeSpec}
      />




                </div>

        )
    }
}

export default SearchBarSpec;



