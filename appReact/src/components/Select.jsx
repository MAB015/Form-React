import React from "react";

function Select (props) {
    return (
        <>
            <label htmlFor="">{props.title}</label>
            <select name="" id="">
                {
                    props.options.map(function(option, index){
                        return (
                            <option key={index} value={index}>
                                {option}
                            </option>
                        )
                    })
                }
            </select>
        </>
    )
}

export default Select