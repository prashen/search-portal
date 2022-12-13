import React, { useCallback } from 'react';
import { SearchItem } from './SearchItem';
import './SearchResultStyle.css';

/**
 * Search result page
 * @returns jsx
 */
const SearchResult = ({ arrayData }) => {
  /**
   * on click item
   */
  const itemHandler = useCallback((idParam) => {
    alert(JSON.stringify(idParam))
  }, [])

  return (<div>
    {arrayData.length === 0 && (<h2>No data...</h2>)}

    {arrayData && arrayData.map((item, ind) => {
      return (
        <div key={ind}>
            <SearchItem key={ind} onItemClick={itemHandler} item={item} itemKey={ind} />
        </div>
      )
    })}
  </div>)
}

export { SearchResult };