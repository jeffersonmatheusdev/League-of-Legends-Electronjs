import './Checkbox.scss';
import React from 'react';

function Checkbox(props){
    return(
        <div className={props.checkDiv}>
            <input type={props.checkbox} className="manterLogado" />
            <label className={props.label}>{props.text}</label>
        </div>
    )
}

export default Checkbox;