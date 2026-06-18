import './Logo.css'

import logo from '../../assets/logo.svg'

function Menu({className, ...props}){

    return(
        <div className={`img-container logo-container ${className}`}>
            <img src={logo} alt="Rekahdo Portfolio Logo" />
        </div>
    )
}

export default Menu;