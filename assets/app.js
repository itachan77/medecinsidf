
// import Index1 from './components/tableau/Index.js';
// import Input from './components/med/Input.js';
import Input from './components/med/Input.js';
// import SearchBar from './components/med/ExempleSelect.js';
// import Autocomplete from './components/med/Autocomplete.js';
// import AutoVille from './components/med/AutoVille.js';
import './styles/app.css';
import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';


let select = document.getElementsByClassName("react");

let attributeId = select[0].getAttribute("id");

if (attributeId = "root") {
    
    ReactDOM.render(
        <div>
            <Input />
        </div>,document.getElementById('root'),
        );
    
}

//autocomplete : npm add react-autocomplete-hint axios











