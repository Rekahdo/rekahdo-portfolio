import './Menu.css'
import { useState } from 'react';

function Menu({className="", isChecked=false, ...props}){

    return(
        <label className="menu" {...props}>
            <input type="checkbox" checked={isChecked} id="checkbox" />
            <div></div>
        </label>
    )
}

export default Menu;