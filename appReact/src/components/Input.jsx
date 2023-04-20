import React from "react";

function Input(props){
    return (
        <>
            <label htmlFor="">{props.title}</label>
            <input type={props.type} placeholder={props.placeholder} />
        </>
    )
}

export default Input