import { MenuListItem } from '../MenuListItem/MenuListItem'
import s from './stlye.module.css'

export function MenuList(props) {
    return (
        <div className={s.container}>
            <MenuListItem difficulty='Low'/>
            <MenuListItem difficulty='Medium'/>
            <MenuListItem difficulty='High'/>
            <MenuListItem difficulty='Insane'/>
        </div>
    )
}