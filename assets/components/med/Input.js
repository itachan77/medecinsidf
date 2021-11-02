import React from 'react';

import Header from './Header.js';
import Footer from './Footer.js';
import Load from './Load.js';
import Corps from './Corps.js';

import Mention from './Mention.js';


// import { isEmptyObject } from 'jquery';
// import ExempleSelect from './ExempleSelect.js';
// import InputRegion from './InputRegion.js';
// import axios from 'axios';
// import { Hint } from 'react-autocomplete-hint';





class Input extends React.Component {

    state = {
        page:"corps",

    }
    
    changeView = (pageSouhaite) => {
    
       
        this.setState({
            page:pageSouhaite,
        });
        
        console.log(this.state.page);
    
    }
    
    render() {

        // const brands = ['cca', 'ccb', 'ccc', 'bba', 'bbb', 'bbc', 'aaa', 'aab', 'aac'];
        
        // const groups = brands.reduce((groups, brand) => {
        //     const letterKey = brand.name.charAt(0).toLowerCase();
        //     (groups[letterKey] || (groups[letterKey] = [])).push(brand);
        //     return groups;
        //   }, {});
        //   Mappez les entrées de [clé, marques] à votre liste non ordonnée
          
        //   Object.entries(groups).sort().map(([letterKey, brands]) => (
        //     <div key={letterKey}>
        //       <h4>{letterKey}</h4>
        //       <ul>
        //         { brands.map(brand => <li key={brand}>{brand}</li>) }
        //       </ul>
        //   </div> ));
        
        // Object.entries(groups).sort().map(([letterKey, brands]) => {
        //     console.log('KEY', letterKey);
        //     brands.map(brand => console.log('\tbrand', brand));
        //   });
          
        //     KEY a
        // brand aaa
        // brand aab
        // brand aac
        //     KEY b
        // brand bba
        // brand bbb

        return (

            <div>
                    <Header/>
                    
                    {/* {this.state.page == "corps" ? <Corps /> : <Route exact path="/mention" component={Mention}/>}  */}
                    {this.state.page == "corps" ? <Corps /> : <Mention/>} 
                    
                    <Footer changeView={this.changeView}/>
            </div>    
        );
    }
}

export default Input;



