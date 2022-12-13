import {useEffect, useMemo, useCallback} from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import {allDataMerger} from './API/api';
import Search from './Pages/Search';
// import imageData from './schema/data/images.json';
// import contactData from './schema/data/contacts.json';
// import gdriveData from './schema/data/gdrive.json';
// import slackData from './schema/data/slacks.json';
// import twitterData from './schema/data/tweets.json';



// import './App.css';

function App() {
  

  return (
    <div className="">
      {/* <h1>Search Yahoo</h1> */}
      {/* <input className="searchInput" type="search" onChange={onChangeSearchHandler} /> */}

      <Search />
    </div>
  );
}

// function allDataMerger(){
//   console.log('fired', [imageData, contactData, gdriveData, slackData, twitterData])
//   return [imageData, contactData, gdriveData, slackData, twitterData]
// }

export default App;
