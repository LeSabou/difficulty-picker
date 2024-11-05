import { useState } from 'react'
import s from './style.module.css'

export function MenuListItem(props){
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div 
        style={{backgroundColor: isHovered ? 'green' : 'grey'}}
        className={s.container} 
        onMouseEnter={()=> setIsHovered(true)} 
        onMouseLeave={()=> setIsHovered(false)}>
            set to : {props.difficulty}
        </div>
    )
}