import './Drawer.css'

import Menu from '../Menu/Menu';

import { useState } from 'react';

function Drawer({className, children, ...props}){
    const [isChecked, setIsChecked] = useState(false);

    const toogleMenu = (e) => {
        setIsChecked(isChecked ? false : true)
        console.log(isChecked)
    };

    return(
        <nav className={`nav-drawer ${isChecked ? `draw-side-bar` : ""}`}>
            <Menu className='menu-icon' isChecked={isChecked} onChange={toogleMenu}/>
            
            <section>
                <div className='content'>
                    {children}
                </div>
                
                <div className="overlay" onClick={toogleMenu}></div>
            </section>
        </nav>
    )
}

export default Drawer;