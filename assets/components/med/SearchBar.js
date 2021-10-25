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




class SearchBar extends Component {

    state = {
        term: ''
    }

    onChange = e => {
        this.setState({term: e.target.value})
    }

    onSubmit = e => {

        e.preventDefault();
        //très important car recupère le  nom saisi
        console.log("nomChoisi :" + document.getElementsByClassName("css-qc6sy-singleValue")[0].textContent);
        var nomChoisi = document.getElementsByClassName("css-qc6sy-singleValue")[0].textContent;
        this.setState({term: nomChoisi})

        //on appelle specialTerm qui modifie le state term du composant Input
        this.props.onFormSubmit(nomChoisi);
        this.props.specialTermProps(nomChoisi)
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
                                value={this.state.term}
                                onChange={this.onChange}
                            />
                            <button type="submit" className="inputstyle text-dark">OK</button>
                        </div>
                    </form> */}

    <form onSubmit={this.onSubmit} autoComplete="off" method="POST" >
      <Select
        styles={styles}
        placeholder="Saisissez un nom de médecin"
        //autoComplete="given-name"
        components={{ Input }}
        inputId="frmNameA"
        options={this.props.apihref.map(item => ({label:item.fields.nom, value:item.fields.nom}))}
      />

        <button type="submit" className="inputstyle text-dark">OK</button>
    </form>


                </div>

        )
    }
}

export default SearchBar;



