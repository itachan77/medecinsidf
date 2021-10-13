
//app.js
import React, {Component} from 'react';



class Input extends Component {
    constructor(props) {
        super(props)

        this.state = {
            region : [],
        }

    }

    //cette fonction propre à react affiche ce qui est demandé uen fois que la page est chargée
    
    componentDidMount() {
        this.onTermSubmit('');
    }

    onTermSubmit = async term => {
        const reponse = await youtube.get('/search', {
            params: {
                q : 'melenchon'
            }
        })

        console.log(reponse); 
        //console.log(reponse); pour voir les infos récupérées par l'api youtube
        //: on voit que reponse est un tableau

        this.setState({
            videos : reponse.data.items,
            selectedVideo : reponse.data.items[0]
        })
    }


    onVideoSelect = (video) => {
        // this.state.selectedVideo
        console.log('depuis notre app', video);
        this.setState({
            selectedVideo: video
        })
    }

    render() {
        return (
            <form class="align-items-center mx-auto text-center hide" name="regionSelect" method="post">
                <div class="row col-sm-12">
                    <div class="form-group text-warning h4 col-sm-6 mx-auto">
                      <label for="inputRegion">Choisissez une région</label>
                      <select  id="inputRegion" name="region[code]" class="form-control btnRegion">
                        <option selected>Choisissez une région...</option>
                        
                        <option value="{{region.code}}">toute region</option>
                        
                      </select>
                    </div>
                </div>
            </form>
        );
    }
}

export default Input;