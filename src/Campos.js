import React, { Component } from 'react';

class Campos extends Component {
    render (){
        return(
            <>
                <div align="center" id="inputId" className="text-center">
                    <span className="input-group-text" id="">{this.props.nombre} : <input type="text" className="form-control"></input> </span>
                </div>
            </>
        )
    }
};

export default Campos;