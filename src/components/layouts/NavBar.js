import {Link} from 'react-router-dom';
import { useState } from 'react';
import Button from '../layouts/Button';
import '../styles/NavBar.css';

import imageLogo from '../../images/logo.svg';
import imageMenu from '../../images/icon-hamburger.svg';
import imageClose from '../../images/icon-close.svg';
import imagePattern from '../../images/bg-pattern-about-1-mobile-nav-1.svg';

export default function NavBar() {

    const [active, setMode] = useState(false);

    const OpenMenu = () => {

        setMode(true);

    }

    const CloseMenu = () => {

        setMode(false);

    }

    return(

        <div className='container'>

            <nav className='navbar-c'>

                <div className='navbar-box'>

                    <img src={imageLogo} alt='imagem da logomarca' />

                    <div className={active ? 'nav-menu menuOpen' : 'nav-menu menuClose'}>

                        <img src={imagePattern} alt='imagem de fundo' />



                        <ul>

                            <img src={imageClose} alt='close menu' className='closeMenu' onClick={CloseMenu} />

                            <li>

                                <Link to='/' onClick={CloseMenu}>Home</Link>

                            </li>

                            <li>

                                <Link to='/sobre' onClick={CloseMenu}>Sobre</Link>

                            </li>

                            <Button color='button-menu' className='btn-menu' />

                        </ul>

                    </div>

                </div>

                <img src={imageMenu} alt='open menu' className='openMenu' onClick={OpenMenu} />

                <Button color='button-nav' className='btn-nav' />

            </nav>

        </div>

    )

}