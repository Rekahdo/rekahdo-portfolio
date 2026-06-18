import './Header.css'

import Menu from '../../components/Menu/Menu';
import { useState } from 'react';

function Header({className="", ...props}){

    const [isChecked, setIsChecked] = useState(true);

    const toogleMenu = (e) => {
        setIsChecked(e.target.checked)
    };

    return(
        <header className={`web-section navigation-header flex block-center sb ${className}`}>
            <div className='logo-container'>
                <img src="src/assets/logo.svg" alt="" />
            </div>

            <nav>
                <Menu isChecked={isChecked} onChange={toogleMenu}/>
            </nav>
        </header>
    )
}

export default Header;