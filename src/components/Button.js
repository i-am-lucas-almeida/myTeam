import "../styles/components/Button.css";

import { Link } from "react-router-dom";

export default function Button({ color }) {

    return (

        <Link to="/contato">

            <button className={`${color}`}>Fale conosco</button>

        </Link>

    );

}