import React from 'react';
//importo bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {
render() {
    return(
    <div className="header">
        <nav class="navbar-nav ml-auto">
            <p>
                Trabajo práctico del Modulo 1 (Obligatorio)
            </p>
        </nav>
    </div>
    );
}
}

export default Header;