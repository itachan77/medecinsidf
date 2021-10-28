import React, {useEffect, useState} from 'react';
import Trie from "./trie.js";
import "./App.css";

// const dictionary = {
//   words: ['hello','helium','world','car','carpet','test','this','that','those','working','is']
// }




  const getWords = async() => {
    const url = 'https://127.0.0.1:8000/villes/toutesVilles'
    const res = await fetch(url, {
      method: 'GET'
    });
    return await res.json();
  }
  
  // const getWords = async() => {
  //   const url = await axios.get('/villes/' + "toutesVilles")
  //     var hintArray = []
  //     url.data.map(a => hintArray.push(a.ville))
    
  //   return hintArray;
  // }
  
  function hl () {
    console.log("hello");
  }
  
const getData = async () => {
  const res = await axios.get('/villes/' + "toutesVilles")
    var hintArray = []
     res.data.map(a => hintArray.push(a.ville))
      setHintData(hintArray)
}

function Autocomplete() {
  const [prefix, setPrefix] = useState("");
  const [suggestion, setSuggestion] = useState("");



  var myTrie = new Trie();

  (async()=>{
    const dictionary = await getWords();
    const words = dictionary.words;
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        myTrie.insert(word)
    }
  })();

  const onChange = (e) => {
    var value = e.target.value;
    setPrefix(value);
    var words = value.split(" ");
    var trie_prefix = words[words.length - 1].toLowerCase();
    var found_words = myTrie.find(trie_prefix).sort((a, b) => {
      return a.length - b.length;
    });
    var first_word = found_words[0];
    if (
      found_words.length !== 0 &&
      value !== "" &&
      value[value.length - 1] !== " "
    ) {
      if (first_word != null) {
        var remainder = first_word.slice(trie_prefix.length);
        setSuggestion(value + remainder);
      }
    } else {
      setSuggestion(value);
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 39) {
      setPrefix(suggestion);
    }
  };

  return (
  
    <div className="App">
    {hl()}
      <input
        type="text"
        name="search-bar"
        id="search-bar"
        placeholder="Search..."
        value={prefix}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <input
        type="text"
        name="search-bar"
        id="search-bar2"
        value={suggestion}
      />
    </div>
  );
}

export default Autocomplete;