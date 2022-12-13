import React, { useState, memo, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { allDataMerger } from '../../API/api';
import { SearchResult } from '../../Components/SearchResult'
import './SearchStyle.css';

/**
 * Search page
 * @returns jsx
 */
const Search = memo(() => {
  const [dataArray, setDataArray] = useState([]);

  /**
   * 
   * @param {*} arr 
   * @param {*} searchQueryParam 
   * @returns 
   */
  const arrayHandle = (arr, searchQueryParam) => {
    return arr?.filter((arrItem, ind) => {
      return arrItem?.matching_terms.includes(searchQueryParam.toLowerCase())
    })
  }

  /**
   * 
   * @param {*} query 
   */
  const fetchData = async (searchQuery) => {
    console.log('query', searchQuery);

    const allData = await allDataMerger();
    console.log(allData);

    let obj = ['images', 'contacts', 'gdrive', 'slacks', 'tweets'];

    const result = allData.map((item, ind) => {
      console.log(item);
      return arrayHandle(item[obj[ind]], searchQuery)
    })

    console.log('result', result);
    setDataArray(result);
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
})

export default Search;