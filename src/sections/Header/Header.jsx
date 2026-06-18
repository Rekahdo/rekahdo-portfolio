import './Header.css'

import logo from '../../assets/logo.svg'
import NavDrawer from '../../components/Drawer/Drawer';

function Header({className="", ...props}){

    return(
        <header className={`web-section navigation-header flex block-center sb ${className}`}>
            <div className='img-container logo-container'>
                <img src={logo} alt="" />
            </div>

            <NavDrawer />
        </header>
    )
}

export default Header;