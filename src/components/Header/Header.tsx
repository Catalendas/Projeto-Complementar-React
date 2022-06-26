import style from './Header.module.css'

import igniteLogo from '../../assets/ignite-image.svg'

export function Header() {
    return(
        <header className={style.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
        </header>
    )
}