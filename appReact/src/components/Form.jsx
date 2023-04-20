import React from "react";
import Select from "./Select";
import Input from "./Input";
import Button from "./Button";

function Form (){
    const options = ["CEDULA", "TARJETA", "PASAPORTE"]
    return (
        <form action="">
            <Select options={options} />
            <Input type="number" placeholder="Número de identificación" />
            <Input type="text" placeholder="Nombre" />
            <Input type="text" placeholder="Apellido" />
            <Input type="number" placeholder="Telefono" />
            <Input type="email" placeholder="Correo" />
            <Input type="text" placeholder="LinkedIn" />
            <Input type="text" placeholder="Github" />
            <Button type="submit" value="Guardar" />
        </form>
    )
}

export default Form