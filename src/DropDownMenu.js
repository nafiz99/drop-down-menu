import React from 'react'

function DropDownMenu(props) {
    function DropDownitem(){
        return(
            <a href="#" className="menu-item">
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-button">{props.rightIcon}</span>
            </a>

        );
    }
    return (
        <div className="dropdown">
            <DropDownitem>My Profile</DropDownitem>
        </div>
    )
}

export default DropDownMenu
