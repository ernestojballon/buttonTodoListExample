import React from 'react'
import './List.css'
import ListItem from '../container/Container'
const List = ({list})=>{
    const listDisplay = list.map(item=>{
        return (
            <div key={item.id} className="outerContainer">
                <ListItem item= {item}/>
            </div>
        )
    })

    return (
        <div className='listContainer'>
            {listDisplay} 
        </div>
    )
}
export default List