import React, {useState, useEffect} from 'react';
import './App.css';
import SearchForm from "./components/SearchFormComponent/SearchForm"
import RhymeList from "./components/RhymeListComponent/RhymeList"

function App() {
  const [_rhyme_data, setRhymeData] = useState([]);
  const [_display_rhyme_not_found, setDisplayRhymeNotFound] = useState(false);
  const [_input, setInput] = useState("");

  const getRhymeQuery = async (event) => {
    event.preventDefault();
    let searchVal = event.target.children.SearchPhrase.value;
    let topK = event.target.children.TopK.value;
    let pre_suf_value = event.target.children.PreSufVal.value;
    
    let regex = /^[0-9a-zA-Z\s]+$/;
    if (searchVal.match(regex)){
      let url = translatePhraseToQueryString(searchVal,topK, pre_suf_value);
      let request = await fetch(url);
      let data = await request.json();
      if (data.length === 0){
        setDisplayRhymeNotFound(true);
      }
      else{
        setDisplayRhymeNotFound(false);
        setRhymeData(data);
        setInput(searchVal);
      }
    }
    else{
      setDisplayRhymeNotFound(true);
    }
  }

  function translatePhraseToQueryString(phrases, topK, pre_suf_value){
    let url = "https://guarded-sea-48232.herokuapp.com/api?";
    let urlPhrase = "phrase=" + phrases.replace(/\s+/g,"_");
    let urlTopK = "&topK=" + topK;
    let urlPreSuf = "&preSufVal=" + pre_suf_value;
    url = url + urlPhrase + urlTopK + urlPreSuf;
    return url;
  }
  return (
    <div className="App">
      <div className="container">
        <section id="rhyme-search-section" className = "my-5">
          <SearchForm
            onSubmit={getRhymeQuery}
          />
        </section>

        <section id="error message">
          {_display_rhyme_not_found &&
          <div>
            <h3 className="text-danger">No rhymes found for that input</h3>
          </div>
          }
        </section>

        {_rhyme_data.length !== 0 &&
        <section id="rhyme-list-section" className="my-5">
          <RhymeList
            data = {_rhyme_data}
            input = {_input}
          />
        </section>
        }

      </div>
    </div>
  );
}

export default App;
