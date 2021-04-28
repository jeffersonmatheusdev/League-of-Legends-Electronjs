import React from 'react';
import '../components/MenuOptions.scss';
import { minimizeMenu, questionMenu, closeMenu } from './Materials.js';

function MenuOptions(props){
    return(
        <div 
        className="groupOptions"
        style={props.style}
        >

            <div 
            className="minimizeMenu"
            >

                <img
                src={ minimizeMenu }
                className="minimizeMenuOpt"
                />

            </div>

            <div 
            className="questionMenu"
            >

                <img
                src={ questionMenu }
                className="questionMenuOpt"
                />
                
            </div>

            <div 
            className="closeMenu"
            >

                <img
                src={closeMenu}
                className="closeMenuOpt"
                />
                
            </div>

        </div>
    )
}

export default MenuOptions;