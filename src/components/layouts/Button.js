import {Link} from 'react-router-dom';

import '../styles/Button.css';

export default function Button({color}) {

    return(

        <Link to='/contato'>
        
            <button className={`${color}`}>Fale conosco</button>

        </Link>

    )

}