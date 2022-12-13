import React, { memo, useState, useMemo, useCallback, useEffect } from 'react';
import './SearchResultStyle.css';
import { SearchItem } from './SearchItem';

/**
 * Search result page
 * @returns jsx
 */
const SearchResult = ({ arrayData }) => {
  console.log('arrayData', arrayData);

  const itemHandler = useCallback((idParam) => {
    alert(idParam)
  }, [])

  return (<div>
    {arrayData.length === 0 && (<h2>No data...</h2>)}

    {arrayData && arrayData.map((item, ind) => {
      console.log('item', item);
      return (
        <div>
            <SearchItem key={ind} onItemClick={itemHandler} item={item} itemKey={ind} category={'image'} />
        </div>
      )
    })}
  </div>)
}

export { SearchResult };