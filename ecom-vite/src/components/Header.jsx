import React from 'react';
import './Header.css';

import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <div> 
            <nav>
                <ul>
                    <li><Link to ="/">Mens</Link></li>
                    <li><Link to ="Women/">Women</Link></li>  
                </ul>
            </nav>
        </div>
        
    )
}
export default Header;