import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Hint } from 'react-autocomplete-hint';


function AutoVille({mons,onChangeVille}) {
  const [hintData, setHintData] = useState([])
  const [text, setText] = useState('')


  const getData = async () => {
    const res = await axios.get('/villes/' + "toutesVilles")
      var hintArray = []
       res.data.map(a => hintArray.push(a.ville.slice()))
        setHintData(hintArray)
  }
  
  const fonc = (e) => {
    setText(e.target.value);
    onChangeVille(e);
    //this.props.onChangeVille.bind(this)
    
    // console.log(e.target.value);
    //console.log(mons);
    //onChangeVille(value);
    
  }



  useEffect(()=> {
    getData()
  })

  return (
    <div className="App">
      {/* <h5>Try typing these words</h5>
      <code>{`[${hintData.toString()}]`}</code>
      <br/>
      <br/>
      <br/> */}
     <Hint options={hintData} allowTabFill>
     
        <input className=''
          value={text}
          onChange={(e)=>fonc(e)}

        />

      </Hint>
      
    </div>
  );
}

export default AutoVille;