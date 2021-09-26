import React from 'react';

//importo botstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends React.Component {
render() {
    return(
    <div className="footer">
        <p>
            <img alt="Icono-react"class="iconoreact" src="https://github.com/EricERodriguez/TATETI-V2/blob/main/src/react.png?raw=true"/>
      React
      <img alt="eric" class="iconoeric" src="https://github.com/EricERodriguez/TATETI-V2/blob/main/src/eric.jpg?raw=true"/>
      Eric Rodriguez</p>
      <button type="button" class="btn btn-primary">Primary</button>
    </div>

  );
}


}

export default Footer;