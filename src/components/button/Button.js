import React,{useState, useRef,useEffect} from 'react'
import './Button.css'

const Button = ({children,onConfirm})=>{
    const [isOpen,setIsOpen] = useState(false)
    const containerRef = useRef(null)
    useEffect(() => {
        if(containerRef.current && isOpen){
            containerRef.current.focus()
        }
    }, [isOpen])
    const onClick= e =>{
        e.stopPropagation()
        setIsOpen(true)
    }
    const confirm = () => {
        setIsOpen(false)
        onConfirm()
    }
    const cancel = () => {
        setIsOpen(false)
    }
    const onBlur = e =>{
        console.log('blur')
        const current = e.currentTarget
        setTimeout(()=>{
            if(!current.contains(document.activeElement)) setIsOpen(false)
        })
    }
    return (
        !isOpen
        ?   <div className='buttonContainer shadow' onClick={onClick}>
             {children}
            </div>
        :   <div ref={containerRef} tabIndex="0" onBlur={onBlur} className='buttonContainer shadow'>
                <button onClick={confirm} className='button'>Delete</button>
                <button onClick={cancel} className='button'>Cancel</button>
            </div>
        )
}

export default Button