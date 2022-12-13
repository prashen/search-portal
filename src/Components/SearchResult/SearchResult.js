import React, { useState, useMemo, useCallback, useEffect } from 'react';
import './SearchResultStyle.css';

/**
 * Search result page
 * @returns jsx
 */
const SearchResult = ({ arrayData }) => {
  console.log('arrayData', arrayData)
  // const [data, setData] = useState([]);
  // const {images, contacts, slacks, gdrive, tweets} = arrayData || {};

  // return arrayData.map((post, ind) => (<div key={ind}>
  //     {post.images?.map((item, ind2) => {
  //       return (<h3 key={ind2}>{item.image}</h3>)
  //     })}


  //   </div>
  // ))

const itemHandler = (idParam) => {
  alert(idParam)
}
// 

  return (<div className="">
    <h3>Search Result</h3>
    {arrayData && arrayData.map((item, ind) => {
      console.log('item', item);
      const {images, contacts, slacks, gdrive, tweets} = item || {};
      return (
        <div key={ind}>
          {images?.map((item, ind) => {
            return (<a onClick={() => itemHandler(item.image)} className='item'><span className='title'>{item.image}</span> <br /><span className='label'>image</span></a>)
          })}

          {contacts?.map((item, ind) => {
            return(<a onClick={() => itemHandler(item.name)} className='item'><span className='title'>{item.name}</span> <br /><span className='label'>contact</span></a>)
          })}

          {slacks?.map((item, ind) => {
            return (<a onClick={() => itemHandler(item.author)} className='item'><span className='title'>{item.author}</span> <br /><span className='label'>slack</span></a>)
          })}

          {gdrive?.map((item, ind) => {
            return (<a onClick={() => itemHandler(item.title)} className='item'><span className='title'>{item.title}</span> <br /><span className='label'>gdrive</span></a>)
          })}

          {tweets?.map((item, ind) => {
            return (<a onClick={() => itemHandler(item.user)} className='item'><span className='title'>{item.user}</span> <br /><span className='label'>twitter</span></a>)
          })}
        </div> 
      )
    })}

  
  </div>)
}

export { SearchResult };