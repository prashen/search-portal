import React, { memo, useState, useMemo, useCallback, useEffect } from 'react';
import './SearchResultStyle.css';

/**
 * Search result page
 * @returns jsx
 */
const SearchItem = memo(({ item, itemKey, onItemClick }) => {

  return item.map((childItem, childInd) => {
    console.log('childItem', childItem);
    const {image, author, name, user, description, message, path, category }  = childItem || {};

    return (<a key={childInd} onClick={() => onItemClick(category)} className={`item ${category}`}>
        <h2 className='title'>{author || name || user}</h2>

        <p className='title'>{description || path}</p> 
    
        <p className='label'>{category}</p>
      </a>)
  })


})

export { SearchItem };