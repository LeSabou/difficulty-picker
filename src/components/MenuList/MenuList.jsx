import { MenuListItem } from '../MenuListItem/MenuListItem'
import { DIFFICULTIES } from './constante'
import s from './stlye.module.css'

export function MenuList({ difficulty, onItemClick }) {
    return (
        <div className={s.container}>
            {
                DIFFICULTIES.map((diff) => (
                <MenuListItem 
                onClick={onItemClick} 
                difficulty={diff} 
                isSelected={difficulty === diff}/>
                ))
            }
        </div>
    )
}