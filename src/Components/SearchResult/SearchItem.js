import React, { memo } from 'react';
import './SearchResultStyle.css';

/**
 * Search result page
 * @returns jsx
 */
const SearchItem = memo(({ item, onItemClick }) => {
  return item?.map((childItem, childInd) => {
    const { image, author, name, user, description, message, path, category } = childItem || {};

    return (<div key={childInd} onClick={() => onItemClick(childItem)} className={`item ${category}`}>
      <div className='content-wrap'>
        {/* image */}
        {image && <img src={image} alt={description} className="image" />}

        {/* title and description */}
        <div>
          <h2 className='title'>{author || name || user}</h2>

          <h2 className='title'>{description || path}</h2>
        </div>
      </div>

      {/* category */}
      <div className='label-wrap'>
        <p className='label'>#{category}</p>
      </div>
    </div>)
  })
})

export { SearchItem };