import style from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'

export function SideBar() {
    return(
        <aside className={style.sidebar}>
            <img 
                className={style.cover} 
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            />

            <div className={style.profile}>
                <Avatar src="https://github.com/Catalendas.png"/>
                
                <strong>Marcos</strong>
                <span>Web Developer</span>

                <footer>
                    <a href="#">
                        <PencilLine 
                            size={20}
                        />
                        Editar seu perfil
                    </a>
                </footer>
            </div>
        </aside>
    )
}