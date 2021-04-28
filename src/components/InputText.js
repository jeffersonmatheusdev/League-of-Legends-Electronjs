import './InputText.scss';
import React from 'react';

function InputText(props) {
    return(
        <div class={props.divName}>
            <br/>
            <input type={props.type} class={props.inputName} required/>
            <span class={props.spanName}>{props.text}</span>
        </div>
    )
}


export default InputText;