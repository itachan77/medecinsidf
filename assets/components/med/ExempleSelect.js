import React, { useEffect, useState, useRef } from "react";
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
          //this.setAutofill();
        } else {
          //this.clearAutofill();
          //this.clearAutofilled();
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







const SearchBar = (props) => {

const [Villes, setVilles] = useState([]);



useEffect ( () => {
const recupData = async () => {
    const res = await fetch('/villes/' + "toutesVilles");

    const data = await res.json();

    setVilles(data);

}
recupData();
}, [])



  const options = useRef(countryOptions).current;

  // Expose a hook for JavaScript when autofill is shown
  // JavaScript can capture 'animationstart' events
  // @see https://medium.com/@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7

  //        // Expose a hook for JS onAutoFillCancel
  // JavaScript can capture 'animationstart' events


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
    <form autoComplete="on" method="POST">
      <label htmlFor="frmNameA">Name</label>
      <Select
        styles={styles}
        placeholder="Full name"
        autoComplete="given-name"
        components={{ Input }}
        inputId="frmNameA"
        //options={Villes.map(ville => ({label:ville.ville, value:ville.codePostal}))}
        options={[
          {label: "Eric Bonow", value: "eb"},
          {label: "Chantal MANETTE", value: "mc"},
          {label: "Chantal MANETTE", value: "mc"},
        
        ]}
      />

      <label htmlFor="frmEmailA">Email</label>
      <Select
        placeholder="name@example.com"
        autoComplete="email"
        components={{ Input }}
        inputId="frmEmailA"
        options={options}
      />

      <label>
        Country
        <Select components={{ Input }} options={options} />
      </label>

      <button type={"submit"} />
    </form>
  );
};

export default SearchBar;