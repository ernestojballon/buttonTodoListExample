import React,{useContext,useState,useRef,useEffect} from 'react'
import './Container.css'
import Button from '../button/Button'
import {ListContext} from '../pages/ListPage/ListPage'

const Container = ({item})=>{
    const {deleteListItem,updateListId} = useContext(ListContext);
    const [name,setName] = useState(item.name)
    const [editingName,setEditingName] = useState(false)
    const nameEl = useRef()
    const editName = () => {
        setEditingName(true)
    }
    useEffect( () => {
        const inputName = nameEl.current
        if (editingName){
            inputName.focus()
            inputName.addEventListener('blur',(e)=>{
                console.log(e.target)
                setName(item.name)
                setEditingName(false)
            })
        }
    },[editingName,item])
    const onChange = e => {
        setName(e.target.value)
    }
    const saveName = () => {
        updateListId({ name: nameEl.current.value }, item.id)
        setEditingName(false)
    }
    return(
        <div  className="mainContainer">
            {editingName
                ? <>
                    <input className='filename' 
                           ref={nameEl} 
                           value={name} 
                           onChange={onChange}/>
                    <button onClick={saveName}>Save</button>
                </>
                :<>
                    <div onClick={editName} className='filename'>{name}</div>
                    <Button onConfirm={()=>{deleteListItem(item.id)}}>
                        <span className="deleteIcon"><i className="far fa-trash-alt"></i></span>
                    </Button>
                </>
            }
            
            
        </div>
    )
}
export default Container

