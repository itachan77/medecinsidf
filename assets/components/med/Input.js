import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Corps from './Corps.js';
import Mention from './Mention.js';



class Input extends React.Component {

    state = {
        page:"corps",

    }
    
    changeView = (pageSouhaite) => {
        this.setState({
            page:pageSouhaite,
        });
    
    }
    
    render() {


        return (

            <div>
                    <Header/>
                    
                    {this.state.page == "corps" ? <Corps /> : <Mention/>} 
                    
                    <Footer changeView={this.changeView}/>
            </div>    
        );
    }
}

export default Input;



