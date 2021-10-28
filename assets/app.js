
// import Index1 from './components/tableau/Index.js';
import Input from './components/med/Input.js';
// import SearchBar from './components/med/AutoComplete/1/ExempleSelect.js';
// import Autocomplete from './components/med/Autocomplete.js';
// import AutoVille from './components/med/AutoComplete/2/AutoVille.js';
// import Autocomplete from './components/med/AutoComplete/5/Autocomplete.js';
// import AutoComplete from './components/med/AutoComplete/4/Autocomplete.js';
//https://codesandbox.io/s/qq8gj?file=/demo.js:0-5679
//import Home from './components/med/Home.js';
import './styles/app.css';
import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';


let select = document.getElementsByClassName("react");

let attributeId = select[0].getAttribute("id");

if (attributeId = "root") {
    
    ReactDOM.render(
        <div>
            <Input/>


        </div>,document.getElementById('root'),
        );
    
}

//autocomplete : npm add react-autocomplete-hint axios











