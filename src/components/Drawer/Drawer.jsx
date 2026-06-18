import './Drawer.css'

import Menu from '../Menu/Menu';
import Photo from '../Photo/Photo';

import { useState } from 'react';

function Drawer({className, close=true, ...props}){
    const [isChecked, setIsChecked] = useState(false);

    const toogleMenu = (e) => {
        setIsChecked(isChecked ? false : true)
    };

    return(
        <nav className={`nav-drawer ${isChecked ? `draw-side-bar` : ""}`}>
            <Menu className='menu-icon' isChecked={isChecked} onChange={toogleMenu}/>
            
            <section>
                <div className='web-section content flex-col'>

                    <div className='profile flex block-center sb'>
                        <Photo className="drawer"/>
                        <p>Okafor Richard</p>
                    </div>

                    <hr />

                    <ul className='flex-col'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Me</a></li>
                        <li><a href="#">Tech Stack</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact Me</a></li>
                    </ul>

                    <div>
                        
                    </div>

                </div>
                
                <div className="overlay" onClick={toogleMenu}></div>
            </section>
        </nav>
    )
}

export default Drawer;