import React, {Component} from 'react';


class SearchBar extends Component {

    state = {
        term: ''
    }

    onChange = e => {
        this.setState({term: e.target.value})
    }

    onSubmit = e => {

        console.log(e);

        e.preventDefault();
        //A compléter plus tard

        //on appelle specialTerm qui modifie le state term du composant Input
        this.props.onFormSubmit(this.state.term);
        this.props.specialTermProps(this.state.term)
    }

    render() {
        return (
                <div>
                    <form onSubmit={this.onSubmit}>
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
                    </form>
                </div>

        )
    }
}

export default SearchBar;