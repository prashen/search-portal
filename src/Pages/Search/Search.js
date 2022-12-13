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
   * matches with query and returns array
   * @param {*} arr 
   * @param {*} searchQueryParam 
   * @returns array
   */
  const arrayHandle = (arr, searchQueryParam) => {
    return arr?.filter((arrItem) => {
      return arrItem?.matching_terms.includes(searchQueryParam)
    })
  }

  /** 
   * API call
   * @param { string } query 
   */
  const fetchData = async (searchQuery) => {
    if (searchQuery.trim() !== '') {
      const allData = await allDataMerger();

      let obj = ['images', 'contacts', 'gdrive', 'slacks', 'tweets'];

      const result = allData.map((item, ind) => {
        return arrayHandle(item[obj[ind]], searchQuery.trim())
      })

      setDataArray(result);
    } else {
      setDataArray([])
    }
  }

  /**
   * Search change handler
   */
  const onChangeSearchHandler = useCallback(debounce((e) => {
    const { value } = e.target;
    fetchData(value);
  }, 300), [])

  /**
   * jsx
   */
  return (<div className="container">
    <div className='inner-container'>
      <h1>Yahoo Internal Search Portal</h1>

      {/* input */}
      <div className='search-wrap'>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input placeholder="Search exp- yahoo, erica, john" className="searchInput" type="search" onChange={onChangeSearchHandler} />
      </div>

      {/* search result */}
      <SearchResult arrayData={dataArray} />
    </div>
  </div>)
})

export default Search;