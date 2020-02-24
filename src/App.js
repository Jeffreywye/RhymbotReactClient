import React, {useState, useEffect} from 'react';
import './App.css';
import SearchForm from "./components/SearchFormComponent/SearchForm"

function App() {
  const [_rhyme_data, setRhymeData] = useState(false);
  const [_display_rhyme_not_found, setDisplayRhymeNotFound] = useState(false);

  const getRhymeQuery = async (event) => {
    event.preventDefault();
    let searchVal = event.target.children.SearchPhrase.value;
    let topK = event.target.children.TopK.value;
    let pre_suf_value = event.target.children.PreSufVal.value;
    
    let regex = /^[0-9a-zA-Z\s]+$/;
    if (searchVal.match(regex)){
      console.log("passed");
      setDisplayRhymeNotFound(false);
      let url = translatePhraseToQueryString(searchVal,topK, pre_suf_value);
      let request = await fetch(url);
      let data = await request.json();
      console.log(data);
    }
    else{
      setDisplayRhymeNotFound(true);
    }
    console.log(_rhyme_data);
    setRhymeData(!_rhyme_data);
  }

  function translatePhraseToQueryString(phrases, topK, pre_suf_value){
    let url = "/api?";
    let urlPhrase = "phrase=" + phrases.replace(/\s+/g,"_");
    let urlTopK = "&topK=" + topK;
    let urlPreSuf = "&preSufVal=" + pre_suf_value;
    url = url + urlPhrase + urlTopK + urlPreSuf;
    return url;
  }
  return (
    <div className="App">
      <div className="container">
        <section id="rhyme-search-section">
          <SearchForm
            onSubmit={getRhymeQuery}
          />
        </section>
        <section id="rhyme-list-section">
          {/* {_rhyme_data} */}
        </section>
        <section id="error message">
          {_display_rhyme_not_found &&
          <div>
            <h3>No rhymes found for that input</h3>
          </div>
          }
        </section>
      </div>
    </div>
  );
}

export default App;
