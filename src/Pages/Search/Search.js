import React, { useState, useMemo, useCallback, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { allDataMerger } from '../../API/api';
import {SearchResult} from '../../Components/SearchResult'
import './SearchStyle.css';

/**
 * Search page
 * @returns jsx
 */
const Search = () => {
  const [dataArray, setDataArray] = useState([]);
  
  const getData = async () => {
    const d = await allDataMerger();
    setDataArray(d);
  }

  useEffect(()=>{
    getData();
  },[])

  const arrayHandle = (arrParam) => {
    console.log('arrayHandle', arrParam);
    // return 
  }
  /**
   * 
   * @param {*} query 
   */
  const fetchData = async (searchQuery) => {
    console.log('query', searchQuery);

    const allData = await allDataMerger();
    console.log(allData);
    const result = allData.filter((item)=> {
      // console.log('item', item);
      // return Object.values(item).some(value => {
      //   console.log('value', value)
      //   // return value.filter((eachItem)=> {
      //   //   console.log('eachItem matches', eachItem?.matching_terms)
      //   //   console.log('includes', eachItem?.matching_terms?.incldues('yahoo'))
      //   //   // return eachItem?.matching_terms?.incldues(searchQuery);
      //   // })
        
      //   // console.log('val includes', value?.matching_terms.incldues('yahoo'))
      //   // return value.matching_terms.incldues('yahoo');
      // })

      return Object.values(item).some(arr => {
        // console.log('arr', arr)
        return arrayHandle(arr);
      })
    })

    console.log('result', result);

    
  }

  /**
   * Search change handler
   */
  const onChangeSearchHandler = useCallback(debounce((e) => {
    const { value } = e.target;
    fetchData(value);
  }, 300), [])

  return (<div className="container">
    <h1>Yahoo Internal Search Portal</h1>
    <input placeholder="Search ex - John" className="searchInput" type="search" onChange={onChangeSearchHandler} />

    <SearchResult arrayData={dataArray} />

    
  </div>)
}

export default Search;