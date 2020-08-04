import React from 'react';

function ListItem(props){
    const items = props.items;
    const listrItems = items.map(item=>{
        return (<div>
            <p className='noteItem' key={item.key}>{item.input} <span class='deleteBnt' onClick={()=>{
                  props.deleteItem(item.key)
                }}></span></p>
        </div>)
      }                 
    )
    return <div>{listrItems}</div>
  }
  export default ListItem;