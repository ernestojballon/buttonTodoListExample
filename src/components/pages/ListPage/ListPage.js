import React,{useState} from 'react'
import List from '../../list/List'
import Uploader from '../../uploader/Uploader'

export const ListContext = React.createContext({})

const ListPage = () => {
    const [list,setList] = useState([
        {
            id:1,
            name:'photo1'
        },
        {   
            id:2,
            name:'photo2'
        },
    ])


    const addtoList = item =>{
        if (list.length > 0){
            const newId = list[list.length-1].id+1
            const newItem = {
                ...item,
                id:newId
            }
            setList([...list,newItem])
            return 
        }
        setList([{
            id:0,
            name:item.name
        }])
        
    }
    const updateListId = (item,id)=> {
        setList(() => {
            return list.map(i => {
                return i.id === id
                    ? {
                        id,
                        ...item
                    }
                    : i
            })
        })
    }
    const deleteListItem= id =>{
        setList(() => {
            return list.filter(i => {
                return i.id !== id
            })
        })}

    return (
        <ListContext.Provider value={{deleteListItem,updateListId}}>
            <div>
                <h1>Add elements to the list:</h1>
                <Uploader addToList={addtoList}/>
                <List list={list}/>
            </div>
        </ListContext.Provider>
    )
}

export default ListPage