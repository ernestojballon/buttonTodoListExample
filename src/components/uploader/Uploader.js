import React,{useRef} from 'react'
import './Uploader.css'

const Uploader = ({addToList}) =>{
    const inputEl = useRef(null);
    const addItem = () => {
        if (inputEl.current.value!==''){
            addToList({name:inputEl.current.value})
            inputEl.current.value=''
        }
    }
    return(
        <div className='uploaderContainer'>
            <input ref={inputEl}/>
            <button onClick={addItem}>Add to the list</button>
        </div>
    )
}
export default Uploader